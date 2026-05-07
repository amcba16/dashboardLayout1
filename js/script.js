// document.getElementById("sidebar").addEventListener("click",function () {
//     document.getElementById("aside").classList.toggle("active");
// });

document.addEventListener('click',function (e) {
   var profileButtionIsClicked = document.getElementById('profile').contains(e.target);
   if (profileButtionIsClicked) {
    document.getElementById('profile-dropdown').classList.toggle('flex');
   } else {
    document.getElementById('profile-dropdown').classList.remove('flex');
   }
});

document.addEventListener('click',function(e) {
    var notificationButtonClicked = document.getElementById('notification').contains(e.target);
    if (notificationButtonClicked) {
        console.log("clicked");
        document.getElementById('notification-dropdown').classList.toggle('block');
    } else {
        console.log("else");
        document.getElementById('notification-dropdown').classList.remove('block');
    }

});

document.addEventListener('click',function(e) {
    var menuButtonClicked = document.getElementById('menu-button').contains(e.target);
    if (menuButtonClicked) {
        document.getElementById('aside').classList.toggle('active');
        document.getElementById('overlay').classList.toggle('active-block');
    } else {
        document.getElementById('aside').classList.remove('active');
        document.getElementById('overlay').classList.remove('active-block');
    }
})