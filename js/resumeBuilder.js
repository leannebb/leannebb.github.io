/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var formattedName = HTMLheaderName.replace("%data%", "Lijia Li");
 var role = "Web Developer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);


 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
 $("#header").append(HTMLbioPic);


$("#topContacts").append(HTMLmobile);
$("#topContacts").append(HTMLemail);
$("#topContacts").append(HTMLgithub);
$("#topContacts").append(HTMLlocation);


var bio ={
	"name" : "Lijia Li",
	"role" : "Web Developer",
	"contacts" :{
		"mobile" : "330-389-6124",
		"email" : "jleannejia@gmail.com",
		"github" : "leannebb",
		"location" : "Tacoma, WA"
	},

	"welcomeMessage" : "Hello My friends",
	"skills" : ["Programming","Front to End web developing ","Data Analysis and Visualizing","Keen attention to detail","Strong work ethics","Professional demeanor"],
	"bioPic" : "img/null"
}


var education ={
	"schools" : [
		{
			"name" : "Kent State University",
			"city" : "Kent, OH",
			"degree" : "Master",
			"major" : ["CS"],
			"dates" : "2015",
			"url" : "http://kent.edu"
		},
		{
			"name" : "Chongqing University of Posts and Telecommunications",
			"city" : "Chongqing, China",
			"degree" : "BS",
			"major" : ["CS"],
			"dates" : "2007",
			"url" : "http://cqupt.edu.cn"
		}
	]

}

var work = {
	"jobs":[
		{
			"employer" :"Chongqing TV Station",
			"title" : "News Director",
			"dates" : "August 2007 -- June 2011",
			"description" : "The News Director (ND) leads and manages the planning, production and presentation of news. The ND supervises the news department staff. The ND reports to (the program director / general manager) and works in cooperation with station leadership and staff to support the station mission."
		}
	]
}

var projects ={
	"projects" :[
		{
			"title" :"Text Filtering Applicaton for College of Business",
			"dates" : "May 2012 -- August 2013",
			"description" : "Developed Text filtering application using Perl.Designed an application for visualizing commercial data with D3.js."
		},

		{
			"title" :"Website develop and maintain",
			"dates" : "December 2012 -- January 2014",
			"description" : "Designed website for Chinese Students and Scholars Association."
		},

		{
			"title" :"Real-time Text Visualization Analysis System ",
			"dates" : "May 2013 -- August 2014",
			"description" : "Developed effective visualization tool for streaming text data with D3.jsBenefit for identifying real-time topic trends in news, blogs, comments, search engines and social media records."
		},

		{
			"title" :"Kent Explore ",
			"dates" : "Mar 2015 -- May 2015",
			"description" : "Constructed a map_based website to enable travelers to explore Kent Ohio Provide key information such as map service, points of interests and recommendations based on Google Maps API,HTML,CSS,JavaScript,JQuery,Python."
		}

	]
}






 

function displayWork(){

   
    

 	$("#header").append(HTMLskillsStart);

		for (var i =0 ; i < bio.skills.length; i++) {
        	 var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
	
	  	$("#skills").append(formattedSkill);
    }
       
      
     
       
       

	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer+formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);


		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}


	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

         var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

	}

}

displayWork();



/* for fun */
function locationizer(work_obj){
	var locationArray = [];

	for(job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
    return locationArray;
}

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

	return name[0] +" " +name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


