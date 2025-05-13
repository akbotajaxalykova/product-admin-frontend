import axios from 'axios';
import { AppDispatch } from '..';
import {
  Category,
  fetchCategoriesFailure,
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
} from '../reducers/categoriesSlice';
import axiosApi from '../../axiosApi';

export const fetchCategoriesAsync = () => async (dispatch: AppDispatch) => {
  dispatch(fetchCategoriesRequest());
  try {
    const response = await axiosApi.get<Category[]>('/categories');
    dispatch(fetchCategoriesSuccess(response.data));
  } catch (error: unknown) {
    let errorMessage = 'Unknown error';
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data ? String(error.response.data) : error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(fetchCategoriesFailure(errorMessage));
  }
};