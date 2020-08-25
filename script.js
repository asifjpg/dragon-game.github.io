score=0;
cross = true;
audiogo = new Audio('gameover.mp3');
audio =new Audio('music.mp3');
setTimeout(() =>
	{
		audio.play()
	} ,1000);

document.onkeydown =function(e){
	console.log("key code is ",e.keyCode)
	if(e.keyCode==38){
		dino = document.querySelector('.dino');
		dino.classList.add('animateDino');
		setTimeout(() => {
			dino.classList.remove('animateDino')
		},700);		
	}

	if(e.keyCode==39){
		dino = document.querySelector('.dino');
		dinoX=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
		dino.style.left = dinoX +112 + "px"	;
	}

	if(e.keyCode==37)
	{
		dino =document.querySelector('.dino');
		dinoX =parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
		dino.style.left = (dinoX-112 )+ "px";
	}







}
setInterval( () =>{
	dino=document.querySelector('.dino');
	gameover =document.querySelector('.gameover');
	obstacle= document.querySelector('.obstacle');


	dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
	dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

	ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
	oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

	offSetX =Math.abs(dx-ox);
	offSetY =Math.abs(dy-oy);
	//console.log(offSetX,offSetY);

	if(offSetX <73 && offSetY<52)
	{
		// gameover.style.visibility = 'visible';
		gameover.innerHTML = 'game over';
		obstacle.classList.remove('obstacleAni');
		audiogo.play();
		 audio.play();
		setTimeout(   ()  =>  {
			audiogo.pause();
			audio.pause();
		},1000 );
	}

	 else if(offSetX <145 && cross)
	{
		score+=1;
		updateScore(score);
		cross=false;
		setTimeout(() =>
		{
			cross=true;
		},1000);

		setTimeout(() =>  {
		anidur =parseFloat(window.getComputedStyle('obstacle',null).getPropertyValue('animation-duration'));
		newdur= anidur - 0.1;
		obstacle.style.animationDuration = newdur  + 's' ;	
		console.log("newdur", newdur);

		} ,500);

	
	}

},10);



function updateScore(score)
{
	scorecount.innerHTML
	 = "Your Score  is: "+ score ;
}