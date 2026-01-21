alert("JS loaded");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("qrBtn");
    const input = document.getElementById("qrText");
    const qrBox = document.getElementById("qrBox");

    btn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) {
            alert("Please enter text or URL");
            return;
        }

        const qrURL =
            "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" +
            encodeURIComponent(text);

        // Hide button
        btn.classList.add("hide");

        // Show QR
        qrBox.style.backgroundImage = `url("${qrURL}")`;
        qrBox.classList.add("show");
    });
});