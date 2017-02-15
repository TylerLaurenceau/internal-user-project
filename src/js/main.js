import $ from 'jquery';


$.ajax({
  url: `https://randomuser.me/api/?results=12`,
  dataType: "json",
  success: getInfo
});


function getInfo(data) {
  console.log (data)
  for (var i=0;i<data.results.length;i++){
    $(".container").append(`
    <div class = "personContainer">
    <ul class = "person">
    <li class = "picture"><img src = "${data.results[i].picture.large}"/></li>
    <li class = "name">${data.results[i].name.first} ${data.results[i].name.last}</li>
    <li class = "email">${data.results[i].email}</li>
    <li class = "adress">${data.results[i].location.street} <br/> ${data.results[i].location.city}. ${data.results[i].location.state}. ${data.results[i].location.postcode}</li>
    <li class = "phone">${data.results[i].phone}</li>
    </div>`)
  }
}
