const name = document.getElementById('name');
const passowrd = document.getElementById('passowrd');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const button = document.getElementById('button');
const signButton = document.getElementById('signButton');
const close = document.getElementById('close');

form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null){
        messeges.push("name is required")

    }
    if (password.value.length <= 6) {
        messages.push('Password Must Be Longer Than 6 Caracters')
      }
      if (password.value.length >= 25) {
        messages.push('Password Must be Less Than 25 Characters')
      }
      if (password.value === 'password') {
        messages.push('Password cannot be password')
      }
    if (messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(',')
    }

})

form.style.fontSize = '25px';
form.style.color = 'white';
form.style.position ='absoulte';

button.style.width ='200px';
button.style.height = '35px';
button.style.marginTop ='20px';

error.style.color = 'white';
error.style.fontSize ='25px';

form.style.display ='none';
close.style.display = 'none';

signButton.onclick = () => {
    form.style.display = 'block';
    close.style.display ='block';
}
close.onclick = () => {
    form.style.display ='none';
}

