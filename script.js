document.addEventListener("DOMContentLoaded", () => {
    // Simulated sensor values
    const updateValues = () => {
        document.getElementById("temp").innerText = `${(20 + Math.random() * 10).toFixed(2)} °C`;
        document.getElementById("gas").innerText = `${(40 + Math.random() * 10).toFixed(2)} %`;
        document.getElementById("oxygen").innerText = `${(80 + Math.random() * 5).toFixed(2)} %`;
        document.getElementById("battery-health").innerText = `${(90 + Math.random() * 5).toFixed(2)} %`;
        document.getElementById("battery-level").innerText = `${(50 + Math.random() * 30).toFixed(2)} %`;
        document.getElementById("cycles").innerText = Math.floor(Math.random() * 500);
    };

    // Update values every 2 seconds
    setInterval(updateValues, 2000);
    updateValues();
});
