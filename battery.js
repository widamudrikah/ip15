const batteryLevel = document.querySelector('.battery-level');

function animateBattery() {
    let level = 0;
    let interval = setInterval(() => {
        if (level <= 100) {
            batteryLevel.style.width = `${level}%`;

            // Change color based on the battery level
            if (level <= 30) {
                batteryLevel.classList.add('low');
                batteryLevel.classList.remove('medium', 'high');
            } else if (level <= 60) {
                batteryLevel.classList.add('medium');
                batteryLevel.classList.remove('low', 'high');
            } else {
                batteryLevel.classList.add('high');
                batteryLevel.classList.remove('low', 'medium');
            }
            level++;
        } else {
            level = 0; // Reset the battery level and repeat the animation
        }
    }, 50); // Speed of battery filling
}

animateBattery();
