const quizData = [
  {
    question: "1. What is a spam ?",
    a: "It’s a type of software",
    b: "It’s a type of malware",
    c: "Any form of unwanted, unsolicited digital communication that is sent in large quantities.",
    d: "bundle of unclassified data",
    correct: "c",
  },
  {
    question:
      "2. ______________ is populating the inbox of any target victim with unsolicited or junk emails.",
    a: "Phishing",
    b: "Spamming",
    c: "Hooking",
    d: "DoS",
    correct: "b",
  },
  {
    question: "3. Which of the following is not a technique used by spanners?",
    a: "Spoofing the domain",
    b: "Sending attached virus in spams",
    c: "Junk tags associated with spam-emails",
    d: "Making important deals through such emails",
    correct: "d",
  },
  {
    question:
      "4. Which of the following is not a proper way of how spammers get the email Ids?",
    a: "When a user registers to online services, blogs, and sites",
    b: "Databases formed by spiders fetching email Ids from different sources",
    c: "From offline form fill-up documents",
    d: "Online ad-tracking tools",
    correct: "c",
  },
  {
    question: "5. There are ___________ major ways of spamming.",
    a: "4",
    b: "2",
    c: "3",
    d: "5",
    correct: "b",
  },
  {
    question: "6. There are _______ types of spamming.",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "d",
  },
  {
    question: "7. Which of the following is not a type of spamming attack?",
    a: "Page-jacking",
    b: "Image spamming",
    c: "Spear phishing",
    d: "Blog & wiki spamming",
    correct: "c",
  },
  {
    question: "8. Which of the following is not an anti-spam technique?",
    a: "Signature-based content filtering",
    b: "DNS routing",
    c: "Bayesian Content Filtering",
    d: "Collaborative content filtering",
    correct: "b",
  },
  {
    question: "9. Which of the following is not an anti-spam technique?",
    a: "Reputation control",
    b: "Sender policy framework",
    c: "DNS-based block-list",
    d: "Domain-based blockingView",
    correct: "d",
  },
  {
    question:
      "10.  ___________ is a tool used as spam filter in association with email programs and automatically intercepts spam emails.",
    a: "Nessus",
    b: "SpamExpert Desktop",
    c: "Spam-Rescurer",
    d: "Burp-Suite",
    correct: "b",
  },
  {
    question:
      "11. Which of the following is not an anti-spamming tool or system?",
    a: "Spam-Eater Pro",
    b: "SpyTech Spam Agent",
    c: "SpamExperts Desktop",
    d: "Anti-spyware Tech",
    correct: "d",
  },
  {
    question: "12. Where might a spammer get your personal information from?",
    a: "Facebook",
    b: "Myspace",
    c: "Linkedin",
    d: "All of these",
    correct: "d",
  },
  {
    question:
      "13. If you think a message may be spam,  should you open the links it contains to check it out.",
    a: "Yes you have to open it",
    b: "No never open it",
    c: "Inform security staff of the company",
    d: "Try to analyze it",
    correct: "b",
  },
  {
    question: "14. To report spam, you should:",
    a: "Reply to the sender with a complaint",
    b: "Submit a report to the Spam Reporting Centre",
    c: "Call the Better Business Bureau",
    d: " Complain to your Internet service provider",
    correct: "b",
  },
  {
    question: "15. A main hallmark of spam is:",
    a: "It asks for sensitive information",
    b: "It uses scare tactics",
    c: "It seems to come from someone you know",
    d: "All of the above",
    correct: "e",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h2 >You answered ${score}/${quizData.length} questions correctly</h2>
            <h3>Quiz Answers</h3>
            <br>
            <p> &nbsp;&nbsp;1)&nbsp;&nbsp; Answer: c 
             &nbsp;&nbsp;2)&nbsp;&nbsp; Answer: b</p>
             <p>&nbsp;&nbsp3)&nbsp;&nbsp;Answer: d
             &nbsp;&nbsp;4)&nbsp;&nbsp;Answer: c </p>
            <p> &nbsp;&nbsp;5)&nbsp;&nbsp; Answer: b
             &nbsp;&nbsp;6)&nbsp;&nbsp; Answer: d</p>
            <p>&nbsp;&nbsp;7)&nbsp;&nbsp; Answer: c
            &nbsp;&nbsp;8)&nbsp;&nbsp; Answer: b </p>
            <p>&nbsp;&nbsp;9)&nbsp;&nbsp;Answer: d
            &nbsp;&nbsp;10)&nbsp;&nbsp;Answer: b</p>
            <p>&nbsp;&nbsp;11)&nbsp;&nbsp;Answer: d
            &nbsp;&nbsp;12)&nbsp;&nbsp;Answer: d</p>
            <p>&nbsp;&nbsp;13)&nbsp;&nbsp;Answer: b
            &nbsp;&nbsp;14)&nbsp;&nbsp;Answer: b</p>
            <p>&nbsp;&nbsp;15)&nbsp;&nbsp;Answer: e</p>
            <br>

           <button onclick="location.reload()">Reload</button>
           `;
    }
  }
});
