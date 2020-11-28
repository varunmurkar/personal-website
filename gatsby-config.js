module.exports = {
  siteMetadata: {
    title: `Varun Murkar - Product Designer | Here I talk about whatever I want`,
    name: `Varun Murkar`,
    siteUrl: `https://varunmurkar.com`,
    description: `. This is my website. Here I talk about whatever I want.`,
    hero: {
      heading: `Welcome. Here I talk about whatever I want.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/varunmurkar`,
      },
      {
        name: `github`,
        url: `https://github.com/varunmurkar`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/the.average.gatsby`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/varunmurkar/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
