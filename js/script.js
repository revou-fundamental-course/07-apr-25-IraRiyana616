// Validasi input nama (hanya huruf dan spasi)
function validateInput(event) {
  const input = event.target;
  input.value = input.value.replace(/[^a-zA-Z\s]/g, '');
}

// Menangani input nama awal
function submitName() {
  const name = document.getElementById('name-input').value.trim();
  if (name) {
    document.getElementById(
      'greeting-text'
    ).textContent = `Hi ${name}, Welcome to my website`;
    document.getElementById('name-dialog').style.display = 'none';
  } else {
    alert('Nama tidak boleh kosong!');
  }
}

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !phone || !message) {
    alert('Semua field wajib diisi!');
    return;
  }

  const chatBox = document.getElementById('chat-output');
  const newChat = document.createElement('div');
  newChat.classList.add('chat-message');
  newChat.innerHTML = `
<strong>${name}</strong>
<p>${message}</p>
<small><em>${email} | ${phone}</em></small>
`;
  chatBox.prepend(newChat);

  document.getElementById('message-form').reset();
}
window.onload = function () {
  document.getElementById('name-dialog').style.display = 'flex';
};
