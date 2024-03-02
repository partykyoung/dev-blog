import fs from "fs";

const cwd = process.cwd();

const postsDir = `${cwd}/posts`;
const jsonsDir = `${cwd}/static/jsons`;

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}

if (fs.existsSync(jsonsDir)) {
  fs.rmSync(jsonsDir, { recursive: true, force: true });
}

fs.mkdirSync(jsonsDir);
