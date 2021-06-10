"use strict"
const gamearea = document.querySelector('.gamearea');
const gameareaflou = document.querySelector('.gamearea--flou');
const gameareapuzzle = document.querySelector('.gamearea--puzzle');
const gameaeredepixel = document.querySelector('.gamearea--depixel');
const synopsisgamearea = document.querySelector('.synopsisgame');
const blocs = document.querySelectorAll('.bloc');
const imgdepixel = document.querySelector('.imgpixelise')

const input = document.querySelector('.input');
const inputreponse = document.querySelector('.input--reponse');
const btnnext = document.querySelector('.btn--suivant');
const btnstart = document.querySelector('.btn--start');
const btngohub = document.querySelector('.btn--gotohub');
const btnendgame = document.querySelector('.btn--endgame');
const btnvalidate = document.querySelector('.btn--validate')
const btncreateroom = document.querySelector('.btnmenu--crearoom');
const titlereponse = document.querySelector('.title--reponse');
const sectiongame = document.querySelector('.game');
const loading = document.querySelector('.loading--screen');
const logogame = document.querySelector('.logo--game');
const btnsubmit = document.querySelector('.btn--submit');
const btnchangepage = document.querySelectorAll('.btn--changepage')
const inputchangepage = document.querySelectorAll('.input--changepage')
const inputusername = document.querySelector('.inputusername');
const seedgived = document.querySelector('.seedgived');

const bloctuto = document.querySelector('.bloctuto');
const bloctutodepixel = document.querySelector('.bloctuto--depixel')
const bloctutodeflou = document.querySelector('.bloctuto--deflou')
const bloctutodezoom = document.querySelector('.bloctuto--dezoom')
const bloctutopuzzle = document.querySelector('.bloctuto--puzzle')
const bloctutosynopsis = document.querySelector('.bloctuto--synopsis')
const btnclosetuto = document.querySelector('.close--button');
const gotodepixel = document.querySelectorAll('.gotodepixel');
const gotodezoom = document.querySelectorAll('.gotodezoom');
const gotodeflou = document.querySelectorAll('.gotodeflou');
const gotosynopsis = document.querySelectorAll('.gotosynopsis');
const gotopuzzle = document.querySelectorAll('.gotopuzzle');

const scoreactu = document.querySelector('.scoring');
const bestscore = document.querySelector('.bestscore');
const newscore = document.querySelector('.newscore');

const btnmovies = document.querySelector('.cinema');
const btnvideogame = document.querySelector('.videogame');
const btnserie = document.querySelector('.serie');
const btncartoon = document.querySelector('.cartoon');
const btnmusic = document.querySelector('.music');

const fondanimated = document.querySelectorAll('.fond');

const plusdepixel = document.querySelector('.plus--depixel');
const plusdezoom = document.querySelector('.plus--dezoom');
const plusdeflou = document.querySelector('.plus--deflou');
const plussynopsis = document.querySelector('.plus--synopsis');
const pluspuzzle = document.querySelector('.plus--puzzle');
const plustimequest = document.querySelector('.plus--timequest');
const plusplayermax = document.querySelector('.plus--playermax');
const moinsdepixel = document.querySelector('.moins--depixel');
const moinsdezoom = document.querySelector('.moins--dezoom');
const moinsdeflou = document.querySelector('.moins--deflou');
const moinssynopsis = document.querySelector('.moins--synopsis');
const moinspuzzle = document.querySelector('.moins--puzzle');
const moinstimequest = document.querySelector('.moins--timequest');
const moinsplayermax = document.querySelector('.moins--playermax');
const valuedepixel = document.querySelector('.value--depixel')
const valuedezoom = document.querySelector('.value--dezoom')
const valuedeflou = document.querySelector('.value--deflou')
const valuesynopsis = document.querySelector('.value--synopsis')
const valuetimequest = document.querySelector('.value--timequest')
const valuepuzzle = document.querySelector('.value--puzzle')
const valueplayermax = document.querySelector('.value--playermax')

const resumeconfig = document.querySelector('.resumeconfig')
const listplayer = document.querySelector('.list--playerinhub')

const socket = io();

fondanimated.forEach((element) =>{
		element.addEventListener('animationstart', function (e) {
			var leftaleatoire = getRandomIntInclusive(-2,102);
			var taillealeatoire = getRandomIntInclusive(50,100);
			var animationdelayrandom = getRandomIntInclusive(1,4);
			var animationdurationrandom = getRandomIntInclusive(9,20);
			var toprandom = getRandomIntInclusive(-300,-100);
			this.style.left = leftaleatoire + "%";
			this.style.width = taillealeatoire + "px";
			this.style.height = taillealeatoire + "px";
			this.style.top = toprandom + "px";
			this.style.animationDuration = animationdurationrandom + "s";
		})
		element.addEventListener('animationiteration', function (e) {
			var leftaleatoire = getRandomIntInclusive(-2,102);
			var taillealeatoire = getRandomIntInclusive(30,100);
			var animationdelayrandom = getRandomIntInclusive(0,3);
			var animationdurationrandom = getRandomIntInclusive(9,20);
			var toprandom = getRandomIntInclusive(-30,-10);
			this.style.left = leftaleatoire + "%";
			this.style.width = taillealeatoire + "px";
			this.style.height = taillealeatoire + "px";	
			this.style.top = toprandom + "vh";
		})
});

