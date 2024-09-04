import { Backdrop, CircularProgress } from '@mui/material';
import { useAtom } from 'jotai';
import { ComponentProps, FC, HTMLAttributes } from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from '../components/site-header';
import { loadingScreenAtom } from '../store/loadingScreenAtom';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const RootLayout: FC<Props> = () => {
  const [loadingScreen, setLoadingScreen] = useAtom(loadingScreenAtom);
  return (
    <>
      <SiteHeader />
      <Outlet />
      <Backdrop
        sx={theme => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loadingScreen}
        onClick={() => setLoadingScreen(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default RootLayout;
