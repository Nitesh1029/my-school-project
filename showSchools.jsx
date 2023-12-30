// pages/showSchools.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get('/api/getSchools');
        setSchools(response.data);
      } catch (error) {
        console.error('Error fetching schools:', error);
      }
    };

    fetchSchools();
  }, []);

  return (
    <div>
      {schools.map((school) => (
        <div key={school.id}>
          <img src={school.image} alt={school.name} />
          <p>Name: {school.name}</p>
          <p>Address: {school.address}</p>
          <p>City: {school.city}</p>
        </div>
      ))}
    </div>
  );
}
