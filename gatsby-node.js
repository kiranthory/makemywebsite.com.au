const projects = require("./src/content/projects")

exports.createPages = async ({ actions: { createPage } }) => {
  // Create a page that lists all projects.
  createPage({
    path: `/portfolio`,
    component: require.resolve("./src/templates/all-projects.js"),
    context: { projects },
  })

  // Create a page for each project.
  projects.forEach(project => {
    createPage({
      path: `/portfolio/${project.path}`,
      component: require.resolve("./src/templates/project.js"),
      context: { project, image: project.image },
    })
  })
}
