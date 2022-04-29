var e_request = new XMLHttpRequest();

e_request.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let _data = JSON.parse(this.responseText);

        document.querySelector("#projects .title a sup").innerText = _data.length

        const project_box = document.querySelector("#project-list");

        for (let i = 0; i < _data.length; i++) {
            const _i = _data[i];

            let link_repo = document.createElement('a');
            link_repo.href = _i.html_url

            let data_repo_box = document.createElement('div');
            data_repo_box.classList.add('project');

            let title_repo = document.createElement('h2');
            title_repo.innerText = _i.name

            let dec_repo = document.createElement('p');
            dec_repo.classList.add('sp')
            dec_repo.innerText = _i.description

            let star_fork_repo = document.createElement('p');
            star_fork_repo.innerText = ('star : ' + _i.stargazers_count + ' , fork : ' + _i.forks);

            data_repo_box.appendChild(title_repo);
            data_repo_box.appendChild(dec_repo);
            data_repo_box.appendChild(document.createElement('i'));
            data_repo_box.appendChild(star_fork_repo);
            link_repo.appendChild(data_repo_box);
            project_box.appendChild(link_repo);

        }

    }
};

let repos_github_api = "https://api.github.com/users/msfpt/repos?sort=last_updates";
e_request.open("GET", repos_github_api, true);
e_request.send();