btnchangepage.forEach((element) =>{
	element.addEventListener('click', (e)=>{
		e.preventDefault();	
		let target = e.currentTarget;
		let href = target.getAttribute('button-datapage');
		document.body.setAttribute('data-page', href);
	});
});
const joinroom = document.querySelector('.inputjoinroom')
console.log(joinroom)
joinroom.addEventListener('submit', (e) =>{
	e.preventDefault();
	var seedjoin = joinroom.querySelector('input').value;
	
	io.emit('join', {
		room: seedjoin,
		username: username,
		isynopsis: isynopsis,
		idepixel: idepixel,
		idezoom: idezoom,
		ideflou: ideflou,
		iplayermax: iplayermax,
		ipuzzle: ipuzzle,
		themeselected: themeselected
	})
	seedgived.innerHTML = seedjoin;
	if (themeselected == "Série") {
		linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=7p_zbRrTUi1BzIeAjX6L_afKT-aSQZ8lou-kJMrb_DaeoH2ZbQqe3t-A4bKj9AjgzDSdH3AOZhveUIEAgDlxpPKvYBSVhL01m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnP0FDJ_l4ZKxc_xfvNEQh0YO0kh9TVfZ79cdJMHU7PkXhUButVes2czfr1pf8JfI5Qa-DN7YY6pVwVxDDOx_VMTaGK8PLNglWA&lib=Mcth60PzP2EfmwpYTtijoQK4xoe6LOMGV"
	}else if(themeselected == "Dessin animé") {
	 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=s6v_XlDbPgHeKZRhkRBxdSantV8NRwV2tvVkZCE4P-csUb3jfC_buiyyWi4lnuIbxaJah5FlVxpu-MPhcK1vJ_E6IFa39ksdm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPQy33eNFxBFGr6KdyW3qksC7NTTKNHP2S1TFieuAjlgHEkQcoRj8zkNFbvEzvpuvnog0Z_WHcaNntgcd9-eZ1axNselvvI8PNz9Jw9Md8uu&lib=MxEc_3ovBEyY4IZz106efYNM690tC-BkT"
	}else if (themeselected == "Cinéma") {
	 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=iN2sVJj4SCv5odGJxKuujqpHMhBAZni64I4Jod06UJLe95KFA72ojGMZOmfvZ92jvOof3vBSjMOQm-anrfXiIzagJOpUhG63m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBBjQvLoURy2FeXxQaUZZf6cYMw8i1jsUhHPLxFQqy0PwqSwjrsr6szktiHHZWIt0ydctcFylGEJdN3BvYySShbkFJwAcjrTAQ&lib=MVDYzNhRc2ze44gkDigRNK64xoe6LOMGV"
	}else if (themeselected == "Jeux vidéo") {
		linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=vITWUrXCyJAEuVYmf7Luc3K3_Z336wqN6ofW-T2dVF10vw5qNizBJMtkDxPMzYDkcxN82L5wWWYHlWrNELBxWqLMqrO8YzlHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFBl63P1vm3horSc4WfMkuFJOV4woMKJVR_wrupg7ZXsS-BHvV9WlVNkDKNFLUEEI4Kmq4mO0UglG5EV6PycZHrTTUktBir6Xg&lib=MO-HHGZ25JbJiRIzHgPtiGa4xoe6LOMGV"
	}else if (themeselected == "Musique") {
	 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=QuJTxr5grXFe4-7ez5gu0Y01STA6HYkV1djF8J0cvKu8S73rLqaOgy8lJiih0cfWh_H3yWwiCvSX-KrkjGggzF4e7zuumAIqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLDo3uqY3UurdPDkBP3lCqbB_0nElrvZBx7ppnrKYbAh5GumHkmm722cN6nKS1UpKFI6ql7dtjN11zlSfBw_thltAuSPcz6-Hw&lib=MfZSBi_-V-K-jYri8XihtD64xoe6LOMGV"
	}
	console.log(themeselected)
	resumeconfig.innerHTML = `
			<h2>${themeselected}</h2>
				<ul class="list list--resumeconfig">
                    <li>
                        <p>Dépixelisation</p><p>${idepixel}</p>
                    </li>
                    <li>
                        <p>Dézoom</p><p>${idezoom}</p>
                    </li>
                    <li>
                        <p>Défloutage</p><p>${ideflou}</p>
                    </li>
                    <li>
                        <p>Synopsis</p><p>${isynopsis}</p>
                    </li>
                    <li>
                        <p>Puzzle</p><p>${ipuzzle}</p>
                    </li>
                    <li>
                        <p>Temps/questions</p><p>${itimequest}<span class="miniature">s</span></p>
                    </li>
                    <li>
                        <p>Joueur max</p><p>${iplayermax}</p>
                    </li>
                </ul> 
            `;
    listplayer.innerHTML += `
    	<li>${users.username}</li>
    `;

})
var username = "";
console.log(inputchangepage)
inputchangepage.forEach((element) =>{
	element.addEventListener("submit", (e)=>{
		e.preventDefault();	
		let target = e.currentTarget;
		let href = target.getAttribute('input-datapage');
		console.log(href)
		document.body.setAttribute('data-page', href);
		if(href == "menu"){
			username = inputusername.value;	
			console.log(username)
		}
		if(href == 'hub'){

		}
	});
});
if(gotodepixel != undefined){
	gotodepixel.forEach((element) =>{
		element.addEventListener('click', (e) =>{
			for(let i = 0; i < blocsexemple.length; i++){
				blocsexemple[i].classList.remove('bloc--transparent');
				tabblocexemple = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			}
			bloctutosynopsis.classList.add('hidden')
			bloctutopuzzle.classList.add('hidden')
			bloctutodezoom.classList.add('hidden')
			bloctutodeflou.classList.add('hidden')
			bloctutodepixel.classList.remove('hidden')
			timeforpuzzlegameexemple = 0;
			
		})
	})
	gotodeflou.forEach((element) =>{
		element.addEventListener('click', (e) =>{
			bloctutosynopsis.classList.add('hidden')
			bloctutopuzzle.classList.add('hidden')
			bloctutodezoom.classList.add('hidden')
			bloctutodeflou.classList.remove('hidden')
			bloctutodepixel.classList.add('hidden')
		})
	})
	gotodezoom.forEach((element) =>{
		element.addEventListener('click', (e) =>{
			bloctutosynopsis.classList.add('hidden')
			bloctutopuzzle.classList.add('hidden')
			bloctutodezoom.classList.remove('hidden')
			bloctutodeflou.classList.add('hidden')
			bloctutodepixel.classList.add('hidden')
		})
	})
	var tabblocexemple = [];
	const blocsexemple = document.querySelectorAll('.bloc--exemple');
	var timeforpuzzlegameexemple = 0;
	gotopuzzle.forEach((element) =>{
		element.addEventListener('click', (e) =>{
			timeforpuzzlegameexemple = 20000;
			bloctutosynopsis.classList.add('hidden')
			bloctutopuzzle.classList.remove('hidden')
			bloctutodezoom.classList.add('hidden')
			bloctutodeflou.classList.add('hidden')
			bloctutodepixel.classList.add('hidden')
			tabblocexemple = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
			let i = 0;
			puzzlegameexemple();
			function puzzlegameexemple() {        
			  setTimeout(function() {   
			  	var bloctofindexemple = tabblocexemple[getRandomIntInclusive(0, tabblocexemple.length-1)];
				var bloctodeleteexemple = tabblocexemple.indexOf(bloctofindexemple);
				blocsexemple[bloctofindexemple].classList.add('bloc--transparent');
				tabblocexemple.splice(bloctodeleteexemple, 1);
				i++;                   
			    if (i < 25) {        
			      puzzlegameexemple();            
			    }                     
			  }, timeforpuzzlegameexemple / 25)
			}
		})
	})

	gotosynopsis.forEach((element) =>{
		element.addEventListener('click', (e) =>{
			for(let i = 0; i < blocsexemple.length; i++){
				blocsexemple[i].classList.remove('bloc--transparent');
				tabblocexemple = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			}
			bloctutosynopsis.classList.remove('hidden')
			bloctutopuzzle.classList.add('hidden')
			bloctutodezoom.classList.add('hidden')
			bloctutodeflou.classList.add('hidden')
			bloctutodepixel.classList.add('hidden')
			timeforpuzzlegameexemple = 0;
			
		})
	})
}

