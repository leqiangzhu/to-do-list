


$(document).ready(function(){
  $("form#new-tasks").submit(function(event){
    event.preventDefault();

    var userInput = $("#new-task").val();

    $("#list").append("<div class = 'hideList'> <li>" + userInput +
    "<span class = 'clickComplete'> Completed" +  "</span> <span class = 'clickRemove'> Remove"  + "</span> </div> </li>");

    $(".clickRemove").last().click(function(){
      $(this).parent().hide();
    });

    $(".clickComplete").last().click(function(){
      $(this).parent().hide();
      $("#complete").append("<li>" + userInput + "</li>");
    });

  });
});
