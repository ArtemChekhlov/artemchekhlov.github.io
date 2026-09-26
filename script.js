const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class ProjectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.name = this.getAttribute('name');
        this.description = this.getAttribute('description');
        this.link = this.getAttribute('link');

        this.element = document.createElement('span');
        this.element.classList.add('project-card');
        this.name_element = document.createElement('h3');
        this.description_element = document.createElement('p');

        this.name_element.textContent = this.name;
        this.description_element.textContent = this.description;

        this.element.appendChild(this.name_element);
        this.element.appendChild(this.description_element);

        try {
            this.image = this.getAttribute('image');
            this.image_element = document.createElement('img');
            this.image_element.src = this.image;

            this.element.appendChild(this.image_element)
        } catch {}

        this.element.style.display = 'block';

        this.addEventListener('click', (event) => {window.location = this.link})

        this.appendChild(this.element)
    }
}

customElements.define("project-card", ProjectCard);

async function transition() {
    let page = document.getElementById('page');

    for (let i=94; i >= 0; i--){
        page.style.transform = `scale(${1.05**i})`
        await sleep(5);
    }
}

await transition()