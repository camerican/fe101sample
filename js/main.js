// $.ajax({
//     url:"somedata.json",
//     success: function (d) {
//         alert('data returned is: ' + d.somekey);
//     }
// });

$.ajax({
  type: "GET",
  url: "http://art-share.herokuapp.com/api/v1/users/",
  success: function(data) {
    data.result.forEach(function(user){
      $("#users").append("<li>"+user.fname + " " + user.lname + "</li>");
    });

  }
})