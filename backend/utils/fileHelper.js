const fs = require('fs');
const path = require('path');

exports.deleteFile = (filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '..', 'uploads', filename);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};