function changeCSS() {
    let linkElement = document.getElementById("path");
    let currentHref = linkElement.getAttribute("href");
    let img1 = document.getElementById('img1');

    if (currentHref === "style-light.css") {
        linkElement.setAttribute("href", "style-dark.css");
        localStorage.setItem("theme", "dark");
        img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=Wdnu-edbShJS&format=png&color=000000'); // 🌙 місяць
    } else {
        linkElement.setAttribute("href", "style-light.css");
        localStorage.setItem("theme", "light");
        img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=CYWbKSvhMDAc&format=png&color=000000'); // 🔆 сонце
    }
}

window.addEventListener("DOMContentLoaded", () => {
    let savedTheme = localStorage.getItem("theme") || "light";
    let linkElement = document.getElementById("path");
    let toggle = document.getElementById("themeToggle");
    let img1 = document.getElementById('img1');

    if (savedTheme === "dark") {
        linkElement.setAttribute("href", "style-dark.css");
        if (toggle) toggle.checked = true;
        img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=Wdnu-edbShJS&format=png&color=000000'); // 🌙
    } else {
        linkElement.setAttribute("href", "style-light.css");
        if (toggle) toggle.checked = false;
        img1.setAttribute('src', 'https://img.icons8.com/?size=100&id=CYWbKSvhMDAc&format=png&color=000000'); // 🔆
    }
});
