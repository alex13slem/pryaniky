import { Item } from '../../../types/data';

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Item;
  label: string;
  numeric: boolean;
}
export type Order = 'asc' | 'desc';
