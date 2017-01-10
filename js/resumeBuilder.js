var bio = {
  "name" : "Jacob Moen",
  "role" : "Developer",
  "contact" : {
    "mobile" : "+4522531780",
    "email" : "jacmoe.dk@gmail.com",
    "twitter" : "@jacmoe",
    "github" : "jacmoe",
    "blog" : "https://jacmoe.dk/",
    "location" : "Denmark"
  },
  "pic" : "images/me.jpg",
  "message" : "Welcome",
  "skills" : [
    "first", "second", "third"
  ]
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedMobile = HTMLmobile.replace('%data%', bio.contact.mobile);
var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
var formattedTwitter = HTMLtwitter.replace('%data%', bio.contact.twitter);
var formattedGithub = HTMLgithub.replace('%data%', bio.contact.github);
var formattedBlog = HTMLblog.replace('%data%', bio.contact.blog);
var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.pic);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedBlog);
$("#header").append(formattedLocation);
$("#header").append(formattedBioPic);

