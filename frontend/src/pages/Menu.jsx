import { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItem from '../components/MenuItem';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/menu`)
      .then(res => setMenuItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleOrder = async (itemId) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/orders`,
        { items: [{ menuItemId: itemId, quantity: 1 }] },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Order placed!');
    } catch (err) {
      console.error(err);
      alert('Please login to place an order');
    }
  };

  return (
    <div className="container mx-auto p-4 pt-20">
      <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menuItems.map(item => (
          <div key={item._id}>
            <MenuItem item={item} />
            <button
              onClick={() => handleOrder(item._id)}
              className="bg-gray-700 text-white px-4 py-2 rounded mt-2"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;