btnclosetuto.addEventListener('click', (e) =>{
	bloctutodeflou.classList.add('hidden');
})

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

var tabreponsetofind = [];
var tabreponseurl = [];
var tabtextok1 = [];
var tabtextok2 = [];
var tabtextok3 = [];
var tabtextok4 = [];
var tabdescription = [];
var reponsetofind = "";
var reponseurl = "";
var textok1 = "";
var textok2 = "";
var textok3 = "";
var textok4 = "";
var description = "";
var imageslink = "imagesgames/";
var themeselected = "Jeux vidéo";

if(btnvideogame != undefined){
	btnvideogame.addEventListener('click', (e) =>{
		btnvideogame.classList.add('selected');
		btnmovies.classList.remove('selected');
		btnserie.classList.remove('selected');
		btnmusic.classList.remove('selected');
		btncartoon.classList.remove('selected');
		themeselected = "Jeux vidéo";
		valuesynopsis.innerHTML = 2;
		imageslink = "imagesgames/";
		isynopsis = 2;
		plussynopsis.classList.remove("hidden")
		moinssynopsis.classList.remove('hidden')
	})
}
if(btnmovies != undefined){
	btnmovies.addEventListener('click', (e) =>{
		btnvideogame.classList.remove('selected');
		btnmovies.classList.add('selected');
		btnserie.classList.remove('selected');
		btnmusic.classList.remove('selected');
		btncartoon.classList.remove('selected');
		themeselected = "Cinéma";
		imageslink = "imagesmovie/";
		valuesynopsis.innerHTML = 2;
		isynopsis = 2;
		plussynopsis.classList.remove("hidden")
		moinssynopsis.classList.remove('hidden')
	})
}
if(btnserie != undefined){
	btnserie.addEventListener('click', (e) =>{
		btnvideogame.classList.remove('selected');
		btnmovies.classList.remove('selected');
		btnserie.classList.add('selected');
		btnmusic.classList.remove('selected');
		btncartoon.classList.remove('selected');
		themeselected = "Série";
		imageslink = "imagesserie/";
		valuesynopsis.innerHTML = 0;
		isynopsis = 0;
		plussynopsis.classList.add("hidden")
		moinssynopsis.classList.add('hidden')
	})
}
if(btnmusic != undefined){
	btnmusic.addEventListener('click', (e) =>{
		btnvideogame.classList.remove('selected');
		btnmovies.classList.remove('selected');
		btnserie.classList.remove('selected');
		btnmusic.classList.add('selected');
		btncartoon.classList.remove('selected');
		themeselected = "Musique";
		imageslink = "imagesmusic/";
		valuesynopsis.innerHTML = 0;
		isynopsis = 0;
		plussynopsis.classList.add("hidden")
		moinssynopsis.classList.add('hidden')
	})
}
if(btncartoon != undefined){
	btncartoon.addEventListener('click', (e) =>{
		btnvideogame.classList.remove('selected');
		btnmovies.classList.remove('selected');
		btnserie.classList.remove('selected');
		btnmusic.classList.remove('selected');
		btncartoon.classList.add('selected');
		themeselected = "Dessin animé";
		imageslink = "imagescartoon/";
		valuesynopsis.innerHTML = 0;
		isynopsis = 0;
		plussynopsis.classList.add("hidden")
		moinssynopsis.classList.add('hidden')
	})
}
var gametoplay = "";
var logolink = "";
var titlegame = "";
var linkofthefetch = "";
var tabgametoplay = [];
var comptgame = 1;
var comptgamefin = "";
const compteurgame = document.querySelector('.compteur--game');

