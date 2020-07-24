const myForm = document.querySelector("#form");
const ErrorMsg = document.querySelector("#error");
const ErrorMark = document.querySelector("#mark");
const MailInput = document.querySelector("#email-input");

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(myForm);
  const email = formData.get("email");
  if (!validateEmail(email)) {
    ErrorMsg.classList.remove("invisible");
    ErrorMark.classList.remove("invisible");
    MailInput.style.borderColor = "red";
  } else {
    ErrorMsg.classList.add("invisible");
    ErrorMark.classList.add("invisible");
    MailInput.style.borderColor = "green";
    myForm.reset();
  }
});
