
let a = setInterval(function(){ let allbutton = document.getElementsByClassName("rq0escxv l9j0dhe7 du4w35lb j83agx80 g5gj957u rj1gh0hx buofh1pr hpfvmrgz taijpn5t bp9cbjyn owycx6da btwxx1t3 d1544ag0 tw6a2znq jb3vyjys dlv3wnog rl04r1d5 mysgfdmx hddg9phg qu8okrzs g0qnabr5")
allbutton  =[...allbutton].filter((button) => button.innerText == "Thích" && button.concat != 'dalike')
for(let i =0; i < allbutton.length; i++){
    allbutton[i].click();
    allbutton[i].concat = 'dalike';
}}, 10000);
