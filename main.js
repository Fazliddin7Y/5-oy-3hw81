const form = document.getElementById('registrationForm');
const displayData = document.getElementById('displayData');
const dataList = document.getElementById('dataList');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const mailbox = document.getElementById('mailbox').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';

  const listItem = document.createElement('li');
  listItem.classList.add('p-4', 'bg-gray-100', 'rounded', 'shadow');
  listItem.textContent = `Name: ${firstName} ${lastName}, Mailbox: ${mailbox}@mail.ru, Phone: ${phoneNumber}, Gender: ${gender}`;

  dataList.appendChild(listItem);
  displayData.classList.remove('hidden');

  form.reset();
});
