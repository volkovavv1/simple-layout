const flags = document.querySelectorAll('.flag'); // Флаги
const orb = getComputedStyle(document.querySelector('.orb')) // Стили окружности
const radius = parseFloat(orb.width) / 2 // Радиус окружности, по которой движутся круги с флагами

const speed = 0.007; // Скорость вращения кругов
let angle = 0; // Начальный угол

function animate() {
    angle += speed; // Увеличиваем угол

    flags.forEach((flag, index) => {
        const flagAngle = angle + (index * (2 * Math.PI / flags.length)); // Угол для каждого круга
        const x = radius * Math.cos(flagAngle) + radius; // Координата X
        const y = radius * Math.sin(flagAngle) + radius; // Координата Y

        flag.style.left = `${x}px`;
        flag.style.top = `${y}px`;
    });

    requestAnimationFrame(animate); // Запускаем следующую анимацию
}

animate();


const viewportWidth = window.innerWidth; //Ширина вьюпорта
const input = document.querySelector('.search-input'); 

if (window.innerWidth < 480) {  //Убираем текст placeholder в мобильной версии сайта
    input.placeholder = ''
}