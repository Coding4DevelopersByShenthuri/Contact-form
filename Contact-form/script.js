document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contactButton');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.querySelector('.close');
    const contactForm = document.getElementById('contactForm');

    const nameField = document.getElementById('name');
    const addressField = document.getElementById('address');
    const phoneField = document.getElementById('phone');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    const phoneRegex = /^\+94\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactButton.addEventListener('click', () => {
        contactModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let isValid = true;

        // Name validation
        if (nameField.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Address validation
        if (addressField.value.trim() === '') {
            addressError.textContent = 'Address is required.';
            isValid = false;
        } else {
            addressError.textContent = '';
        }

        // Phone validation
        if (!phoneRegex.test(phoneField.value.trim())) {
            phoneError.textContent = 'Phone number must start with +94 and be followed by exactly 9 digits.';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        // Email validation
        if (!emailRegex.test(emailField.value.trim())) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Message validation
        if (messageField.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        if (isValid) {
            const contactData = {
                name: nameField.value.trim(),
                address: addressField.value.trim(),
                phone: phoneField.value.trim(),
                email: emailField.value.trim(),
                message: messageField.value.trim(),
            };

            localStorage.setItem('contactData', JSON.stringify(contactData));
            alert('Your Contact data has been sent Successfully!');
            contactModal.style.display = 'none';
        }
    });
});
