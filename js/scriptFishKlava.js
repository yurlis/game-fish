var fishInterval = 0

//Координаты направления движения в начале = 0 
moveX = 0;
moveY = 0;

document.addEventListener('keydown', keyOn);
document.addEventListener('keyup', keyOff);

function keyOn(event) {

	// console.log(event.keyCode);

	switch(event.keyCode) {
//Вправо (D)
		case 68: 
			moveX = 5;
		break;
//Влево (A)
		case 65:	
			moveX = -5;
		break;
// В низ (S)
		case 83:
			moveY = 5;
		break;
//В верх (W)
		case 87:		
			moveY = -5;
		break;
	}
	if (event.keyCode >= 65 && event.keyCode <= 87) {
		moveFishKlava();
	}
}

function keyOff(event) {

	// console.log("ОТЖАТО");
	switch(event.keyCode) {
//Вправо (D)
		case 68: 
			moveX = 0;
		break;
//Влево (A)
		case 65:	
			moveX = 0;
		break;
// В низ (S)
		case 83:
			moveY = 0;
		break;
//В верх (W)
		case 87:		
			moveY = 0;
		break;
	}

}

function moveFishKlava() {

	var fish = document.querySelector('#fish-block');
	//сделать проверку границ (if)
	if (fish.offsetTop + moveY <= 725 &&
		fish.offsetLeft + moveX <= 965 &&
		fish.offsetTop + moveY >= 0 &&
		fish.offsetLeft + moveX >= 0) {
		if (moveX < 0) {
			// рыбка плывет влево
			fish.className = 'fishleft';
		} else if (moveX >= 0) {
			// рыбка плывет вправо
			fish.className = 'fishright';
		}

	if(fishInterval == 0) {
		fishInterval = setInterval(function() {
			fish.style.top = fish.offsetTop + moveY + "px";
			fish.style.left = fish.offsetLeft + moveX + "px";
		},30)
	}

		/**********************************
			События при касании объектов
		**********************************/	
		// поймали солнце
		if (testCollision(fish, sun)) {
			if ( oneTrashDelete() ) {
				deleteSun();
				createSun();	
			} else {
				gameOver(true, 'победа');
			}
		}
		//поймали пузырек
		if (testCollision(fish, bubble)) {
			addO2();
			deleteBubble();
			createBubble();
		}
		//коснулись сети
		if (testCollision(fish, seine)) {
			touchSeine();
		}
		//поймали нефть
		if (testCollision(fish, blot)) {
			takeO2();
			deleteBlot();
			createBlot();
		}



	}
}

function fishBlockCreateKlava() {
	fishContainerCreate();
	fishCreate();
}

function KlavaAnimationStop() {
	fishInterval == 0;
	clearInterval(fishInterval)
}

function deleteFishKlava() {
	fishContainerDelete()
}