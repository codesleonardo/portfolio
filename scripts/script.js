// Select the elements from the DOM
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const form = document.querySelector('.form')
const emailInput = form.querySelector('.form__email-input');
const message = form.querySelector('.form__textarea');
const submitButton = form.querySelector('.form__btn_type_submit')

// Function to toggle hamburger
const toggleHamburger = () => {
  hamburger.classList.toggle("hamburger_active");
  navList.classList.toggle("nav__list_active");
}

hamburger.addEventListener("click", toggleHamburger);

// Function to close the mobile menu if any of the menu link is clicked
const closeMobileMenu = () => {
  hamburger.classList.remove("hamburger_active");
  navList.classList.remove("nav__list_active");
}

navLinks.forEach(navLink => navLink.addEventListener("click", closeMobileMenu));

// form validation
function validate() {
  submitButton.disabled = true;
  if (emailInput.validity.valid && message.validity.valid) {
    submitButton.disabled = false
  }
}
emailInput.addEventListener('keypress', validate);
message.addEventListener('keypress', validate);

// form submission
function sendEmail(e) {
e.preventDefault()
  let data = {
    user_id:'user_lqAu9Wnx2MCihyIZIhiOJ',
    service_id:'service_mz9q7w8',
    template_id:'template_78a4q16',
    template_params: {
      from_name: "Elise Bouer",
      reply_to: emailInput.textContent,
      message: message.textContent
    }
  }
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(data)
  }).then((res)=> {
    console.log(res)
    form.reset()
    alert('Your mail was sent!')
  })
  .catch((err)=>{
    console.log(err)
    alert('Something went wrong')
  })
}
form.addEventListener('submit', sendEmail)