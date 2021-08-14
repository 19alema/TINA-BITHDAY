swal('click on the one of the images for background music MADAM BD baby 😂🤩🥰 and the on screen emoji for unique messages!!!!!!!!!')

var text="Some  friends come to your life and make your life heaven.I'm lucky to have a friend like you tina.Youre my cutest and sweetest friend😇. Don’t❌ worry😱 about the future⏳, I’m sure you’ll have a bright one☀️. Don’t❌ worry😱 about the past⌛, you can’t❌ change it. Don’t❌ worry about the present🕐, I have one for you🎁❌😅Hope your birthday🎂 is as wonderful🎉 and extraordinary🎊 as I am😁. On your birthday🎂,I pray🙏 that you will always have laughter😄 in your life as usual. I pray🙏 that I will oftenhave the privilege😌 and joy🤠 of seeing you smile😊. I pray🙏 that you will be easily amused🤠 and find life funny😆 instead of crazy🤓 though you are crazy🤩🤗( hehe, am kidding you are not crazy). I pray🙏 that this birthday🎂 finds you peaceful😌 and happy😃. HAPPY BIRTHDAY MY DEAR FRIEND TINA CHRISTINE, YOUR BIRTHDAY WILL FOREVER BE CELEBRATED..."
    var word = text.split("");
var i = 0;
var interval = setInterval(writeText, 80 );
function writeText() {
    var p = document.getElementsByTagName("p")[0];
    if (i < word.length) {
        p.innerHTML += word[i];
        i++;
    } else {
        clearInterval(interval);
         
  
  }
  }
  function Z() {
  swal("You're the unit of sweetness kitty🍫🍫🍫🍰🍰🍰🍬🍬🍬🍨🍨🍧🍧🍧🍦🍦🍦🍦🍦🍦!")
    var x = document.getElementById("Z");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }}
    
function X() {
  swal("You're cutest kitty!🌹🌹🌹🌹🌸🌸🌸🌼🌼🌼🌻🌻🌻🌺🌺🌺 and I know you will continue to glow on the great day, YOUR BIRTHDAY")
    var x = document.getElementById("X");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }}

    
function Y() {
  swal("Meowwwwwwwwww😂😂😂😹😹😹😹 You're always Gooooooood 😺 like a 🐈😻😽 and i always enjoy your company... HAPPY BIRTHDAY🎈🥳🥳")
    var x = document.getElementById("Y");
    if(x.style.display === " "){
        x.style.display = "block";
    }
    else {
        x.style.display = " ";
    }
}

window.onerror=function(){
    console.error=null;
    return true;
};

const audio = document.getElementById('audio');

const img = document.querySelectorAll("img");

img.forEach(function (e) {
    e.addEventListener('click', audioPlay)
});

function audioPlay() {
    audio.play();
 }