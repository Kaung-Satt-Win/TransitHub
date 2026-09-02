// 1. Global Event Delegation (Handles dynamic login modal & voucher click)
document.addEventListener("click", (e) => {
    const loginModal = document.getElementById("loginModal");
    const voucherModal = document.getElementById("voucher-modal");

    // Login modal toggle
    const loginBtn = e.target.closest("#loginBtn, .login-btn");
    if (loginBtn && loginModal) {
        e.preventDefault();
        loginModal.style.display = "flex";
        return;
    }

    const closeLoginBtn = e.target.closest("#closeLoginModal");
    if (closeLoginBtn && loginModal) {
        loginModal.style.display = "none";
        return;
    }

    if (e.target === loginModal) {
        loginModal.style.display = "none";
        return;
    }

    // Voucher side drawer modal toggle
    const voucherTicket = e.target.closest(".voucher-ticket");
    if (voucherTicket && voucherModal && !e.target.classList.contains("book-btn")) {
        const title = voucherTicket.querySelector("h3")?.innerText;
        const subtitle = voucherTicket.querySelector("p")?.innerText;

        if (title) document.getElementById("modal-discount-title").innerText = title;
        if (subtitle) document.getElementById("modal-discount-subtitle").innerText = subtitle;

        voucherModal.classList.add("active");
        return;
    }

    const closeVoucherBtn = e.target.closest("#close-voucher-btn");
    if (closeVoucherBtn && voucherModal) {
        voucherModal.classList.remove("active");
        return;
    }

    if (e.target === voucherModal) {
        voucherModal.classList.remove("active");
        return;
    }
});

// 2. Train Tab Filter Handler
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".tab-btn");
    const ticketCards = document.querySelectorAll(".ticket-card");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove 'active' class from all buttons and highlight clicked button
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            // Get filter keyword
            const filterValue = button.getAttribute("data-filter");

            // Toggle card visibility
            ticketCards.forEach((card) => {
                const categories = card.getAttribute("data-category") || "";

                if (filterValue === "all" || categories.includes(filterValue)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dealCards = document.querySelectorAll('.deal-card');
    const detailModal = document.getElementById('deal-detail-modal');
    const closeDetailBtn = document.getElementById('close-deal-detail-btn');
    const bookNowBtn = document.getElementById('book-now-modal-btn');

    // Dynamic fields inside detail modal
    const detailTitle = document.getElementById('detail-title');
    const detailBreadcrumbTitle = document.getElementById('detail-breadcrumb-title');
    const detailBanner = document.getElementById('detail-banner');
    const detailPromoCode = document.getElementById('detail-promo-code');

    // Click handler to open detail modal
    dealCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title') || 'DEAL DETAILS';
            const img = card.getAttribute('data-img') || './images/MandalayAirPort.jpg';
            const code = card.getAttribute('data-code') || 'MBAYLV826';

            if (detailTitle) detailTitle.textContent = title;
            if (detailBreadcrumbTitle) detailBreadcrumbTitle.textContent = title;
            if (detailBanner) detailBanner.src = img;
            if (detailPromoCode) detailPromoCode.textContent = `DEAL BAY SALARY BACK - CODE: ${code}`;

            if (detailModal) {
                detailModal.classList.add('active');
                window.scrollTo({ top: 0 });
            }
        });
    });

    // Close detail modal
    if (closeDetailBtn) {
        closeDetailBtn.addEventListener('click', () => {
            detailModal.classList.remove('active');
        });
    }

    if (bookNowBtn) {
        bookNowBtn.addEventListener('click', () => {
            detailModal.classList.remove('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const trainModal = document.getElementById('train-detail-modal');
    const closeTrainBtn = document.getElementById('close-train-detail-btn');
    
    // Target any train route element or search action button
    const trainTriggers = document.querySelectorAll('.train-route-card, .search-train-btn, .book-train-btn');

    trainTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Extract route information if available via attributes
            const origin = trigger.getAttribute('data-origin') || 'Ho Chi Minh';
            const destination = trigger.getAttribute('data-destination') || 'Nha Trang';
            const routeTitle = `${origin} → ${destination}`;

            // Update modal text fields dynamically
            document.querySelectorAll('.route-label-text').forEach(el => {
                el.textContent = routeTitle;
            });

            const breadcrumbEl = document.getElementById('modal-breadcrumb-route');
            if (breadcrumbEl) breadcrumbEl.textContent = `${origin} ${destination} Train Ticket`;

            const originInput = document.getElementById('modal-origin-input');
            const destInput = document.getElementById('modal-dest-input');
            if (originInput) originInput.value = origin;
            if (destInput) destInput.value = destination;

            // Open the full detail modal
            if (trainModal) {
                trainModal.classList.add('active');
                window.scrollTo({ top: 0 });
            }
        });
    });

    // Close Modal action
    if (closeTrainBtn) {
        closeTrainBtn.addEventListener('click', () => {
            trainModal.classList.remove('active');
        });
    }
});