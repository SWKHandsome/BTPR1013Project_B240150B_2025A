const quizData = [
    {
        question: "What is the primary purpose of a firewall in network?",
        options: ["To encrypt data.", "To monitor network traffic.", "To block unauthorized access.", "To manage user passwords."],
        correct: 2,
        notes: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies."
    },

    {
        question: "What is a strong password?",
        options: ["A password with at least 16 characters, including letter, numbers and special characters.", 
            "A password that is easy to remember, like 'password123'.", "A password that uses only lowercase letters.", "A password that is the same as your username."],
        correct: 0,
        notes: "A strong password should be at least 16 characters long and include a mix of letters, numbers, and special characters to enhance security."
    },

    {
        question: "Which of the following best describes multi-factor authentication (MFA)?",
        options: ["Using a single password to access multiple accounts.", "Combining two or more independent credentials to verify a user's identity.", 
            "Encrypting data before transmission.", "Using biometric data as the sole method of authentication."],
        correct: 1,
        notes: "Multi-factor authentication (MFA) enhances security by requiring users to provide two or more verification factors to gain access to a resource such as an application, online account, or VPN."
    }, 
    
    {
        question:"What should you do if you receive a suspicious email?",
        options: ["Open the email to see if it's important.","Click on any links to verify the sender.","Delete the email or report it as spam.","Reply to the email asking for more information."],
        correct: 2,
        notes: "If you receive a suspicious email, it's best to delete it or report it as spam to avoid potential phishing attacks."   
    },

    {
        question:"Why is it important to use a VPN when connecting to public Wi-Fi?",
        options: ["To increase internet speed.","To disable the firewall on your device.","To share your browsing history with others.","To encrypt your internet traffic and protect your data."],
        correct: 3,
        notes: "Public Wi-Fi networks are often unsecured, making it easy for hackers to intercept your data. A VPN encrypts your internet traffic, protecting your sensitive information from being accessed by malicious actors."
    }
    // Add more quiz questions here
];

let currentQuiz = 0;

const quizContainer = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const quizTitle = document.getElementById('quizTitle');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quizContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        ${currentQuizData.options.map((option, index) => `
            <div class="option" onclick="selectOption(${index})">${option}</div>
        `).join('')}
    `;
}

function selectOption(selected) {
    const currentQuizData = quizData[currentQuiz];
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.style.pointerEvents = 'none';
        if (index === currentQuizData.correct) {
            option.style.backgroundColor = '#32bf47';
        } else if (index === selected) {
            option.style.backgroundColor = 'red';
        }
    });
    const result = document.createElement('div');
    result.innerHTML = selected === currentQuizData.correct
        ? `<p>Correct! ${currentQuizData.notes}</p>`
        : `<p>Wrong! The correct answer is: ${currentQuizData.options[currentQuizData.correct]}<br>${currentQuizData.notes}</p>`;
    quizContainer.appendChild(result);
}

nextBtn.addEventListener('click', () => {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizTitle.style.display = 'none';
            quizContainer.innerHTML = "<h2>You've completed the quiz!</h2>";
            nextBtn.style.display = 'none';
        }
});
    
loadQuiz();
    