
var button1 = document.getElementById("clickme1"),
  count = 0;
  button1.onclick = function(){
    if (localStorage.onem_likes_count) {
      localStorage.onem_likes_count = Number(localStorage.onem_likes_count)+1;
    } else {
      localStorage.onem_likes_count = 1;
    }

  button1.innerHTML = localStorage.onem_likes_count+" Likes";
};


var button2 = document.getElementById("clickme2"),
  count = 0;
  button2.onclick = function(){
    if (localStorage.onem_dislikes_count) {
      localStorage.onem_dislikes_count = Number(localStorage.onem_dislikes_count)+1;
    } else {
      localStorage.onem_dislikes_count = 1;
    }

  button2.innerHTML = localStorage.onem_dislikes_count+" Dislikes";
};


var button3 = document.getElementById("clickme3"),
  count = 0;
  button3.onclick = function(){
    if (localStorage.twom_likes_count) {
      localStorage.twom_likes_count = Number(localStorage.twom_likes_count)+1;
    } else {
      localStorage.twom_likes_count = 1;
    }

  button3.innerHTML = localStorage.twom_likes_count+" Likes";
};


var button4 = document.getElementById("clickme4"),
  count = 0;
  button4.onclick = function(){
    if (localStorage.twom_dislikes_count) {
      localStorage.twom_dislikes_count = Number(localStorage.twom_dislikes_count)+1;
    } else {
      localStorage.twom_dislikes_count = 1;
    }

  button4.innerHTML = localStorage.twom_dislikes_count+" Dislikes";
};


var button5 = document.getElementById("clickme5"),
  count = 0;
  button5.onclick = function(){
    if (localStorage.threem_likes_count) {
      localStorage.threem_likes_count = Number(localStorage.threem_likes_count)+1;
    } else {
      localStorage.threem_likes_count = 1;
    }

  button5.innerHTML = localStorage.threem_likes_count+" Likes";
};


var button6 = document.getElementById("clickme6"),
  count = 0;
  button6.onclick = function(){
    if (localStorage.threem_dislikes_count) {
      localStorage.threem_dislikes_count = Number(localStorage.threem_dislikes_count)+1;
    } else {
      localStorage.threem_dislikes_count = 1;
    }

  button6.innerHTML = localStorage.threem_dislikes_count+" Dislikes";
};


var button7 = document.getElementById("clickme7"),
  count = 0;
  button7.onclick = function(){
    if (localStorage.fourm_likes_count) {
      localStorage.fourm_likes_count = Number(localStorage.fourm_likes_count)+1;
    } else {
      localStorage.fourm_likes_count = 1;
    }

  button7.innerHTML = localStorage.fourm_likes_count+" Likes";
};


var button8 = document.getElementById("clickme8"),
  count = 0;
  button8.onclick = function(){
    if (localStorage.fourm_dislikes_count) {
      localStorage.fourm_dislikes_count = Number(localStorage.fourm_dislikes_count)+1;
    } else {
      localStorage.fourm_dislikes_count = 1;
    }

  button8.innerHTML = localStorage.fourm_dislikes_count+" Dislikes";
};

var button9 = document.getElementById("clickme9"),
  count = 0;
  button9.onclick = function(){
    if (localStorage.fivem_likes_count) {
      localStorage.fivem_likes_count = Number(localStorage.fivem_likes_count)+1;
    } else {
      localStorage.fivem_likes_count = 1;
    }

  button9.innerHTML = localStorage.fivem_likes_count+" Likes";
};


var button10 = document.getElementById("clickme10"),
  count = 0;
  button10.onclick = function(){
    if (localStorage.fivem_dislikes_count) {
      localStorage.fivem_dislikes_count = Number(localStorage.fivem_dislikes_count)+1;
    } else {
      localStorage.fivem_dislikes_count = 1;
    }

  button10.innerHTML = localStorage.fivem_dislikes_count+" Dislikes";
};

var button11 = document.getElementById("clickme11"),
  count = 0;
  button11.onclick = function(){
    if (localStorage.sixm_likes_count) {
      localStorage.sixm_likes_count = Number(localStorage.sixm_likes_count)+1;
    } else {
      localStorage.sixm_likes_count = 1;
    }

  button11.innerHTML = localStorage.sixm_likes_count+" Likes";
};


var button12 = document.getElementById("clickme12"),
  count = 0;
  button12.onclick = function(){
    if (localStorage.sixm_dislikes_count) {
      localStorage.sixm_dislikes_count = Number(localStorage.sixm_dislikes_count)+1;
    } else {
      localStorage.sixm_dislikes_count = 1;
    }

  button12.innerHTML = localStorage.sixm_dislikes_count+" Dislikes";
};
