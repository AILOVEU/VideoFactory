const fs = require('fs');
const path = require('path');
const Ffmpeg = require('fluent-ffmpeg')

const command = new Ffmpeg({
    source: path.join(__dirname,'../assets/20231213161559.mp4')
}) 
command
  .screenshots({
    folder: './imgs',
    filename: 'test-%i.jpg',
    count: 10,
    size: '50%'
  })