document.addEventListener('DOMContentLoaded', () => {

    // --- NEW: UNIVERSAL RIPPLE ANIMATION FOR ALL BUTTONS ---
    function createRipple(event) {
        const target = event.currentTarget;
        
        const circle = document.createElement('span');
        const diameter = Math.max(target.clientWidth, target.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        
        const rect = target.getBoundingClientRect();
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        
        circle.classList.add('ripple');
        
        const existingRipple = target.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }
        
        target.appendChild(circle);

        // Clean up the ripple element after the animation is done
        setTimeout(() => {
            if (circle.parentElement) {
                circle.parentElement.removeChild(circle);
            }
        }, 600); // Must match animation duration in CSS
    }

    const animatedElements = document.querySelectorAll('.btn, .movie-card, .timing-btn, .seat.available');
    animatedElements.forEach(element => {
        element.addEventListener('click', createRipple);
    });


    // --- PAGE-SPECIFIC LOGIC ---
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'movies.html') {
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            card.addEventListener('click', () => {
                const movieTitle = card.dataset.title;
                localStorage.setItem('selectedMovieTitle', movieTitle);
                // Add a small delay for the ripple effect to be visible before navigating
                setTimeout(() => {
                    window.location.href = 'booking.html';
                }, 300);
            });
        });
    }

    if (currentPage === 'booking.html') {
        const movieTitleElement = document.getElementById('booking-movie-title');
        const seatGrid = document.getElementById('seat-grid');
        const bookingForm = document.getElementById('booking-form-details');
        
        const selectedMovieTitle = localStorage.getItem('selectedMovieTitle');
        if (selectedMovieTitle) {
            movieTitleElement.textContent = `Booking for: ${selectedMovieTitle}`;
        } else {
            movieTitleElement.textContent = 'Please select a movie first';
        }
        
        let selectedMovieTime = null;
        const timingButtons = document.querySelectorAll('.timing-btn');
        timingButtons.forEach(button => {
            button.addEventListener('click', () => {
                selectedMovieTime = button.dataset.time;
                timingButtons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
            });
        });

        const totalSeats = 80;
        const bookedSeatsCount = 10;
        const bookedSeatNumbers = new Set();
        while(bookedSeatNumbers.size < bookedSeatsCount) {
            bookedSeatNumbers.add(Math.floor(Math.random() * totalSeats) + 1);
        }
        for (let i = 1; i <= totalSeats; i++) {
            const seat = document.createElement('div');
            seat.classList.add('seat');
            if (bookedSeatNumbers.has(i)) {
                seat.classList.add('booked');
            } else {
                seat.classList.add('available');
                seat.dataset.seatNumber = i;
                seat.addEventListener('click', () => seat.classList.toggle('selected'));
            }
            seatGrid.appendChild(seat);
            // Re-apply ripple listener for dynamically created seats
            if(seat.classList.contains('available')) {
                seat.addEventListener('click', createRipple);
            }
        }
        
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!selectedMovieTime) {
                alert('Please select a time.');
                return;
            }

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const selectedSeatsElements = document.querySelectorAll('.seat.selected');
            
            if (selectedSeatsElements.length === 0) {
                alert('Please select at least one seat.');
                return;
            }

            const selectedSeatNumbers = Array.from(selectedSeatsElements).map(seat => seat.dataset.seatNumber);

            const confirmationMessage = `
                Booking Confirmation
                --------------------------------
                Movie: ${selectedMovieTitle}
                Time: ${selectedMovieTime}
                Name: ${name}
                Phone: ${phone}
                Email: ${email}
                Seats: ${selectedSeatNumbers.join(', ')}
                --------------------------------
                Enjoy the show!
            `;
            
            alert(confirmationMessage);
            bookingForm.reset();
            window.location.reload();
        });
    }

    if (currentPage === 'index.html' || currentPage === '1.html' || currentPage === '') {
        const signUpModal = document.getElementById('signup-modal');
        const signUpButton = document.getElementById('signup-btn');
        const signInModal = document.getElementById('signin-modal');
        const signInButton = document.getElementById('signin-btn');

        if (signUpButton && signUpModal) {
            const closeModalButton = signUpModal.querySelector('.close-btn');
            const signUpForm = document.getElementById('signup-form');

            signUpButton.addEventListener('click', () => signUpModal.classList.add('show-modal'));
            closeModalButton.addEventListener('click', () => signUpModal.classList.remove('show-modal'));
            
            signUpForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                if (password !== confirmPassword) {
                    alert("Passwords do not match.");
                    return;
                }
                alert("Sign up successful!");
                signUpModal.classList.remove('show-modal');
                signUpForm.reset();
            });
        }

        if (signInButton && signInModal) {
            const closeSignInModalButton = signInModal.querySelector('.close-btn');
            const signInForm = document.getElementById('signin-form');

            signInButton.addEventListener('click', () => signInModal.classList.add('show-modal'));
            closeSignInModalButton.addEventListener('click', () => signInModal.classList.remove('show-modal'));
            
            signInForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert("Sign in successful!");
                signInModal.classList.remove('show-modal');
                signInForm.reset();
            });
        }

        window.addEventListener('click', (event) => {
            if (event.target === signUpModal) signUpModal.classList.remove('show-modal');
            if (event.target === signInModal) signInModal.classList.remove('show-modal');
        });

        const getStartedBtn = document.querySelector('.btn-get-started');
        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const destination = this.href;
                setTimeout(() => {
                    window.location.href = destination;
                }, 300);
            });
        }
    }
});