$(document).ready(function() {

  $("#formPuzzle").submit(function(event) {
    event.preventDefault();
    let puzzleResult = $("#puzzle1").val();

    let  code1 = puzzleResult.replace( /[aeiouAEIOU]/g, '-' );
  
    $("#puzzleResult").append(code1);

    $("#puzzle1").hide();
    });
  });
