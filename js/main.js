document.addEventListener("DOMContentLoaded", () => {
    // Because the header is loaded dynamically via fetch, 
    // we use a slight delay or event delegation to capture the login button click
    setTimeout(() => {
        const loginModal = document.getElementById("loginModal");
        // Update this selector to match your header's actual login button ID or class
        const loginBtn = document.querySelector(".login-btn") || document.getElementById("loginBtn"); 
        const closeBtn = document.getElementById("closeLoginModal");

        if (loginBtn && loginModal) {
            loginBtn.addEventListener("click", (e) => {
                e.preventDefault();
                loginModal.style.display = "flex";
            });
        }

        if (closeBtn && loginModal) {
            closeBtn.addEventListener("click", () => {
                loginModal.style.display = "none";
            });
        }

        // Close modal when clicking outside the white box content
        window.addEventListener("click", (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = "none";
            }
        });
    }, 500); // 500ms allows load-components.js time to inject the header HTML first
});

document.addEventListener("click", (e) => {
    const loginModal = document.getElementById("loginModal");
    const loginBtn = e.target.closest("#loginBtn");
    const closeBtn = e.target.closest("#closeLoginModal");

    // Open Modal when clicking "Log in" in the header
    if (loginBtn) {
        e.preventDefault();
        if (loginModal) {
            loginModal.style.display = "flex";
        }
    }

    // Close Modal when clicking the 'X' button
    if (closeBtn) {
        if (loginModal) {
            loginModal.style.display = "none";
        }
    }

    // Close Modal when clicking the dark background overlay outside the box
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});