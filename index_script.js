const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function randint(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

async function print_text() {
    let intro = document.getElementById('text');
    console.log(text)

    const intro_text = "I'm Artyom.$I'm a student who loves building things, solving challenging problems, and figuring out how things work. I enjoy coding, mathematics, machine learning, and engineering.$I'm always learning, experimenting, and looking for the next thing to build.$Let me show you what I've done already!";

    for (let i=0; i<intro_text.length + 1; i++){
        intro.innerHTML = intro_text.slice(0, i).replaceAll('$', '<br>', ) + '▏';
        await sleep(randint(30, 50));
    }
}

async function transition() {
    let page = document.getElementById('page');

    for (let i=0; i <= 200; i++){
        page.style.transform = `scale(${1.05**i})`
        page.style.display = 'block';
        await sleep(5);
    }

    window.location = 'main.html'
}

async function main_animation() {
    await print_text();
    
    let transition_btn = document.getElementById('transition');
    transition_btn.style.display = 'block';
    transition_btn.addEventListener('click', transition);
}

await main_animation();