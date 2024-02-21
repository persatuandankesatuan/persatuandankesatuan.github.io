<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal Pilihan Ganda PPKn</title>
</head>
<body>
    <h2>Soal Pilihan Ganda PPKn</h2>
    <form id="quizForm">
        <p>1. Siapakah Presiden pertama Indonesia?</p>
        <input type="radio" name="question1" value="a"> a. Soekarno<br>
        <input type="radio" name="question1" value="b"> b. Soeharto<br>
        <input type="radio" name="question1" value="c"> c. Joko Widodo<br>

        <p>2. Apa singkatan dari PPKn?</p>
        <input type="radio" name="question2" value="a"> a. Pendidikan Pancasila dan Kewarganegaraan<br>
        <input type="radio" name="question2" value="b"> b. Pendidikan Pancasila dan Kebudayaan<br>
        <input type="radio" name="question2" value="c"> c. Pendidikan Pengetahuan Kewarganegaraan<br>

        <button type="button" onclick="hitungSkor()">Submit</button>
    </form>

    <div id="hasil"></div>

    <script>
        function hitungSkor() {
            var skor = 0;
            var jawaban1 = document.querySelector('input[name="question1"]:checked');
            var jawaban2 = document.querySelector('input[name="question2"]:checked');

            if (jawaban1 !== null && jawaban2 !== null) {
                if (jawaban1.value === 'a') {
                    skor++;
                }
                if (jawaban2.value === 'a') {
                    skor++;
                }

                document.getElementById("hasil").innerHTML = "Skor Anda: " + skor;
            } else {
                alert("Silakan pilih jawaban untuk semua pertanyaan.");
            }
        }
    </script>
</body>
</html>

    score.append('Kamu Menjawab ' + numCorrect + ' pertanyaan dari ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
