var e_request = new XMLHttpRequest();

e_request.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {

        let _data = JSON.parse(this.responseText);

        document.querySelector("#projects .title a sup").innerText = _data.length

        const project_box = document.querySelector("#project-list");

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

let repos_github_api = "https://api.github.com/users/msfpt/repos?sort=last_updates";
e_request.open("GET", repos_github_api, true);
e_request.send();