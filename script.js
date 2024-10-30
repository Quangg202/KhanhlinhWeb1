const images = [
            'ảnh/background/br1.jpg',
            'ảnh/background/br2.jpg',
            'ảnh/background/br4.jpg',
            'ảnh/background/br5.jpg',
            'ảnh/background/br6.jpg',
            'ảnh/background/br7.jpg'
        ];
let index = 0;

function changeBackground() {
            document.body.style.backgroundImage = `url(${images[index]})`;
            index = (index + 1) % images.length;
        }

        changeBackground();
        setInterval(changeBackground, 5000);

        document.getElementById('toggleTheme').addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
        document.getElementById('toggleBackground').addEventListener('click', () => {
            changeBackground();
        });
function copyPhoneNumber(event) {
    const phoneNumber = document.getElementById("phone-number").textContent;
    navigator.clipboard.writeText(phoneNumber).then(() => {
        showTooltip(event);
    }).catch(err => {
        console.error("sao chép số điện thoại", err);
    });
}

function showTooltip(event) {
    const tooltip = document.getElementById("copy-tooltip");
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';

    setTimeout(() => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    }, 2000);
}

document.getElementById("phone-btn").addEventListener("click", copyPhoneNumber);



  