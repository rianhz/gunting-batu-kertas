let you = document.getElementById('you');
let comps = document.getElementById('comps');
let result = document.getElementById('result');
let resWrapper = document.getElementById('result-wrapper');

function show(a) {
  you.innerHTML = a;
  console.log(you.textContent);
}

function fight() {
  let randoms = Math.floor(Math.random() * 3 + 1);
  let player = you.textContent.toLowerCase();
  console.log(player);
  let comp = '';
  console.log(player);

  if (randoms == 1) {
    comp = 'batu';
    comps.innerHTML = 'batu';
    comps.style.textTransform = 'uppercase';
  } else if (randoms == 2) {
    comp = 'kertas';
    comps.innerHTML = 'kertas';
    comps.style.textTransform = 'uppercase';
  } else if (randoms == 3) {
    comp = 'gunting';
    comps.innerHTML = 'gunting';
    comps.style.textTransform = 'uppercase';
  } else {
    comps.innerHTML = 'comp bingung';
  }
  console.log(comp);
  if (comp === player) {
    result.innerHTML = 'HASIL SERI';
    resWrapper.style.backgroundColor = 'yellow';
    resWrapper.style.color = 'black';
  } else if (comp === 'kertas' && player === 'gunting') {
    result.innerHTML = 'ANDA MENANG';
    resWrapper.style.backgroundColor = 'green';
  } else if (comp === 'batu' && player === 'kertas') {
    result.innerHTML = 'ANDA MENANG';
    resWrapper.style.backgroundColor = 'green';
  } else if (comp === 'gunting' && player == 'batu') {
    result.innerHTML = 'ANDA MENANG';
    resWrapper.style.backgroundColor = 'green';
  } else if (player == 'you') {
    result.innerHTML = 'ANDA HARUS MEMILIH';
    resWrapper.style.backgroundColor = 'red';
    resWrapper.style.color = 'white';
  } else {
    result.innerHTML = 'ANDA KALAH';
    resWrapper.style.backgroundColor = 'red';
    resWrapper.style.color = 'white';
  }
}
