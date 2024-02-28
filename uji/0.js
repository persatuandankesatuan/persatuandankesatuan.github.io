const quizData = [
  {
    question: 'Jika pada saat Pilpres 2024 ada salah satu temanmu yang mendukung Paslon dengan nomor urut yang berbeda denganmu karena menurutnya lebih baik, apa sikapmu terhadap temanmu tersebut?',
    options: ['Menghargai perbedaan pendapatnya', 'Menjauhinya', 'Berusaha mempengaruhinya', 'Menjelekkan Paslon yang ia dukung'],
    answer: 'Menghargai perbedaan pendapatnya',
  },
  {
    question: 'Jika kamu mengetahui salah satu anggota keluargamu mencoblos pilihan yang berbeda denganmu saat Pilpres 2024, apa sikapmu terhadap anggota keluargamu tersebut?',
    options: ['Menghargai perbedaan pilihannya tanpa merusak keharmonisan keluarga', 'Mencoretnya dari KK', 'Mengusirnya dari rumah', 'Berdebat dengannya, tanpa menghargai pendapatnya'],
    answer: 'Menghargai perbedaan pilihannya tanpa merusak keharmonisan keluarga',
  },
  {
    question: 'jika salah satu temanmu terpeleset dan terjatuh di jalan raya, apa yang akan kamu lakukan?',
    options: ['Berusaha menolongnya', 'Memangil bantuan', 'Melihatnya dari kejauhan', 'Pura-pura tidak melihatnya'],
    answer: 'Berusaha menolongnya',
  },
  {
    question: 'Pada hakikatnya, arti persatuan dan kesatuan merupakan besatunya berbagai bangsa yang mendiami Indonesia menjadi satu?',
    options: ['Keharmonisan yang sederajat', 'Tujuan', 'Kedaulatan yang utuh', 'Kesetaraan harkat dan martabat'],
    answer: 'Kedaulatan yang utuh',
  },
  {
    question: 'Salah satu prinsip persatuan dan kesatuan bangsa Indonesia adalah bersikap setia kepada bangsa dan negara, yang dikena dengan sikap?',
    options: [
      'Patriotisme',
      'Nasionalisme',
      'Persatuan dan kesatuan',
      'Tekad api',
    ],
    answer: 'Patriotisme',
  },
  {
    question: 'konsesus nasional yang merupakan konsep persatuan dan kesatuan bangsa hal tersebut disebabkan karenya adanya momentum pada...',
    options: ['Proklamasi kemerdekaan 17 Agustus 1945', 'Sumpah pemuda 28 Oktober 1928', 'Penetapan pancasila 17 Agustus 1845', 'Kebangkitan nasional 20 Mei 1928'],
    answer: 'Sumpah pemuda 28 Oktober 1928',
  },
  {
    question: 'Bahwa Pancasila merupakan satu-satunya falsafah serta ideology bangsa dan negara, yang melandasi, membimbing dan megarahkan bangsa menuju tujuannya adalah perwujudan kepulauan nusantara sebagai satu kesatuan...',
    options: [
      'Ekonomi',
      'Pertahanan dan keamanan',
      'Ekonomi',
      'Politik',
    ],
    answer: 'Politik',
  },
  {
    question: 'Ada tiga faktor yang dapat memperkuat persatuan dan kesatuan dalam Negara Kesatuan Republik Indonesia yaitu?',
    options: ['Perasaan senasib sepenanggungan, latar belakang sejarah, dan persamaan cita-cita', 'Tujuan yang sama, suku bangsa yang sama, dan perjuangan yang sama', ' Latar belakang, cita – cita, dan tujuan yang sama', 'Sumpah Pemuda, Pancasila, dan semboyan Bhinneka Tunggal Ika'],
    answer: 'Sumpah Pemuda, Pancasila, dan semboyan Bhinneka Tunggal Ika',
  },
  {
    question: 'Salah satu keuntungan negara kesatuan adalah?',
    options: [
      'keputusan penting dibuat oleh pemerintahan',
      'seluruh wilayah negara mempunyai peraturan yang seragam',
      'Daerah menjadi perpanjangan tangan pemerintahan pusat',
      'Daerah memiliki pemimpinnya sendiri',
    ],
    answer: 'Daerah menjadi perpanjangan tangan pemerintahan pusat',
  },
  {
    question: 'Bagaimana peran pendidikan dalam menjaga persatuan dan kesatuan bangsa Indonesia?',
    options: ['Memperkuat stereotip', 'Membentuk kelompok segregasi', 'Memfasilitasi dialog antarkelompok', 'Meningkatkan pengetahuan'],
    answer: 'Memfasilitasi dialog antarkelompok',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
