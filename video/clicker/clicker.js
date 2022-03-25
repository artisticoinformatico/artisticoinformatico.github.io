let pkt=0.0; //obecnie
let wszystkie=0.0;
let klikniecia=0;
let wartosc=1;

if (localStorage.pkt) {
  pkt = parseFloat(localStorage.pkt);
}






function lewyxd() {
  pkt+=wartosc;
  document.getElementById("pkt_teraz").innerHTML=parseInt(pkt);
  localStorage.pkt = pkt;


  wszystkie+=wartosc;
  klikniecia++;

}






/*
function setCookie(cnazwa, cwartosc) {
  document.cookie = cnazwa + "=" + cwartosc + ";path=/";
}

function getCookie(cnazwa) {
  let cnazwa_zeznakiem = cnazwa + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cnazwa_zeznakiem) == 0) {
      return c.substring(cnazwa_zeznakiem.length, c.length);
    }
  }
  return "";
}

function checkCookie(nazwa_spr) {
  let cooki = getCookie(nazwa_spr);
  if (cooki != "")
  {return true;} else
    {return false;}
}
*/
