// document.getElementById("h1").addEventListener("mouseover", mouseOver);
// document.getElementById("h1").addEventListener("mouseout", mouseOut);
// document.getElementById("p").addEventListener("mouseover", mouseOver);
// document.getElementById("p").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementById("h1").style.color = "red";
//     document.getElementById("p").style.color = "#990000";

// }
  
// function mouseOut() {
//     document.getElementById("h1").style.color = "black";
//     document.getElementById("p").style.color = "black";
// }
const button = document.createElement("button")

fetch( 'http://localhost:3000/information' )
.then( r => r.json() )
.then( musicArray => {
    musicArray.forEach( musicObj => {
      renderMusic( musicObj )
    })
})

// const conatiner = document.querySelector("#myCarousel > div")
// const liconatiner = document.querySelector("#myCarousel > ol")

function renderMusic( music ) {
   //console.log(music)
   const container = document.querySelector("body > div")
    //const olConatiner = document.querySelector("#myCarousel > ol")
    //newDiv.className = "container"
    //container.append(newDiv)
    const card = document.createElement('div')
    card.className = "card"
    container.append(card)
    const h3 = document.createElement("h3")
    h3.className = "title"
    h3.textContent = music.Genre
    const image = document.createElement("img")
    image.src = music.image

    card.append(h3, image)
    
    
    card.addEventListener('click', () => {
      
      const newDiv = document.querySelector(".info")
      const h4 = document.querySelector(".h4")
      h4.textContent = music.artists
      const p = document.querySelector(".p")
      p.textContent = music.message
      
      button.textContent = parseInt(music.likes) + " Likes \u2665"
      newDiv.append(h4, p, button)

      button.addEventListener("click", () => {
        button.textContent = parseInt(button.textContent) + 1 + " Likes \u2665"

        })
      
      
    })
  }
    

    




const theForm = document.querySelector("#theForm")
theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const addNewMusic = {
      Genre: e.target.fgenre.value,
      image: e.target.fimg.value,
      artists: e.target.fartist.value,
      message: e.target.fdesc.value,
      likes: e.target.vol.value
    }
    
    fetch( 'http://localhost:3000/information', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( addNewMusic )
    } )
    .then( r => r.json() )
    .then( addNewMusicObj => {
      renderMusic( addNewMusicObj )
    })
    //renderMusic( addNewMusicObj )
})


