function showForm(formId) {
    document.querySelectorAll(".form-box").forEach(form => formId.classList("active"));
    document.getElementById(formId).classList.add("active")
}