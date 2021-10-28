let btn = document.getElementById("btn");
let output = document.getElementById("output");
let resource = [
  `Learn about some new Web3 Native Business Models from Carrawu.eth <a href="https://twitter.com/WuCarra/status/1443769882948997123?t=aGL2CEj71YLpm5Xjy0bVbQ&s=19" target="blank" > on Twitter.</a>`, 
  `Develop on Top of Solana by learning from these Resources shared by Pencilflip.sol <a href="https://twitter.com/pencilflip/status/1451949960065335302?t=54SnAK9f7Pkm-poY2yysuw&s=19" target="blank" > on Twitter.</a>`,
  `Rust is the gateway to develop on top of Solana! Start your journey with this <a href="https://www.educative.io/courses/learn-rust-from-scratch/" target="blank" > Free Course.</a>`,
  `Still confused with Web2 or Web3? Check out this <a href="https://superteam.substack.com/p/learning-to-let-go-of-web2-mindsets" target="blank" > Blog </a> from Superteam DAO to clear your doubts.`,
  `Understand Web3 Terms in a Super Easy way with this <a href="https://twitter.com/ianDAOs/status/1447064476696543232?t=oCCaxEO2Gys7jMgibvD8HQ&s=19" target="blank" > Tweet </a> from Ian.`,
  `Check out this episode of a16z Crypto Startup School by Robert Leshner where he <a href="https://youtu.be/rW8GrxQYPbI" target="blank" > Deep Dived into Decentralization. </a>`,
  `Check out this episode of a16z Crypto Startup School by Sam Williams on <a href="https://youtu.be/gCFlGLbI_kE" target="blank" > Mechanism design 101. </a>`,
  `Check out episode of a16z Crypto Startup School by Ali Yahya where he<a href="https://youtu.be/AI1N6dY8vSQ" target="blank" > Crypto Business Models. </a>`,
];
btn.addEventListener('click', function(){
   var randomResource = resource[Math.floor(Math.random()* resource.length)]
output.innerHTML =  randomResource;
})

// `<a href="" target="blank" > </a>`,