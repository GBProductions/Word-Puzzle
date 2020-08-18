$(document).ready(function() {

  $("#formPuzzle").submit(function(event) {
    event.preventDefault();
    let puzzleResult = $("#puzzle1").val();

  let code1 = puzzleResult.replace( /[aeiouAEIOU]/g, '-' );
  
  console.log(code1)
  
      $("#puzzleResult").append(code1);

       $("#puzzle1").hide();
  });
  });
