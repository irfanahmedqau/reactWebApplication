import moment from "moment";

export const handleValidation = (parentId) => {
  // this flag controls and lets not to auto scroll multiple times
  let scrolled = false;

  // if any error appears this flag is turned to false and further processing is halted
  let validation = true;

  const parentDiv = document.getElementById(parentId);
  const formFields = parentDiv.getElementsByClassName("form-control");

  
 for (let field of formFields) {
    if (field.disabled == false) {
      let errorDiv = document.createElement("div");
      errorDiv.innerHTML =
        field.getAttribute("aria-label") != null
          ? field.getAttribute("aria-label") + " is required!"
          : field.getAttribute("aria-labelledby") + " is required!";
      errorDiv.className = "invalid-feedback";
      field.addEventListener("change", (event) => {
        if (
          (field.value !== "" && field.value !== null) ||
          field.required === false
        ) {
          field.classList.remove("is-invalid");
          if (
            field.parentElement.lastChild.classList.contains("invalid-feedback")
          ) {
            field.parentElement.removeChild(field.parentElement.lastChild);
          }
          
        } else {
          field.classList.add("is-invalid");
          if (
            !field.parentElement.lastChild.classList.contains(
              "invalid-feedback"
            )
          ) {
            field.parentElement.appendChild(errorDiv);
          }
        }
      });
      // this block checks field type text, select and datepicker
      if (
        field.required == true &&
        (field.value == "" || field.value == null)
      ) {
        field.classList.add("is-invalid");

        if (
          !field.parentElement.lastChild.classList.contains("invalid-feedback")
        ) {
          field.parentElement.appendChild(errorDiv);
        }
          validation = false;
      }
    }
  }
  return validation;

};


