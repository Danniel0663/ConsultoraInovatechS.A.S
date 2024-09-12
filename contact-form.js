document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const correo = document.getElementById('correo').value;
    const solicitud = document.getElementById('solicitud').value;

    // Parámetros para enviar el correo a tu cuenta
    const templateParamsToAdmin = {
        user_email: correo,
        message: solicitud,
        from_name: correo, // Nombre o email del usuario
        to_name: "Consultora Inovatech"   // Tu nombre o el nombre de la empresa
    };

    // Parámetros para enviar el correo al usuario
    const templateParamsToUser = {
        user_email: correo,
        message: "Gracias por contactarnos. Hemos recibido tu solicitud y pronto nos pondremos en contacto.",
        from_name: "Consultora Inovatech",  // Tu empresa
        to_name: correo   // Email del usuario
    };

    // Enviar el correo a tu cuenta
    emailjs.send('service_o7l8mvc', 'template_sl6cxnj', templateParamsToAdmin)
        .then(function(response) {
            console.log('Correo a admin enviado correctamente', response.status, response.text);
        }, function(error) {
            console.error('Error al enviar el correo a admin:', error);
        });

    // Enviar el correo de confirmación al usuario
    emailjs.send('service_o7l8mvc', 'template_sdqv7fj', templateParamsToUser)
        .then(function(response) {
            alert('Correo enviado correctamente, pronto nos pondremos en contacto.');
        }, function(error) {
            console.error('Error al enviar el correo al usuario:', error);
            alert('Ocurrió un error al enviar el correo.');
        });
});
