document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("qrBtn");
    const againBtn = document.getElementById("againBtn");
    const input = document.getElementById("qrText");
    const qrBox = document.getElementById("qrBox");

    let currentQRUrl = "";
    let currentText = "";
    let longPressTimer = null;

    // =========================
    // Generate QR
    // =========================
    btn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) {
            alert("Please enter text or URL");
            return;
        }

        currentText = text;
        currentQRUrl =
            "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" +
            encodeURIComponent(text) +
            "&t=" + Date.now(); // cache buster

        input.disabled = true;
        btn.classList.add("hide");

        qrBox.style.backgroundImage = `url("${currentQRUrl}")`;
        qrBox.classList.add("show");

        againBtn.classList.add("show");
    });

    // =========================
    // Press Enter to generate
    // =========================
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !input.disabled) {
            btn.click();
        }
    });

    // =========================
    // Disable right click menu
    // =========================
    qrBox.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });

    // =========================
    // Desktop click → Download
    // =========================
    qrBox.addEventListener("click", () => {
        if (!currentQRUrl) return;
        downloadQRWithText();
    });

    // =========================
    // Mobile long-press → Share
    // =========================
    qrBox.addEventListener("touchstart", () => {
        if (!currentQRUrl) return;

        longPressTimer = setTimeout(() => {
            shareQRWithText();
        }, 600); // long press duration
    });

    qrBox.addEventListener("touchend", () => {
        clearTimeout(longPressTimer);
    });

    // =========================
    // Generate Again
    // =========================
    againBtn.addEventListener("click", () => {
        input.disabled = false;

        qrBox.classList.remove("show");
        btn.classList.remove("hide");
        againBtn.classList.remove("show");

        input.value = "";
        input.focus();

        currentQRUrl = "";
        currentText = "";
    });

    // =========================
    // Download QR + Text
    // =========================
    function downloadQRWithText() {
        createCanvasImage((blob) => {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "qr-with-text.png";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    }

    // =========================
    // Share QR + Text (System Share Sheet)
    // =========================
    function shareQRWithText() {
        createCanvasImage(async (blob) => {
            const file = new File([blob], "qr-with-text.png", {
                type: "image/png"
            });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        title: "QR Code",
                        text: currentText,
                        files: [file]
                    });
                } catch (err) {
                    // user cancelled share → do nothing
                }
            } else {
                // fallback → download
                downloadQRWithText();
            }
        });
    }

    // =========================
    // Canvas creator (shared)
    // =========================
    function createCanvasImage(callback) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = currentQRUrl;

        img.onload = () => {
            const size = 400;
            const padding = 20;
            const textHeight = 80;

            const canvas = document.createElement("canvas");
            canvas.width = size;
            canvas.height = size + textHeight + padding;

            const ctx = canvas.getContext("2d");

            // Background
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // QR
            ctx.drawImage(img, 0, 0, size, size);

            // Text
            ctx.fillStyle = "#000";
            ctx.font = "16px Poppins, Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "top";

            const maxWidth = size - 40;
            const words = currentText.split(" ");
            let line = "";
            let y = size + padding;

            for (let i = 0; i < words.length; i++) {
                const testLine = line + words[i] + " ";
                if (ctx.measureText(testLine).width > maxWidth && i > 0) {
                    ctx.fillText(line, size / 2, y);
                    line = words[i] + " ";
                    y += 22;
                } else {
                    line = testLine;
                }
            }
            ctx.fillText(line, size / 2, y);

            canvas.toBlob(callback, "image/png");
        };
    }
});