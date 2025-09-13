import { useState, useEffect } from 'react';
import axios from 'axios';

function ScanToOrder() {
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/qrcode`)
      .then(res => setQrCode(res.data.qrCode))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="text-center p-4">
      <h2 className="text-3xl font-bold mb-4">Scan to Order</h2>
      <p className="text-lg mb-4">Scan this QR code to view the menu and place your order directly.</p>
      {qrCode && <img src={qrCode} alt="QR Code" className="mx-auto" />}
    </div>
  );
}

export default ScanToOrder;