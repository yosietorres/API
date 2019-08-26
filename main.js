
axios({
    url: 'http://localhost:3000/arrayColores',
    method: 'post',
    headers: { 'Content-type': 'text/html; charset=UTF-8' },
    data: text
}).then(OkCallback, ErrorCallback)
function getAllRequest() {
    axios.get('http://localhost:3000/arrayColores')
        .then(function (response) {
            let list = document.getElementById("ListaColores");
            list.innerHTML="";
            response.data.forEach(element => {
                var node = document.createElement("li");                 // Create a <li> node
                var textnode = document.createTextNode(element.nombreColor);         // Create a text node
                node.appendChild(textnode);                              // Append the text to <li>
                list.appendChild(node);
            });
            console.log(response.data[0].valorHexadec);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
}
/*
function getFilteredRequest() {
    axios.get('http://localhost:3000/arrayColores', {
        params: {
            filter: 'myFilter'
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
}*/

/*function getByIdRequest()
{
   id = 10;
   axios.get('http://localhost:3000/arrayColores' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}*/
/*
function postRequest()
{
   axios.post('http://localhost:3000/arrayColores', {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function putRequest()
{
   id = 10;
   axios.put('http://localhost:3000/arrayColores' + id, {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function patchRequest()
{
   id = 10;
   axios.patch('http://localhost:3000/arrayColores' + id, {
      data: 'NewItem'
     })
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}

function deleteRequest()
{
   id = 10;
   axios.delete('http://localhost:3000/arrayColores' + id)
     .then(function (response) {
      console.log(response);
     })
     .catch(function (error) {
      console.log(error);
     })
     .then(function () {
     });
}*/