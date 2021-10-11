// Initialize and add the map
function toggleMenu(){
  // document.getElementById("1").style.display = "none";
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}

function clockTick() {
  var currentTime = new Date(),
      // month = currentTime.getMonth() + 1,
      month = currentTime.toLocaleString('default', { month: 'long' })
      day = currentTime.getDate(),
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      d = 'AM';
      if(hours > 12){
        hours = hours - 12;
        d = 'PM';
      }
      if(hours == 0){
        hours = 12;
      }
      if(hours < 10){
        hours = '0'+hours;
      }
      if(minutes < 10){
        minutes = '0'+minutes;
      }
      if(seconds < 10){
        seconds = '0'+seconds;
      }
      text = (  hours + ':' + minutes + ':' + seconds + ' '+d);
      text2 = (day + " " + month + " " + year );

  document.getElementById('date').innerHTML = text2;
  document.getElementById('time').innerHTML = text;
}


setInterval(clockTick, 20);
function t1(){
  document.getElementById("1").style.display = "flex";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.querySelector('header').classList.remove('sticky');
  document.querySelector('footer').classList.remove('sticky');
  var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
}
function t2(){
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "block";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.querySelector('header').classList.add('sticky');
  document.querySelector('footer').classList.add('sticky');
  var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
}
function t3(){
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "block";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "none";
  document.querySelector('header').classList.remove('sticky');
  document.querySelector('footer').classList.remove('sticky');
  var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
}
function t4(){
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "block";
  document.getElementById("5").style.display = "none";
  document.querySelector('header').classList.add('sticky');
  document.querySelector('footer').classList.add('sticky');
  var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
}
function t5(){
  document.getElementById("1").style.display = "none";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  document.getElementById("4").style.display = "none";
  document.getElementById("5").style.display = "flex";
  document.querySelector('header').classList.remove('sticky');
  document.querySelector('footer').classList.remove('sticky');
  var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
}