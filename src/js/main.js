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
    <div>
    <ul>
    <div class = "personContainer"><li class = "picture"><img src = "${data.results[i].picture.large}"/></li></div>
    <div class = "personContainer"><li class = "name"><span><b>${data.results[i].name.first.toUpperCase()} ${data.results[i].name.last.toUpperCase()}</b></span></li></div>
    <div class = "personContainer"><li class = "email">${data.results[i].email.toUpperCase()}</li></div>
    <div class = "personContainer"><li class = "adress">${data.results[i].location.street} <br/>${data.results[i].location.city}. ${data.results[i].location.state}. ${data.results[i].location.postcode}</li></div>
    <div class = "personContainer"><li class = "phone">${data.results[i].phone}</li></div>
    </ul>
    </div>`)
  }
}
