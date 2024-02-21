<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal Pilihan Ganda</title>
</head>
<body>
    <h2>Soal Pilihan Ganda</h2>
    <form id="quizForm">
        <p>1. Apa yang dimaksud dengan HTML?</p>
        <input type="radio" name="question1" value="a"> a. Hyper Text Markup Language<br>
        <input type="radio" name="question1" value="b"> b. Hyperlinks and Text Markup Language<br>
        <input type="radio" name="question1" value="c"> c. Home Tool Markup Language<br>

        <p>2. Apa fungsi utama CSS?</p>
        <input type="radio" name="question2" value="a"> a. Menentukan struktur halaman web<br>
        <input type="radio" name="question2" value="b"> b. Mengatur tata letak dan tampilan halaman web<br>
        <input type="radio" name="question2" value="c"> c. Menambahkan interaktivitas ke halaman web<br>

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
                if (jawaban2.value === 'b') {
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
