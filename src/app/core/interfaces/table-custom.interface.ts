import { TableColumns } from './table-columns.interface';

export interface TableCustom<T> {
  setColumns(columns: TableColumns<T>[]): void;
  getColumns(): TableColumns<T>[];
  setDataSource(data: T[]): void;
  getDataSource(): T[];
  setStyle(styles: Partial<CSSStyleDeclaration>): void;
  getStyle(): Partial<CSSStyleDeclaration> | undefined;
}
