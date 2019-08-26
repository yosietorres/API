fetch('http://localhost:3000/arrayColores')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    document.getElementById("nombreColor")
    console.log()
  });