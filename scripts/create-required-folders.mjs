import fs from 'fs';

const cwd = process.cwd();

const postsDir = `${cwd}/posts`;

if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir);
}
