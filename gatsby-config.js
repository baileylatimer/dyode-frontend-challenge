
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `dyode-frontend-challenge`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-shopify',
    options: {
      storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
      password: process.env.SHOPIFY_ADMIN_API_ACCESS_TOKEN,
      shopifyConnections: ["collections"], // source product collections too
    },
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};