const socialMedia = {
  github: 'felipespagiari',
  youtube: 'felipespagiari',
  facebook: 'felipespagiari',
  instagram: 'felipespagiari',
  twitter: 'felipespagiari'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}
changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitUrl.href = data.html_url
      userLogin.textContent = data.login
      userPhoto.src = data.avatar_url
      userTitle.textContent = data.name
    })
}
getGitHubProfileInfos()

// arrow functions
//function nomedaFuncao(argumentos){
//code
//}

//contrair nome da função ANONIMA

//argumento => {}
