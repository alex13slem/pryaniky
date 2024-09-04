import { HeadCell } from './types';

const headCells: readonly HeadCell[] = [
  {
    id: 'documentName',
    numeric: false,
    disablePadding: true,
    label: 'Название документа',
  },
  {
    id: 'documentType',
    numeric: false,
    disablePadding: false,
    label: 'Тип документа',
  },
  {
    id: 'documentStatus',
    numeric: false,
    disablePadding: false,
    label: 'Статус документа',
  },
  {
    id: 'employeeNumber',
    numeric: true,
    disablePadding: false,
    label: 'Табельный номер',
  },
  {
    id: 'employeeSigDate',
    numeric: false,
    disablePadding: false,
    label: 'Дата подписи сотрудника',
  },
  {
    id: 'companySigDate',
    numeric: false,
    disablePadding: false,
    label: 'Дата подписи компании',
  },
];

export default headCells;
