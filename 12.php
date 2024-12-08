<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Checker</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; margin-top: 20%; background-color: #f4f4f9;">

    <h1>Prime Number Checker</h1>

    <form method="POST" action="">
        <label for="number" style="font-size: 18px;">Enter a number:</label>
        <input type="number" id="number" name="number" required style="font-size: 16px; margin: 10px;">
        <button type="submit" style="font-size: 16px;">Check</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $number = intval($_POST["number"]);

        function isPrime($num) {
            if ($num <= 1) return false;
            for ($i = 2; $i <= sqrt($num); $i++) {
                if ($num % $i == 0) return false;
            }
            return true;
        }

        if (isPrime($number)) {
            echo "<p style='font-size: 24px; color: green;'>$number is a Prime Number.</p>";
        } else {
            echo "<p style='font-size: 24px; color: red;'>$number is not a Prime Number.</p>";
        }
    }
    ?>

</body>
</html>
