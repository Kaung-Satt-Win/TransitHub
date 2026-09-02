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
    // Because the header is loaded dynamically via fetch, 
    // we use a slight delay or event delegation to capture the login button click
    setTimeout(() => {
        const loginModal = document.getElementById("loginModal");
        // Update this selector to match your header's actual login button ID or class
        const loginBtn = document.querySelector(".login-btn") || document.getElementById("login-Btn"); 
        const closeBtn = document.getElementById("closeLoginModal");

        if (loginBtn && loginModal) {
            loginBtn.addEventListener("click", (e) => {
                e.preventDefault();
                loginModal.style.display = "flex";
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

document.addEventListener("click", (e) => {
    const loginModal = document.getElementById("loginModal");
    const loginBtn = e.target.closest("#login-Btn");
    const closeBtn = e.target.closest("#closeLoginModal");
let activeInputId = null;

// Listen for clicks anywhere on the document (handles dynamically loaded inputs)
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'startPoint') {
        activeInputId = 'startPoint';
        document.getElementById('modal-title').innerText = 'Select Departure City';
        document.getElementById('locationModal').style.display = 'flex';
    }
    
    if (event.target && event.target.id === 'destination') {
        activeInputId = 'destination';
        document.getElementById('modal-title').innerText = 'Select Destination';
        document.getElementById('locationModal').style.display = 'flex';
    }
});

// Function when a city is clicked from the modal list
function selectCity(cityName) {
    if (activeInputId) {
        const inputField = document.getElementById(activeInputId);
        if (inputField) {
            inputField.value = cityName;
        }
    }
    closeLocationModal();
}

// Function to close the modal
function closeLocationModal() {
    const modal = document.getElementById('locationModal');
    if (modal) {
        modal.style.display = 'none';
    }
    activeInputId = null;
}

// Set default date for the search banner immediately on page load
document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById('travelDate');
    if (dateInput && !dateInput.value) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
});

// Function to swap Start point and Destination values
function swapLocations() {
    const startInput = document.getElementById('startPoint');
    const destInput = document.getElementById('destination');
    
    console.log("Swap clicked!", startInput, destInput); // Check your F12 console
    
    if (startInput && destInput) {
        const tempValue = startInput.value;
        startInput.value = destInput.value;
        destInput.value = tempValue;
    }
}

// Handle Search button click and validation
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('search-btn')) {
        const startPoint = document.getElementById('startPoint').value.trim();
        const destination = document.getElementById('destination').value.trim();
        const travelDate = document.getElementById('travelDate').value;

        // Validation check
        if (!startPoint || !destination || !travelDate) {
            alert('Please select a start point, destination, and date.');
            return;
        }

        // Prevent searching the same city for start and destination
        if (startPoint === destination) {
            alert('Start point and destination cannot be the same.');
            return;
        }

        // Redirect to search results page with parameters
        window.location.href = `bus-results.html?start=${encodeURIComponent(startPoint)}&dest=${encodeURIComponent(destination)}&date=${encodeURIComponent(travelDate)}`;
    }
});

let selectedSeats = [];

// Open modal when clicking "Select Seat" on any bus card
document.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('book-now-btn')) {
        document.getElementById('seatModal').style.display = 'flex';
        resetBookingModal();
    }
});

function closeSeatModal() {
    document.getElementById('seatModal').style.display = 'none';
}

function toggleSeat(element, seatNum) {
    if (element.classList.contains('booked')) return;

    const index = selectedSeats.indexOf(seatNum);
    
    if (index > -1) {
        // If already selected, remove it (deselect)
        selectedSeats.splice(index, 1);
        element.classList.remove('selected');
    } else {
        // Otherwise, add it to the selection
        selectedSeats.push(seatNum);
        element.classList.add('selected');
    }
    
    // Enable proceed button only if at least one seat is selected
    document.getElementById('proceedBtn').disabled = selectedSeats.length === 0;
}

function showPassengerForm() {
    document.getElementById('seatSelectionView').style.display = 'none';
    document.getElementById('passengerFormView').style.display = 'block';
    // Display all selected seats separated by commas
    document.getElementById('displaySelectedSeat').innerText = selectedSeats.join(', ');
    document.getElementById('seatModalTitle').innerText = 'Passenger Information';
}

function handleBookingSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('passengerName').value;
    const phone = document.getElementById('passengerPhone').value;

    // Switch to success view
    document.getElementById('passengerFormView').style.display = 'none';
    document.getElementById('successView').style.display = 'block';
    document.getElementById('seatModalTitle').innerText = 'Confirmation';
    document.getElementById('successDetails').innerText = `Seats (${selectedSeats.join(', ')}) successfully reserved for ${name} (${phone}).`;
}

function resetBookingModal() {
    selectedSeats = [];
    document.querySelectorAll('.seat').forEach(s => s.classList.remove('selected'));
    document.getElementById('proceedBtn').disabled = true;
    document.getElementById('seatSelectionView').style.display = 'block';
    document.getElementById('passengerFormView').style.display = 'none';
    document.getElementById('successView').style.display = 'none';
    document.getElementById('seatModalTitle').innerText = 'Select Your Seat';
    document.getElementById('bookingForm').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    // Parse URL search parameters
    const urlParams = new URLSearchParams(window.location.search);
    const origin = urlParams.get('origin');
    const destination = urlParams.get('destination');

    if (origin && destination) {
        // 1. Fill main search form inputs if present on the page
        const originInput = document.querySelector('input[placeholder*="departure"], input[placeholder*="Origin"], #modal-origin-input');
        const destInput = document.querySelector('input[placeholder*="destination"], input[placeholder*="Destination"], #modal-dest-input');

        if (originInput) originInput.value = origin;
        if (destInput) destInput.value = destination;

        // 2. Automatically update route labels across detail views/modals
        const routeTitle = `${origin} → ${destination}`;
        document.querySelectorAll('.route-label-text').forEach(el => {
            el.textContent = routeTitle;
        });

        // 3. Automatically trigger and display the full detail modal if available on the page
        const trainModal = document.getElementById('train-detail-modal');
        const flightModal = document.getElementById('deal-detail-modal');

        if (trainModal) {
            trainModal.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (flightModal) {
            flightModal.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});