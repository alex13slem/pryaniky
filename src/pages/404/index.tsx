import { ComponentProps, FC, HTMLAttributes } from 'react';
import { useRouteError } from 'react-router-dom';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const NotFoundPage: FC<Props> = () => {
  const error = useRouteError();
  console.error(error);

  return <main>{JSON.stringify(error, null, 2)}</main>;
};

export default NotFoundPage;
