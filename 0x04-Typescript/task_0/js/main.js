var Amina = {
    firstName: "Amina",
    lastName: "Yakubu",
    age: 20,
    location: "Nzema",
};
var John = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "Accra",
};
var studentsList = [Amina, John];
function renderTable(students) {
    // Create a table and append it to the body
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    // Only "First Name" and "Location" as headers
    var headers = ["First Name", "Location"];
    headers.forEach(function (headerText) {
        var header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    // Only append firstName and location for each student
    students.forEach(function (student) {
        var row = document.createElement("tr");
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);
        table.appendChild(row);
    });
    document.body.appendChild(table);
}
