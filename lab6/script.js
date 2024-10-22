
function populateTable() {
    const tableBody = document.querySelector('#numberTable tbody');

    for (let i = 1; i <= 100; i++) {
        const row = document.createElement('tr');

        // Number column
        const numberCell = document.createElement('td');
        numberCell.textContent = i;
        row.appendChild(numberCell);

        // Square column
        const squareCell = document.createElement('td');
        squareCell.textContent = i * i;
        row.appendChild(squareCell);

        // Cube column
        const cubeCell = document.createElement('td');
        cubeCell.textContent = i * i * i;
        row.appendChild(cubeCell);

        tableBody.appendChild(row);
    }
}

window.onload = populateTable;
