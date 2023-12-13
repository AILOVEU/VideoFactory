var fs = require("fs"),
  path = require("path");
function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath, { withFileTypes: true }).forEach(function (
    dirent
  ) {
    var filePath = path.join(currentDirPath, dirent.name);
    if (dirent.isFile()) {
      callback(filePath, dirent);
    } else if (dirent.isDirectory()) {
      callback(filePath, dirent);
      walkSync(filePath, callback);
    }
  });
}
function getFolderSize(folderPath) {
    let totalSize = 0;
  
    function traverseFolder(currentPath) {
      const files = fs.readdirSync(currentPath);
  
      files.forEach(file => {
        const filePath = path.join(currentPath, file);
        const stats = fs.statSync(filePath);
  
        if (stats.isDirectory()) {
          traverseFolder(filePath);
        } else {
          totalSize += stats.size;
        }
      });
    }
  
    traverseFolder(folderPath);
    
    return totalSize;
  }
  
module.exports = { walkSync,getFolderSize };
