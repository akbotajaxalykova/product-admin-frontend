import { CircularProgress, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';
import { Product } from '../../store/productsSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await axiosApi.get<Product>(`/products/${id}`);
        setProduct(response.data);
      } catch (error: unknown) {
        console.error('Error fetch product', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
if (isLoading){
    return (
        <Box textAlign='center' mt ={4}>
            <CircularProgress/>
        </Box>
    );
}
console.log(product);

  return (
    <Box mt={4}>
      {product && (
        <>
          <Typography variant='h4'>{product.title}</Typography>
          <Typography variant='body1' mt={2}>
            {product.price} KZT
          </Typography>
          <Typography variant='body2' mt={1}>
            {product.description}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default ProductDetails;