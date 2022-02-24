import { BehaviorSubject } from 'rxjs';
import { TableColumns } from './table-columns.interface';

export interface TableCustom<T> {
  setColumns(columns: TableColumns[]): void;
  getColumns(): TableColumns[];
  setDataSource(data: T[]): void;
  getDataSource(): T[];
  setStyle(styles: Partial<CSSStyleDeclaration>): void;
  getStyle(): Partial<CSSStyleDeclaration>;
}
