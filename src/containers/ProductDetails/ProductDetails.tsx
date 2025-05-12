import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../assets/defaultImage.avif';
import axiosApi from '../../axiosApi';
import { apiURL } from '../../constants';
import { Product } from '../../store/reducers/productsSlice';

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
        console.error('Error fetching product', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const cardImage = product?.image ? `${apiURL}/uploads/${product.image}` : defaultImage;

  if (isLoading) {
    return (
      <Box textAlign='center' mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth='sm'>
      <Box mt={6}>
        {product && (
          <Card sx={{ borderRadius: 3, boxShadow: 5 }}>
            <CardHeader
              title={product.title}
              titleTypographyProps={{ variant: 'h5', fontWeight: 'bold' }}
              sx={{ textAlign: 'center', paddingBottom: 0 }}
            />

            <CardMedia
              image={cardImage}
              title={product.title}
              sx={{
                height: 0,
                paddingTop: '56.25%', // 16:9
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                marginY: 2,
              }}
            />

            <CardContent>
              <Typography variant='h6' gutterBottom>
                Price: <strong>{product.price} KZT</strong>
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                {product.description}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default ProductDetails;