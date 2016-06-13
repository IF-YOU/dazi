
	var box=document.querySelector(".box")
var zimujihe={}
var shuliang=5;

var createzimu=function(){
	do{
		var zimu=String.fromCharCode(Math.floor(Math.random()*26+97));
	}while(zimujihe[zimu]);	
	var el=document.createElement("div");
	el.className="zi";
	el.innerHTML=zimu;
	box.appendChild(el);
	el.style.left=Math.floor(Math.random()*(box.offsetWidth-el.offsetWidth))+"px";
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	el.style.background="rgb("+r+","+g+","+b+")";
	// var ran=Math.ceil(Math.random()*5);
	// zimujihe[zimu]={top:0,yuansu:el,off:ran};
	zimujihe[zimu]=el;	
}

for(var i=0;i<shuliang;i++){
	createzimu();
}
var removezimu=function(zimu){
	var el= zimujihe[zimu];
	el.parentElement.removeChild(el);
	delete zimujihe[zimu];
 
} 




document.onkeyup=function(e){

	 if(e.keyCode===32){
            flag();
            return;
          }
	var key=String.fromCharCode(e.keyCode).toLowerCase();
	if(zimujihe[key]){
		removezimu(key);
		createzimu();
	}
}



var diao=function(){
	var zimu;
	for(var i in zimujihe){
		var el=zimujihe[i];
		el.style.top=el.offsetTop+2+"px";
		if(el.offsetTop>box.offsetHeight){
		zimu=i;	
		}
	}
	if(zimu){
		removezimu(zimu);
		createzimu();
	}
}


var timerId=setInterval(diao,50);
        var flag=function(){
          if(timerId){
               clearInterval(timerId);
               timerId=null;
          }else{
            timerId=setInterval(diao,50);
          }
        }

        // 开关
	// $('ul li[data-cotroll]').bind('click',function(){
	// 	var str=$(this).attr('data-cotroll');
	// 	if(str==='kaishi'){
	// 		timerId=setInterval(diao,200);
	// 	}else if(str==='zanting'){
	// 		clearInterval(timerId);
	// 	}
	// 	// }else if(str==='restart'){
	// 	// 	clearInterval(timerId);
	// 	// 	huachangjing();
	// 	// 	she=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	// 	// 	shiwu=fangshiwu();
	// 	// 	she.forEach(function(v){
	// 	// 		$('#'+zb2id(v.x,v.y)).addClass('she');
	// 	// 	});
	// 	// 	setInterval(diao,200);
	// 	// }
	// })
