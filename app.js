swal('click on the one of the images for background music MADAM BD baby 😂🤩🥰 and the on screen emoji for unique messages!!!!!!!!!')

var text = "Some  friends come to your life and make your life heaven.I'm lucky to have a friend like you Tina.You're my cutest and sweetest friend😇 . It feels so nice seeing you age responsibly and more so happily    Its my pleasure that you find time out to to make this day so memorable with a plan of replay where possible🤣🤣🤣. How i wish i could give a long five to ten hours of ingredient🤣 i know you understand but time for that will come.. .Don’t❌ worry😱 about the future⏳, I’m sure you’ll have a bright one☀️.Don’t❌ worry😱 about the past⌛, you can’t❌ change it.Don’t❌ worry about the present🕐, I have one for you🎁❌😅Hope your birthday🎂 is as wonderful🎉 and extraordinary🎊 as I am😁.On your birthday🎂, I pray🙏 that you will always have laughter😄 in your life as usual.I pray🙏 that I will oftenhave the privilege😌 and joy🤠 of seeing you smile😊.I pray🙏 that you will be easily amused🤠 and find life funny😆 instead of crazy🤓 though you are crazy🤩🤗(hehe, am kidding you are not crazy).I pray🙏 that this birthday🎂 finds you peaceful😌 and happy😃.HAPPY BIRTHDAY MY DEAR FRIEND TINA CHRISTINE, YOUR BIRTHDAY WILL FOREVER BE CELEBRATED HAPPY BIRTHDAY SWEETIE 🥳🥰💖... MR P❤K EDRICK"
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
  swal("You're the unit of sweetness and joy of million years🍫🍫🍫🍰🍰🍰🍬🍬🍬🍨🍨🍧🍧🍧🍦🍦🍦🍦🍦🍦! HAPPY BIRTHDAY MY FRIEND, ........BASHIR")
    var x = document.getElementById("Z");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }}
    
function X() {
  swal("You're cutest angel!🌹🌹🌹🌹🌸🌸🌸🌼🌼🌼🌻🌻🌻🌺🌺🌺 and I know you will continue to glow on this great day, YOUR BIRTHDAY!! Celebrate your day and make it feel so special  .....FRED SUNDAY")
    var x = document.getElementById("X");
    if(x.style.display === "none"){
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }}

    
function Y() {
  swal("Meowwwwwwwwww😂😂😂😹😹😹😹 You're always Gooooooood 😺 like an angel ... HAPPY BIRTHDAY🎈🥳🥳 ...MAIA PATIENCE")
    var x = document.getElementById("Y");
    if(x.style.display === " "){
        x.style.display = "block";
    }
    else {
        x.style.display = " ";
    }
}


function A() {
  swal("... It feels so special seeing you add more years.. H🥳ppy Birthday my Friend ......CONDRAD DENIS")
    var a = document.getElementById("a");
    if(a.style.display === " "){
        a.style.display = "block";
    }
    else {
        a.style.display = " ";
    }
}

function B() {
  swal("I love it when i wish happiness for special people like you and surely you deserve a happy BD celebration... HAPPY BIRTHDAY TeeNAH🎈🥳🥳 ...AMOS")
    var b = document.getElementById("b");
    if(b.style.display === " "){
        b.style.display = "block";
    }
    else {
        b.style.display = " ";
    }
}

function C() {
  swal("I wish i could join in to have a share of the BD CAKE 🥳🤣... HAPPY BIRTHDAY🎈🥳🥳 ...AARON young BRO")
    var c = document.getElementById("c");
    if(c.style.display === " "){
        c.style.display = "block";
    }
    else {
        c.style.display = " ";
    }
}

function D() {
  swal("Met you as a strange girl little did i know you will one day become so special in my heart.❤ you colour our hearts with jolly smiles quench our thirst like water in oasis.. long live ENID ..... MANGAKU BRIAN JOEL")
    var d = document.getElementById("d");
    if(d.style.display === " "){
        d.style.display = "block";
    }
    else {
        c.style.display = " ";
    }
}


function E() {
  swal("Hello and Happy Birthday to you🥳🥳🥳 Edrick's friend.. may God bless u and grant to u your wishes🌹..... BEST FRIEND IVAN LUMUMBA")
    var e = document.getElementById("e");
    if(e.style.display === " "){
        e.style.display = "block";
    }
    else {
        e.style.display = " ";
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