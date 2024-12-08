<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visitor Counter</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; margin-top: 20%; background-color: #f4f4f9;">

    <h1>Welcome to My Website</h1>
    <h2 style="color: #333;">Visitor Count</h2>

    <?php
    // File to store the visitor count
    $file = "counter.txt";

    // Check if the file exists
    if (!file_exists($file)) {
        // Create the file and initialize the counter to 0
        file_put_contents($file, 0);
    }

    // Read the current visitor count
    $count = (int)file_get_contents($file);

    // Increment the counter
    $count++;

    // Save the updated counter back to the file
    file_put_contents($file, $count);

    // Display the visitor count
    echo "<p style='font-size: 24px; color: #555;'>You are visitor number: <strong>$count</strong></p>";
    ?>

</body>
</html>
