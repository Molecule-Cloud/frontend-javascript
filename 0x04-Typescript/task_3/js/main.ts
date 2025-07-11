/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from "./crud"

// Example usage of CRUD operations
const row: RowElement = {
    firstName: 'John',
    lastName: 'Doe',
}

const newRowId: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { ...row, age: 30 };

CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);