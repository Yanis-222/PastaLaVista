// Sélectionner le bouton de changement de mode
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Vérifier si le mode sombre est déjà activé dans le localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Ajouter un événement pour changer de mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Sauvegarder l'état du mode sombre dans le localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
