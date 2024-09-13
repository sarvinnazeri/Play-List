const music = ['mp3/Balthazar - Bunker.mp3', 'mp3/It Rains.mp3', 'mp3/11 summertime sadness.mp3']
const photo = ['img/27b99e95f2064471c438e468f34a769a.webp', 'img/artworks-000376217652-i41tjv-t500x500.jpg', 'img/artworks-000017607589-4tl049-t500x500.jpg']
const h1 = ['Bunker', 'It Rains', 'Summertime Sadness']
const p = ['Balthazar', ' Archie Faulks', 'Lana Del Rey ']

////////////////////////

const icon = document.querySelectorAll('i')
const img = document.querySelector('img')
const mp3 = document.querySelector('audio')
const h1HTML = document.querySelector('h1')
const pHTML = document.querySelector('p')
const range = document.querySelector('input')
let vall = ''

///////////////////////        
mp3.addEventListener('timeupdate', () => {
    const value = (mp3.currentTime / mp3.duration) * 100;
    range.value = value;
});

range.addEventListener('input', () => {
    const currentTime = (range.value / 100) * mp3.duration;
    mp3.currentTime = currentTime;
});

///////////////
let pause = 0
////////// play //////////
icon[3].addEventListener('click', () => {
    if (pause % 2 == 0) {
        icon[3].setAttribute('class', 'bi bi-pause-circle')
        mp3.play()

    } else {
        icon[3].setAttribute('class', 'bi bi-play-circle-fill')
        mp3.pause()
    }
    pause++
})
///////////next///////////
let i = 0
icon[4].addEventListener('click', () => {

    range.value = 0
    if (i < photo.length - 1) {
        i++
    }
    img.src = photo[i]
    mp3.src = music[i]
    pHTML.innerText = p[i]
    h1HTML.innerText = h1[i]

    pause = 0

    icon[3].setAttribute('class', 'bi bi-play-circle-fill')
    if (favList.indexOf(i) !== -1) {
        icon[0].setAttribute('class', 'bi bi-heart-fill')
    } else {
        icon[0].setAttribute('class', 'bi bi-heart')

    }
    console.log(i)
    console.log(heart)
    console.log(favList)
})

///////////repeat/////
let click = 0;
icon[5].addEventListener('click', () => {
    if (click % 2 == 0) {
        console.log(mp3.currentTime);
        console.log(mp3.duration);
        mp3.loop = true;
        mp3.play();
        icon[5].style.color = '#f50';
    } else {
        mp3.loop = false;
        icon[5].style.color = 'white';
    }
    click++;
});


//////////////// shuffle ////////
icon[1].addEventListener('click', () => {
    let random = Math.floor(Math.random() * music.length)
    range.value = 0
    img.src = photo[random]
    mp3.src = music[random]
    pHTML.innerText = p[random]
    h1HTML.innerText = h1[random]
    pause = 0
    icon[3].setAttribute('class', 'bi bi-play-circle-fill')

})


/////////previous //////////
icon[2].addEventListener('click', () => {

    range.value = 0
    if (i > 0) {
        i--
    }
    img.src = photo[i]
    mp3.src = music[i]
    pHTML.innerText = p[i]
    h1HTML.innerText = h1[i]
    pause = 0
    icon[3].setAttribute('class', 'bi bi-play-circle-fill')
    if (favList.indexOf(i) !== -1) {
        icon[0].setAttribute('class', 'bi bi-heart-fill')
    } else {
        icon[0].setAttribute('class', 'bi bi-heart')
    }
    console.log(i)
    console.log(heart)
    console.log(favList)
})
////////////////////
//////////like////////
let favList = []
heart = 0
icon[0].addEventListener('click', () => {
    if (heart % 2 == 0) {
        icon[0].setAttribute('class', 'bi bi-heart-fill')
        favList.push(i)
        console.log(favList)
    } else {
        icon[0].setAttribute('class', 'bi bi-heart')
        /////////////unlike ///////// 
        let exist = favList.indexOf(i)
        if (exist !== -1) {
            favList.splice(exist, 1)
        }
    }
    heart++
})
