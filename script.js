// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    document.querySelector('.hearts-bg').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);


// Step 1: Important question logic
const importantYesBtn = document.getElementById('important-yes-btn');
const importantNoBtn = document.getElementById('important-no-btn');
const importantResult = document.getElementById('important-result');
const importantDiv = document.getElementById('important-question');
const valentineReveal = document.getElementById('valentine-reveal');
let importantNoClickCount = 0;
if (importantYesBtn && importantNoBtn && importantResult && importantDiv && valentineReveal) {
    importantYesBtn.addEventListener('click', function() {
        importantDiv.style.display = 'none';
        valentineReveal.style.display = 'block';
    });
    importantYesBtn.addEventListener('mouseover', function() {
        importantYesBtn.classList.add('yes-bounce');
        setTimeout(() => importantYesBtn.classList.remove('yes-bounce'), 700);
    });
    importantNoBtn.addEventListener('mouseover', function() {
        // Move the No button to a random position within the parent
        const parent = importantNoBtn.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const btnRect = importantNoBtn.getBoundingClientRect();
        const maxLeft = parentRect.width - btnRect.width;
        const maxTop = parentRect.height - btnRect.height;
        importantNoBtn.style.position = 'absolute';
        importantNoBtn.style.left = Math.random() * maxLeft + 'px';
        importantNoBtn.style.top = Math.random() * maxTop + 'px';
        importantNoClickCount++;
        if (importantNoClickCount > 3) {
            importantResult.innerHTML = '<span class="valentine-no-anim">No sonnaaaaaa ? <b>kadichuruven paathuko!</b> 😝<br>I really need to ask you!</span>';
            importantResult.classList.add('show');
        } else if (importantNoClickCount === 2) {
            importantResult.innerHTML = '<span class="valentine-no-anim">Nope! Try again... 😜</span>';
            importantResult.classList.add('show');
        } else {
            importantResult.innerHTML = '<span class="valentine-no-anim">You can\'t escape! 😆</span>';
            importantResult.classList.add('show');
        }
        importantNoBtn.classList.add('shake-anim');
        setTimeout(() => importantNoBtn.classList.remove('shake-anim'), 600);
    });
    importantNoBtn.addEventListener('click', function() {
        importantResult.innerHTML = '<span class="valentine-no-anim">No is not an option! 💘</span>';
        importantResult.classList.add('show');
        importantNoBtn.classList.add('shake-anim');
        setTimeout(() => importantNoBtn.classList.remove('shake-anim'), 600);
    });
}

// Step 2: Valentine game logic (after reveal)
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const valentineResult = document.getElementById('valentine-result');
let noClickCount = 0;
if (yesBtn && noBtn && valentineResult) {
    yesBtn.addEventListener('mouseover', function() {
        yesBtn.classList.add('yes-bounce');
        setTimeout(() => yesBtn.classList.remove('yes-bounce'), 700);
    });
    yesBtn.addEventListener('click', function() {
        valentineResult.innerHTML = '<span class="valentine-yes-anim">Yay! You are our forever Valentine! 💞</span>';
        valentineResult.classList.add('show');
        // Add a burst of hearts
        for (let i = 0; i < 12; i++) setTimeout(createHeart, i * 80);
        yesBtn.disabled = true;
        noBtn.disabled = true;
        yesBtn.classList.add('yes-celebrate');
        noBtn.style.opacity = '0.3';
    });
    noBtn.addEventListener('mouseover', function() {
        // Move the No button to a random position within the parent
        const parent = noBtn.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();
        const maxLeft = parentRect.width - btnRect.width;
        const maxTop = parentRect.height - btnRect.height;
        noBtn.style.position = 'absolute';
        noBtn.style.left = Math.random() * maxLeft + 'px';
        noBtn.style.top = Math.random() * maxTop + 'px';
        noClickCount++;
        if (noClickCount > 3) {
            valentineResult.innerHTML = '<span class="valentine-no-anim">You can\'t say no! 😝<br>Our love will always catch you!</span>';
            valentineResult.classList.add('show');
        } else if (noClickCount === 2) {
            valentineResult.innerHTML = '<span class="valentine-no-anim">Nope! Try again... 😜</span>';
            valentineResult.classList.add('show');
        } else {
            valentineResult.innerHTML = '<span class="valentine-no-anim">You can\'t escape! 😆</span>';
            valentineResult.classList.add('show');
        }
    });
    noBtn.addEventListener('click', function() {
        valentineResult.innerHTML = '<span class="valentine-no-anim">No is not an option! 💘</span>';
        valentineResult.classList.add('show');
    });
}
