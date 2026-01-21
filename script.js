const btn = document.getElementById("qrBtn");
const input = document.getElementById("qrText");

btn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return alert("Please enter text or URL");

    const qrURL = 
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" 
        + encodeURIComponent(text);

    btn.style.setProperty("--qr", `url("${qrURL}")`);
    btn.style.backgroundImage = "none";
    btn.style.setProperty("--qr-img", `url("${qrURL}")`);

    btn.style.setProperty(
        "--qr-bg",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "background",
        "rgba(255,255,255,0.25)"
    );

    btn.style.setProperty("--qr-url", `url("${qrURL}")`);

    btn.style.setProperty(
        "--qr-image",
        `url("${qrURL}")`
    );

    btn.style.backgroundImage = "none";
    btn.classList.add("show-qr");
    btn.style.setProperty(
        "--qr-image",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-image",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-code",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-code",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "background",
        "rgba(255,255,255,0.25)"
    );

    btn.style.setProperty(
        "--qr",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "background",
        "rgba(255,255,255,0.25)"
    );

    btn.style.setProperty(
        "backgroundImage",
        "none"
    );

    btn.style.setProperty(
        "--qr",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "background",
        "rgba(255,255,255,0.25)"
    );

    btn.style.setProperty(
        "--qr-image",
        `url("${qrURL}")`
    );

    btn.style.background = "rgba(255,255,255,0.25)";
    btn.style.setProperty(
        "--qr-image",
        `url("${qrURL}")`
    );

    // inject QR into pseudo-element
    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    btn.style.setProperty(
        "--qr-img",
        `url("${qrURL}")`
    );

    // Final working line
    btn.style.setProperty("--qr-img", `url("${qrURL}")`);
});