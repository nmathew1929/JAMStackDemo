const { default: axios } = require("axios")
require('dotenv').config();

module.exports = async function() {
    url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}&pageSize=5`
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

