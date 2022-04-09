var randomlinks = new Array()

randomlinks[0] = "library/glowingbottle.html"
randomlinks[1] = "https://google.com"
randomlinks[2] = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
randomlinks[3] = "https://reddit.com"
randomlinks[4] = "https://twitch.tv"
randomlinks[5] = "test/test.html"

function randomlink(){
window.location=randomlinks[Math.floor(Math.random()*randomlinks.length)]
}