var express = require("express");
var app = express(); 

/* ATTN! update this variable whenever you add a new file. */ 
var num_files = 5;

app.use(express.static('public'));

app.get("/", function(req, res)
	   {
	res.render("vibe_check_" + num_files + ".ejs");
}); 

app.get("/day:num", function(req, res)
	   {
	if( parseInt(req.params.num, 10) <= num_files && parseInt(req.params.num, 10) != 1)
		{
			res.render("vibe_check_" + req.params.num + ".ejs");
		}
	else {
		res.render("404.ejs");
	}
});

app.get("*", function(req, res){
	res.render("404.ejs");
});

app.listen(process.env.PORT || 3000 , function (){
	console.log("server started :)");
});