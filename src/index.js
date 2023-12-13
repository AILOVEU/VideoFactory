const path = require("path");
const fs = require("fs-extra");

const { walkSync,getFolderSize } = require("./utils");

const filePathArr = [];
const filePathSizeMap = {};
walkSync(path.join(__dirname, "../../../workspace"), (filePath, stat) => {
  filePathArr.push(filePath);
});
const loop = async () => {
  for (let i = 0; i < filePathArr.length; i = i + 1) {
    const filePath = filePathArr[i];
    const stats = await fs.stat(filePath);
    if (stats.isFile()) continue;
    const size =  getFolderSize(filePath);
    filePathSizeMap[filePath] = (size/1024/1024).toFixed(2);
  }
};
const fn = async () => {
  await loop();
  const content = Object.keys(filePathSizeMap).map(item=> {
    return [item,filePathSizeMap[item]].join(',')
  }).join('\n');
  fs.writeFile(path.join(__dirname,'map.cvs'),content);
};
fn();
