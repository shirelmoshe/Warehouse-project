import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DatePicker } from "antd";

import dayjs from "dayjs";

import './AddingProduct.css';

const schema = z.object({
  expiryDate: z.date(),
  amount: z.number(),
});

type FormData = {
  expiryDate: dayjs.Dayjs; 
  amount: number;
};

export const AddingProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
   
      console.log(data.expiryDate); 

    
      await new Promise((resolve) => setTimeout(resolve, 1000));

     
      console.log("Product created successfully!");
    } catch (error) {
     
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="body-container">
      <div className="container form-container">
        <div className="contact-us">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="expiryDate">Expiry Date</label>
            <DatePicker
              {...register('expiryDate')}
              id="expiryDate"
              className="input-field"
            />
            {errors.expiryDate && (
              <p className="error-message">{errors.expiryDate.message}</p>
            )}

            <label htmlFor="amount">Amount</label>
            <input {...register('amount')} id="amount" type="number" className="input-field" />
            {errors.amount && <p className="error-message">{errors.amount.message}</p>}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
