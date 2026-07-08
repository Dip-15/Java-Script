const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

const terminal = document.getElementById("terminal");

function randomDelay() {
    return Math.floor(Math.random() * 7000) + 1000; // 1-7 seconds
}

async function showMessages() {
    for (const msg of messages) {
        const line = document.createElement("div");
        line.classList.add("line");

        line.innerHTML = `${msg}<span class="dots"></span>`;
        terminal.appendChild(line);

        await new Promise(resolve =>
            setTimeout(resolve, randomDelay())
        );
    }
}

showMessages();