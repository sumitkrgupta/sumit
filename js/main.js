
// Nav Bar
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNav = navList.length,
allsection=document.querySelectorAll(".section"),
totalsection = allsection.length;

for(let i=0; i<totalNav; i++)
{
	const a = navList[i].querySelector("a");
	a.addEventListener("click", function(){

		for( let j = 0; j<totalNav; j++){
			navList[j].querySelector("a").classList.remove("active");

		}

		this.classList.add("active");
		showSection(this);

		if(window.innerWidth < 1200){
			sidebar();
		}
	})
}
 
function showSection(element) {
	for( let i =0; i<totalsection; i++){
		allsection[i].classList.remove("active");
	}
	const target = element.getAttribute("href").split("#")[1];
	document.querySelector("#"+target).classList.add("active");
}

// hire me btn
document.querySelector(".hireme").addEventListener("click",function(){
	showSection(this);
})



// nav-toggler

const toggle = document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");

toggle.addEventListener("click", ()=>{
	sidebar();
})


function sidebar(){
	aside.classList.toggle("open");
	toggle.classList.toggle("open");
	for( let i =0; i<totalsection; i++)
	{
		allsection[i].classList.toggle("open");
	}
	
}