import axios from 'axios';

function MenuItem({ item, isAdmin, onUpdate, onDelete }) {
  const handleToggleActive = async () => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/menu/${item._id}`,
        { isActive: !item.isActive },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      onUpdate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/menu/${item._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      onDelete();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="menu-item bg-white p-4 rounded-lg shadow-md">
      <img src={item.image || 'https://via.placeholder.com/300x200'} alt={item.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">{item.name}</h3>
      <p className="text-lg">${item.price.toFixed(2)}</p>
      {isAdmin && (
        <div className="mt-2">
          <p>Status: {item.isActive ? 'Active' : 'Inactive'}</p>
          <button onClick={handleToggleActive} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
            {item.isActive ? 'Disable' : 'Enable'}
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuItem;