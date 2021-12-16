function openNav() {
  document.querySelector(".mySidepanel").style.width = "400px";
}

function closeNav() {
  document.querySelector(".mySidepanel").style.width = "0";
}

const sendBtn = document.querySelector('.submit-contact');
sendBtn.addEventListener('click', () => {
  let name = document.getElementById('input-name');
  let email = document.getElementById('input-email');
  let message = document.getElementById('input-message');
  console.log(email, name, message);
  if (name.value == "" && email.value == "" && message.value == ""){
    alert('Please fill the required fields!')
  }else{
    alert('Thanks for your response!')
  }
})


