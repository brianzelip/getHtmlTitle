const axios = require('axios');
const cheerio = require('cheerio');

async function getHtmlTitle(url) {
  const response = await axios.get(url);
  const html = await cheerio.load(response.data);
  const title = await html('title').text();
  // console.log('response', response);
  console.log('title', title);

  return title;
}

exports.homePage = async (req, res) => {
  const title = await getHtmlTitle('http://zelip.me');
  console.log('homePage says, title is: ', title);
  // axios
  //   .get('http://zelip.me')
  //   .then(function(response) {
  //     const $ = cheerio.load(response.data);
  //     console.log('here comes the title text...', $('title').text());
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   });
  res.render('index');
};
