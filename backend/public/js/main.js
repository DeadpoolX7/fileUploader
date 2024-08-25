document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fileInput = document.querySelector('input[type="file"]');
    const submitButton = document.querySelector('button[type="submit"]');

    form.addEventListener('submit', (e) => {
        if (!fileInput.files.length) {
            e.preventDefault();
            alert('Please select a file to upload');
        } else {
            submitButton.disabled = true;
            submitButton.textContent = 'Uploading...';
        }
    });

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            submitButton.textContent = 'Upload ' + fileInput.files[0].name;
        } else {
            submitButton.textContent = 'Upload';
        }
    });
});