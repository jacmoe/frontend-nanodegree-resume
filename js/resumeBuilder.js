var name = "Jacob Moen";
var role = "Developer";

var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

