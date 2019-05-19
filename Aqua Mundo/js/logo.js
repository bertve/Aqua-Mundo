function init() {
    const a = document.getElementById('logo');
    const img = document.getElementById('logoImg');
    a.onmouseenter = () => {
        img.src = 'images/w.png';
    };
    a.onclick = () => {
        img.src = 'images/g.png';
    };
    a.onmouseleave = () => {
        img.src = 'images/logo.png';
    };
}

window.onload = init;