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

oi
oi

function validar() {
  let nome = document.getElementById("nome").value
  let telefone = document.getElementById("telefone").value
  let email = document.getElementById("email").value

  if (nome == "" || telefone == "" || email == "") {
    alert('Preencha os campos')
  } else {
    alert('Acesso Permitido')
    window.open('/index.html');
  }
}