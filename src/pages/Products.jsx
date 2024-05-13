import React, { useState } from 'react';

export default function Products() {
	 // State to store list of products
	 const [products, setProducts] = useState([]);
  
	 // State to manage form input
	 const [formData, setFormData] = useState({
	   id: '',
	   name: '',
	   description: '',
	   image: ''
	 });
   
	 // Function to handle form input change
	 const handleChange = (e) => {
	   const { name, value } = e.target;
	   setFormData({ ...formData, [name]: value });
	 };
   
	 // Function to handle image file change
	 const handleImageChange = (e) => {
	   const file = e.target.files[0];
	   const reader = new FileReader();
	   reader.onloadend = () => {
		 setFormData({ ...formData, image: reader.result });
	   };
	   if (file) {
		 reader.readAsDataURL(file);
	   }
	 };
   
	 // Function to handle form submission
	 const handleSubmit = (e) => {
	   e.preventDefault();
	   console.log(formData);
	   setProducts([...products, formData]);
	   setFormData({
		 id: '',
		 name: '',
		 description: '',
		 image: ''
	   });
	 };
   
	 return (
	   <div className="container mx-auto">
		 <h1 className="text-2xl font-bold my-4">Products Management</h1>
		 <div className="mb-4">
		 	<input type="text" placeholder="Search product..." className="border border-gray-400 px-4 py-2 rounded-lg mr-2" />
		 </div>
		 <table className="w-full">
		   <thead>
			 <tr>
			   <th className="border px-4 py-2">ID</th>
			   <th className="border px-4 py-2">Name</th>
			   <th className="border px-4 py-2">Description</th>
			   <th className="border px-4 py-2">Image</th>
			   <th className="border px-4 py-2">Action</th>
			 </tr>
		   </thead>
		   <tbody>
			 {products.map((product, index) => (
			   <tr key={index}>
				 <td className="border px-4 py-2">{product.id}</td>
				 <td className="border px-4 py-2">{product.name}</td>
				 <td className="border px-4 py-2">{product.description}</td>
				 <td className="border px-4 py-2"><img src={product.image} alt={product.name} className="h-16 w-16 object-cover" /></td>
				 <td className="border px-4 py-2">
				   <button className="bg-yellow-500 text-white px-2 py-1 mr-2">Edit</button>
				   <button className="bg-red-500 text-white px-2 py-1">Delete</button>
				 </td>
			   </tr>
			 ))}
		   </tbody>
		 </table>
		 <div className="flex justify-center my-4">
		   <button className="bg-gray-200 px-3 py-1 mr-2">Prev</button>
		   <button className="bg-gray-200 px-3 py-1">Next</button>
		 </div>
		 <form onSubmit={handleSubmit} className="border border-gray-400 p-4">
		   <h2 className="text-lg font-bold mb-4 text-center">Add Product</h2>
		   <div className="mb-4">
			 <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID</label>
			 <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" />
		   </div>
		   <div className="mb-4">
			 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
			 <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" />
		   </div>
		   <div className="mb-4">
			 <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
			 <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="mt-1 p-2 w-full border-gray-300 rounded-md"></textarea>
		   </div>
		   <div className="mb-4">
			 <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
			 <input type="file" id="image" name="image" onChange={handleImageChange} className="mt-1 p-2 w-full border-gray-300 rounded-md" />
		   </div>
		   <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
		 </form>
	   </div>
	 )
}