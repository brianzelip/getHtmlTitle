const axios = require('axios');
const cheerio = require('cheerio');

exports.homePage = (req, res) => {
  axios
    .get('http://zelip.me')
    .then(function(response) {
      const $ = cheerio.load(response.data);
      console.log('here comes the title text...', $('title').text());
    })
    .catch(function(error) {
      console.log(error);
    });
  res.render('index');
};
