/*==========================================
        SPEAKER BUTTON
==========================================*/

function speakName() {

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
        "Mahesh Konnur"
    );

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    const voices = speechSynthesis.getVoices();

    if (voices.length > 0) {
        speech.voice = voices.find(v => v.lang.includes("en")) || voices[0];
    }

    speechSynthesis.speak(speech);
}

/*==========================================
        TYPING ANIMATION
==========================================*/

const roles = [

    "Java Full Stack Developer",

    "Spring Boot Developer",

    "React Developer",

    "Problem Solver",

    "Software Engineer"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".hero h2");

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/*==========================================
        SCROLL REVEAL
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*==========================================
        ACTIVE NAVBAR
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
        COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".achievement-card h1");

const speed = 150;

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = parseInt(counter.innerText);

            let count = 0;

            const update = () => {

                const increment = target / speed;

                if (count < target) {

                    count += increment;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }

                else {

                    if (target === 500)

                        counter.innerText = "500+";

                    else if (target === 10)

                        counter.innerText = "10+";

                    else if (target === 15)

                        counter.innerText = "15+";

                    else

                        counter.innerText = target;

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==========================================
        CERTIFICATE POPUP
==========================================*/

const certificates =
document.querySelectorAll(".certificate-card img");

certificates.forEach(image => {

    image.style.cursor = "pointer";

    image.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";

        overlay.style.top = "0";

        overlay.style.left = "0";

        overlay.style.width = "100%";

        overlay.style.height = "100%";

        overlay.style.background = "rgba(0,0,0,.85)";

        overlay.style.display = "flex";

        overlay.style.justifyContent = "center";

        overlay.style.alignItems = "center";

        overlay.style.zIndex = "9999";

        const img = document.createElement("img");

        img.src = image.src;

        img.style.maxWidth = "90%";

        img.style.maxHeight = "90%";

        img.style.borderRadius = "12px";

        overlay.appendChild(img);

        document.body.appendChild(overlay);

        overlay.onclick = () => {

            overlay.remove();

        };

    });

});

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
        PAGE LOADING ANIMATION
==========================================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    }, 100);

});

/*==========================================
        PROFILE IMAGE TILT
==========================================*/

const profile = document.querySelector(".profile-card");

if (profile) {

    profile.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        const rotateY = (x - 200) / 20;

        const rotateX = (200 - y) / 20;

        profile.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    });

}