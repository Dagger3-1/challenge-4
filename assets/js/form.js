const blogFormEl = document.querySelector("#blog-form");
const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

blogFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Form validation
    if (!usernameEl.value || !titleEl.value || !contentEl.value) {
        alert("Please complete all fields before submitting!");
        return;
    }

    const newBlog = {
        username: usernameEl.value.trim(),
        title: titleEl.value.trim(),
        content: contentEl.value.trim(),
        timestamp: new Date().toISOString() // Optional: Add timestamp for sorting
    };

    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    window.location.href = "blog.html";
});