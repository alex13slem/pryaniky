import {
  Box,
  Checkbox,
  FormControlLabel,
  Input,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Item } from '../../../types/data';
import TableHead from './head';
import TableToolbar from './toolbar';
import { Order } from './types';
import { getComparator } from './utils';

// Описание заголовков таблицы

export default function EnhancedTable({ rows }: { rows: Item[] }) {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Item>('documentName');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { control, handleSubmit, setValue, watch } = useForm();
  const onSubmit = data => console.log(data);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Item,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      rows
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar numSelected={selected.length} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <TableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <Controller
                          name={`rows[${index}].documentName`}
                          control={control}
                          defaultValue={row.documentName}
                          render={({ field }) => (
                            <Input
                              {...field}
                              onClick={e => e.stopPropagation()}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Controller
                          name={`rows[${index}].documentType`}
                          control={control}
                          defaultValue={row.documentType}
                          render={({ field }) => (
                            <Input
                              {...field}
                              onClick={e => e.stopPropagation()}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Controller
                          name={`rows[${index}].documentStatus`}
                          control={control}
                          defaultValue={row.documentStatus}
                          render={({ field }) => (
                            <Input
                              {...field}
                              onClick={e => e.stopPropagation()}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Controller
                          name={`rows[${index}].employeeNumber`}
                          control={control}
                          defaultValue={row.employeeNumber}
                          render={({ field }) => (
                            <Input
                              {...field}
                              onClick={e => e.stopPropagation()}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Controller
                          name={`rows[${index}].employeeSigDate`}
                          control={control}
                          defaultValue={
                            new Date(row.employeeSigDate)
                              .toISOString()
                              .split('T')[0]
                          }
                          render={({ field }) => (
                            <Input
                              type="date"
                              {...field}
                              value={
                                field.value
                                  ? new Date(field.value)
                                      .toISOString()
                                      .split('T')[0]
                                  : ''
                              }
                              onClick={e => e.stopPropagation()}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Controller
                          name={`rows[${index}].companySigDate`}
                          control={control}
                          defaultValue={
                            new Date(row.companySigDate)
                              .toISOString()
                              .split('T')[0]
                          }
                          render={({ field }) => (
                            <Input
                              type="date"
                              {...field}
                              value={
                                field.value
                                  ? new Date(field.value)
                                      .toISOString()
                                      .split('T')[0]
                                  : ''
                              }
                              onClick={e => e.stopPropagation()}
                            />
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </form>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Компактный"
      />
    </Box>
  );
}
