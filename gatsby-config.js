require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `thejollyblog`,
    // Default title of the page
    siteTitleAlt: `thejollyblog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Random thoughts and some useful stuff (maybe) by an absolute doofus`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://thejollyblog.netlify.com`,
    // Used for SEO
    siteDescription: `Shashwat Jolly's blog`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@jollyshashwat`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `About`,
            slug: `/about`
          }
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/jollyshashwat`
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/thejollyguy/`
          },
          {
            name: `Facebook`,
            url: `https://www.facebook.com/shashwatjolly`
          },
          {
            name: `Github`,
            url: `https://www.github.com/shashwatjolly`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thejollyblog`,
        short_name: `thejollyblog`,
        description: `Random thoughts and some useful stuff (maybe) by an absolute doofus`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
