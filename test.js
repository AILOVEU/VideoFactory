const fs = require('fs');
const path = require('path');


const folderPath = path.join(__dirname,'../');
const folderSize = getFolderSize(folderPath);
console.log(`Folder size: ${folderSize} bytes`);