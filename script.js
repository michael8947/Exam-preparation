function register() {
    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;
    var storedUsername = localStorage.getItem(username);
    if (storedUsername) {
        alert("שם המשתמש כבר קיים. אנא בחר שם משתמש אחר.");
        return;
    }
    localStorage.setItem(username, password);
    alert("נרשמת בהצלחה!");
}

function createClassCode() {
    var classCode = Math.floor(100000000 + Math.random() * 900000000);
    localStorage.setItem("classCode", classCode);
    alert("קוד הכיתה החדש שנוצר הוא: " + classCode);
}

function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var classCode = document.getElementById("login-class-code").value; // Retrieve class code from input
    var storedPassword = localStorage.getItem(username);
    var storedClassCode = localStorage.getItem("classCode"); // Retrieve class code from localStorage
    if (password === storedPassword && classCode === storedClassCode) {
        alert("התחברת בהצלחה!");
        window.location.href = "new-page.html";
    } else {
        alert("שם המשתמש, הסיסמה, או קוד הכיתה שגויים. אנא נסה שוב.");
    }
}
