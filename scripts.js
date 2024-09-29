// Handle Video Upload
const uploadForm = document.getElementById('uploadForm');
const videoFile = document.getElementById('videoFile');
const uploadMessage = document.getElementById('uploadMessage');

uploadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if (videoFile.files.length === 0) {
        uploadMessage.textContent = "Please select a video file!";
        return;
    }

    const formData = new FormData();
    formData.append('video', videoFile.files[0]);

    // Simulating an upload (replace this with your backend upload logic)
    setTimeout(() => {
        uploadMessage.textContent = "Video uploaded successfully!";
        displayUploadedVideo(videoFile.files[0].name);
    }, 2000);
});

// Display Uploaded Video in the Popular Videos Section
function displayUploadedVideo(videoName) {
    const videoList = document.getElementById('videoList');
    
    const videoItem = document.createElement('div');
    videoItem.textContent = videoName;
    
    videoItem.addEventListener('click', () => {
        const videoPlayer = document.getElementById('videoPlayer');
        const videoSource = document.getElementById('videoSource');
        
        // Simulating playing the uploaded video (replace this with the actual video URL)
        videoSource.src = URL.createObjectURL(videoFile.files[0]);
        videoPlayer.load();
        videoPlayer.play();
    });
    
    videoList.appendChild(videoItem);
}

// Handle Login Form
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login validation (replace this with your backend authentication logic)
    if (username === "user" && password === "password") {
        loginMessage.textContent = "Login successful!";
    } else {
        loginMessage.textContent = "Invalid username or password.";
    }
});
