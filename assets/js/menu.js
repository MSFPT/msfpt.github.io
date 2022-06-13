
const toggle_menu = (event) => {
    document.querySelector('#menu').classList.toggle('active');
    document.querySelector('#menu-close').classList.toggle('active');
}

document.querySelector("#btn-menu").addEventListener('click', toggle_menu);
document.querySelector("#menu-close").addEventListener('click', toggle_menu);

const search_input = document.querySelector('#search')
search_input.addEventListener('search', (event) => {
    const this_input = event.srcElement;
    var text = this_input.value.trim();
    if (text.length > 0) {
        const searchEngine = getRandomItem(['duckduckgo.com', 'google.com/search'])
        window.open('https://' + searchEngine + '?q=' + text + ' site:msfpt.github.io', '_blank')
    }
    this_input.value = ''
});

let user = 'msfpt'
let repository = 'msfpt.github.io';

let github_api = "https://api.github.com/repos/" + user + "/";
let github_profile = "https://github.com/" + user + "/";

let endpoint = github_api + repository;

var request = new XMLHttpRequest();

request.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let data = JSON.parse(this.responseText);

        let stars_count = document.querySelector('#menu footer > div button[rel="MSFPT :: Star"] span b');
        stars_count.innerText = data.stargazers_count;

    }
};

request.open("GET", endpoint, true);
request.send();