var e_request = new XMLHttpRequest();
const project_box = document.querySelector("#project-list");

e_request.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let _data = JSON.parse(this.responseText);

        document.querySelector("#projects .title a sup").innerText = _data.length

        for (let i = 0; i < _data.length; i++) {
            const _i = _data[i];

            let link_repo = document.createElement('a');
            link_repo.href = _i.html_url;

            let repo_img = document.createElement('img');
            repo_img.src = 'https://github-readme-stats.vercel.app/api/pin/?username=msfpt&repo=' + _i.name + '&theme=tokyonight';
            
            link_repo.appendChild(repo_img);
            project_box.appendChild(link_repo);

        }

    }
};

const start_page = () => {

    let repos_github_api = "https://api.github.com/users/msfpt/repos?sort=last_updates";

    if (navigator.onLine ? true : false) {
        e_request.open("GET", repos_github_api, true);
        e_request.send();
    } else {
        document.querySelector('#projects').style.marginTop = '10em'

        const title_pb = document.querySelector('#projects .title a')
        title_pb.removeAttribute('href');
        title_pb.innerText = 'No internet'
        title_pb.style.color = 'red'

        const network_error_text = document.createElement('h2');
        network_error_text.style.margin = '2em'
        network_error_text.style.textAlign = 'center'
        network_error_text.innerText = 'Checking the network cables, modem, and router \n Reconnecting to Wi-Fi'
        console.error('ERR_INTERNET_DISCONNECTED');

        const reload_button = document.createElement('button');
        reload_button.classList.add('btn')
        reload_button.innerText = 'Reload'
        reload_button.style.color = 'black'
        reload_button.addEventListener('click', (event) => {
            location.reload();
        });

        project_box.appendChild(network_error_text);
        document.querySelector('#projects .btn-box').appendChild(reload_button);
    }
}

start_page();
setInterval(() => {
    project_box.innerHTML = ''
    start_page();
}, 300000); // Every five minutes 