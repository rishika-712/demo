// Array of Employee Objects
// Employee Data (Array of Objects)
// Employee Data (Array of Objects)
// Array of Employee Objects
// const employees = [
//     {
//         empId: 101,
//         empName: "John Doe",
//         empCompany: "Tech Corp",
//         empSalary: 75000,
//         empAddress: { empCity: "New York", empArea: "Manhattan" }
//     },
//     {
//         empId: 102,
//         empName: "Jane Smith",
//         empCompany: "Innovate Ltd",
//         empSalary: 68000,
//         empAddress: { empCity: "Los Angeles", empArea: "Beverly Hills" }
//     },
//     {
//         empId: 103,
//         empName: "Alice Johnson",
//         empCompany: "Soft Solutions",
//         empSalary: 72000,
//         empAddress: { empCity: "San Francisco", empArea: "Downtown" }
//     }
// ];

// // Function to Create and Insert Table into the DOM
// function generateTable(data) {
//     const tableContainer = document.getElementById("table-container");

//     // Create Table Element
//     const table = document.createElement("table");
//     table.border = "1";

//     // Create Table Header
//     const thead = document.createElement("thead");
//     const headerRow = document.createElement("tr");
//     const headers = ["Emp ID", "Name", "Company", "Salary", "City", "Area"];

//     headers.forEach(headerText => {
//         const th = document.createElement("th");
//         th.textContent = headerText;
//         headerRow.appendChild(th);
//     });
//     thead.appendChild(headerRow);
//     table.appendChild(thead);

//     // Create Table Body
//     const tbody = document.createElement("tbody");

//     data.forEach(emp => {
//         const row = document.createElement("tr");

//         // Employee Properties
//         const values = [emp.empId, emp.empName, emp.empCompany, emp.empSalary, emp.empAddress.empCity, emp.empAddress.empArea];

//         values.forEach(value => {
//             const td = document.createElement("td");
//             td.textContent = value;
//             row.appendChild(td);
//         });

//         tbody.appendChild(row);
//     });

//     table.appendChild(tbody);
//     tableContainer.appendChild(table);
// }

// // Call Function to Render Table
// generateTable(employees);



        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            let isValid = true;

            let username = document.getElementById("username").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            document.getElementById("usernameError").innerText = "";
            document.getElementById("emailError").innerText = "";
            document.getElementById("passwordError").innerText = "";
            document.getElementById("confirmPasswordError").innerText = "";

            if (username.trim() === "") {
                document.getElementById("usernameError").innerText = "Username is required";
                isValid = false;
            }

            if (email.trim() === "" || !email.includes("@")) {
                document.getElementById("emailError").innerText = "Valid email is required";
                isValid = false;
            }

            if (password.length < 6) {
                document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
                isValid = false;
            }

            if (password !== confirmPassword) {
                document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
                isValid = false;
            }

            if (isValid) {
                alert("Form submitted successfully!");
            }
        });















 







      































