import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./CreateCategory.css";

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

export const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [uploadOption, setUploadOption] = useState<"file" | "link">("file");

  const onSubmit = async (data: FormData) => {
    try {
  
      await new Promise((resolve) => setTimeout(resolve, 1000));

     
      console.log("Category created successfully!");
    } catch (error) {
      
      console.error("Error creating category:", error);
    }
  };

  const handleOptionChange = (option: "file" | "link") => {
    setUploadOption(option);
    setValue("image", ""); 
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

            <div className="image-input">
              <label>Upload Image:</label>
              <input
                type={uploadOption === "file" ? "file" : "text"}
                {...register('image')}
                className="input-field"
                disabled={uploadOption === "link"}
              />
            </div>

        
            <div className="image-option">
              <label>
                <input
                  type="radio"
                  value="file"
                  checked={uploadOption === "file"}
                  onChange={() => handleOptionChange("file")}
                />
                Upload from Computer
              </label>
              <label>
                <input
                  type="radio"
                  value="link"
                  checked={uploadOption === "link"}
                  onChange={() => handleOptionChange("link")}
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
