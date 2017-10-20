const request = require('request');
const fetch = require('node-fetch');
const cheerio = require('cheerio');

exports.homePage = (req, res) => {
  request('http://zelip.me', function(error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    const $ = cheerio.load(body);
    console.log('here comes the title text...', $('title').text());
  });
  res.render('index');
};
