var express = require('express'),
bodyparser=require('body-parser'),
app=express();
const MongoClient=require('mongodb').MongoClient;
app.use(express.static(__dirname));
app.use(bodyparser.urlencoded({extended:true}));
var db;


app.use(bodyparser.json());


app.get("/",function(req,res){
	
	db.collection('newz').find().limit(100).toArray(function(err, results){

			res.render("inda.ejs",{posts:results});
		

		
        
       
    });
	
	
	
	
})



app.get("/news",function(req,res){
	

	    db.collection("newz").find().limit(100).toArray(function(err, results){
            

			res.render("news.ejs",{posts:results});

			
        
       
    });
	
})




app.post("/",function(req,res){
	
var collection = db.collection("newz");
    var user = {name: req.body.name, comment: req.body.sok};
    collection.insertOne(user, function(err, result){
         
        if(err){ 
            return console.log(err);
        }
        console.log(result.ops);
       
    });
	res.redirect('/news');
	
})


MongoClient.connect('mongodb://ahan:kazah10@ds259305.mlab.com:59305/ahan', (err, database) => {
  if (err) return console.log(err)
  db=database;
  app.listen(3000, ( ) => {
    console.log('We are live on ');
  });               
})