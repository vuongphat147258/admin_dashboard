import React, { useState } from 'react';

export default function Users() {
  // State to store list of users
  const [users, setUsers] = useState([]);
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit form data
    // Assuming you have a function to add user to the list
    // For simplicity, I'm just logging the form data
    console.log("Form data submitted:", e.target.elements);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Users Management</h1>
      {/* Search bar */}
      <div className="mb-4">
        <input type="text" placeholder="Search user..." className="border border-gray-400 px-4 py-2 rounded-lg mb-4" />
      </div>
      {/* User list */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 py-2">{user.address}</td>
              <td className="border px-4 py-2">
                <button className="bg-yellow-500 text-white px-2 py-1 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center my-4">
        <button className="bg-gray-200 px-3 py-1 mr-2">Prev</button>
        <button className="bg-gray-200 px-3 py-1">Next</button>
      </div>

      {/* Add/Edit user form */}
      <form onSubmit={handleSubmit} className="border border-gray-400 p-4">
        <h2 className="text-lg font-bold mb-4 text-center">Add User</h2>
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
          <input type="text" id="id" name="id" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="text" id="phone" name="phone" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" className="mt-1 p-2 w-full border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  )
}
