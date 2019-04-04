
var button1 = document.getElementById("clickme1"),
  count = 0;
  button1.onclick = function(){
    if (localStorage.oned_likes_count) {
      localStorage.oned_likes_count = Number(localStorage.oned_likes_count)+1;
    } else {
      localStorage.oned_likes_count = 1;
    }

  button1.innerHTML = localStorage.oned_likes_count+" Likes";
};


var button2 = document.getElementById("clickme2"),
  count = 0;
  button2.onclick = function(){
    if (localStorage.oned_dislikes_count) {
      localStorage.oned_dislikes_count = Number(localStorage.oned_dislikes_count)+1;
    } else {
      localStorage.oned_dislikes_count = 1;
    }

  button2.innerHTML = localStorage.oned_dislikes_count+" Dislikes";
};


var button3 = document.getElementById("clickme3"),
  count = 0;
  button3.onclick = function(){
    if (localStorage.twod_likes_count) {
      localStorage.twod_likes_count = Number(localStorage.twod_likes_count)+1;
    } else {
      localStorage.twod_likes_count = 1;
    }

  button3.innerHTML = localStorage.twod_likes_count+" Likes";
};


var button4 = document.getElementById("clickme4"),
  count = 0;
  button4.onclick = function(){
    if (localStorage.twod_dislikes_count) {
      localStorage.twod_dislikes_count = Number(localStorage.twod_dislikes_count)+1;
    } else {
      localStorage.twod_dislikes_count = 1;
    }

  button4.innerHTML = localStorage.twod_dislikes_count+" Dislikes";
};


var button5 = document.getElementById("clickme5"),
  count = 0;
  button5.onclick = function(){
    if (localStorage.threed_likes_count) {
      localStorage.threed_likes_count = Number(localStorage.threed_likes_count)+1;
    } else {
      localStorage.threed_likes_count = 1;
    }

  button5.innerHTML = localStorage.threed_likes_count+" Likes";
};


var button6 = document.getElementById("clickme6"),
  count = 0;
  button6.onclick = function(){
    if (localStorage.threed_dislikes_count) {
      localStorage.threed_dislikes_count = Number(localStorage.threed_dislikes_count)+1;
    } else {
      localStorage.threed_dislikes_count = 1;
    }

  button6.innerHTML = localStorage.threed_dislikes_count+" Dislikes";
};


var button7 = document.getElementById("clickme7"),
  count = 0;
  button7.onclick = function(){
    if (localStorage.fourd_likes_count) {
      localStorage.fourd_likes_count = Number(localStorage.fourd_likes_count)+1;
    } else {
      localStorage.fourd_likes_count = 1;
    }

  button7.innerHTML = localStorage.fourd_likes_count+" Likes";
};


var button8 = document.getElementById("clickme8"),
  count = 0;
  button8.onclick = function(){
    if (localStorage.fourd_dislikes_count) {
      localStorage.fourd_dislikes_count = Number(localStorage.fourd_dislikes_count)+1;
    } else {
      localStorage.fourd_dislikes_count = 1;
    }

  button8.innerHTML = localStorage.fourd_dislikes_count+" Dislikes";
};

var button9 = document.getElementById("clickme9"),
  count = 0;
  button9.onclick = function(){
    if (localStorage.fived_likes_count) {
      localStorage.fived_likes_count = Number(localStorage.fived_likes_count)+1;
    } else {
      localStorage.fived_likes_count = 1;
    }

  button9.innerHTML = localStorage.fived_likes_count+" Likes";
};


var button10 = document.getElementById("clickme10"),
  count = 0;
  button10.onclick = function(){
    if (localStorage.fived_dislikes_count) {
      localStorage.fived_dislikes_count = Number(localStorage.fived_dislikes_count)+1;
    } else {
      localStorage.fived_dislikes_count = 1;
    }

  button10.innerHTML = localStorage.fived_dislikes_count+" Dislikes";
};

var button11 = document.getElementById("clickme11"),
  count = 0;
  button11.onclick = function(){
    if (localStorage.sixd_likes_count) {
      localStorage.sixd_likes_count = Number(localStorage.sixd_likes_count)+1;
    } else {
      localStorage.sixd_likes_count = 1;
    }

  button11.innerHTML = localStorage.sixd_likes_count+" Likes";
};


var button12 = document.getElementById("clickme12"),
  count = 0;
  button12.onclick = function(){
    if (localStorage.sixd_dislikes_count) {
      localStorage.sixd_dislikes_count = Number(localStorage.sixd_dislikes_count)+1;
    } else {
      localStorage.sixd_dislikes_count = 1;
    }

  button12.innerHTML = localStorage.sixd_dislikes_count+" Dislikes";
};
