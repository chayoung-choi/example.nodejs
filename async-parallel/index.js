// https://riptutorial.com/ko/node-js/example/13856/%EB%B3%91%EB%A0%AC---%EB%A9%80%ED%8B%B0-%ED%83%9C%EC%8A%A4%ED%82%B9
// 병렬 : 멀티 태스킹
var async = require('async'); // 'async'모듈을 임포트하여 더 용이하게 함수 작성

function shortTimeFunction(callback) {
  setTimeout(function() {
    callback(null, 'resultOfShortTime');
  }, 200);
}

function mediumTimeFunction(callback) {
  setTimeout(function() {
    callback(null, 'resultOfMediumTime');
  }, 500);
}

function longTimeFunction(callback) {
  setTimeout(function() {
    callback(null, 'resultOfLongTime');
  }, 1000);
}

async.parallel([
    shortTimeFunction,
    mediumTimeFunction,
    longTimeFunction
  ],
  function(err, results) {
    if (err) {
      return console.error(err);
    }

    console.log(results);
  });
