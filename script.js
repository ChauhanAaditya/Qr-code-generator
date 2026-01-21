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

    // Fade button out
    btn.classList.add("hide");

    // Generate QR
    qrBox.style.backgroundImage = `url("${qrURL}")`;

    // Smooth reveal (slight delay feels premium)
    setTimeout(() => {
        qrBox.classList.add("show");
    }, 300);
});