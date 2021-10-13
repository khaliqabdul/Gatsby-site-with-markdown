module.exports = {
    siteMetadata: {
        title: "Graphic Design",
        description: "web dev portfolio",
        copyright: "This website is copyright 2021 graphic design",
        contact: "khaliqazeemi@yahoo.com",
    },
    plugins: [
        'gatsby-transformer-remark',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `projects`,
              path: `${__dirname}/src/projects/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
            },
        },

    ]
}