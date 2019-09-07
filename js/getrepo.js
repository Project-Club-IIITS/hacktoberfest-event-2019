function getRepo(repo) {
    fetch("https://api.github.com/repos/" + repo).then(function (response) {
        return response.json();
    }).then(function (data) {
        let name = data.name;
        let owner = data.owner.login;
        let owner_url = data.owner.html_url;
        let repo_url = data.html_url;
        let lang = data.language;
        let forks = data.forks_count;
        let stars = data.stargazers_count;
        let desc = data.description;
        let image = data.owner.avatar_url;

        let frks = document.createElement("div");
        frks.setAttribute("class", "forks icon");
        frks.innerHTML = forks;

        let strs = document.createElement("div");
        strs.setAttribute("class", "stars icon");
        strs.innerHTML = stars;

        let lngs = document.createElement("div");
        lngs.setAttribute("class", "lang icon");
        lngs.innerHTML = lang;

        let img = document.createElement("img");
        img.setAttribute("src", image);

        let repo_link = document.createElement("a");
        repo_link.setAttribute("href", repo_url);
        repo_link.setAttribute("title", name);
        repo_link.innerHTML = name;

        let owner_link = document.createElement("a");
        owner_link.setAttribute("href", owner_url);
        owner_link.innerHTML = owner;

        let rep = document.createElement("div");
        rep.setAttribute("class", "repo")
        rep.appendChild(repo_link);

        let own = document.createElement("div");
        own.setAttribute("class", "owner")
        own.appendChild(owner_link);

        let des = document.createElement("p");
        if (desc != null && desc.length > 65) {
            desc = desc.slice(0, 64) + "...";
        }
        des.innerHTML = desc;

        let dta = document.createElement("div");
        dta.setAttribute("class", "repodata");
        dta.appendChild(lngs);
        dta.appendChild(strs);
        dta.appendChild(frks);

        let the_repo = document.createElement("div");
        the_repo.setAttribute("class", "repomain");
        the_repo.appendChild(img);
        the_repo.appendChild(rep);
        the_repo.appendChild(own);
        the_repo.appendChild(dta);
        the_repo.appendChild(des);

        document.getElementById('repo-container').appendChild(the_repo);
    }).catch(error => {
        console.log(error);
    })
}

var repos_list = ["TheAlgorithms/C", "trekhleb/javascript-algorithms", "Project-Club-IIITS/club_portal"];

for (i = 0; i < repos_list.length; i++) {
    getRepo(repos_list[i]);
}