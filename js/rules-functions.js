
function rulesCreate(startBlock) {
	

/////////////////////////////////////////////////////////////////////////////////////////////////// Правила игры
//<div id='pravilaIgru'>
//	<h2 id='zagolovokPravilaIgru'>Привет! Это правила игры</h2>
//	<i>Цель игры: </i><p>спасти море, собирая желтые сгустки энергии.</p> 
//	<i>Опасайся </i><p>сети, мусора и клякс отходов. Жизни восстановить нельзя!</p>
//	<i>Собирай </i><p>сгустки энергии,чтобы выиграть и пузыри воздуха,так как из-за мусора перекрыт проход кислорода к воде.</p> 
//	<i>Управление </i><p>производится клавиатурой: W -движение вверх S-вниз D-вправо A-влево. Сочитай клавиши, чтобы двигаться по диагонали</p>
//</h1>
//</div>
	//создаю блок где будет содержаться текст с правилами игры
	var pravilaIgru = document.createElement('div');
	pravilaIgru.id = 'pravilaIgru';
//добавляю блок в окно старта
	startBlock.appendChild(pravilaIgru);

//создаю заголовок правил игры
	var zagolovokPravilaIgru = document.createElement('i');
	zagolovokPravilaIgru.id = 'zagolovokPravilaIgru';
	zagolovokPravilaIgru.innerText = "Hi! Game rules";
//добавляю заголовок в блок правил игры
	pravilaIgru.appendChild(zagolovokPravilaIgru);

//создаю выделенный текст "Цель игры"
	var zagolovokCelIgru = document.createElement('i');
	zagolovokCelIgru.id = "zagolovokCelIgru";
	zagolovokCelIgru.innerText = "Goal";
//добавляю его в блок правил игры
	pravilaIgru.appendChild(zagolovokCelIgru);

//создаю перечисления цели игры
	var textCelIgru = document.createElement('p');
	textCelIgru.id = "textCelIgru";
	textCelIgru.innerText = "Save sea, сollect yellow energy balls";
//добавляю их в блок правил игры
	pravilaIgru.appendChild(textCelIgru);

//создаю выделенный текст "Опасайся:"
	var zagolovokOpasaysya = document.createElement('i');
	zagolovokOpasaysya.id = "zagolovokOpasaysya";
	zagolovokOpasaysya.innerText = "Beware";
//добавляю его в блок правил игры
	pravilaIgru.appendChild(zagolovokOpasaysya);

//cоздаю текст, чего надо опасаться
	var textOpasaysya = document.createElement('p');
	textOpasaysya.id = 'textOpasaysya';
	textOpasaysya.innerText = "fishing nets, garbage and waste. Life cannot be restored!";
//добавляю его в блок правил игры
	pravilaIgru.appendChild(textOpasaysya);

//cоздаю выделенный текст "Собирай"
	var zagolovokSobiray = document.createElement('i');
	zagolovokSobiray.id = "zagolovokSobiray";
	zagolovokSobiray.innerText = "collect";
//добавляю его в блок правил игры
	pravilaIgru.appendChild(zagolovokSobiray);

//cоздаю текст, что нужно собирать
	var textSobiray = document.createElement('p');
	textSobiray.id = 'textSobiray';
	textSobiray.innerText = "bundles of energy to win and air bubbles, as due to debris blocked the passage of oxygen to water.";
//добавляю его в блок правил игры
	pravilaIgru.appendChild(textSobiray);

//cоздаю выделенный текст "Управление"
	var zagolovokUpravlenie = document.createElement('i');
	zagolovokUpravlenie.id = "zagolovokUpravlenie";
	zagolovokUpravlenie.innerText = "Use";
//добавляю его в блок правил игры
	pravilaIgru.appendChild(zagolovokUpravlenie);

//cоздаю текст, как производится управление
	var textUpravlenie = document.createElement('p');
	textUpravlenie.id = 'textUpravlenie';
	textUpravlenie.innerText = "W - movement up, S-down, D-to the right, A-to the left. Match the keys to move diagonally";
//добавляю его в блок правил игры
	pravilaIgru.appendChild(textUpravlenie);
///////////////////////////////////////////////////////////////////////////////////////////////////

}