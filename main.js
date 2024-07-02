document.addEventListener("DOMContentLoaded", () => {
    let day = document.querySelector("[data-testId='currentDay']");
    let time = document.querySelector("[data-testId='currentTimeUTC']");

    setInterval(() => {
        let date = new Date();

        day.textContent = date.toLocaleDateString("en-US", { weekday: "long" });
        time.textContent = date.toLocaleTimeString("en-US", { timeZone: "UTC" });
    }, 1000);

})