// Global variables
const videoList = []; // Array to store uploaded videos

// Handle Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated login check (replace with backend logic)
        if (username === 'user' && password === 'password') {
            document.getElementById('loginMessage').textContent = 'Login successful!';
            // You might want to redirect to the home page after successful login
            // window.location.href = 'index.html';
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid username or password.';
        }
    });
}

// Handle Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulated signup process (replace with backend logic)
        document.getElementById('signupMessage').textContent = `Account created for ${username}!`;
        // Clear the form after submission
        signupForm.reset();
    });
}

// Handle Video Upload
const uploadForm = document.getElementById('uploadForm');
if (uploadForm) {
    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const videoFile = document.getElementById('videoFile').files[0];

        if (!videoFile) {
            document.getElementById('uploadMessage').textContent = 'Please select a video file!';
            return;
        }

        // Simulating an upload (replace with your backend upload logic)
        setTimeout(() => {
            videoList.push(videoFile.name); // Store the video name in the list
            document.getElementById('uploadMessage').textContent = 'Video uploaded successfully!';
            // Optionally, reset the upload form
            uploadForm.reset();
        }, 1000);
    });
}

// Handle Video Deletion
const deleteForm = document.getElementById('deleteForm');
if (deleteForm) {
    const videoSelect = document.getElementById('videoSelect');

    // Populate the select dropdown with uploaded videos
    function populateVideoSelect() {
        videoList.forEach(video => {
            const option = document.createElement('option');
            option.value = video;
            option.textContent = video;
            videoSelect.appendChild(option);
        });
    }

    deleteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedVideo = videoSelect.value;

        if (selectedVideo) {
            // Simulating deletion (replace with your backend deletion logic)
            const index = videoList.indexOf(selectedVideo);
            if (index > -1) {
                videoList.splice(index, 1); // Remove the video from the list
                videoSelect.remove(videoSelect.selectedIndex); // Remove the option from the dropdown
                document.getElementById('deleteMessage').textContent = `Deleted video: ${selectedVideo}`;
            } else {
                document.getElementById('deleteMessage').textContent = 'Video not found.';
            }
        } else {
            document.getElementById('deleteMessage').textContent = 'Please select a video to delete.';
        }
    });

    // Populate the dropdown on page load
    populateVideoSelect();
}
