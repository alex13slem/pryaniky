import localforage from 'localforage';
import { json, LoaderFunction, redirect } from 'react-router-dom';

export const rootLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const accessToken = (await localforage.getItem('access_token')) ?? null;
  if (!accessToken && url.pathname !== '/auth') {
    return redirect('/auth');
  }
  return json({ accessToken }, { status: 200 });
};

export interface RootLoaderData {
  accessToken: string | null;
}
