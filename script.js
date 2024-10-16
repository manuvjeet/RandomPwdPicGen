// Password Generator Logic
function generatePassword() {
    const length = document.getElementById("passwordLength").value;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]<>?";
    
    let characters = lowercase + uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("generatedPassword").textContent = password;
}

// Photo Generator Logic
function generateRandomPhoto() {
    const photo = document.getElementById("randomPhoto");
    photo.src = `https://picsum.photos/400?random=${Math.floor(Math.random() * 1000)}`;
}

// Event Listeners
document.getElementById("generatePasswordBtn").addEventListener("click", generatePassword);
document.getElementById("generatePhotoBtn").addEventListener("click", generateRandomPhoto);