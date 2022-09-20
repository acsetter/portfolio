// csetter.com static site script
//
//fetch nav-icons:
const homeBtn = document.getElementById("home-btn");
const infoBtn = document.getElementById("info-btn");
const designBtn = document.getElementById("design-btn");
const codeBtn = document.getElementById("code-btn");
// fetch projects:
const tsPrj = document.getElementById("ts-prj");
const cgsPrj = document.getElementById("cgs-prj");

homeBtn.onclick = (e) => open("index.html", "_self");
infoBtn.onclick = (e) => open("index.html#about", "_self");
codeBtn.onclick = (e) => open("index.html#projects", "_self");
designBtn.onclick = (e) => open("index.html#designs", "_self");

// tsPrj.onclick = (e) => window.open("http://tilestream.csetter.com")
// cgsPrj.onclick = (e) => window.open("http://csetter.com/project11")
