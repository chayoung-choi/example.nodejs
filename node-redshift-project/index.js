var redshiftClient = require('./redshift.js');
exports.handler = async (event, context, callback) => {

  try {
    var resource = event.resource;
    var httpMethod = event.httpMethod;
    var params = event.queryStringParameters;
    for (var key in params) {
      console.log("[" + key + "]", params[key]);
    }

    let result;
    let sql = '';
    if (resource == "/chapter" && httpMethod == "GET"){
      sql = `SELECT 'col'`;

    } else {
      return response(200, 'not found resource');
    }

    result = await getData(sql);
    return response(200, result);
  } catch (e) {
    var error = {};
    error.message = e.errorMessage;
    return response(500, error);
  }
};

async function getData(queryString){
  return new Promise(function (resolve, reject) {
    redshiftClient.query(queryString, { raw: true }, async function (err, data) {
      if (err) throw err;
      else {
        console.log(data);
        resolve(data)
      }
    });
  });
}

function response(statusCode, result){
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,GET"
    },
    body: JSON.stringify(result),
    isBase64Encoded: false
  };
}
