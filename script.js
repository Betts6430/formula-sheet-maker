document.addEventListener("DOMContentLoaded", function () {
    const createBtn = document.getElementById("create-btn");
    const modal = document.getElementById("form-modal");
    const closeBtn = document.querySelector(".close-btn");
    const addSheetBtn = document.getElementById("add-sheet");
    const formulaContainer = document.getElementById("formula-container");
    const searchInput = document.getElementById("search-input");

    // Show modal when clicking "Create a formula sheet"
    createBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Hide modal when clicking the close button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Add new formula sheet to the list
    addSheetBtn.addEventListener("click", function () {
        const title = document.getElementById("sheet-title").value.trim();
        const content = document.getElementById("sheet-content").value.trim();

        if (title && content) {
            const newSheet = document.createElement("div");
            newSheet.classList.add("formula-sheet");
            newSheet.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
            formulaContainer.appendChild(newSheet);

            // Clear input fields and close modal
            document.getElementById("sheet-title").value = "";
            document.getElementById("sheet-content").value = "";
            modal.style.display = "none";
        }
    });

    // Search functionality
    searchInput.addEventListener("keyup", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const formulaSheets = document.querySelectorAll(".formula-sheet");

        formulaSheets.forEach(sheet => {
            const title = sheet.querySelector("h3").innerText.toLowerCase();
            const content = sheet.querySelector("p").innerText.toLowerCase();
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                sheet.style.display = "block";
            } else {
                sheet.style.display = "none";
            }
        });
    });
});
