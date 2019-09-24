window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search').addEventListener('click', function() {
        event.preventDefault();
      let query = document.getElementById('searchvalue').value;
      let api_key = document.getElementById('apikey').value;
      let gallery = document.getElementsByClassName('gif-gallery')[0]
      
      console.log(gallery)
    //   console.log("query",query);
    //  console.log("api_key",api_key);
  
      fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${api_key}`)
        .then((response) => 
          response.json()
        )
        .then ((response) => {
         
          for (let i = 0; i < response.data.length; i++){
            let giffBox = document.createElement('div')  
            giffBox.className = "col-sm-2"
            let giffImage = document.createElement('img')
            giffImage.setAttribute('src', response.data[i].images.fixed_height.url)
       //      giffImage.setAttribute('src', response.data[i].embed_url)
            giffBox.appendChild(giffImage)
            gallery.appendChild(giffBox)
          // console.log(response.data);
          // console.log("Hello")
          // console.log(response.data);
          }
        })
        .catch ((err) => {
          console.log(err);
        })
        .finally (() => {
          console.log('done');
        })
        
    })
  
})