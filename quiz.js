const quizData = [
    {
        question: "What is phishing?",
        options: ["A type of malware.", "A social engineering attack.", "A firewall.", "An antivirus software."],
        correct: 1,
        notes: "Phishing is a type of social engineering attack where attackers trick individuals into providing sensitive information."
    },

    {
        question: "What is a strong password?",
        options: ["A password with at least 14 characters, including letter, numbers and special characters.", 
            "A password that is easy to remember, like 'password123'.", "A password that uses only lowercase letters.", "A password that is the same as your username."],
        correct: 0,
        notes: "A strong password should be at least 14 characters long and include a mix of letters, numbers, and special characters to enhance security."
    },

    {
        question: "What is two-factor authentication (2FA)?",
        options: ["A method of logging in using only a password.", "A security process that requires two different forms of identification.", 
            "A type of firewall.", "A method of encrypting data."],
        correct: 1,
        notes: "Two-factor authentication (2FA) adds an extra layer of security by requiring two forms of identification,such asa password and a code sent to your phone."
    }, 
    
    {
        question:"What should you do if you receive a suspicious email?",
        options: ["Open the email to see if it's important.","Click on any links to verify the sender.","Delete the email or report it as spam.","Reply to the email asking for more information."],
        correct: 2,
        notes: "If you receive a suspicious email, it's best to delete it or report it as spam to avoid potential phishing attacks."   
    },

    {
        question:"What is a firewall?",
        options: ["A physical barrier to prevent fires.","A network security system that monitors and controls incoming and outgoing network traffic.","A type of antivirus software.","A method of encrypting data."],
        correct: 1,
        notes: "A firewall is a network security system that helps protect your computer by monitoring and controlling incoming and outgoing network traffic based on predetermined security rules."
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
    