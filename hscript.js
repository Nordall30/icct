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
                profileSection.scrollIntoView({ behavior: 'smooth' });
            });
        });


// Assuming you have logic for checking login status and authentication
// After successful login:
document.getElementById('dashboard-link').style.display = 'block';


#library-section .container {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#library-section h2 {
    text-align: center;
}

#library-section form {
    display: flex;
    flex-direction: column;
}

#library-section label {
    margin-bottom: 8px;
}

#library-section input,
select {
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

#library-section button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#library-section button:hover {
    background-color: #0056b3;
}
#library-section .popup {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

#library-section .popup-content {
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    text-align: center;
    position: relative;
}

#library-section .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

#library-section .close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
