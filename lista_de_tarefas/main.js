const tasks = [];

$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const newTask = $("#task-input").val();

    if (tasks.includes(newTask)) {
      $(".error-message").slideDown();
    } else {
      tasks.push(newTask);
      const taskRow = `<li>${newTask}</li>`;
      $(taskRow).appendTo("ul");
      $(".error-message").slideUp();
    }
    $("#task-input").val("");
  });
  $("ul").on("click", "li", function () {
    $(this).addClass("task-completed");
  });
});
