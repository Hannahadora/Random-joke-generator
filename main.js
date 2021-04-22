// Using the XMLHttpGetRequest

// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//    const xhr = new XMLHttpRequest();

//    xhr.open('GET', `https://zenquotes.io/api/random`, { mode: 'no-cors'}, true);


//     xhr.onload = function () {
//         if(this.status === 200) {
//             const response = JSON.parse(this.responseText);
//             document.querySelector('#jokesDisplay').innerText = response.value.joke;
//             document.querySelector('.jokesBox').style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";
//             document.querySelector('.jokesBox').style.opacity = 0.7;
//             document.querySelector('.get-jokes').style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";  
//         }
//     }

//     xhr.send();

    

//     e.preventDefault();
// }





// USING FETCH API AND PROMISES


document.querySelector('.get-jokes').addEventListener('click', getQuotes);


function getQuotes(e) {
    fetch('http://api.icndb.com/jokes/random')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data.value.joke);
        document.querySelector('#jokesDisplay').innerText = data.value.joke;  
        document.querySelector('.jokesBox').style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";
        document.querySelector('.jokesBox').style.opacity = 0.7;
        document.querySelector('.get-jokes').style.backgroundColor =  "rgb("+e.offsetX+","+e.offsetY+", 40)";  
    })
   .catch(function(err) {
       console.log(err); 
   });

   e.preventDefault(); 
}
