// Controls the predictive searching for the app.
document.getElementById("predictiveSearchField").addEventListener('input', function (evt) {
    var chosenUrl = "";

    switch (this.value) {
        case "gma":
            chosenUrl = "https://mail.google.com";
            break;
        case "dri":
            chosenUrl = "https://drive.google.com";
            break;
        case "gith":
            chosenUrl = "https://github.com";
            break;
        case "smbc":
            chosenUrl = "http://smbc-comics.com";
            break;
        default:
            break;
    }

    if (chosenUrl !== "")
        window.location.href = chosenUrl;
});