document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("crudForm");
  const errors = {
    firstName: "ismingzni kiriting",
    lastName: "ikkinchi ismingizni kiriting",
    birthDate: "to'g'ilgan yilinggizni kiriting",
    gender: "jinsinggizni kiriting",
    mailbox: "emaillingzini kiriting",
    phone: "nomeringizni kiriting"
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    Object.keys(errors).forEach((key) => {
      document.getElementById(`${key}Error`).textContent = "";
    });

    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) {
      if (!value.trim()) {
        document.getElementById(`${key}Error`).textContent = errors[key];
        isValid = false;
      }
    }

    if (isValid) {
      document.getElementById("formSuccess").textContent = "Form submitted successfully!";
      form.reset();
    } else {
      document.getElementById("formSuccess").textContent = "";
    }
  });
});
