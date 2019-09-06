// import axios here
const axios = require('axios');
const config =require('../config')


// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account


const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
  // code here
  axios.get(url)
    .then(function(response) {
      console.log(response)
     })
    .catch(function(error){
      console.log(error)
    })
    .finally(function(){
    });
  
}
discoverMovie()

const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
  // code here
  axios.get(url, {
    params: {
      id: 500
    }
  })

.then(function(response) {
  return true
  console.log(response.data.original_title)
   
 })
.catch(function(error){
  console.log(error)
})
.finally(function(){
});

}

const getMovieByIdFailure = () => {
  const fakeId = 1 // FAKE ID HERE
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${api_key}`
  // code here
}



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}