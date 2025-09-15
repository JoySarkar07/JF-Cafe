import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem';

function AdminDashboard({ user }) {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [revenue, setRevenue] = useState({ weekly: 0, monthly: 0 });
  const [newItem, setNewItem] = useState({ name: '', price: '', image: '', isActive: true });

  useEffect(() => {
    if (!user || user.role !== 'ADMIN') return;
    fetchProducts();
    fetchOrders();
  }, [user]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/product`);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/order`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setOrders(res.data);
      calculateRevenue(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const calculateRevenue = (orders) => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const weekly = orders
      .filter(order => new Date(order.createdAt) > oneWeekAgo)
      .reduce((sum, order) => sum + order.totalAmount, 0);

    const monthly = orders
      .filter(order => new Date(order.createdAt) > oneMonthAgo)
      .reduce((sum, order) => sum + order.totalAmount, 0);

    setRevenue({ weekly, monthly });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/product`,
        { ...newItem, quantity: 100, discount: 0, category: 'default', description: '' }, // Align with backend Product schema
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setNewItem({ name: '', price: '', image: '', isActive: true });
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Total Menu Items</h3>
          <p>{products.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Total Orders</h3>
          <p>{orders.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Revenue</h3>
          <p>Weekly: ${revenue.weekly.toFixed(2)}</p>
          <p>Monthly: ${revenue.monthly.toFixed(2)}</p>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">Add Menu Item</h3>
      <form onSubmit={handleAddItem} className="mb-8">
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newItem.image}
          onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
          className="p-2 border rounded mr-2"
        />
        <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded">Add Item</button>
      </form>
      <h3 className="text-2xl font-bold mb-4">Manage Menu</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(item => (
          <MenuItem key={item._id} item={item} isAdmin={user.role === 'ADMIN'} onUpdate={fetchProducts} onDelete={fetchProducts} />
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;