
var button1 = document.getElementById("clickme1"),
  count = 0;
  button1.onclick = function(){
    if (localStorage.one_likes_count) {
      localStorage.one_likes_count = Number(localStorage.one_likes_count)+1;
    } else {
      localStorage.one_likes_count = 1;
    }

  button1.innerHTML = localStorage.one_likes_count+" Likes";
};


var button2 = document.getElementById("clickme2"),
  count = 0;
  button2.onclick = function(){
    if (localStorage.one_dislikes_count) {
      localStorage.one_dislikes_count = Number(localStorage.one_dislikes_count)+1;
    } else {
      localStorage.one_dislikes_count = 1;
    }

  button2.innerHTML = localStorage.one_dislikes_count+" Dislikes";
};


var button3 = document.getElementById("clickme3"),
  count = 0;
  button3.onclick = function(){
    if (localStorage.twon_likes_count) {
      localStorage.twon_likes_count = Number(localStorage.twon_likes_count)+1;
    } else {
      localStorage.twon_likes_count = 1;
    }

  button3.innerHTML = localStorage.twon_likes_count+" Likes";
};


var button4 = document.getElementById("clickme4"),
  count = 0;
  button4.onclick = function(){
    if (localStorage.twon_dislikes_count) {
      localStorage.twon_dislikes_count = Number(localStorage.twon_dislikes_count)+1;
    } else {
      localStorage.twon_dislikes_count = 1;
    }

  button4.innerHTML = localStorage.twon_dislikes_count+" Dislikes";
};


var button5 = document.getElementById("clickme5"),
  count = 0;
  button5.onclick = function(){
    if (localStorage.threen_likes_count) {
      localStorage.threen_likes_count = Number(localStorage.threen_likes_count)+1;
    } else {
      localStorage.threen_likes_count = 1;
    }

  button5.innerHTML = localStorage.threen_likes_count+" Likes";
};


var button6 = document.getElementById("clickme6"),
  count = 0;
  button6.onclick = function(){
    if (localStorage.threen_dislikes_count) {
      localStorage.threen_dislikes_count = Number(localStorage.threen_dislikes_count)+1;
    } else {
      localStorage.threen_dislikes_count = 1;
    }

  button6.innerHTML = localStorage.threen_dislikes_count+" Dislikes";
};


var button7 = document.getElementById("clickme7"),
  count = 0;
  button7.onclick = function(){
    if (localStorage.fourn_likes_count) {
      localStorage.fourn_likes_count = Number(localStorage.fourn_likes_count)+1;
    } else {
      localStorage.fourn_likes_count = 1;
    }

  button7.innerHTML = localStorage.fourn_likes_count+" Likes";
};


var button8 = document.getElementById("clickme8"),
  count = 0;
  button8.onclick = function(){
    if (localStorage.fourn_dislikes_count) {
      localStorage.fourn_dislikes_count = Number(localStorage.fourn_dislikes_count)+1;
    } else {
      localStorage.fourn_dislikes_count = 1;
    }

  button8.innerHTML = localStorage.fourn_dislikes_count+" Dislikes";
};

var button9 = document.getElementById("clickme9"),
  count = 0;
  button9.onclick = function(){
    if (localStorage.fiven_likes_count) {
      localStorage.fiven_likes_count = Number(localStorage.fiven_likes_count)+1;
    } else {
      localStorage.fiven_likes_count = 1;
    }

  button9.innerHTML = localStorage.fiven_likes_count+" Likes";
};


var button10 = document.getElementById("clickme10"),
  count = 0;
  button10.onclick = function(){
    if (localStorage.fiven_dislikes_count) {
      localStorage.fiven_dislikes_count = Number(localStorage.fiven_dislikes_count)+1;
    } else {
      localStorage.fiven_dislikes_count = 1;
    }

  button10.innerHTML = localStorage.fiven_dislikes_count+" Dislikes";
};

var button11 = document.getElementById("clickme11"),
  count = 0;
  button11.onclick = function(){
    if (localStorage.sixn_likes_count) {
      localStorage.sixn_likes_count = Number(localStorage.sixn_likes_count)+1;
    } else {
      localStorage.sixn_likes_count = 1;
    }

  button11.innerHTML = localStorage.sixn_likes_count+" Likes";
};


var button12 = document.getElementById("clickme12"),
  count = 0;
  button12.onclick = function(){
    if (localStorage.sixn_dislikes_count) {
      localStorage.sixn_dislikes_count = Number(localStorage.sixn_dislikes_count)+1;
    } else {
      localStorage.sixn_dislikes_count = 1;
    }

  button12.innerHTML = localStorage.sixn_dislikes_count+" Dislikes";
};
