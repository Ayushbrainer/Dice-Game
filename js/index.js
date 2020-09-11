function battler(){
//  alert("Hi");
  var playerNo1 = Math.floor((Math.random()*6)+1);
  var playerNo2 = Math.floor((Math.random()*6)+1);
//  alert(playerNo1);
//  alert(playerNo2);
  var src1 = "images/dice"+playerNo1+".png";
  var src2 = "images/dice"+playerNo2+".png";
  //alert(src1+src2);
  if(playerNo1>playerNo2){
  //  alert("Correct");
    document.querySelector("h1").innerHTML = "🏳‍ Player 1 Wins";
    diceImagesForPlayer1(src1);
    diceImagesForPlayer2(src2);
  }else if (playerNo2>playerNo1) {
  //  alert("Correct")
    document.querySelector("h1").innerHTML = "🏳‍ Player 2 Wins";
    diceImagesForPlayer1(src1);
    diceImagesForPlayer2(src2);
  }else if (playerNo1 === playerNo2) {
  //  alert("Correct")
    document.querySelector("h1").innerHTML = "🏳‍ Tie";
    diceImagesForPlayer1(src1);
    diceImagesForPlayer2(src2);
  }


}

function diceImagesForPlayer1(imagesrc){
  document.querySelector(".p1").setAttribute("src",imagesrc);
}

function diceImagesForPlayer2(imagesrc){
  document.querySelector(".p2").setAttribute("src",imagesrc);
}
