const count = document.getElementById("timer");
function countDown() {
    if (count.textContent <= 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
} else {
    count.textContent--;
}
};

let interval = setInterval(countDown, 1000)
