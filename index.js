<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soal Pilihan Ganda</title>
    <script>
        function hitungSkor() {
            var skor = 0;
            
            // Pertanyaan 1
            var jawaban1 = document.querySelector('input[name="html"]:checked').value;
            if (jawaban1 === 'a') {
                skor++;
            }

            // Pertanyaan 2
            var jawaban2 = document.querySelector('input[name="css"]:checked').value;
            if (jawaban2 === 'b') {
                skor++;
            }

            // Tampilkan skor
            document.getElementById("hasil").innerHTML = "Skor Anda: " + skor;
        }
    </script>
</head>
<body>
    <h2>Soal Pilihan Ganda</h2>
    <form>
        <p>1. Apa yang dimaksud dengan HTML?</p>
        <input type="radio" id="html1" name="html" value="a">
        <label for="html1">a. Hyper Text Markup Language</label><br>
        <input type="radio" id="html2" name="html" value="b">
        <label for="html2">b. Hyperlinks and Text Markup Language</label><br>
        <input type="radio" id="html3" name="html" value="c">
        <label for="html3">c. Home Tool Markup Language</label><br>

        <p>2. Apa fungsi utama CSS?</p>
        <input type="radio" id="css1" name="css" value="a">
        <label for="css1">a. Menentukan struktur halaman web</label><br>
        <input type="radio" id="css2" name="css" value="b">
        <label for="css2">b. Mengatur tata letak dan tampilan halaman web</label><br>
        <input type="radio" id="css3" name="css" value="c">
        <label for="css3">c. Menambahkan interaktivitas ke halaman web</label><br>

        <input type="button" value="Submit" onclick="hitungSkor()">
    </form>

    <div id="hasil"></div>
</body>
</html>