if(btnstart != undefined){
	btnstart.addEventListener('click', (e) =>{
		for(let i = 0; ideflou > i; i++){
			tabgametoplay.push('deflou');
		}
		for(let i = 0; ipuzzle > i; i++){
			tabgametoplay.push('puzzle');
		}
		for(let i = 0; idezoom > i; i++){
			tabgametoplay.push('dezoom');
		}
		for(let i = 0; isynopsis > i; i++){
			tabgametoplay.push('synopsis');
		}
		for(let i = 0; idepixel > i; i++){
			tabgametoplay.push('depixel');
		}
		if(tabgametoplay.length == 0){
			valuesynopsis.classList.add('error');
			valuedepixel.classList.add('error');
			valuedezoom.classList.add('error');
			valuepuzzle.classList.add('error');
			valuedeflou.classList.add('error');
		}else{
			comptgame = 1;
			score = 0;
			e.preventDefault();	
			loading.classList.remove('hidden')
			comptgamefin = tabgametoplay.length;
			compteurgame.innerHTML =  "<b>" + comptgame + "</b>&nbsp;/&nbsp;" + comptgamefin;
			let target = e.currentTarget;
			let href = target.getAttribute('button-datapage');
			document.body.setAttribute('data-page', href);

		
			if (themeselected == "Série") {
				linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=7p_zbRrTUi1BzIeAjX6L_afKT-aSQZ8lou-kJMrb_DaeoH2ZbQqe3t-A4bKj9AjgzDSdH3AOZhveUIEAgDlxpPKvYBSVhL01m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnP0FDJ_l4ZKxc_xfvNEQh0YO0kh9TVfZ79cdJMHU7PkXhUButVes2czfr1pf8JfI5Qa-DN7YY6pVwVxDDOx_VMTaGK8PLNglWA&lib=Mcth60PzP2EfmwpYTtijoQK4xoe6LOMGV"
				logolink = "serie";
				titlegame = 'Quelle est cette<br> <span class="coloryellow">série</span>&nbsp;?';
			}else if(themeselected == "Dessin animé") {
			 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=dSxx7DvnX8iRkcvn3lP0EPuO7xlPFBkkytdywa_I6C95IuEzCrpEFD648Z-cCUVWhyzTpO_7PnJHZxM5EOL31yPagmRyDJB4m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnO0PPbu7MqTRhg3sXmuVV10nPBOOhAvk4B1KGI33IEHEWeG8EshxEH7YJ1NV1-Ct5ti6wVu-VOCQa99wgNZnk0VYBPS7vCI3PNz9Jw9Md8uu&lib=MxEc_3ovBEyY4IZz106efYNM690tC-BkT"
				logolink = "anime";
				titlegame = 'Quel est ce<br>  <span class="coloryellow">dessin-animé</span>&nbsp;?';
			}else if (themeselected == "Cinéma") {
			 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=iN2sVJj4SCv5odGJxKuujqpHMhBAZni64I4Jod06UJLe95KFA72ojGMZOmfvZ92jvOof3vBSjMOQm-anrfXiIzagJOpUhG63m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBBjQvLoURy2FeXxQaUZZf6cYMw8i1jsUhHPLxFQqy0PwqSwjrsr6szktiHHZWIt0ydctcFylGEJdN3BvYySShbkFJwAcjrTAQ&lib=MVDYzNhRc2ze44gkDigRNK64xoe6LOMGV"
				logolink = "movie";
				titlegame = 'Quel est ce<br>  <span class="coloryellow">film</span>&nbsp;?';
			}else if (themeselected == "Jeux vidéo") {
				linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=vITWUrXCyJAEuVYmf7Luc3K3_Z336wqN6ofW-T2dVF10vw5qNizBJMtkDxPMzYDkcxN82L5wWWYHlWrNELBxWqLMqrO8YzlHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFBl63P1vm3horSc4WfMkuFJOV4woMKJVR_wrupg7ZXsS-BHvV9WlVNkDKNFLUEEI4Kmq4mO0UglG5EV6PycZHrTTUktBir6Xg&lib=MO-HHGZ25JbJiRIzHgPtiGa4xoe6LOMGV"
				logolink = "videogame";
				titlegame = 'Quel est ce<br>  <span class="coloryellow">jeux-vidéo</span>&nbsp;?';
			}else if (themeselected == "Musique") {
			 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=4zjrciRuaEKozrpkq8HMY7Ltw1JvdJwBNNvjlm3haGluRg8sBkN9tfWRo8Owp9gNGmG7BWzqd52hHMYMIvXge1E8k9ie0SGqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLUffVe0FhlYyiHBCrVyjl4lySQnxLczbADA-ra6eRcDuH_YEtQvKgSPI7kS0YnDxBiBVCoMWjhMdBMzSHiFZRlbk_DO2hK7Fw&lib=MfZSBi_-V-K-jYri8XihtD64xoe6LOMGV"
				logolink = "music";
				titlegame = 'Quelle est cette<br>  <span class="coloryellow">musique</span>&nbsp;?';
			}
			valuesynopsis.classList.remove('error');
			valuedepixel.classList.remove('error');
			valuedezoom.classList.remove('error');
			valuepuzzle.classList.remove('error');
			valuedeflou.classList.remove('error');
		fetch(linkofthefetch)
		    .then(response => response.json() )
		    .then(data => {
		    	scoreactu.innerHTML = 'Score&nbsp;: <span class="coloryellow">' + score + '</span>';
		    	data = data.user; 	
				loading.classList.add('hidden')
				startTimer()
		    	gamearea.classList.remove('hidden')
				gamearea.classList.add('animated');
				//buzzer.classList.remove('hidden')
				var randomnum = getRandomIntInclusive(0, 100);
				var randomnum2 = getRandomIntInclusive(0, 100);
				var randominthetab = getRandomIntInclusive(0, data.length);
				for(var i = 0; i < data.length; i++){
					tabreponsetofind.push(data[i].title);
					tabreponseurl.push(data[i].url);
					tabtextok1.push(data[i].textok1);
					tabtextok2.push(data[i].textok2);
					tabtextok3.push(data[i].textok3);
					tabtextok4.push(data[i].textok4);
					tabdescription.push(data[i].description);
				}

				reponsetofind = tabreponsetofind[randominthetab];
				reponseurl = tabreponseurl[randominthetab];
				textok1 = tabtextok1[randominthetab];
				textok2 = tabtextok2[randominthetab];
				textok3 = tabtextok3[randominthetab];
				textok4 = tabtextok4[randominthetab];
				description = tabdescription[randominthetab];

				logogame.style.backgroundImage ="url(assets/images/"+ logolink + "yellow.svg)"
				titlereponse.innerHTML = titlegame;

				gametoplay = tabgametoplay[getRandomIntInclusive(0, tabgametoplay.length-1)]
				if(gametoplay == "deflou"){
					deflougame();
				}else if(gametoplay == "synopsis"){
					synopsisgame();
				}else if(gametoplay == "dezoom"){
					dezoomgame();
				}else if(gametoplay == "puzzle"){
					puzzlegame();
				}else if(gametoplay == "depixel"){
					depixelgame();
				}
			})
		}	
	})
}
btncreateroom.addEventListener('click', (e) =>{
	var idseed = generateid();
	seedgived.innerHTML = idseed;
	socket.emit('create', {
		room:idseed, 
		username:username,
		isynopsis: isynopsis,
		idepixel: idepixel,
		idezoom: idezoom,
		ideflou: ideflou,
		iplayermax: iplayermax,
		ipuzzle: ipuzzle,
		themeselected: themeselected
	});

	console.log(idseed)
})



