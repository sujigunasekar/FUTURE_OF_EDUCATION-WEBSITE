// Function to filter courses based on user input
function filterCourses() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(course => {
        const courseTitle = course.querySelector('h3').textContent.toLowerCase();
        if (courseTitle.includes(searchInput)) {
            course.style.display = 'block'; // Show matching course
        } else {
            course.style.display = 'none'; // Hide non-matching course
        }
    });
}

// Function to handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Displaying a success message
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Reset the form
    document.getElementById('contact-form').reset();
});

// Function to redirect to the courses section when the button is clicked
function exploreCourses() {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
}
// Function to enroll a course and display acknowledgment
function enrollCourse(courseName, courseDetails) {
    // Display the course name and enrollment acknowledgment
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerHTML = `You have successfully enrolled in <strong>${courseName}</strong> (${courseDetails}). Welcome aboard!`;

    // Show the acknowledgment section
    const acknowledgmentSection = document.getElementById('acknowledgment');
    acknowledgmentSection.style.display = 'block';
}

// Function to filter courses
function filterCourses() {
    let input = document.getElementById('search').value.toLowerCase();
    let courseCards = document.getElementsByClassName('course-card');
    
    for (let i = 0; i < courseCards.length; i++) {
        let course = courseCards[i];
        let courseTitle = course.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (courseTitle.includes(input)) {
            course.style.display = "";
        } else {
            course.style.display = "none";
        }
    }
}

// Function to navigate to the course catalog when "Explore Courses" is clicked
function exploreCourses() {
    window.location.href = '#courses';
}
let selectedCourse = '';

function showCourseDetails(title, level, description) {
    selectedCourse = title; // Store the selected course title
    document.getElementById('courseTitle').innerText = title;
    document.getElementById('courseDescription').innerText = description;

    // Set the course features here
    const features = [
        'Interactive sessions',
        'Hands-on projects',
        'Expert instructors',
        'Certification upon completion'
    ];

    const featuresList = document.getElementById('courseFeatures');
    featuresList.innerHTML = ''; // Clear previous features
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    document.getElementById('courseModal').style.display = 'block'; // Show the modal
}

function closeModal() {
    document.getElementById('courseModal').style.display = 'none'; // Hide the modal
}

function registerCourse(event) {
    event.preventDefault(); // Prevent the default form submission

    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;

    alert(`Successfully registered for the course: ${selectedCourse}\nName: ${studentName}\nEmail: ${studentEmail}`);
    
    // Clear form fields
    document.getElementById('enrollmentForm').reset();
    
    closeModal(); // Close the modal after registration
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('courseModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
