//Função para infos das redes sociais
const linksSocialMedia = {
  github: 'brenobmac',
  instagram: 'brenobmac'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}/`
  }
}

changeSocialMediaLinks()

//Info vinda da API do GitHub
function getGitHubUserInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHubLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubUserInfo()