//Config
var idepixel = 0;
var idezoom = 2;
var ideflou = 2;
var isynopsis = 2;
var ipuzzle = 2;
var iplayermax = 5;
var itimequest = 30;
var idepixel = 2;
var idezoom = 2;
var ideflou = 2;
var isynopsis = 2;
var ipuzzle = 2;
var itimequest = 30;
if(plusdepixel != undefined){
	plusdepixel.addEventListener('click', (e) =>{
		if(idepixel < 5){
			idepixel++;
			valuedepixel.innerHTML = idepixel;
			valuedepixel.classList.remove('error');
		}
	})
	moinsdepixel.addEventListener('click', (e) =>{
		if(idepixel > 0){
			idepixel--;
			valuedepixel.innerHTML = idepixel;
		}
	})
	plusdezoom.addEventListener('click', (e) =>{
		if(idezoom < 5){
			idezoom++;
			valuedezoom.innerHTML = idezoom;
			valuedezoom.classList.remove('error');
		}
	})
	moinsdezoom.addEventListener('click', (e) =>{
		if(idezoom > 0){
			idezoom--;
			valuedezoom.innerHTML = idezoom;
		}
	})
	plusdeflou.addEventListener('click', (e) =>{
		if(ideflou < 5){
			ideflou++;
			valuedeflou.innerHTML = ideflou;
			valuedeflou.classList.remove('error');
		}
	})
	moinsdeflou.addEventListener('click', (e) =>{
		if(ideflou > 0){
			ideflou--;
			valuedeflou.innerHTML = ideflou;
		}
	})
	plussynopsis.addEventListener('click', (e) =>{
		if(isynopsis < 5){
			isynopsis++;
			valuesynopsis.innerHTML = isynopsis;
			valuesynopsis.classList.remove('error');
		}
	})
	moinssynopsis.addEventListener('click', (e) =>{
		if(isynopsis > 0){
			isynopsis--;
			valuesynopsis.innerHTML = isynopsis;
		}
	})
	pluspuzzle.addEventListener('click', (e) =>{
		if(ipuzzle < 5){
			ipuzzle++;
			valuepuzzle.innerHTML = ipuzzle;
			valuepuzzle.classList.remove('error');
		}
	})
	moinspuzzle.addEventListener('click', (e) =>{
		if(ipuzzle > 0){
			ipuzzle--;
			valuepuzzle.innerHTML = ipuzzle;
		}
	})
	plustimequest.addEventListener('click', (e) =>{
		if(itimequest < 60){
			itimequest = itimequest + 5;
			valuetimequest.innerHTML = itimequest + '<span class="miniature">s</span>';
		}
	})
	moinstimequest.addEventListener('click', (e) =>{
		if(itimequest > 10){
			itimequest = itimequest - 5;
			valuetimequest.innerHTML = itimequest + '<span class="miniature">s</span>';
		}
	})
}
console.log(themeselected)
var linkofthefetch = "";
btngohub.addEventListener('click', (e) =>{

	if (themeselected == "Série") {
		linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=7p_zbRrTUi1BzIeAjX6L_afKT-aSQZ8lou-kJMrb_DaeoH2ZbQqe3t-A4bKj9AjgzDSdH3AOZhveUIEAgDlxpPKvYBSVhL01m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnP0FDJ_l4ZKxc_xfvNEQh0YO0kh9TVfZ79cdJMHU7PkXhUButVes2czfr1pf8JfI5Qa-DN7YY6pVwVxDDOx_VMTaGK8PLNglWA&lib=Mcth60PzP2EfmwpYTtijoQK4xoe6LOMGV"
	}else if(themeselected == "Dessin animé") {
	 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=s6v_XlDbPgHeKZRhkRBxdSantV8NRwV2tvVkZCE4P-csUb3jfC_buiyyWi4lnuIbxaJah5FlVxpu-MPhcK1vJ_E6IFa39ksdm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPQy33eNFxBFGr6KdyW3qksC7NTTKNHP2S1TFieuAjlgHEkQcoRj8zkNFbvEzvpuvnog0Z_WHcaNntgcd9-eZ1axNselvvI8PNz9Jw9Md8uu&lib=MxEc_3ovBEyY4IZz106efYNM690tC-BkT"
	}else if (themeselected == "Cinéma") {
	 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=iN2sVJj4SCv5odGJxKuujqpHMhBAZni64I4Jod06UJLe95KFA72ojGMZOmfvZ92jvOof3vBSjMOQm-anrfXiIzagJOpUhG63m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBBjQvLoURy2FeXxQaUZZf6cYMw8i1jsUhHPLxFQqy0PwqSwjrsr6szktiHHZWIt0ydctcFylGEJdN3BvYySShbkFJwAcjrTAQ&lib=MVDYzNhRc2ze44gkDigRNK64xoe6LOMGV"
	}else if (themeselected == "Jeux vidéo") {
		linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=vITWUrXCyJAEuVYmf7Luc3K3_Z336wqN6ofW-T2dVF10vw5qNizBJMtkDxPMzYDkcxN82L5wWWYHlWrNELBxWqLMqrO8YzlHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFBl63P1vm3horSc4WfMkuFJOV4woMKJVR_wrupg7ZXsS-BHvV9WlVNkDKNFLUEEI4Kmq4mO0UglG5EV6PycZHrTTUktBir6Xg&lib=MO-HHGZ25JbJiRIzHgPtiGa4xoe6LOMGV"
	}else if (themeselected == "Musique") {
	 	linkofthefetch = "https://script.googleusercontent.com/macros/echo?user_content_key=QuJTxr5grXFe4-7ez5gu0Y01STA6HYkV1djF8J0cvKu8S73rLqaOgy8lJiih0cfWh_H3yWwiCvSX-KrkjGggzF4e7zuumAIqm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLDo3uqY3UurdPDkBP3lCqbB_0nElrvZBx7ppnrKYbAh5GumHkmm722cN6nKS1UpKFI6ql7dtjN11zlSfBw_thltAuSPcz6-Hw&lib=MfZSBi_-V-K-jYri8XihtD64xoe6LOMGV"
	}
	console.log(themeselected)
	resumeconfig.innerHTML = `
			<h2>${themeselected}</h2>
				<ul class="list list--resumeconfig">
                    <li>
                        <p>Dépixelisation</p><p>${idepixel}</p>
                    </li>
                    <li>
                        <p>Dézoom</p><p>${idezoom}</p>
                    </li>
                    <li>
                        <p>Défloutage</p><p>${ideflou}</p>
                    </li>
                    <li>
                        <p>Synopsis</p><p>${isynopsis}</p>
                    </li>
                    <li>
                        <p>Puzzle</p><p>${ipuzzle}</p>
                    </li>
                    <li>
                        <p>Temps/questions</p><p>${itimequest}<span class="miniature">s</span></p>
                    </li>
                    <li>
                        <p>Joueur max</p><p>${iplayermax}</p>
                    </li>
                </ul> 
            `;
    listplayer.innerHTML += `
    	<li>${username}</li>
    `;
})
var scoretoadd = "";
var score = 0;
var timeforpuzzlegame = "";
var titleforgame = "";
if(btnvalidate != undefined){
	btnvalidate.addEventListener("click",(e)=>{
		e.preventDefault();
		var valueinput = inputreponse.value;
		valueinput = valueinput.toLowerCase();
		if(valueinput == textok1 || valueinput == textok2 || valueinput == textok3 || valueinput == textok4){
			comptpixel = 1;
			scoretoadd = 100 - (100 / itimequest * (itimequest - timerTime));
			score = score + Math.round(scoretoadd);
			scoreactu.innerHTML = 'Score&nbsp;: <span class="coloryellow">' + score + '</span>';
			stopTimer();
			timeforpuzzlegame = 0;
			tabbloc = [];
			titleforgame = reponsetofind;
			btnvalidate.classList.add('hidden');
			titlereponse.classList.remove('hidden');
			titlereponse.innerHTML = titleforgame;
			btnnext.classList.remove('hidden');
			//buzzer.classList.add('hidden');
			gamearea.classList.remove('animated');
			gameareaflou.classList.remove('animated');
			gamearea.style.backgroundPosition = "center";
			gamearea.style.backgroundSize = "100% 100%";
			gameareaflou.classList.remove('animated--flou')
			for(let i = 0; i < blocs.length; i++){
				blocs[i].classList.remove('bloc--transparent');
				blocs[i].classList.add('hidden');	
				tabbloc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			}
			

			var reponsetodelete = tabreponsetofind.indexOf(reponsetofind);
			tabreponsetofind.splice(reponsetodelete, 1);
			var urltodelete = tabreponseurl.indexOf(reponseurl);
			tabreponseurl.splice(urltodelete, 1);
			var descriptiontodelete = tabdescription.indexOf(description);
			tabdescription.splice(descriptiontodelete, 1);
			var textok1todelete = tabtextok1.indexOf(textok1);
			tabtextok1.splice(textok1todelete, 1);
			var textok2todelete = tabtextok2.indexOf(textok2);
			tabtextok2.splice(textok2todelete, 1);
			var textok3todelete = tabtextok3.indexOf(textok3);
			tabtextok3.splice(textok3todelete, 1);
			var textok4todelete = tabtextok4.indexOf(textok4);
			tabtextok4.splice(textok4todelete, 1);

			
			inputreponse.classList.add('hidden');

		}else{
			//gamearea.classList.remove('paused');
			//gameareaflou.classList.remove('paused');
			//buzzer.classList.remove('hidden');	
		}
		//inputreponse.classList.add('hidden');
		inputreponse.value = "";
	});
};
if(input != undefined){
	input.addEventListener("submit",(e)=>{
		e.preventDefault();
		var valueinput = inputreponse.value;
		valueinput = valueinput.replace(/é/g, 'e');
		valueinput = valueinput.replace(/è/g, 'e');
		valueinput = valueinput.toLowerCase();
		console.log(timerTime)
		if(valueinput == textok1 || valueinput == textok2 || valueinput == textok3 || valueinput == textok4){
			comptpixel = 1;
			scoretoadd = 100 - (100 / itimequest * (itimequest - timerTime));
			score = score + Math.round(scoretoadd);
			scoreactu.innerHTML = 'Score<br><span class="coloryellow">' + score + '</span>';
			stopTimer();
			timeforpuzzlegame = 0;
			tabbloc = [];
			for(let i = 0; i < blocs.length; i++){
				blocs[i].classList.remove('bloc--transparent');
				blocs[i].classList.add('hidden');	
				tabbloc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
			}
			titleforgame = reponsetofind;
			titlereponse.classList.remove('hidden');
			titlereponse.innerHTML = titleforgame;
			btnnext.classList.remove('hidden');
			btnvalidate.classList.add('hidden');
			//buzzer.classList.add('hidden');
			gamearea.classList.remove('animated');
			gameareaflou.classList.remove('animated');
			gamearea.style.backgroundPosition = "center";
			gamearea.style.backgroundSize = "100% 100%";
			gameareaflou.classList.remove('animated--flou')
			//scoretoadd = 100 - timerless;
			//score = score + scoretoadd;

			inputreponse.classList.add('hidden');

		}else{
			//gamearea.classList.remove('paused');
			//gameareaflou.classList.remove('paused');
			//buzzer.classList.remove('hidden');	
		}
		//inputreponse.classList.add('hidden');
		inputreponse.value = "";
	});
};
var i = 0;
var tabpreviousreponse = [];
var highscore = localStorage.getItem('highscore');
if(btnnext != undefined){
	btnnext.addEventListener('click', (e) =>{
		e.preventDefault();	
		resetTimer();
		comptgame++;
		comptpixel = 50;
		compteurgame.innerHTML = "<b>" + comptgame + "</b>&nbsp;/&nbsp;" + comptgamefin;
		titlereponse.innerHTML = titlegame;
		btnvalidate.classList.remove('hidden');
		var gametoplaytodelete = tabgametoplay.indexOf(gametoplay);
		tabgametoplay.splice(gametoplaytodelete,1)
		timeforpuzzlegame = 0;
		tabbloc = [];
		
		var reponsetodelete = tabreponsetofind.indexOf(reponsetofind);
		tabreponsetofind.splice(reponsetodelete, 1);
		var urltodelete = tabreponseurl.indexOf(reponseurl);
		tabreponseurl.splice(urltodelete, 1);
		var descriptiontodelete = tabdescription.indexOf(description);
		tabdescription.splice(descriptiontodelete, 1);
		var textok1todelete = tabtextok1.indexOf(textok1);
		tabtextok1.splice(textok1todelete, 1);
		var textok2todelete = tabtextok2.indexOf(textok2);
		tabtextok2.splice(textok2todelete, 1);
		var textok3todelete = tabtextok3.indexOf(textok3);
		tabtextok3.splice(textok3todelete, 1);
		var textok4todelete = tabtextok4.indexOf(textok4);
		tabtextok4.splice(textok4todelete, 1);
		if(tabgametoplay.length == 0){
			let target = e.currentTarget;
			let href = target.getAttribute('data--btnpage');
			document.body.setAttribute('data-page', href);
			if(score > highscore){
				localStorage.setItem('highscore', score);
				highscore = localStorage.getItem('highscore')
				bestscore.innerHTML = '<span class="coloryellow">NEW</span><br>High Score<br><span class="coloryellow">' + highscore + '</span>';
			}else{
				highscore = localStorage.getItem('highscore')
				bestscore.innerHTML = 'High Score<br><span class="coloryellow">' + highscore + '</span>';
			}
			
			newscore.innerHTML = 'Score<br><span class="coloryellow">' + score + '</span>';
		}
			for(let i = 0; i < blocs.length; i++){
				blocs[i].classList.remove('bloc--transparent');	
			}
			inputreponse.classList.remove('hidden');
			var randomnum = getRandomIntInclusive(0, 100);
			var randomnum2 = getRandomIntInclusive(0, 100);
			var randominthetab = getRandomIntInclusive(0, tabreponsetofind.length-1);
			reponsetofind = tabreponsetofind[randominthetab];
			reponseurl = tabreponseurl[randominthetab];
			textok1 = tabtextok1[randominthetab];
			textok2 = tabtextok2[randominthetab];
			textok3 = tabtextok3[randominthetab];
			textok4 = tabtextok4[randominthetab];
			description = tabdescription[randominthetab];
			
			gametoplay = tabgametoplay[getRandomIntInclusive(0, tabgametoplay.length-1)]
			if(gametoplay == "deflou"){
				deflougame();
			}else if(gametoplay == "synopsis"){
				synopsisgame();
			}else if(gametoplay == "dezoom"){
				dezoomgame();
			}else if(gametoplay == "puzzle"){
				puzzlegame();
			}else if(gametoplay == "depixel"){
				depixelgame();
			}
			
			//buzzer.classList.remove('hidden');
			btnnext.classList.add('hidden');
			i++;
	});
}
if(btnendgame != undefined){
	btnendgame.addEventListener('click', (e) =>{
		let target = e.currentTarget;
		let href = target.getAttribute('data--btnpage');
		document.body.setAttribute('data-page', href);
		score = 0;
	})
}

