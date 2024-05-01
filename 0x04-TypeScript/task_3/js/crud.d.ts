import { RowID, RowElement } from './interface';

declare function insertRow(element: RowElement): RowID;
declare function updateRow(id: RowID, row: RowElement): RowID;
declare function deleteRow(id: RowID): RowID;

export { insertRow, read, updateRow, deleteRow };
