//Mouse Over/Out Events
document.getElementById("titleH1").addEventListener("mouseover", mouseOver);
document.getElementById("titleH1").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("titleH1").style.color = "#03e9f4";
}
  
function mouseOut() {
    document.getElementById("titleH1").style.color = "grey";
}

// Creating Cards
const button = document.createElement("button")



const container = document.querySelector("body > div")
const newDiv = document.querySelector(".info")

fetch( 'http://localhost:3000/information' )
.then( r => r.json() )
.then( musicArray => {
    musicArray.forEach( musicObj => {
      renderMusic( musicObj )
    })
})


function renderMusic( music ) {
   //Caraoel Elements 
   const card = document.createElement('div')
   card.className = "card"
   container.append(card)

   const h3 = document.createElement("h3")
    h3.className = "title"
    h3.textContent = music.Genre

    const image = document.createElement("img")
    image.src = music.image
    image.alt = music.Genre

    card.append(h3, image)
    
    card.addEventListener('click', () => {

    //Elemnts appear Below Once Clicked   
    const h4 = document.querySelector(".h4")
    h4.textContent = "Genre Top Artists: " + music.artists
    const p = document.querySelector(".p")
    p.textContent = music.message

    //Button Likes
    button.className = "like"
    button.textContent = parseInt(music.likes) + " Likes \u2665"
    newDiv.append(button)

  })
}
    
//Like button Listener    
button.addEventListener("click", () => {
    button.textContent = parseInt(button.textContent) + 1 + " Likes \u2665"

    button.classList.toggle("liked")
})


//Form 
const theForm = document.querySelector(".music-box")
theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const addNewMusic = {
      Genre: e.target.fgenre.value,
      image: e.target.fimg.value,
      artists: e.target.fartist.value,
      message: e.target.fdesc.value,
      likes: e.target.vol.value
    }
    //POST Request
    fetch( 'http://localhost:3000/information', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( addNewMusic )
    } )
    .then( r => r.json() )
    .then( addNewMusicObj => {
      renderMusic( addNewMusicObj )
    })
   
})




