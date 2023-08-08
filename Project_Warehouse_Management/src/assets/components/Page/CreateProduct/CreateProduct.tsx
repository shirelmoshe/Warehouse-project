import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { Select } from 'antd';
import { useFetchCategories } from '../CategoryManagement/CategoryManagement';

import './CreateProduct.css';

const { Option } = Select;

const schema = z.object({
  product_name: z.string().min(3, { message: 'Product name must be at least 3 characters' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters' }),
  price: z.number().int().positive(),
  category: z.string(),
});

type FormData = z.infer<typeof schema>;

const CreateProduct: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    register,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isUploadImage, setIsUploadImage] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post('http://localhost:5000/create-product', data);
      console.log('Product created successfully!', data);
    } catch (error) {
      console.error('Error creating product:', error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log('Response:', error.response.data);
        }
      }
    }
  };
  

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploadImage(true);
      setImagePreview(URL.createObjectURL(file));
      setValue('image', file); 
    }
  };
  
  const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setIsUploadImage(false);
    setImagePreview(url);
    setValue('image', url); 
  };
  
  
  const { data: categories } = useFetchCategories();

  return (
    <div className="body-container">
      <div className="container form-container">
        <div className="contact-us">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="product_name">Product name</label>
            <input {...register('product_name')} id="product_name" type="text" className="input-field" />
            {errors.product_name && <p className="error-message">{errors.product_name.message}</p>}

            <label htmlFor="description">Description</label>
            <input {...register('description')} id="description" type="text" className="input-field" />
            {errors.description && <p className="error-message">{errors.description.message}</p>}

            <label htmlFor="price">Price</label>
            <input {...register('price', { valueAsNumber: true })} id="price" type="number" />
            {errors.price && <p className="error-message">{errors.price.message}</p>}

            <label htmlFor="category">Category</label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select {...field} id="category" className="input-field">
                  {categories?.map((category: any, index: number) => (
                    <Option key={index} value={category.categoryName}>
                      {category.categoryName}
                    </Option>
                  ))}
                </Select>
              )}
            />
            {errors.category && <p className="error-message">{errors.category.message}</p>}

            <div className="option-container">
              <label>Choose Image Source:</label>
              <div>
                <input
                  type="radio"
                  value="upload"
                  checked={isUploadImage}
                  onChange={() => setIsUploadImage(true)}
                />
                <span>Upload from Computer</span>
              </div>
              <div>
                <input
                  type="radio"
                  value="url"
                  checked={!isUploadImage}
                  onChange={() => setIsUploadImage(false)}
                />
                <span>Use Image URL</span>
              </div>
            </div>

            {isUploadImage ? (
              <div className="image-container">
                <label htmlFor="image">Upload Image from Computer</label>
                <input id="image" type="file" onChange={onImageChange} />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Product Preview"
                    className="image-preview"
                  />
                )}
              </div>
            ) : (
              <div className="image-container">
                <label htmlFor="imageUrl">Enter Image URL</label>
                <input id="imageUrl" type="text" className="input-field" onChange={onUrlChange} />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Product Preview"
                    className="image-preview"
                  />
                )}
              </div>
            )}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
