import { zodResolver } from '@hookform/resolvers/zod';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Alert,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
} from '@mui/material';
import { useAtom } from 'jotai';
import React, {
  ComponentProps,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useFetcher, useNavigate } from 'react-router-dom';
import { Auth, authSchema } from '../../schemas/authSchema';
import { loadingScreenAtom } from '../../store/loadingScreenAtom';

interface Props
  extends ComponentProps<React.FC>,
    HTMLAttributes<HTMLDivElement> {}

const AuthPage: React.FC<Props> = () => {
  const [_, setLoadingScreen] = useAtom(loadingScreenAtom);
  const [showPassword, setShowPassword] = React.useState(false);
  const [badCredentialsTrigger, setBadCredentialsTrigger] =
    useState<boolean>(false);
  const fetcher = useFetcher();
  const navigate = useNavigate();

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Auth>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<Auth> = data => {
    fetcher.submit(JSON.stringify(data), {
      method: 'post',
      action: '/auth',
      encType: 'application/json',
    });
  };

  useEffect(() => {
    console.log(fetcher);

    if (fetcher.state === 'submitting') {
      setLoadingScreen(true);
    }
    if (fetcher.state === 'idle') {
      setLoadingScreen(false);
    }
    if (fetcher.data?.status === 200) {
      setLoadingScreen(false);
      navigate('/');
    }
    if (fetcher.data?.status === 500) {
      setBadCredentialsTrigger(true);
    }
  }, [fetcher.data, fetcher.state]);

  return (
    <Container component={'main'} sx={{ paddingBlock: '4rem' }}>
      <Stack
        spacing={2}
        alignItems={'center'}
        component={'form'}
        maxWidth={'40ch'}
        marginInline={'auto'}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="username"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }) => (
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="username">Имя пользователя</InputLabel>
              <OutlinedInput
                {...field}
                label="Имя пользователя"
                error={!!errors.username}
              />
              <FormHelperText error>{errors.username?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field }) => (
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <OutlinedInput
                {...field}
                id="password"
                error={!!errors.password}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Пароль"
              />
              <FormHelperText error>{errors.password?.message}</FormHelperText>
            </FormControl>
          )}
        />

        <Button type="submit" variant="contained">
          Войти
        </Button>
      </Stack>

      <Snackbar
        open={badCredentialsTrigger}
        autoHideDuration={6000}
        onClose={() => setBadCredentialsTrigger(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setBadCredentialsTrigger(false)}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {fetcher.data?.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AuthPage;
