/// <reference path="./interface.ts" />

import { RowID, RowElement } from './interface';

declare module 'crud' {
    export function insertRow(row: RowElement): RowID;

    export function deleteRow(row: RowID): void;

    export function updateRow(row: RowID, updatedRow: RowElement): RowID;
}

export function insertRow(row: RowElement): number {
    throw new Error('Function not implemented.');
}
export function deleteRow(newRowId: number) {
    throw new Error('Function not implemented.');
}

export function updateRow(newRowId: number, updatedRow: RowElement) {
    throw new Error('Function not implemented.');
}