//generate private link

var tabgenerator = ["a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z",0,1,2,3,4,5,6,7,8,9];
function generateid(){
	return tabgenerator[getRandomIntInclusive(0,61)] + tabgenerator[getRandomIntInclusive(0,61)] + tabgenerator[getRandomIntInclusive(0,61)] +tabgenerator[getRandomIntInclusive(0,61)] + tabgenerator[getRandomIntInclusive(0,61)] + tabgenerator[getRandomIntInclusive(0,61)];
}
socket.on('users', (data) =>{
	console.log(data)
})
function dezoomgame(){
	var randomnum = getRandomIntInclusive(0, 80);
	var randomnum2 = getRandomIntInclusive(0, 80);
	gameareapuzzle.classList.add('hidden');
	synopsisgamearea.classList.add('hidden');
	gameareaflou.classList.add('hidden');
	gameaeredepixel.classList.add('hidden');
	gameareaflou.style.backgroundImage = "";
	gameareapuzzle.style.backgroundImage = "";
	gamearea.style.backgroundImage = "url(assets/"+ imageslink + reponseurl + ".jpg)";
	gamearea.style.backgroundPosition = randomnum + "% " + randomnum2 + "%";
	gamearea.classList.add('animated');
	gamearea.style.animationDuration = itimequest + "s";
	gamearea.classList.remove('paused');
}
function synopsisgame(){
	synopsisgamearea.classList.remove('hidden');

	gameareapuzzle.classList.add('hidden');
	gameareaflou.classList.add('hidden');
	gameaeredepixel.classList.add('hidden');
	gamearea.style.backgroundImage = "";
	gameareaflou.style.backgroundImage = "";
	gameareapuzzle.style.backgroundImage = "";
	synopsisgamearea.innerHTML = "<b>Synopsis&nbsp;:</b> <br>" + description;
	gamearea.classList.add('paused');
}
function deflougame(){
	synopsisgamearea.classList.add('hidden');
	gameareaflou.style.filter = "";
	gameareaflou.classList.remove('hidden')
	gameareapuzzle.classList.add('hidden')
	gameaeredepixel.classList.add('hidden');
	gamearea.style.backgroundImage = "";
	gameareapuzzle.style.backgroundImage = "";
	gamearea.classList.add('paused');
	gamearea.classList.remove('animated');

	gameareaflou.classList.add('animated--flou');
	gameareaflou.style.animationDuration = itimequest + "s";
	gameareaflou.style.backgroundImage = "url(assets/"+ imageslink + reponseurl + ".jpg)";
	gameareaflou.classList.remove('paused');
}
var tabbloc = [];
function puzzlegame(){
	for(let i = 0; i < blocs.length; i++){
		blocs[i].classList.remove('hidden');
	}
	timeforpuzzlegame = itimequest*1000 /25;
	tabbloc = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
	gamearea.style.backgroundImage = "";
	gameareaflou.style.backgroundImage = "";
	gameaeredepixel.classList.add('hidden');
	gameareaflou.classList.add('hidden')
	synopsisgamearea.classList.add('hidden');
	gameareapuzzle.classList.remove('hidden')
	gameareapuzzle.style.backgroundImage = "url(assets/"+ imageslink + reponseurl + ".jpg)";
	let i = 0;
	puzzlegameboucle();
	function puzzlegameboucle() {  
		setTimeout(function() {   
		  	var bloctofind = tabbloc[getRandomIntInclusive(0, tabbloc.length-1)];
			var bloctodelete = tabbloc.indexOf(bloctofind);
			blocs[bloctofind].classList.add('bloc--transparent');
			tabbloc.splice(bloctodelete, 1);
			i++;                   
		    if (i < 25) {        
		      puzzlegameboucle();            
		    }                     
		}, timeforpuzzlegame)
	}
}
const filter = document.querySelector('#pixelate');
if(filter != undefined){
	const dot = filter.querySelector('#dot');
	const spacing = filter.querySelector('#spacing');
	const size = filter.querySelector('#size');
}


