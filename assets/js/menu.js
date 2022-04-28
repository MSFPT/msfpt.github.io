
const toggle_menu = (event) => {
    document.querySelector('#menu').classList.toggle('active');
    document.querySelector('#menu-close').classList.toggle('active');
}

document.querySelector("#btn-menu").addEventListener('click', toggle_menu);
document.querySelector("#menu-close").addEventListener('click', toggle_menu);

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