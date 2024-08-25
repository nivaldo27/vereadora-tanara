function createStarburst() {
    const starburst = document.createElement('div');
    starburst.classList.add('starburst');

    starburst.style.left = Math.random() * 100 + 'vw';
    starburst.style.top = Math.random() * 100 + 'vh';

    starburst.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(starburst);
    setTimeout(() => {
        starburst.remove();
    }, 3000);
}

setInterval(createStarburst, 700);
