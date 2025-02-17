document.addEventListener("DOMContentLoaded", function () {
    let today = new Date();
    let options = { year: "numeric", month: "long", day: "numeric" };
    
    document.getElementById("date").textContent = "Tanggal: " + today.toLocaleDateString("id-ID", options);
    document.getElementById("article-date").textContent = today.toLocaleDateString("id-ID", options);
});
