/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { FaSort } from "react-icons/fa";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import PrintTable from "./components/PrintTable";

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");
  const componentRef = useRef();

  //   useEffect(() => {
  //     // This will log the current value of the ref once it's attached
  //     console.log("Component ref:", componentRef.current);
  //   }, [componentRef]);

  //   const handlePrint = useReactToPrint({
  //     content: () => componentRef.current,
  //   });

  // Filtered users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting function
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (!sortField) return 0;
    if (sortOrder === "asc") {
      return a[sortField].localeCompare(b[sortField]);
    } else {
      return b[sortField].localeCompare(a[sortField]);
    }
  });

  // Pagination logic
  const totalUsers = sortedUsers.length;
  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Handle sorting
  const handleSort = (field) => {
    setSortField(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //export to excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(currentUsers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Visible Users");
    XLSX.writeFile(workbook, "visible_users.xlsx");
  };

  //EXPORT AS PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const columns = ["Name", "Email", "Phone"];
    const rows = currentUsers.map((user) => [
      user.name,
      user.email,
      user.phone,
    ]);
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save("visible_users.pdf");
  };

  return (
    <div className="container mx-auto py-4 px-20">
      <div className="flex justify-between items-center my-4">
        {/* Search Filter */}
        <input
          type="text"
          placeholder="Search by name, email or phone..."
          className="mb-4 p-2 border-2 border-gray-300 rounded w-[25rem]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={exportToExcel}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Export to Excel
        </button>
        <button
          onClick={exportToPDF}
          className="bg-red-500 text-white p-2 rounded"
        >
          Export to PDF
        </button>

        {/* //Print Button
        <button
          onClick={handlePrint}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Print
        </button> */}
        <PrintTable data={currentUsers} title={"User Data"} />

        <div className="flex justify-around items-center gap-10">
          <div>
            Rows per page:
            <select
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
              className="ml-2 border rounded p-1"
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          <p>Total Users: {totalUsers}</p>
        </div>
      </div>

      {/* Table */}
      <div ref={componentRef}>
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th
                className="px-4 py-2 border bg-gray-100 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name <FaSort />
              </th>
              <th
                className="px-4 py-2 border bg-gray-100 cursor-pointer"
                onClick={() => handleSort("email")}
              >
                Email <FaSort />
              </th>
              <th className="px-4 py-2 border bg-gray-100">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={index} className="text-start">
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full flex items-center justify-center my-5">
        {/* Page Numbers */}
        <div>
          {Array.from(
            { length: Math.ceil(totalUsers / rowsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 border rounded ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UserTable;
