/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.create(row);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.update(newRowID, updatedRow);
CRUD.remove(newRowID);
