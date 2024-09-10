document.addEventListener('DOMContentLoaded', function() {
    const servicios = document.querySelectorAll('.imagen-port');

    servicios.forEach(servicio => {
        servicio.addEventListener('click', function() {
            const info = this.querySelector('.servicio-info');
            if (info) {
                info.style.display = info.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});
