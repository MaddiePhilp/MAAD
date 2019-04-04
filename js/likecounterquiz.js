
var button1 = document.getElementById("clickme1"),
  count = 0;
  button1.onclick = function(){
    if (localStorage.oneq_likes_count) {
      localStorage.oneq_likes_count = Number(localStorage.oneq_likes_count)+1;
    } else {
      localStorage.oneq_likes_count = 1;
    }

  button1.innerHTML = localStorage.oneq_likes_count+" Likes";
};


var button2 = document.getElementById("clickme2"),
  count = 0;
  button2.onclick = function(){
    if (localStorage.oneq_dislikes_count) {
      localStorage.oneq_dislikes_count = Number(localStorage.oneq_dislikes_count)+1;
    } else {
      localStorage.oneq_dislikes_count = 1;
    }

  button2.innerHTML = localStorage.oneq_dislikes_count+" Dislikes";
};
