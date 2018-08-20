


$(document).ready(function(){
  $("form#new-tasks").submit(function(event){
    event.preventDefault();

    var userInput = $("#new-task").val();

    $("#list").append("<li>" + userInput + "<span class = 'completeList'> Completed </span>" + " <span class = 'remove'> Remove </span> " + "</li>");

  });
});
