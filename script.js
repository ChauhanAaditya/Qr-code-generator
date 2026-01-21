document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("qrBtn");
    const againBtn = document.getElementById("againBtn");
    const input = document.getElementById("qrText");
    const qrBox = document.getElementById("qrBox");

    // Generate QR
    btn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) {
            alert("Please enter text or URL");
            return;
        }

        const qrURL =
            "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" +
            encodeURIComponent(text) +
            "&t=" + Date.now(); // 🔥 cache buster

        // Disable input
        input.disabled = true;

        // Hide generate button
        btn.classList.add("hide");

        // Show QR
        qrBox.style.backgroundImage = `url("${qrURL}")`;
        qrBox.classList.add("show");

        // Show generate again button
        againBtn.classList.add("show");
    });

    // Press Enter to generate QR
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !input.disabled) {
            btn.click();
        }
    });

    // Generate Again
    againBtn.addEventListener("click", () => {
        input.disabled = false;

        qrBox.classList.remove("show");
        btn.classList.remove("hide");
        againBtn.classList.remove("show");

        input.value = "";
        input.focus();
    });
});