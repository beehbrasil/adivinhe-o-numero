// Crie a função login aqui.
function Login() {

    player_name = document.getElementById("playername").value;
    localStorage.setItem("plauer_name", player_name);

    window.location = "gamepage.html";
}