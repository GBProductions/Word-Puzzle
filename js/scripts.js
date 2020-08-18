$(document).ready(function() {

  $("#formPuzzle").submit(function(event) {
    event.preventDefault();
    let puzzleResult = $("#puzzle1").val();
let
    string = puzzleResult.replace( /[aeiouAEIOU]/g, '-' );
    console.log(string);

  });
});
