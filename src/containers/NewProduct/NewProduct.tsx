import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm';
import { AppDispatch } from '../../store';
import { createProductAsync } from '../../store/actions/productsAction';

const NewProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const onProductFormSubmit = (productData: FormData) => {
        dispatch(createProductAsync(productData));
        navigate('/');
    };
    return (
        <>
            <Typography variant='h4'>New product</Typography>
            <ProductForm onSubmit={onProductFormSubmit} />
        </>
    );
};

export default NewProduct;
