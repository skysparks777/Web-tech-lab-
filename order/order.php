<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $order = $_POST['order'];
    $orderList = implode(", ", $order);
    echo "Order received: " . htmlspecialchars($orderList);
}
?>
