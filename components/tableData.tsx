import React from "react";

const TableData = () => {
  return (
    <table className="table table-zebra">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Phone Number</th>
            <th className="py-3 px-6">Created At</th>
            <th className="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b">
            <td className="py-3 px-6">1</td>
            <td className="py-3 px-6">Shashi Ross</td>
            <td className="py-3 px-6">shashiross9@gmail.com</td>
            <td className="py-3 px-6">9097773221</td>
            <td className="py-3 px-6">July 11</td>
            <td className="flex justify-center gap-1 py-3">
                Edit | Delete
            </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableData;
