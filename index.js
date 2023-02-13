fetch( 'http://localhost:3000/information' )
.then( r => r.json() )
.then( musicArray => {
    renderMusic( musicArray )
})

// const conatiner = document.querySelector("#myCarousel > div")
// const liconatiner = document.querySelector("#myCarousel > ol")

function renderMusic( musicArray ) {

 musicArray.forEach( music => {
   console.log(music)
   const conatiner = document.querySelector("body > div")
    //const olConatiner = document.querySelector("#myCarousel > ol")
    const newDiv = document.createElement("div")
    newDiv.className = "container"
    conatiner.append(newDiv)
    const h2 = document.createElement("h2")
    h2.textContent = music.Genre
    const image = document.createElement("img")
    image.src = music.image
    const h3 = document.createElement("h3")
    h3.textContent = music.artists
    const p = document.createElement("p")
    p.textContent = music.message
    p.className = "carousel-caption"
   
   const button = document.createElement("button")
   button.textContent = music.likes + " Likes \u2665"
   newDiv.append(h2, image, h3, p, button)

   button.addEventListener("click", () => {
    button.textContent = parseInt(button.textContent) + 1 + " Likes \u2665"
 
    })

  })

}
