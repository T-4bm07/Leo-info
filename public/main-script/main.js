const sections = () => {
    const btnone = document.getElementById("btnOne");
    const btntwo = document.getElementById("btnTwo");
    const newpage = document.querySelector(".newpage");
    const sec = document.getElementById("section");
    const waves = document.getElementById("waves");

    const updateStateAndStorage = (secVisible, newpageVisible, wavesVisible) => {
        sec.style.display = secVisible ? "block" : "none";
        newpage.style.display = newpageVisible ? "block" : "none";
        waves.style.display = wavesVisible ? "block" : "none";
        localStorage.setItem("sectionVisible", secVisible);
        localStorage.setItem("newpageVisible", newpageVisible);
        localStorage.setItem("wavesVisible", wavesVisible);
    };

    const handleBtnTwoClick = () => {
        updateStateAndStorage(false, true, false);
    };

    const handleBtnOneClick = () => {
        updateStateAndStorage(true, false, true);
    };

    const handleDOMContentLoaded = () => {
        const secVisible = localStorage.getItem("sectionVisible") === "true";
        const newpageVisible = localStorage.getItem("newpageVisible") === "true";
        const wavesVisible = localStorage.getItem("wavesVisible") === "true";
        updateStateAndStorage(secVisible, newpageVisible, wavesVisible);
    };

    if (btntwo && sec && newpage && waves) {
        btntwo.addEventListener("click", handleBtnTwoClick);
    }

    if (btnone) {
        btnone.addEventListener("click", handleBtnOneClick);
    }

    window.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
};

sections();