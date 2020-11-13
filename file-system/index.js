const fs = require('fs');
const path = require('path');

function main(){
  console.log(path.parse('./test.html').name);
  console.log(path.parse('./test.html').ext);
}
main();
