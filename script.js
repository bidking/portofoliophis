const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100;
const colors = ['#000000', '#333333', '#666666', '#999999'];

function createStars() {
    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3 + 1; // Radius bervariasi antara 1 dan 4
        const color = colors[Math.floor(Math.random() * colors.length)];
        const dx = Math.random() * 4 + 2;  // Kecepatan
        stars.push({ x, y, radius, color, dx });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = star.color;
        ctx.fill();
        ctx.closePath();
    }
}

function updateStars() {
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += star.dx;
        if (star.x > canvas.width) {
            star.x = 0 - star.radius;
            star.y = Math.random() * canvas.height;
            star.dx = Math.random() * 4 + 2;  // Kecepatan
        }
    }
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

createStars();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;
    createStars();
});


document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const phoneNumber = '6285951368186';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Nama:%20${encodeURIComponent(name)}%0APesan:%20${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
});

function downloadCV() {
  var downloadUrl = 'asset/33.png';  // Ganti dengan URL file CV yang sebenarnya
  var filename = 'cv_sttaaaa.jpg ';      // Ganti dengan nama file CV yang sebenarnya

  var link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000);
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

 
 consoleText(['front-end developer', 'UI/UX developer', 'digital art.'], 'text', ['linear-gradient(to right ,pink,purple)']);
    
        function consoleText(words, id, colors) {
      
          let visible = true;
          const con = document.getElementById('console');
          let letterCount = 1, x = 1, waiting = false;
          const target = document.getElementById(id);
          target.style.background = colors[0];
          target.style.webkitBackgroundClip = 'text';
          target.style.color = 'transparent';
    
          setInterval(() => {
            if (letterCount === 0 && !waiting) {
              waiting = true;
              target.innerHTML = words[0].substring(0, letterCount);
              setTimeout(() => {
                const usedColor = colors.shift();
                colors.push(usedColor);
                const usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.style.color = colors[0];
                letterCount += x;
                waiting = false;
              }, 1000);
            } else if (letterCount === words[0].length + 1 && !waiting) {
              waiting = true;
              setTimeout(() => {
                x = -1;
                letterCount += x;
                waiting = false;
              }, 1000);
            } else if (!waiting) {
              target.innerHTML = words[0].substring(0, letterCount);
              letterCount += x;
            }
          }, 120);
    
          setInterval(() => {
            con.classList.toggle('hidden');
            visible = !visible;
          }, 900);
        }

        var icon = document.getElementById("icon");
        icon.onclick=function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src="asset/moon.png";
            }else{
                icon.src="asset/sun.png";
            }
        }
        var icon = document.getElementById("icon1");
        icon.onclick=function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src="asset/moon.png";
            }else{
                icon.src="asset/sun.png";
            }
        }

    

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});


