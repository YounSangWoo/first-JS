const clock = document.querySelector("h2#clock");

function gettime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    today.innerText = `${year}년 ${month}월 ${day} 일`;
    time.innerText = `${hours}:${minutes}:${seconds}`;
}

gettime();
setInterval(gettime, 1000);