var work = {
  "jobs" : [
    {
      "employer" : "testemployer",
      "title" : "testtitle",
      "location" : "location",
      "dates" : "dates",
      "description" : "description"
    },
    {
      "employer" : "testemployer",
      "title" : "testtitle",
      "location" : "location",
      "dates" : "dates",
      "description" : "description"
    }
  ]
};

var projects = [
  {
    "title" : "title",
    "dates" : "dates",
    "description" : "description",
    "images" : [
      "img/one.jpg", "img/two.jpg"
    ]
  },
  {
    "title" : "title",
    "dates" : "dates",
    "description" : "description",
    "images" : [
      "img/one.jpg", "img/two.jpg"
    ]
  }
];

var bio = {
  "name" : "Jacob Moen",
  "role" : "Developer",
  "welcomeMessage" : "Welcome",
  "bioPic" : "images/me.jpg",
  "contacts" : {
    "mobile" : "+4522531780",
    "email" : "jacmoe.dk@gmail.com",
    "twitter" : "@jacmoe",
    "github" : "jacmoe",
    "blog" : "https://jacmoe.dk/",
    "location" : "Denmark"
  },
  "skills" : [
    "first", "second", "third"
  ]
};

var education = {
  "schools" : [
    {
      "name" : "School",
      "location" : "SchoolCity",
      "degree dates" : "degree",
      "url" : "http://school.com/",
      "majors" : [
        "one", "two", "three"
      ]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "title",
      "school" : "school",
      "dates" : "dates",
      "url" : "http://onlinecourse.com"
    }
  ]
};

function appendData(elem, data) {
  return elem.replace('%data%', data);
}

function displayBio() {
  if(bio !== null) {

    $("#header").append(appendData(HTMLheaderName, bio.name));
    $("#header").append(appendData(HTMLheaderRole, bio.role));
    $("#header").append(appendData(HTMLmobile, bio.contacts.mobile));
    $("#header").append(appendData(HTMLemail, bio.contacts.email));
    $("#header").append(appendData(HTMLtwitter, bio.contacts.twitter));
    $("#header").append(appendData(HTMLgithub, bio.contacts.github));
    $("#header").append(appendData(HTMLblog, bio.contacts.blog));
    $("#header").append(appendData(HTMLlocation, bio.contacts.location));
    
    $("#header").append(appendData(HTMLbioPic, bio.bioPic));
    $("#header").append(appendData(HTMLwelcomeMsg, bio.welcomeMessage));

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(skill in bio.skills) {
        $("#skills").append(appendData(HTMLskills, bio.skills[skill]));
      }
    }
  }
}

function displayWork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(appendData(HTMLworkEmployer, work.jobs[job].employer) + appendData(HTMLworkTitle, work.jobs[job].title));
    $(".work-entry:last").append(appendData(HTMLworkDates, work.jobs[job].dates));
    $(".work-entry:last").append(appendData(HTMLworkLocation, work.jobs[job].location));
    $(".work-entry:last").append(appendData(HTMLworkDescription, work.jobs[job].description));
  }
}

displayBio();
displayWork();

//$(document).click(function(loc) {
//  console.log(loc.pageX + ',' + loc.pageY);
//});

function inName(name) {
  var names = name.trim().split(' ');
  var finalName = names[0].slice(0,1).toUpperCase() + names[0].toLowerCase().slice(1) + ' ' + names[1].toUpperCase();
  return finalName;
}

//$("#main").append(internationalizeButton);

projects.display = function() {
  for(i = 0; i < this.length; i++) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(appendData(HTMLprojectTitle, this[i].title));
    $(".project-entry:last").append(appendData(HTMLprojectDates, this[i].dates));
    $(".project-entry:last").append(appendData(HTMLprojectDescription, this[i].description));
    for(image in this[i].images) {
      $(".project-entry:last").append(appendData(HTMLprojectImage, this[i].images[image]));
    }
  }
}

projects.display();
