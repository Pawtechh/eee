    // Esperar a que la página se cargue completamente
    window.addEventListener('load', function() {
        document.body.classList.add('loaded'); // Agregar clase para mostrar el contenido
    });

      // Al cargar la página, verificar el estado del acordeón
      document.addEventListener('DOMContentLoaded', function() {
        // Obtener el acordeón abierto del localStorage
        var openAccordion = localStorage.getItem('openAccordion');

        // Si hay un acordeón abierto, establecerlo como abierto
        if (openAccordion) {
            var acordeon = document.getElementById(openAccordion);
            if (acordeon) {
                acordeon.open = true; // Abrir el acordeón
            }
        }

        // Agregar evento de cambio a cada acordeón
        document.querySelectorAll('details').forEach(function(detail) {
            detail.addEventListener('toggle', function() {
                if (this.open) {
                    // Guardar el ID del acordeón abierto
                    localStorage.setItem('openAccordion', this.id);
                } else {
                    // Si se cierra, eliminarlo del localStorage
                    localStorage.removeItem('openAccordion');
                }
            });
        });
    });