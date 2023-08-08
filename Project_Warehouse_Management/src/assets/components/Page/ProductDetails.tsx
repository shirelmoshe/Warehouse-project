import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



interface ProductDetailsProps {
  products: Product[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ products }) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const product = products.find((product) => product.id === Number(productId));
    setSelectedProduct(product || null);
  }, [products, productId]);

  if (!selectedProduct) {
    return <div>מוצר לא נמצא</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.product_name}</h2>
      <p>{selectedProduct.description}</p>
      {/* הוסיפי פרטים נוספים על המוצר כאן */}
    </div>
  );
};

export default ProductDetails;
