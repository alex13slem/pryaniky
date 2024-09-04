import { AppBar, Button, Container, IconButton } from '@mui/material';
import { ComponentProps, FC, HTMLAttributes } from 'react';
import { Link, useRouteLoaderData, useSubmit } from 'react-router-dom';
import { RootLoaderData } from '../../pages/root.loader';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const SiteHeader: FC<Props> = () => {
  const { accessToken } = useRouteLoaderData('root') as RootLoaderData;
  const submit = useSubmit();

  function handleLogoutClick() {
    submit(null, {
      method: 'delete',
      action: '/auth',
      navigate: false,
    });
  }

  return (
    <AppBar position="sticky" sx={{ zIndex: 50, paddingBlock: '0.5rem' }}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton color="inherit">
          <Link to="/">
            <svg
              width={200}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 131.79 27.54"
              fill="currentColor"
            >
              <g id="Слой_2" data-name="Слой 2">
                <g id="Слой_1-2" data-name="Слой 1">
                  <rect
                    x="114.03"
                    y="4.09"
                    width="2.04"
                    height="23.44"
                    fill="currentColor"
                  />
                  <rect
                    x="121.61"
                    y="1.54"
                    width="2.04"
                    height="22.27"
                    transform="translate(44.88 -83) rotate(45)"
                    fill="currentColor"
                  />
                  <rect
                    x="129.75"
                    y="4.08"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <rect
                    x="94.49"
                    y="4.08"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <polygon
                    points="95.93 21.19 94.49 19.75 110.16 4.09 112.94 4.09 95.93 21.19"
                    fill="currentColor"
                  />
                  <polygon
                    points="99 17.64 100.44 16.2 111.76 27.53 108.88 27.54 99 17.64"
                    fill="currentColor"
                  />
                  <rect
                    x="74.7"
                    y="4.08"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <rect
                    x="82.27"
                    y="1.54"
                    width="2.04"
                    height="22.27"
                    transform="translate(33.36 -55.18) rotate(45)"
                    fill="currentColor"
                  />
                  <rect
                    x="90.42"
                    y="4.08"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <rect
                    y="4.09"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <rect
                    x="7.86"
                    y="-3.77"
                    width="2.04"
                    height="17.76"
                    transform="translate(13.98 -3.77) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="15.72"
                    y="4.09"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <rect
                    x="54.9"
                    y="4.08"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <rect
                    x="62.76"
                    y="8.35"
                    width="2.04"
                    height="17.76"
                    transform="translate(81.01 -46.55) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="70.63"
                    y="4.08"
                    width="2.04"
                    height="23.45"
                    fill="currentColor"
                  />
                  <rect
                    x="44.35"
                    y="8.81"
                    width="2.04"
                    height="5.98"
                    transform="translate(33.57 57.17) rotate(-90)"
                    fill="currentColor"
                  />
                  <rect
                    x="26.31"
                    y="8.81"
                    width="2.04"
                    height="5.98"
                    transform="translate(15.53 39.13) rotate(-90)"
                    fill="currentColor"
                  />
                  <rect
                    x="24.56"
                    y="-2.66"
                    width="2.04"
                    height="7.36"
                    transform="translate(26.6 -24.55) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="46.33"
                    y="-2.43"
                    width="2.04"
                    height="6.91"
                    transform="translate(48.37 -46.32) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="24.56"
                    y="-2.66"
                    width="2.04"
                    height="7.36"
                    transform="translate(26.6 -24.55) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="46.33"
                    y="-2.43"
                    width="2.04"
                    height="6.91"
                    transform="translate(48.37 -46.32) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="24.56"
                    y="-2.66"
                    width="2.04"
                    height="7.36"
                    transform="translate(26.6 -24.55) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="46.33"
                    y="-2.43"
                    width="2.04"
                    height="6.91"
                    transform="translate(48.37 -46.32) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="24.56"
                    y="-2.66"
                    width="2.04"
                    height="7.36"
                    transform="translate(26.6 -24.55) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="46.33"
                    y="-2.43"
                    width="2.04"
                    height="6.91"
                    transform="translate(48.37 -46.32) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="46.33"
                    y="-2.43"
                    width="2.04"
                    height="6.91"
                    transform="translate(48.37 -46.32) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="24.43"
                    y="-2.66"
                    width="2.04"
                    height="7.36"
                    transform="translate(26.47 -24.43) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="46.33"
                    y="-2.43"
                    width="2.04"
                    height="6.91"
                    transform="translate(48.37 -46.32) rotate(90)"
                    fill="currentColor"
                  />
                  <rect
                    x="35.33"
                    y="8.81"
                    width="2.04"
                    height="5.98"
                    transform="translate(24.55 48.15) rotate(-90)"
                    fill="currentColor"
                  />
                  <polygon
                    points="38.16 25.5 38.16 27.54 33.39 27.54 35.43 25.5 38.16 25.5"
                    fill="currentColor"
                  />
                  <polygon
                    points="43.17 22.51 40.3 22.5 35.28 27.53 38.16 27.53 43.17 22.51"
                    fill="currentColor"
                  />
                  <rect
                    x="50.83"
                    y="4.08"
                    width="2.04"
                    height="23.45"
                    transform="translate(103.7 31.61) rotate(-180)"
                    fill="currentColor"
                  />
                  <path
                    fill="currentColor"
                    d="M50.87,6.12V16.24h-7c-.72-.13-4.5-1-4.5-5.11s3.73-4.89,4.49-5h7m2-2H43.73s-6.35.75-6.35,7.05,6.35,7.15,6.35,7.15h9.14V4.08Z"
                  />
                  <rect
                    x="19.79"
                    y="17.93"
                    width="2.04"
                    height="9.59"
                    fill="currentColor"
                  />
                  <path
                    fill="currentColor"
                    d="M28.79,6.12c.79.12,4.49.93,4.49,5s-3.71,5-4.5,5.1h-7V6.12h7m.14-2H19.79V18.23h9.14s6.35-.86,6.35-7.13-6.35-7-6.35-7Z"
                  />
                </g>
              </g>
            </svg>
          </Link>
        </IconButton>
        {accessToken && (
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogoutClick}
          >
            Выйти
          </Button>
        )}
      </Container>
    </AppBar>
  );
};

export default SiteHeader;
