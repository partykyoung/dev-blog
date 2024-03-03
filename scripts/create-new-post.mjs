import fs from "fs";
import input from "@inquirer/input";
import checkbox, { Separator } from "@inquirer/checkbox";
import dayjs from "dayjs";

const cwd = process.cwd();
const POSTS_DERECTORY = `${cwd}/posts`;

function getTags() {
  const extistTags = fs
    .readdirSync(`${POSTS_DERECTORY}`, {
      withFileTypes: true,
    })
    .reduce((acc, post) => {
      try {
        const file = fs.readFileSync(`${POSTS_DERECTORY}/${post.name}`, "utf8");
        const tagRegex = /tags:\s*\[([^\]]+)\]/;
        const match = file.match(tagRegex);

        if (!match || match.length <= 1) return acc;

        const tagsString = match[1];
        const tags = tagsString.split(",").map((tag) => tag.trim());

        if (!tags || tags.length <= 0) return acc;

        tags.forEach((tag) => {
          acc.add(tag);
        });

        return acc;
      } catch {
        return acc;
      }
    }, new Set());

  return Array.from(extistTags);
}

async function fetchPostTitle() {
  const postTitle = await input({ message: "포스트명을 입력해주세요" });
  const postFileName = setPostFileName(postTitle);

  const existFile = fs.existsSync(`${POSTS_DERECTORY}/${postFileName}.md`);

  if (existFile) {
    // TODO: 예외처리
  }

  return { postTitle, postFileName };
}

async function fetchNewTags(newTags = [], extistTags = []) {
  const newTag = await input({
    message: "태그를 입력해주세요 (n을 입력하면 종료합니다)",
  });

  if (!newTag || newTag === "n" || newTag === "N") {
    return newTags;
  }

  newTags.push(newTag);

  return await fetchNewTags(newTags, extistTags);
}

async function fetchPostTags() {
  const extistTags = getTags();
  const choicesTags = extistTags.map((tag) => ({ name: tag, value: tag }));
  const selectedTags = await checkbox({
    message: "태그를 선택해주세요",
    choices: [
      ...choicesTags,
      new Separator(),
      { name: "태그 입력하기", value: "new" },
    ],
  });

  const newIndex = selectedTags.findIndex((tag) => tag === "new");

  if (newIndex >= 0) {
    const newTags = await fetchNewTags([], extistTags);

    selectedTags.push(...newTags);
  }

  return [
    ...selectedTags.slice(0, newIndex),
    ...selectedTags.slice(newIndex + 1),
  ];
}
function refinePostContent({ title, tags }) {
  const postTitle = `title: ${title}\n`;
  const postDate = `${dayjs().format("YYYY-MM-DD hh:mm:ss")}\n`;
  const postTags = tags && tags.length >= 0 ? `tags: ${tags}` : "";

  return `---\n${postTitle}${postDate}${postTags}\n---`;
}

function setPostFileName(postTitle) {
  return postTitle.split(" ").join("-").toLowerCase();
}

async function createNewPost() {
  const { postFileName, postTitle } = await fetchPostTitle();
  const postTags = await fetchPostTags();
  const postContent = refinePostContent({
    tags: postTags,
    title: postTitle,
  });

  fs.writeFile(`${cwd}/posts/${postFileName}.md`, postContent, (err) => {
    if (err) {
      console.log(err, "Error: 포스트 생성에 실패하였습니다");

      return;
    }

    console.log("포스트 생성 완료!");
  });
}

export default createNewPost();
