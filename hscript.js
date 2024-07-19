function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    document.getElementById('complaintFormContainer').classList.remove('hidden');
}

function submitSpecificForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const complaint = document.getElementById('complaint').value.trim();

    if (complaint === '' || !/^[a-zA-Z0-9,.!? ]*$/.test(complaint)) {
        document.getElementById('complaintWarning').classList.remove('hidden');
    } else {
        document.getElementById('complaintWarning').classList.add('hidden');
        document.getElementById('complaintFormContainer').classList.add('hidden');
        document.getElementById('acknowledgment').classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('acknowledgment').classList.add('hidden');
        }, 3000); // Hide acknowledgment after 3 seconds
        document.getElementById('specificComplaintForm').reset();
    }
}

// Add the DOMContentLoaded event listener to ensure the functions are bound correctly
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('complaintForm').addEventListener('submit', submitForm);
    document.getElementById('specificComplaintForm').addEventListener('submit', submitSpecificForm);
});



 document.addEventListener('DOMContentLoaded', () => {
            const dashboardLink = document.getElementById('dashboard-link');
            const dashboardSection = document.getElementById('dashboard-section');
            const guidanceOfficeLink = document.getElementById('guidance-office-link');
            const guidanceOfficeSection = document.getElementById('guidance-office-section');
            const billingLink = document.getElementById('billing-link');
            const billingSection = document.getElementById('billing-section');
            const aboutLink = document.getElementById('about-link');
            const aboutSection = document.getElementById('about-section');
            const faqLink = document.getElementById('faq-link');
            const faqSection = document.getElementById('faq-section');
            const academicsLink = document.getElementById('academics-link');
            const academicsSection = document.getElementById('academics-section');
            const libraryLink = document.getElementById('library-link');
            const librarySection = document.getElementById('library-section');
            const stocksLink = document.getElementById('stocks-link');
            const stocksSection = document.getElementById('stocks-section');
            const profLink = document.getElementById('prof-link');
            const profSection = document.getElementById('prof-section');
            const documentsLink = document.getElementById('documents-link');
            const documentsSection = document.getElementById('documents-section');
            const profileLink = document.getElementById('profile-link');
            const profileSection = document.getElementById('profile-section');
            const paymentLink = document.getElementById('payment-link');
            const paymentSection = document.getElementById('payment-section');



            dashboardLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'flex';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                dashboardSection.scrollIntoView({ behavior: 'smooth' });
            });

            guidanceOfficeLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'block';
                dashboardSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                guidanceOfficeSection.scrollIntoView({ behavior: 'smooth' });
            });

            billingLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'block';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                billingSection.scrollIntoView({ behavior: 'smooth' });
            });
            
            aboutLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'block';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            });

            faqLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                academicsSection.style.display = 'none';
                faqSection.style.display = 'block';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                faqSection.scrollIntoView({ behavior: 'smooth' });
            });

            academicsLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'block';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                academicsSection.scrollIntoView({ behavior: 'smooth' });
            });

             libraryLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'block';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                librarySection.scrollIntoView({ behavior: 'smooth' });
            });

             stocksLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'block';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                stocksSection.scrollIntoView({ behavior: 'smooth' });
            });

             profLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'block';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                profSection.scrollIntoView({ behavior: 'smooth' });
            });


             documentsLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'block';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'none';
                documentsSection.scrollIntoView({ behavior: 'smooth' });
            });
            
            profileLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'block';
                paymentSection.style.display = 'none';
                profileSection.scrollIntoView({ behavior: 'smooth' });
            });

           paymentLink.addEventListener('click', (event) => {
                event.preventDefault();
                billingSection.style.display = 'none';
                dashboardSection.style.display = 'none';
                guidanceOfficeSection.style.display = 'none';
                aboutSection.style.display = 'none';
                faqSection.style.display = 'none';
                academicsSection.style.display = 'none';
                librarySection.style.display = 'none';
                stocksSection.style.display = 'none';
                profSection.style.display = 'none';
                documentsSection.style.display = 'none';
                profileSection.style.display = 'none';
                paymentSection.style.display = 'block';
                paymentSection.scrollIntoView({ behavior: 'smooth' });
            });
        });

    document.addEventListener('DOMContentLoaded', (event) => {
        // Get all submit buttons
        var submitButtons = document.querySelectorAll("button[type='submit']");
        
        // Add click event listener to each button
        submitButtons.forEach(function(button) {
            button.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent the form from submitting
                showComplaintPopup();
            });
        });

        // Function to show the popup
        function showComplaintPopup() {
            document.getElementById("complaintOverlay").style.display = "block";
            document.getElementById("complaintPopup").style.display = "block";
        }

        // Function to hide the popup
        function hideComplaintPopup() {
            document.getElementById("complaintOverlay").style.display = "none";
            document.getElementById("complaintPopup").style.display = "none";
        }

        // Close the popup when the close button is clicked
        document.getElementById("closeComplaintPopup").addEventListener("click", function() {
            hideComplaintPopup();
        });

        // Close the popup when the overlay is clicked
        document.getElementById("complaintOverlay").addEventListener("click", function() {
            hideComplaintPopup();
        });
    });


// Assuming you have logic for checking login status and authentication
// After successful login:
document.getElementById('dashboard-link').style.display = 'block';