let comptpixel = 50;

function depixelgame(){
	console.log("depixel")
	gameaeredepixel.classList.remove('hidden');
	gamearea.style.backgroundImage = "";
	gameareaflou.style.backgroundImage = "";
	gameareapuzzle.style.backgroundImage = "";
	gameareapuzzle.classList.add('hidden');
	gameareaflou.classList.add('hidden');
	synopsisgamearea.classList.add('hidden');

	var diameter = parseInt(comptpixel),
	radius = diameter / 2;
	spacing.setAttribute('width', diameter);
	spacing.setAttribute('height', diameter);
	size.setAttribute('radius', radius);
	boucledepixel();
	imgdepixel.setAttribute('href', "assets/"+ imageslink + reponseurl + ".jpg")
	function boucledepixel(){
		setTimeout(function() {   
	      diameter = parseInt(comptpixel),
	      radius = diameter / 2;
	      spacing.setAttribute('width', diameter);
	      spacing.setAttribute('height', diameter);
	      size.setAttribute('radius', radius);    
	      console.log(comptpixel)
	      comptpixel--;            
	        if (comptpixel > 0) {        
	          boucledepixel(comptpixel);            
	        }                     
	    }, itimequest * 17  )
	}
  
    
}
const seconds = document.querySelector(".seconds");
let timerTime = 0;
let interval;
let isRanning = false;

