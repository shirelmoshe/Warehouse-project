import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./CreateProduct.css";

const schema = z.object({
  product_name: z.string().min(3, { message: 'Product name must be at least 3 characters' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters' }),
  price: z.number(),
  image: z.string().url({ message: 'Invalid image URL' }).optional(),
});

export type FormData = {
  product_name: string;
  description: string;
  price: number;
  image: string; 
};


type CreateProductProps = {
  onAddProduct: (newProduct: FormData) => void;
};

export const CreateProduct: React.FC<CreateProductProps> = ({ onAddProduct }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isUploadImage, setIsUploadImage] = useState(true); 
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
 
      onAddProduct(data);
      console.log("Product created successfully!");
      console.log("Image URL:", data.image); 
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploadImage(true);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setIsUploadImage(false); 
    setImagePreview(url);
  };

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
            {errors.description && (
              <p className="error-message">{errors.description.message}</p>
            )}

            <label htmlFor="price">Price</label>
            <input {...register('price')} id="price" type="text" className="input-field" />
            {errors.price && (
              <p className="error-message">{errors.price.message}</p>
            )}

          
            <div className="option-container">
              <label>Choose Image Source:</label>
              <div>
                <input
                  type="radio"
                  value="upload"
                  {...register('image')}
                  checked={isUploadImage}
                  onChange={() => setIsUploadImage(true)}
                />
                <span>Upload from Computer</span>
              </div>
              <div>
                <input
                  type="radio"
                  value="url"
                  {...register('image')}
                  checked={!isUploadImage}
                  onChange={() => setIsUploadImage(false)}
                />
                <span>Use Image URL</span>
              </div>
            </div>

        
            {isUploadImage ? (
              <div className="image-container">
                <label htmlFor="image">Upload Image from Computer</label>
                <input {...register('image')} id="image" type="file" onChange={onImageChange} />
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
                <input {...register('image')} id="imageUrl" type="text" className="input-field" onChange={onUrlChange} />
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
