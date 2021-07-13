function setLight() {
    localStorage.setItem("theme", "light-theme");
    document.body.className = "light-theme";
};

function setDark() {
    localStorage.setItem("theme", "dark-theme");
    document.body.className = "dark-theme";
};

(function () {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setDark();
    } else {
        setLight();
    }
})();