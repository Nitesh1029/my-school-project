// pages/api/getSchools.js
import { connect } from '../../utils/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { execute } = await connect();
      const result = await execute('SELECT id, name, address, city, image FROM schools');
      res.status(200).json(result);
    } catch (error) {
      console.error('Error fetching schools:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
