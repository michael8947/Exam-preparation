function addItem() {
    var classCodeInput = document.getElementById('classCode');
    var classCode = classCodeInput.value;

    // בדיקה אם הקוד כיתה ריק
    if (classCode.trim() === '') {
        alert('אנא הכנס קוד כיתה');
        return;
    }

    var topic = document.getElementById('topic').value;
    var content = document.getElementById('content').value;
    var file = document.getElementById('fileInput').files[0];

    // יצירת אובייקט פריט
    var item = {
        topic: topic,
        content: content,
        file: file ? file.name : null
    };

    var storageKey = 'items-' + classCode;

    // שמירה ב-localStorage
    var items = localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) : [];
    items.push(item);
    localStorage.setItem(storageKey, JSON.stringify(items));

    renderItems(storageKey);
    closeOverlay();
}
