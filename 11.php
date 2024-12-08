<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Today's Date</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; margin-top: 20%; background-color: #f4f4f9;">

    <h1>Today's Date</h1>

    <?php
    // Get today's date in dd-mm-yyyy format
    $today = date("d-m-Y");

    // Display the date
    echo "<p style='font-size: 24px; color: #555;'>$today</p>";
    ?>

</body>
</html>
