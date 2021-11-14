const urlMain = 'https://api.github.com/users/vitorrsousaa'
const urlRepos = 'https://api.github.com/users/vitorrsousaa/repos'

function requestSideBar(url) {
    (fetch(url)).then(data => data.json()).then((jsonParsed) => {
        const container = document.getElementById('profile')
        const avatarProfile = `<img id="imgProfile"src="${jsonParsed.avatar_url}" />`
        const nameProfile = `<div id="nameProfile"><p>${jsonParsed.name}</p></div>`
        const loginProfile = `<div id="loginProfile"><a href=${jsonParsed.html_url}>@${jsonParsed.login}</a></div>`
        const locationProfile = `<div id="locationProfile">🌍 ${jsonParsed.location}</div>`
        const userBioProfile = `<div id="userBioProfile">📚 ${jsonParsed.bio} </div>`
        const followers = `<div id="followers"><span class="iconify" data-icon="octicon:people-16" style="color: white;"></span> ${jsonParsed.followers}</div>`
        const aboutProfile = `<div id="about">
                                <span><div class="icons8-linkedin"></div><a href="" ></a></span>
                                <span><div class="icons8-instagram"></div><a href="" ></a></span>
                                <span><div class="icons8-github"></div><a href="" ></a></span>
                                <span><div class="icons8-gmail"></div><a href="" ></a></span>
                                </div>`

        const addItens = [ avatarProfile, nameProfile, loginProfile, locationProfile, userBioProfile, followers, aboutProfile]
        let profile = ''
        addItens.forEach(dataProfile => profile += dataProfile)
        print(profile, container)
    })
}

function requestRepos(url){
    fetch(url).then(data => data.json()).then((jsonParsed) => {
        let content = ''
        const container = document.getElementById('projects')
        // Id dos projetos que quero exibir na tela
        const idProjects = [426612520, 426458248, 426457757, 426458045, 426436825, 427812656]
        const projectsView = []

        for (let i = 0; i<jsonParsed.length; i++){
            for(let k = 0; k<idProjects.length; k++) {
                if (jsonParsed[i].id == idProjects[k]){
                    projectsView.push(jsonParsed[i])
                    
                }
            }
        }
        
        for(let i = 0; i<projectsView.length; i++){
            content += `<section id="project-${projectsView[i].name}" class="project-active"> 
            <a href="#${projectsView[i].name}"><h2>${projectsView[i].name}</h2></a>
            <div id="linkGit"><span class="iconify" data-icon="uil:github" style="color: white; margin-right: 12px;"></span><a href="${projectsView[i].html_url}">Acesse o projeto!</a></div>
            <div id="watchers"><span class="iconify" data-icon="akar-icons:star" style="color: white; margin-right: 12px;"></span>${projectsView[i].watchers}</div>
            <div id="visibility"><span class="iconify" data-icon="octicon:people-16" style="color: white; margin-right: 12px;"></span>${projectsView[i].visibility}</div>
            <div id="language"><span class="iconify" data-icon="uil:file-upload-alt" style="color: white; margin-right: 12px;"></span>Linguagem: ${projectsView[i].language}"</div>
        </section>`
        }

        print(content, container)
        
    })
}

function print(param, contain) {
    contain.innerHTML = param
}




requestSideBar(urlMain)
requestRepos(urlRepos)

