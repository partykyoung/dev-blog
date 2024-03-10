import fs from "fs";
import createNewPost from "../create-new-post.mjs";
import checkbox from "@inquirer/checkbox";

const cwd = process.cwd();

// Mock the fs module
jest.mock("fs", () => ({
  readdirSync: jest
    .fn()
    .mockReturnValue([{ name: "post1.md" }, { name: "post2.md" }]),
  readFileSync: jest.fn((path) => {
    if (path.includes("post1.md")) {
      return `
        ---
        title: test
        date: 2024-02-29 04:33:51
        tags: ["test", "test1"]
        publish: false
        ---      
      `;
    }

    if (path.includes("post2.md")) {
      return `
        ---
        title: test
        date: 2024-02-29 04:33:51
        tags: ["test", "test2"]
        publish: false
        --- 
      `;
    }

    return "";
  }),
  existsSync: jest.fn().mockReturnValue(false),
  writeFile: jest.fn((path, data, callback) => callback(null)),
}));

// Mock dayjs
jest.mock("dayjs", () => () => ({
  format: () => "2024-02-28 12:00:00",
}));

jest.mock("@inquirer/input", () =>
  jest.fn().mockResolvedValue("Test Post Title")
);

jest.mock("@inquirer/checkbox", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(["Tag1", "Tag2"]),
  Separator: jest.fn().mockResolvedValue(["---"]),
}));

describe("createNewPost", () => {
  it("포스트 생성이 정상적으로 수행된다.", async () => {
    expect(checkbox).toHaveBeenCalled();

    const checkboxCall = checkbox.mock.calls[0];

    expect(checkboxCall[0].choices).toEqual([
      { name: "test", value: "test" },
      { name: "test1", value: "test1" },
      { name: "test2", value: "test2" },
      Promise.resolve({}),
      {
        name: "태그 입력하기",
        value: "new",
      },
    ]);

    expect(fs.writeFile).toHaveBeenCalled();

    const writeFileCall = fs.writeFile.mock.calls[0];

    expect(writeFileCall[0]).toMatch(/posts\/test-post-title.md$/); // Adjust regex as necessary
    expect(writeFileCall[1]).toContain("title: Test Post Title");
    expect(writeFileCall[1]).toContain("date: 2024-02-28 12:00:00");
    expect(writeFileCall[1]).toContain('tags: ["Tag1","Tag2"]');
  });
});
