const cheerio = require("cheerio");
const axios = require("axios");

const URBAN_US_URI = "https://urban.us/portfolio/";

(async () => {
  let data = [];

  const response = await axios.get(URBAN_US_URI);

  const $ = cheerio.load(response.data);

  $('div[class="project_content"]').each((i, elem) => {
    const image = $(elem).find("img").attr("src");
    const title = $(elem).find('div[class="info"] > a > h3').text();
    const description = $(elem).find('div[class="info"] > a > p').text();

    data.push({
      title,
      image,
      description,
    });
  });

  console.log(data);

  var json = JSON.stringify(data);

  var fs = require("fs");
  fs.writeFile("portfolio_data.json", json, function (err) {
    if (err) throw err;
    console.log("complete");
  });
})();
