interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location:string
}

const Amina: Student = {
    firstName: "Amina",
    lastName: "Yakubu",
    age: 20,
    location: "Nzema",
};  

const John: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "Accra",
};

const studentsList: Student[] = [Amina, John]; 

function renderTable(students: Student[]): void {
    // Create a table and append it to the body

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // Only "First Name" and "Location" as headers
    const headers = ["First Name", "Location"];
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Only append firstName and location for each student
    students.forEach(student => {
        const row = document.createElement("tr");

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        table.appendChild(row);
    });

    document.body.appendChild(table);
}