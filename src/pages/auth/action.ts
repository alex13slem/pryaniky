import axios from 'axios';
import localforage from 'localforage';
import { ActionFunction, json, redirect } from 'react-router-dom';

interface Data {
  token: string;
}

interface Response {
  error_code: number;
  error_message: string;
  data: Data;
  profiling: string;
  timings: null;
}

interface BadResponse {
  error_code: number;
  error_text: string;
  data: null;
  profiling: string;
  timings: null;
}

const handlePost: ActionFunction = async ({ request }) => {
  try {
    const data = await request.json();
    const response = await axios.post<Response | BadResponse>(
      import.meta.env.VITE_API_URL + '/login',
      data,
    );
    localforage.removeItem('access_token');

    if (response.data.data !== null) {
      localforage.setItem('access_token', response.data.data.token);
      return json({ status: 200, message: 'OK' });
    } else if ('error_text' in response.data) {
      throw new Error(response.data.error_text || 'Unknown error');
    }
  } catch (error: unknown) {
    let message;
    if (error instanceof Error) {
      message = error.message;
    } else {
      message = 'Unknown error';
    }
    return json({ status: 500, message }, { status: 500 });
  }
};

const handleDelete: ActionFunction = async () => {
  localforage.removeItem('access_token');
  return redirect('/');
};

export const authAction: ActionFunction = async args => {
  const { request } = args;
  switch (request.method) {
    case 'POST':
      return handlePost(args);
    case 'DELETE':
      return handleDelete(args);
    default:
      return null;
  }
};
