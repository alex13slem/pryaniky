import axios from 'axios';
import localforage from 'localforage';
import { LoaderFunction } from 'react-router-dom';
import {
  GetDataRejectResponse,
  GetDataSuccessResponse,
} from '../../types/data';

export const mainLoader: LoaderFunction = async () => {
  const accessToken = await localforage.getItem('access_token');
  if (typeof accessToken !== 'string') return null;
  const response = await axios.get<
    GetDataSuccessResponse | GetDataRejectResponse
  >(import.meta.env.VITE_API_URL + '/userdocs/get', {
    headers: {
      'x-auth': accessToken,
    },
  });
  if (response.data.data === null) return [];
  return response.data.data;
};
