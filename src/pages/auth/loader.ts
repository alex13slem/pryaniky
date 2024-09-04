import localforage from 'localforage';
import { LoaderFunction, redirect } from 'react-router-dom';

export const authLoader: LoaderFunction = async () => {
  const accessToken = (await localforage.getItem('access_token')) ?? null;
  if (accessToken) {
    return redirect('/');
  }
  return null;
};
