
var button1 = document.getElementById("clickme1"),
  count = 0;
  button1.onclick = function(){
    if (localStorage.onec_likes_count) {
      localStorage.onec_likes_count = Number(localStorage.onec_likes_count)+1;
    } else {
      localStorage.onec_likes_count = 1;
    }

  button1.innerHTML = localStorage.onec_likes_count+" Likes";
};


var button2 = document.getElementById("clickme2"),
  count = 0;
  button2.onclick = function(){
    if (localStorage.onec_dislikes_count) {
      localStorage.onec_dislikes_count = Number(localStorage.onec_dislikes_count)+1;
    } else {
      localStorage.onec_dislikes_count = 1;
    }

  button2.innerHTML = localStorage.onec_dislikes_count+" Dislikes";
};


var button3 = document.getElementById("clickme3"),
  count = 0;
  button3.onclick = function(){
    if (localStorage.twoc_likes_count) {
      localStorage.twoc_likes_count = Number(localStorage.twoc_likes_count)+1;
    } else {
      localStorage.twoc_likes_count = 1;
    }

  button3.innerHTML = localStorage.twoc_likes_count+" Likes";
};


var button4 = document.getElementById("clickme4"),
  count = 0;
  button4.onclick = function(){
    if (localStorage.twoc_dislikes_count) {
      localStorage.twoc_dislikes_count = Number(localStorage.twoc_dislikes_count)+1;
    } else {
      localStorage.twoc_dislikes_count = 1;
    }

  button4.innerHTML = localStorage.twoc_dislikes_count+" Dislikes";
};


var button5 = document.getElementById("clickme5"),
  count = 0;
  button5.onclick = function(){
    if (localStorage.threec_likes_count) {
      localStorage.threec_likes_count = Number(localStorage.threec_likes_count)+1;
    } else {
      localStorage.threec_likes_count = 1;
    }

  button5.innerHTML = localStorage.threec_likes_count+" Likes";
};


var button6 = document.getElementById("clickme6"),
  count = 0;
  button6.onclick = function(){
    if (localStorage.threec_dislikes_count) {
      localStorage.threec_dislikes_count = Number(localStorage.threec_dislikes_count)+1;
    } else {
      localStorage.threec_dislikes_count = 1;
    }

  button6.innerHTML = localStorage.threec_dislikes_count+" Dislikes";
};


var button7 = document.getElementById("clickme7"),
  count = 0;
  button7.onclick = function(){
    if (localStorage.fourc_likes_count) {
      localStorage.fourc_likes_count = Number(localStorage.fourc_likes_count)+1;
    } else {
      localStorage.fourc_likes_count = 1;
    }

  button7.innerHTML = localStorage.fourc_likes_count+" Likes";
};


var button8 = document.getElementById("clickme8"),
  count = 0;
  button8.onclick = function(){
    if (localStorage.fourc_dislikes_count) {
      localStorage.fourc_dislikes_count = Number(localStorage.fourc_dislikes_count)+1;
    } else {
      localStorage.fourc_dislikes_count = 1;
    }

  button8.innerHTML = localStorage.fourc_dislikes_count+" Dislikes";
};

var button9 = document.getElementById("clickme9"),
  count = 0;
  button9.onclick = function(){
    if (localStorage.fivec_likes_count) {
      localStorage.fivec_likes_count = Number(localStorage.fivec_likes_count)+1;
    } else {
      localStorage.fivec_likes_count = 1;
    }

  button9.innerHTML = localStorage.fivec_likes_count+" Likes";
};


var button10 = document.getElementById("clickme10"),
  count = 0;
  button10.onclick = function(){
    if (localStorage.fivec_dislikes_count) {
      localStorage.fivec_dislikes_count = Number(localStorage.fivec_dislikes_count)+1;
    } else {
      localStorage.fivec_dislikes_count = 1;
    }

  button10.innerHTML = localStorage.fivec_dislikes_count+" Dislikes";
};

var button11 = document.getElementById("clickme11"),
  count = 0;
  button11.onclick = function(){
    if (localStorage.sixc_likes_count) {
      localStorage.sixc_likes_count = Number(localStorage.sixc_likes_count)+1;
    } else {
      localStorage.sixc_likes_count = 1;
    }

  button11.innerHTML = localStorage.sixc_likes_count+" Likes";
};


var button12 = document.getElementById("clickme12"),
  count = 0;
  button12.onclick = function(){
    if (localStorage.sixc_dislikes_count) {
      localStorage.sixc_dislikes_count = Number(localStorage.sixc_dislikes_count)+1;
    } else {
      localStorage.sixc_dislikes_count = 1;
    }

  button12.innerHTML = localStorage.sixc_dislikes_count+" Dislikes";
};
