<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Store and Display Information</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; margin-top: 10%; background-color: #f4f4f9;">

    <h1>Enter Your Information</h1>
    <form method="POST" action="" style="margin-bottom: 20px;">
        <label for="info" style="font-size: 18px;">Enter Text:</label>
        <input type="text" id="info" name="info" required style="font-size: 16px; margin: 10px;">
        <br>
        <button type="submit" style="font-size: 16px;">Submit</button>
        <button type="reset" style="font-size: 16px;">Reset</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the input data
        $info = htmlspecialchars($_POST["info"]);

        // Display the information
        echo "<p style='font-size: 20px;'>You entered: <strong>$info</strong></p>";

        // File to store the data
        $file = "data.txt";

        // Append the information to the file
        file_put_contents($file, $info . PHP_EOL, FILE_APPEND);

        // Confirmation message
        echo "<p style='font-size: 18px; color: green;'>Information saved successfully to <strong>data.txt</strong>.</p>";
    }
    ?>

</body>
</html>
