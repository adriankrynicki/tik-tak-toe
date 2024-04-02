let fields = [
    null, null, null,
    null, null, null,
    null, null, null
];

function render() {
    const contentDiv = document.getElementById("content");
    let tableHtml = "<table>";
    for (let i = 0; i < 3; i++) {
        tableHtml += "<tr>";
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            tableHtml += `<td onclick="cellClicked(${index})">${fields[index] ? fields[index] : ''}</td>`;
        }
        tableHtml += "</tr>";
    }
    tableHtml += "</table>";
    contentDiv.innerHTML = tableHtml;
}

function cellClicked(index) {
    if (!fields[index]) {
        fields[index] = currentPlayer();
        render();
        // Hier kannst du deine Logik für den Spielzug implementieren
    }
}

function currentPlayer() {
    const xCount = fields.filter(field => field === 'x').length;
    const oCount = fields.filter(field => field === 'o').length;
    return xCount === oCount ? 'x' : 'o';
}

render();
