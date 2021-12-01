$(document).ready(function () {
  fetchData(file);
});

const file = "../js/projects.json";

// function that fetches the data from the API
const fetchData = (file) => {
  $.ajax({
    type: "GET",
    url: file,
    datatype: "JSON",
    success: (data) => {
      data.projectList.forEach((element) => {
        projectToDOM(element);
      });
    },

    error: (error) => {
      console.log(error);
      $("#projectList").append(
        $("<div>").text("An error occured. Please try again.")
      );
    },

    complete: () => {
      $("#loading").remove();
    },
  });
};

const projectToDOM = (projectList) => {
  $("#projectList").append(
    $("<div>")
      .attr("class", "projectBox")
      .append($("<h2>").text(projectList.title))
      .append($("<p>").text(projectList.description))
      .append($("<br />"))
      .append($("<a>").attr("href", projectList.link).text("Link To Project"))
  );
};
