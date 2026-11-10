<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mengenal Form dengan JavaScript</title>
</head>
<body>
    <form action="" id="loginForm">
        <h1>Login</h1>
        <p>
            <label for="username">Username</label><br>
            <input type="text" id="username" class="form-control" placeholder="Masukkan username...">
        </p>
        <p>
            <label for="password">Password</label><br>
            <input type="password" id="password" class="form-control" placeholder="Masukkan password...">
        </p>
        <button type="submit">Kirim</button>
    </form>

    <!-- PERBAIKAN: script berada di dalam body, bukan setelah </body> -->
    <script>
        const loginForm = document.getElementById("loginForm");

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault(); // cegah halaman reload

            const username = document.getElementById("username");
            const password = document.getElementById("password");

            // PERBAIKAN: trim() agar input yang hanya berisi spasi dianggap kosong,
            // dan === untuk perbandingan ketat
            if (username.value.trim() === "" || password.value.trim() === "") {
                alert("Username dan password wajib diisi (spasi saja tidak dihitung)!");
                // fokus ke field kosong pertama
                (username.value.trim() === "" ? username : password).focus();
            } else {
                alert("Form berhasil dikirim!");
                // PERBAIKAN: password TIDAK lagi dicetak ke console
                console.log(`Form dikirim oleh username: ${username.value.trim()} (password tidak ditampilkan)`);

                username.value = "";
                password.value = "";
            }
        });
    </script>
</body>
</html>