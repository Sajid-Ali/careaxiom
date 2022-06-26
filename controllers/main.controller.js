const { makeGetRequest } = require("../utilities");

const getWebsitesTitle = async (req, res, next) => {
  try {
    let response = [];
    const { address } = req.query;
    if (typeof address == "string") {
      const result = await makeGetRequest(address);
      response.push({ url: address, title: result });
    } else {
      for (let addr of address) {
        const result = await makeGetRequest(addr);
        response.push({ url: addr, title: result });
      }
    }
    res.render("list", { list: response });
  } catch (error) {
    next(error);
  }
};

module.exports = { getWebsitesTitle };
