

const mainCantainer=document.querySelector(".mainCantainer")
mainCantainer.style.width="100%"
mainCantainer.style.height="100vh"
// mainCantainer.style.border="3px solid red"
mainCantainer.style.backgroundPosition="center"


// mainCantainer.style.backgroundColor="red"
console.log(mainCantainer);


const loginPag= document.getElementById("loginPag")
loginPag.style.width="23rem"
loginPag.style.height="26rem"
loginPag.style.border="2px solid white"
loginPag.style.borderRadius="1em"
loginPag.style.display="flex"
loginPag.style.alignItems="center"
loginPag.style.justifyContent="center"
loginPag.style.flexDirection="column"
loginPag.style.gap="1.5em"
// loginPag.style.color="white"
console.log(loginPag);

const heading=document.getElementById("head")
heading.style.fontSize="2em"
console.log(heading);

const input=document.querySelectorAll("#ip")

for (let i=0; i<input.length; i++) {
  
    input[i].style.width="80%"
    input[i].style.height="10%"
    input[i].style.borderRadius="1em"
    input[i].style.border="none"
    input[i].style.paddingLeft="1em"
    
}
    
console.log(input);


const btn = document.getElementById("btn")
btn.style.width="82%"
btn.style.height="10%"
btn.style.borderRadius="1em"

console.log(btn);

const sp= document.getElementById("sp")
sp.style.width="82%"
sp.style.height="5%"
sp.style.display="flex"
sp.style.alignItems="center"
sp.style.justifyContent="center"
sp.style.fontSize="0.8rem"
sp.style.gap="9em"

console.log(sp);


const an = document.querySelectorAll("#an")
for (let i=0; i<input.length; i++) {
    an[i].style.color="black"
    an[i].style.display="flex"
    an[i].style.alignItems="center"
    an[i].style.justifyContent="center"
}
console.log(an);




