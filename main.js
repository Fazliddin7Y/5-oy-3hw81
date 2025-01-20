document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("crudForm");
  const dataList = document.getElementById("dataList");
  const errors = {
    firstName: "Ismingizni kiriting",
    lastName: "Ikkinchi ismingizni kiriting",
    birthDate: "Tug'ilgan yilingizni kiriting",
    gender: "Jinsingizni tanlang",
    mailbox: "Emaillingizni kiriting",
    phone: "Nomeringizni kiriting",
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
      const listItem = document.createElement("li");
      listItem.className = "bg-gray-100 p-3 rounded shadow";
      listItem.textContent = `
        Name: ${formData.get("firstName")} ${formData.get("lastName")} | 
        Email: ${formData.get("mailbox")} | 
        Phone: ${formData.get("phone")}
      `;
      dataList.appendChild(listItem);

      document.getElementById("formSuccess").textContent = "Muvaffaqiyatli topshirildi";
      form.reset();
    } else {
      document.getElementById("formSuccess").textContent = "";
    }
  });
});
