var work = {
  "jobs" : [
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
};



if(bio !== null) {

  $("#header").append(appendData(HTMLheaderName, bio.name));
  $("#header").append(appendData(HTMLheaderRole, bio.role));
  $("#header").append(appendData(HTMLbioPic, bio.bioPic));
  $("#header").append(appendData(HTMLwelcomeMsg, bio.welcomeMessage));

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills) {
      $("#skills").append(appendData(HTMLskills, bio.skills[skill]));
    };
  };
};

for(job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  $(".work-entry:last").append(appendData(HTMLworkEmployer, work.jobs[job].employer) + appendData(HTMLworkTitle, work.jobs[job].title));
}
