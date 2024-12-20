const section = document.querySelector("section");
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
const themeToggleBtn = document.querySelector("#theme-toggle");
const backBtn = document.querySelector("#back-btn");

// Theme toggle functionality
themeToggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
});

// Back button functionality
backBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});

function loadBlogs() {
    section.innerHTML = ""; // Clear existing content
    
    // Sort blogs by timestamp if you added it
    blogs.forEach(blog => {
        const articleHTML = `
            <article>
                <h3>${blog.title}</h3>
                <hr>
                <p class="sentence">${blog.content}</p>
                <p>Posted By: <span>${blog.username}</span></p>
            </article>
        `;
        section.innerHTML += articleHTML;
    });
}

// Initialize theme on page load
function initializeTheme() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
}

initializeTheme();
loadBlogs();