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

var work = {};
work.position = "work position";
work.employer = "employer";
work.years = "years working";
work.city = "WorkCity";

var education = {};
education["school"] = "school name";
education["years"] = "years educated";
education["city"] = "SchoolCity";

var formattedEmployer = HTMLworkEmployer.replace('%data', work.employer);
$("#workExperience").append(formattedEmployer);
$("#education").append(education["school"]);
