import React from "react";

const PrintTable = ({ data, title }) => {
  const printTable = () => {
    const originalContent = document.body.innerHTML; // Save original content
    const printContent = `
      <html>
        <head>
          <title>${title}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid black;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #000;
              color: white;
            }
            h1 {
              text-align: center;
            }
          </style>
        </head>
        <body>
          <h1>${title}</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              ${data
                .map(
                  (user) => `
                  <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                  </tr>
                `
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `;

    // Create a new div to hold the print content
    const printWindow = document.createElement("div");
    printWindow.innerHTML = printContent;

    // Hide all other content
    document.body.innerHTML = ""; // Clear the body content
    document.body.appendChild(printWindow); // Append print content

    // Print the content
    window.print();

    // Restore the original content
    document.body.innerHTML = originalContent;
  };

  return (
    <button
      onClick={printTable}
      className="bg-green-500 text-white p-2 rounded"
    >
      Print Table
    </button>
  );
};

export default PrintTable;
