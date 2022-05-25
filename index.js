feather.replace();

function clickButton() {
  let email = prompt("What is your email?");
  if (email) {
    alert(`Thank you! enjoy`);
  } else {
    alert(`No email?😞`);
  }
}

let readMoreBtn = document.querySelector("button");
readMoreBtn.addEventListener("click", clickButton);
