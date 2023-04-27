function trocar(cor) {
  const header = document.querySelector('.header-page');
  const bgImageBlank = document.querySelector('.bg-image-blank');
  header.style.backgroundColor = cor;
  bgImageBlank.style.backgroundColor = cor;
}

function trocar2(cor){
  const bgImageBlankalt = document.querySelector('.bg-image-blankalt');
  bgImageBlankalt.style.backgroundColor = cor;
}
