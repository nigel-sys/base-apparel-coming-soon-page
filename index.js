const input = document.querySelector('input[name="email"]');

input.addEventListener("invalid", (e) => {
  e.preventDefault();
  document.querySelector("#error").innerHTML = "Please provide a valid email.";
  const img = document.querySelector(".img-error");
  img.style.visibility = "visible";
});
