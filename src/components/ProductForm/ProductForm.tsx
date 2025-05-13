import { Button, MenuItem } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FormEvent, useState } from 'react';
import FileInput from '../UI/Form/FileInput';


export interface Category {
    _id:string;
    title:string;
}
const RootForm = styled('form')(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

interface ProductFormProps {
    onSubmit: (productData: FormData) => void;
    categories: Category[]
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, categories }) => {
    const [state, setState] = useState({
        title: '',
        price: '',
        category: '',
        description: '',
        image: null,
    });

    const submitFormHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', state.title);
        formData.append('price', state.price);
        formData.append('category', state.category);
        formData.append('description', state.description);
        if (state.image) {
            formData.append('image', state.image);
        }
        onSubmit(formData);
    };

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const file = event.target.files?.[0] || null;

        setState(prevState => ({
            ...prevState,
            [name]: file,
        }));
    };

    return (
        <RootForm autoComplete='off' onSubmit={submitFormHandler}>
            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id='title'
                    label='Title'
                    value={state.title}
                    onChange={inputChangeHandler}
                    name='title'
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id='price'
                    label='Price'
                    value={state.price}
                    onChange={inputChangeHandler}
                    name='price'
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    fullWidth
                    variant='outlined'
                    id='description'
                    label='Description'
                    value={state.description}
                    onChange={inputChangeHandler}
                    name='description'
                />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <TextField
                    select
                    fullWidth
                    variant='outlined'
                    id='category'
                    label='Category'
                    value={state.category}
                    onChange={inputChangeHandler}
                    name='category'
                >

                    {
                        categories?.map(c=>
                            <MenuItem key={c._id} value={c._id}>
                            {c.title}
                            </MenuItem>
                        )
                    }
                </TextField>

            </Grid>
            <Grid>
                <FileInput label='Image' name='image' onChange={fileChangeHandler} />
            </Grid>

            <Grid size={{ xs: 12 }}>
                <Button type='submit' color='primary' variant='contained'>
                    Create
                </Button>
            </Grid>
        </RootForm>
    );
};

export default ProductForm;