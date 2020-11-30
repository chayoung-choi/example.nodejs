const axios = require('axios');

const main = async () => {
  // var result = await sendSlackHook();
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  console.log(uuidv4());
  console.log('init end', result.status);
}
main();

async function sendSlackHook() {
  try {
    const WEBHOOK_URI = 'https://hooks.slack.com/services/';
    const WEBHOOK_KEY = 'T8MB02BFU/B019235DA14/c4BiGwwxZuHx9v6P6Pf6hzyo';	// 개인 key
    const hostname = 'Server Webhook';

    let params = {
      'fallback': '', // notifications message
      'color': '',
      'pretext': 'pretext'
    }

    // default
    let attachments = {
      'fallback': 'Slack Webhook.', // notifications message
      'color': '#',
      // 'pretext': 'Slack Webhook',
      // 'author_name': 'Bobby Tables',
      // 'author_link': 'http://flickr.com/bobby/',
      // 'author_icon': 'http://flickr.com/icons/bobby.jpg',
      'title': 'AWS Lambda slack-webhook',
      // 'title_link': 'https://api.slack.com/',
      'text': '',
      // 'image_url': 'http://my-website.com/path/to/image.jpg',
      // 'thumb_url': 'http://example.com/path/to/thumb.png',
      'footer': hostname,
    };
    for (var key in params){
      console.log('키 : '+key + ', 값 : ' + params[key]);
      if (params[key].trim() != ''){
        attachments[key] = params[key];
      }
    }

    console.log(attachments);
    return 'ok';
    return await axios({
      method: 'POST',
      url: WEBHOOK_URI + WEBHOOK_KEY,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      data: {
        attachments: [attachments]
      },
    })
;
  } catch (error) {
    console.error(error);
  }
};

function get(){
  axios.get('/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