function startTimer() {
    timerTime = itimequest;
    seconds.innerText = itimequest;
    if (isRanning == false) {
        interval = setInterval(incrementTimer, 1000);
        isRanning = true;
        
    }
}
function stopTimer() {
    timerTime = 1;
    if (isRanning == true) {
        clearInterval(interval);
        isRanning = false;
    }
}
function resetTimer() {
    startTimer();
    timerTime = itimequest;
    seconds.innerText = itimequest;
}
function incrementTimer() {
    if (timerTime == 0){
        stopTimer();
        for(let i = 0; i < blocs.length; i++){
			blocs[i].classList.remove('bloc--transparent');
			blocs[i].classList.add('hidden');	
			tabbloc = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		}
		gamearea.style.backgroundPosition = "center";
		gamearea.style.backgroundSize = "100% 100%";
        titleforgame = reponsetofind;
        titlereponse.innerHTML = titleforgame;
        inputreponse.classList.add('hidden')
        btnnext.classList.remove('hidden')
        btnvalidate.classList.add('hidden')
        gamearea.classList.remove('animated');
		gameareaflou.classList.remove('animated');
		gamearea.style.backgroundPosition = "center";
		gamearea.style.backgroundSize = "100% 100%";
		gameareaflou.classList.remove('animated--flou')
    }
    timerTime--;
    const numberOfSeconds = Math.floor(timerTime % 60);
    seconds.innerText = zeroNumber(numberOfSeconds);

}
function zeroNumber(number) {
    return ( number < 10 ) ? '0' + number : number;

}