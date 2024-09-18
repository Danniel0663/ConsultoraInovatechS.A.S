document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const solicitud = document.getElementById('solicitud').value;

    // Parámetros para enviar el correo a tu cuenta
    const templateParamsToAdmin = {
        user_email: correo,
        message: solicitud,
        from_name: correo, // Nombre o email del usuario
        to_name: "InovaTech Consultancy"   // Tu nombre o el nombre de la empresa
    };

    // Parámetros para enviar el correo al usuario
    const templateParamsToUser = {
        user_email: correo,
        message: solicitud,
        from_name: "InovaTech Consultancy",  // Tu empresa
        to_name: correo   // Email del usuario
    };

    // Enviar el correo a tu cuenta
    emailjs.send('service_o7l8mvc', 'template_sl6cxnj', templateParamsToAdmin)
        .then(function(response) {
            console.log('Email to admin sent success fully', response.status, response.text);
        }, function(error) {
            console.error('Error sending email to admin:', error);
        });

    // Enviar el correo de confirmación al usuario
    emailjs.send('service_o7l8mvc', 'template_sdqv7fj', templateParamsToUser)
        .then(function(response) {
            alert('Mail sent correctly, we will contact you soon.');
        }, function(error) {
            console.error('Error sending email to user:', error);
            alert('An error occurred while sending the email.');
        });
});
