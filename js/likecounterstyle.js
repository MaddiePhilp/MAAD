
var button1 = document.getElementById("clickme1"),
  count = 0;
  button1.onclick = function(){
    if (localStorage.ones_likes_count) {
      localStorage.ones_likes_count = Number(localStorage.ones_likes_count)+1;
    } else {
      localStorage.ones_likes_count = 1;
    }

  button1.innerHTML = localStorage.ones_likes_count+" Likes";
};


var button2 = document.getElementById("clickme2"),
  count = 0;
  button2.onclick = function(){
    if (localStorage.ones_dislikes_count) {
      localStorage.ones_dislikes_count = Number(localStorage.ones_dislikes_count)+1;
    } else {
      localStorage.ones_dislikes_count = 1;
    }

  button2.innerHTML = localStorage.ones_dislikes_count+" Dislikes";
};


var button3 = document.getElementById("clickme3"),
  count = 0;
  button3.onclick = function(){
    if (localStorage.twos_likes_count) {
      localStorage.twos_likes_count = Number(localStorage.twos_likes_count)+1;
    } else {
      localStorage.twos_likes_count = 1;
    }

  button3.innerHTML = localStorage.twos_likes_count+" Likes";
};


var button4 = document.getElementById("clickme4"),
  count = 0;
  button4.onclick = function(){
    if (localStorage.twos_dislikes_count) {
      localStorage.twos_dislikes_count = Number(localStorage.twos_dislikes_count)+1;
    } else {
      localStorage.twos_dislikes_count = 1;
    }

  button4.innerHTML = localStorage.twos_dislikes_count+" Dislikes";
};


var button5 = document.getElementById("clickme5"),
  count = 0;
  button5.onclick = function(){
    if (localStorage.threes_likes_count) {
      localStorage.threes_likes_count = Number(localStorage.threes_likes_count)+1;
    } else {
      localStorage.threes_likes_count = 1;
    }

  button5.innerHTML = localStorage.threes_likes_count+" Likes";
};


var button6 = document.getElementById("clickme6"),
  count = 0;
  button6.onclick = function(){
    if (localStorage.threes_dislikes_count) {
      localStorage.threes_dislikes_count = Number(localStorage.threes_dislikes_count)+1;
    } else {
      localStorage.threes_dislikes_count = 1;
    }

  button6.innerHTML = localStorage.threes_dislikes_count+" Dislikes";
};


var button7 = document.getElementById("clickme7"),
  count = 0;
  button7.onclick = function(){
    if (localStorage.fours_likes_count) {
      localStorage.fours_likes_count = Number(localStorage.fours_likes_count)+1;
    } else {
      localStorage.fours_likes_count = 1;
    }

  button7.innerHTML = localStorage.fours_likes_count+" Likes";
};


var button8 = document.getElementById("clickme8"),
  count = 0;
  button8.onclick = function(){
    if (localStorage.fours_dislikes_count) {
      localStorage.fours_dislikes_count = Number(localStorage.fours_dislikes_count)+1;
    } else {
      localStorage.fours_dislikes_count = 1;
    }

  button8.innerHTML = localStorage.fours_dislikes_count+" Dislikes";
};

var button9 = document.getElementById("clickme9"),
  count = 0;
  button9.onclick = function(){
    if (localStorage.fives_likes_count) {
      localStorage.fives_likes_count = Number(localStorage.fives_likes_count)+1;
    } else {
      localStorage.fives_likes_count = 1;
    }

  button9.innerHTML = localStorage.fives_likes_count+" Likes";
};


var button10 = document.getElementById("clickme10"),
  count = 0;
  button10.onclick = function(){
    if (localStorage.fives_dislikes_count) {
      localStorage.fives_dislikes_count = Number(localStorage.fives_dislikes_count)+1;
    } else {
      localStorage.fives_dislikes_count = 1;
    }

  button10.innerHTML = localStorage.fives_dislikes_count+" Dislikes";
};

var button11 = document.getElementById("clickme11"),
  count = 0;
  button11.onclick = function(){
    if (localStorage.sixs_likes_count) {
      localStorage.sixs_likes_count = Number(localStorage.sixs_likes_count)+1;
    } else {
      localStorage.sixs_likes_count = 1;
    }

  button11.innerHTML = localStorage.sixs_likes_count+" Likes";
};


var button12 = document.getElementById("clickme12"),
  count = 0;
  button12.onclick = function(){
    if (localStorage.sixs_dislikes_count) {
      localStorage.sixs_dislikes_count = Number(localStorage.sixs_dislikes_count)+1;
    } else {
      localStorage.sixs_dislikes_count = 1;
    }

  button12.innerHTML = localStorage.sixs_dislikes_count+" Dislikes";
};
