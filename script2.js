

document.getElementById("link").addEventListener("click",function(e){
   e.preventDefault();
    const email=document.getElementById('email').value.trim();
    const password=document.getElementById('password').value.trim();
       if(email===localStorage.getItem("email") && password===localStorage.getItem("password")){
       document.body.classList.add("fade-out");
       setTimeout(()=>{
          window.location.href=this.href;
       },500);
       }
       else{
        alert("password or email incorrect!");
        document.getElementById('password').value='';
        document.getElementById('email').value='';
       }
});

document.getElementById("link2").addEventListener("click",function(e){
   e.preventDefault();
  if(document.getElementById('password2').value.trim()==='' || document.getElementById('email2').value.trim()==='' || document.getElementById('name2').value.trim()==''){
       alert('enter your information!'); 
        document.getElementById('password2').value='';
        document.getElementById('email2').value='';
         document.getElementById('name2').value='';
  }
  else{
     localStorage.clear();
     localStorage.setItem("password",document.getElementById('password2').value.trim());
     localStorage.setItem("email",document.getElementById('email2').value.trim());
       document.body.classList.add("fade-out");
       setTimeout(()=>{
          window.location.href=this.href;
       },500);
  }
});

  const inputs = document.querySelectorAll('.input-box input');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.classList.add('not-empty');
      } else {
        input.classList.remove('not-empty');
      }
    });
    if (input.value.trim() !== '') {
      input.classList.add('not-empty');
    }
  });
  

document.querySelector('.register-link a').addEventListener('click', function(e) {
  e.preventDefault();
  document.body.classList.add('flipped');
});

// Crée dynamiquement un lien "Login" dans le formulaire Register
const backLogin = document.createElement('p');
backLogin.innerHTML = `Already have an account? <a href="#" id="backLogin"> Login</a>`;
document.querySelector('#register form').appendChild(backLogin);

// Retour à Login
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'backLogin') {
    e.preventDefault();
    document.body.classList.remove('flipped');
  }
});
