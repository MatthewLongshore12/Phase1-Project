fetch( 'http://localhost:3000/information' )
.then( r => r.json() )
.then( musicArray => {
    console.log( musicArray )
})