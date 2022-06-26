const axios = require("axios");
let cheerio = require("cheerio");

async function makeGetRequest(path) {
  try {
    const siteUrl = path.startsWith("http") ? path : `https://${path}`;
    const res = await axios.get(siteUrl);
    const html = res.data;
    const $ = cheerio.load(html);
    return $("head title").text();
  } catch (error) {
    console.log(error);
  }
}
module.exports = { makeGetRequest };
