const wellcome = document.querySelector('.wellcome');
let access = window.localStorage.getItem('firstAccess');
if (access == null) {
  window.localStorage.setItem('firstAccess', true);
} else {
  wellcome.innerText = 'BEM VINDO DE VOLTA!';
}

const visibillity = document.querySelector('.visibility');
const input = document.querySelector('.key');

visibillity.addEventListener('mousedown', () => {
  input.type = input.type === 'text' ? 'password' : 'text';
});
