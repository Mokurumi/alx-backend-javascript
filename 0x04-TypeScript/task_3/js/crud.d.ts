import { RowID, RowElement } from './interface';

declare function create(element: RowElement): RowID;
declare function read(id: RowID): RowElement;
declare function update(id: RowID, row: RowElement): RowElement;
declare function remove(id: RowID): void;

export { create, read, update, remove };
