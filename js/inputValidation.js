function setError(input, errormsg) {
  const formGroup = input.parentElement;
  const inputAlert = formGroup.querySelector(".input-alert");
  formGroup.className = "form-group error";
  inputAlert.innerText = errormsg;
}
function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
}
function validEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validateForm(form) {
  
  if (form.firstname.value.trim() === "") {
    setError(form.firstname, "First Name cannot be blank");
    return false;
  } else {
    setSuccess(form.firstname);
  }
  if (form.fullname.value.trim() === "") {
    setError(form.fullname, "Fullname cannot be blank");
    return false;
  } else {
    setSuccess(form.fullname);
  }
  if (form.Subject.value.trim() === "") {
    setError(form.Subject, "Subject cannot be blank");
    return false;
  } else {
    setSuccess(form.Subject);
  }
  if (form.email.value.trim() === "") {
    setError(form.email, "Email cannot be blank");
    return false;
  } else if (!validEmail(form.email.value.trim())) {
    setError(form.email, "Email is not valid");
    return false;
  } else {
    setSuccess(form.email);
  }

  if (form.message.value.trim() === "") {
    setError(form.message, "Message cannot be blank");
    return false;
  } else {
    setSuccess(form.message);
  }

  return true;
}
