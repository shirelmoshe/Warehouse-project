import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

type FormData = {
  categoryName: string;
  description: string;
  image: string;
};

export const useCreateCategoryMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: FormData) => {
      // Call the server-side endpoint to create the category
      await axios.post('http://localhost:5000/create-category', data);

      console.log('Category created successfully!');
    },
    {
      onSuccess: () => {
        // Invalidate the relevant query when the mutation succeeds
        queryClient.invalidateQueries('categories');
      },
    }
  );
};

