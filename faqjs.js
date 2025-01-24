document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const answer = question.nextElementSibling; // Obtén la respuesta asociada
        const sv1 = question.querySelector('.sv1'); // Obtén el SVG1 dentro de la pregunta
        const sv2 = question.querySelector('.sv2'); // Obtén el SVG2 dentro de la pregunta

        // Inicialmente, oculta la respuesta y muestra solo sv1
        answer.style.display = 'none';
        sv1.style.display = 'block';
        sv2.style.display = 'none';

        // Añade el evento click al ícono SVG1
        sv1.addEventListener('click', function () {
            answer.style.display = 'block'; // Muestra la respuesta
            sv1.style.display = 'none'; // Oculta SVG1
            sv2.style.display = 'block'; // Muestra SVG2
        });

        // Añade el evento click al ícono SVG2
        sv2.addEventListener('click', function () {
            answer.style.display = 'none'; // Oculta la respuesta
            sv1.style.display = 'block'; // Muestra SVG1
            sv2.style.display = 'none'; // Oculta SVG2
        });
    });
});
