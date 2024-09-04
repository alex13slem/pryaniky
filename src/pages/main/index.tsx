import { Container } from '@mui/material';
import { ComponentProps, FC, HTMLAttributes } from 'react';
import { useLoaderData } from 'react-router-dom';
import EnhancedTable from '../../components/site-header/table';
import { Item } from '../../types/data';
import css from './style.module.css';

interface Props extends ComponentProps<FC>, HTMLAttributes<HTMLDivElement> {}

const MainPage: FC<Props> = () => {
  const data = useLoaderData() as Item[];
  console.log(data);

  return (
    <Container component={'main'} className={css.root}>
      <EnhancedTable rows={data} />
    </Container>
  );
};

export default MainPage;

// companySigDate: Дата подписи компанией
// companySignatureName: Название подписи компании
// documentName: Название документа
// documentStatus: Статус документа
// documentType: Тип документа
// employeeNumber: Табельный номер сотрудника
// employeeSigDate: Дата подписи сотрудником
// employeeSignatureName: Подпись сотрудника
// id: Идентификатор (ID)
