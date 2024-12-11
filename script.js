
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});

const form = document.getElementById('contactForm');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');

const nomError = document.getElementById('nomError');
const prenomError = document.getElementById('prenomError');
const emailError = document.getElementById('emailError');
const telephoneError = document.getElementById('telephoneError');

function validateForm(event) {
    let isValid = true;

    nomError.style.display = 'none';
    prenomError.style.display = 'none';
    emailError.style.display = 'none';
    telephoneError.style.display = 'none';

    if (nom.value.trim() === '') {
        nomError.textContent = "Le nom est requis.";
        nomError.style.display = 'block';
        isValid = false;
    }

    if (prenom.value.trim() === '') {
        prenomError.textContent = "Le prénom est requis.";
        prenomError.style.display = 'block';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Veuillez entrer un email valide.";
        emailError.style.display = 'block';
        isValid = false;
    }

    const telPattern = /^[0-9]{10}$/;
    if (!telPattern.test(telephone.value.trim())) {
        telephoneError.textContent = "Veuillez entrer un numéro de téléphone valide.";
        telephoneError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
}

form.addEventListener('submit', validateForm);
