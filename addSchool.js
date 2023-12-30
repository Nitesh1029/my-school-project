// pages/api/addSchool.js
import { connect } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, address, city, state, contact, image, email_id } = req.body;

    try {
      const { execute } = await connect();
      const result = await execute(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, image, email_id]
      );
      
      res.status(200).json({ success: true, result });
    } catch (error) {
      console.error('Error adding school:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
 