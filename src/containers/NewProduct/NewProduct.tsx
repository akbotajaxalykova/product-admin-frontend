import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm';
import { AppDispatch, RootState } from '../../store';
import { createProductAsync } from '../../store/actions/productsAction';
import { useEffect } from 'react';
import { fetchCategoriesAsync } from '../../store/actions/categoriesActions';
const NewProduct = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
const {categories}= useSelector((state:RootState)=>state.categories)

    const onProductFormSubmit = (productData: FormData) => {
        dispatch(createProductAsync(productData));
        navigate('/');
    };
    useEffect(()=>{
        dispatch(fetchCategoriesAsync());
    }, [dispatch]);
    return (
        <>
            <Typography variant='h4'>New product</Typography>
            <ProductForm onSubmit={onProductFormSubmit}categories={categories} />
        </>
    );
};

export default NewProduct;
