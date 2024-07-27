// Code here!

console.log("Hello DOM!");

// 1. Byt namn på första hoodien från Ash till Potato.
let tagRef = document.querySelector(".art-1 h3");
tagRef.innerText = "Potato";

// 2. Byt namn på Home till Start.
document.querySelector("footer>section>article>a").textContent = "Start";
document.querySelector("header>nav>a").textContent = "Start";

// 3. Byt namn på Contact till Mail Us.
document.querySelector("footer>section>article>a:nth-of-type(3)").textContent = "Mail Us";
document.querySelector("header>nav>a:nth-of-type(3)").textContent = "Mail Us";

// 4. Byt ut informationen om Sinus Hoodie - Fire.
document.querySelector(".art-2>p").textContent = "ERROR_001 - rogue employee is destroying our site. Contact undefined for more information.";

// 5. Byt bakgrundsfärg och text på en knapp.
document.querySelector(".art-1>button").style.backgroundColor = "hotpink";

// document.querySelector(".art-1>button").textContent = "sell ? 🤷‍♂️";
document.querySelector(".art-1>button").innerText = "ḇ̶̡̖̯̳̗͒͊̔́̽̿̈́̊̈͜͝ͅự̵̡͇̲͈͈̞͈̬̤͙̯̩͓̇̓̿͂͛͒́̌̄̿̕͜͝͝͝ͅy̵̦̱̪̫̹͔̻͔̌͜ 🤷‍♂️";
// let pRef = document.querySelector(".art-1>button");
// pRef.style = "background-color: hotpink";

// 6. Byt bakgrundsfärg på någon av produkterna.
document.querySelector(".art-1>figure").style = "background-color: hotpink";

// 7. Byt ut adressen på sidan.
document.querySelector("footer>section>article:nth-of-type(2)>p").innerHTML = `Sinus Skateboards <br>
Truckstigen 1½ <br>
133 38 Rullstahammar`;

// 8. Byt färg på samtliga <p>.
let pRefs = document.querySelectorAll("p");
pRefs.forEach((pRef) => (pRef.style.color = "#8822FF"));

// 9. Ändra text på samtliga knappar till add to cart.
/*
//alt 1:
let buttonRefs = document.querySelectorAll("button");
buttonRefs.forEach((buttonRef) => (buttonRef.innerText = "Add to cart"));
*/
//alt 2:
document.querySelectorAll("button").forEach((button) => (button.textContent = "Add to cart"));

// 10. Lägg till classen active på menyalternativet home.
let homeRefs = [];
homeRefs.push(document.querySelector("header>nav>a:nth-of-type(1)"));
homeRefs.push(document.querySelector("footer>section>article>a"));
homeRefs.forEach((homeRef) => homeRef.classList.add("active"));

// 11. Ta bort classen logo på logotypen.
document.querySelector(".logo").classList.remove("logo");

// 12. Lägg till ett nytt menyalternativ.
const newLink = document.createElement("a");
newLink.href = "#";
newLink.textContent = "Complain about UX";
const navRef = document.querySelector("nav");
navRef.insertBefore(newLink, navRef.firstChild);
// alternative last line:
// nav.appendChild(newLink);

/* 13. Lägg till en ny produkt med följande info.
el	beskrivning
img	hoodie-forrest.png
h2	Sinus Hoodie
h3	Forrest
p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.
*/

document.addEventListener("DOMContentLoaded", () => {
	const newArticle = document.createElement("article");
	newArticle.classList.add("art-4");

	// figure & img
	const figure = document.createElement("figure");
	const img = document.createElement("img");
	img.src = "img/hoodie-forrest.png";
	img.alt = "hoodie";
	figure.appendChild(img);
	newArticle.appendChild(figure);
	// h2
	const h2 = document.createElement("h2");
	h2.textContent = "Sinus Hoodie";
	newArticle.appendChild(h2);
	// h3
	const h3 = document.createElement("h3");
	h3.textContent = "Forrest";
	newArticle.appendChild(h3);
	// p
	const p = document.createElement("p");
	p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";
	newArticle.appendChild(p);
	// button
	const button = document.createElement("button");
	button.textContent = "Add to cart";
	newArticle.appendChild(button);
	// add result
	document.querySelector("main").appendChild(newArticle);
});

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
// first, re-add .logo class to logo:
document.querySelector("body>header>img").classList.add("logo");
// actual task:
document.querySelector(".logo").addEventListener("click", (e) => {
	console.log("Found you!");
});

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
// alt 1 (doesn't work on Forrest):
/*
let articleRefs = [];
articleRefs = document.querySelectorAll("main>article");
articleRefs.forEach((articleRef) =>
	articleRef.addEventListener("click", (e) => {
		let productType = articleRef.querySelector("h3").innerText;
		console.log(`Hi, I'm article ${productType}!`);
	})
);
 */
//alt 2:
// let articleRefs = [];
document.querySelector("main").addEventListener("click", (e) => {
	if (e.target.closest("article")) {
		let productType = e.target.closest("article").querySelector("h3").innerText;
		console.log(`Hi, I'm article ${productType}!`);
	}
});
