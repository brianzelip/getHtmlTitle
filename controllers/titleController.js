const request = require('request');
const fetch = require('node-fetch');

exports.homePage = (req, res) => {
  console.log('hi there!');
  const title = fetch('http://zelip.me').then(data => {
    console.log(data);
  });
  console.log("this prolly won't be at the end!");
  res.render('index');
};
