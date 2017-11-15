var arr=("asdasd","asdasd","asdasd","asdads");


function init(imya,age){
	
	this.name=imya;
	this.age=age;
	
	
	
}
init.prototype.out=function(){
	
	console.log(this.name);
	
	
}

module.exports=init;