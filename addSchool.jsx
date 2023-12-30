// pages/addSchool.jsx
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      // Send data to your API endpoint to store in the database
      await axios.post('/api/addSchool', data);
      router.push('/showSchools');
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name:</label>
      <input {...register('name', { required: true })} />
      {errors.name && <p>Name is required</p>}

      {/* Add other form fields and validations (address, city, state, contact, image, email_id) */}

      <button type="submit">Submit</button>
    </form>
  );
}
