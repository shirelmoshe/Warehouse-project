import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './CreateCategory.css';
import {useCreateCategoryMutation} from '../../../server/product'; 



const schema = z.object({
  categoryName: z.string().min(3, { message: 'Category Name must be at least 3 characters' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters' }).max(50, { message: 'The description cannot be more than 50 characters' }),
  image: z.string().url({ message: 'Invalid image URL' }).optional(),
});

type FormData = {
  categoryName: string;
  description: string;
  image: string;
};

const CreateCategory = () => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    register,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [uploadOption, setUploadOption] = useState<"file" | "link">("file");

  const createCategoryMutation = useCreateCategoryMutation(); 

  const handleOptionChange = (option: "file" | "link") => {
    setUploadOption(option);
    setValue('image', ''); 
  };

  const onSubmit = (data: FormData) => {
    createCategoryMutation.mutate(data);
  };

  return (
    <div className="body-container">
      <div className="container form-container">
        <div className="contact-us">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="categoryName">Category Name</label>
            <input {...register('categoryName')} id="categoryName" type="text" className="input-field" />
            {errors.categoryName && <p className="error-message">{errors.categoryName.message}</p>}

            <label htmlFor="description">Description</label>
            <input {...register('description')} id="description" type="text" className="input-field" />
            {errors.description && (
              <p className="error-message">{errors.description.message}</p>
            )}

            {uploadOption === 'file' ? (
              <div className="image-input">
                <label>Upload Image:</label>
                <input
                  type="file"
                  {...register('image')}
                  id="image"
                  className="input-field"
                />
              </div>
            ) : (
              <div className="image-input">
                <label>Image URL:</label>
                <input
                  type="text"
                  {...register('image')}
                  id="image"
                  className="input-field"
                />
              </div>
            )}

            <div className="image-option">
              <label>
                <input
                  type="radio"
                  value="file"
                  checked={uploadOption === 'file'}
                  onChange={() => handleOptionChange('file')}
                />
                Upload from Computer
              </label>

              <label>
                <input
                  type="radio"
                  value="link"
                  checked={uploadOption === 'link'}
                  onChange={() => handleOptionChange('link')}
                />
                Upload from Link
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
