import { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerProfile({ user }) {
  const [profile, setProfile] = useState({ email: '', phone: '', address: '', profilePic: '' });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;
    setProfile({ email: user.email, phone: user.phone || '', address: user.address || '', profilePic: user.profilePic || '' });
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/orders/my-orders`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/auth/profile`,
        profile,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Profile updated');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <h2 className="text-3xl font-bold mb-4">Customer Profile</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="profilePic" className="block text-lg">Profile Picture URL</label>
          <input
            type="text"
            id="profilePic"
            value={profile.profilePic}
            onChange={(e) => setProfile({ ...profile, profilePic: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg">Phone</label>
          <input
            type="tel"
            id="phone"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-lg">Address</label>
          <textarea
            id="address"
            value={profile.address}
            onChange={(e) => setProfile({ ...profile, address: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded">Update Profile</button>
      </form>
      <h3 className="text-2xl font-bold mt-8 mb-4">Order Details</h3>
      <ul>
        {orders.map(order => (
          <li key={order._id} className="mb-2">
            Order #{order._id}: ${order.total.toFixed(2)} -{' '}
            {order.items.map(item => `${item.quantity}x ${item.menuItem.name}`).join(', ')}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-bold mt-8 mb-4">Reward Coins</h3>
      <p>{user?.rewardCoins || 0} coins</p>
    </div>
  );
}

export default CustomerProfile;