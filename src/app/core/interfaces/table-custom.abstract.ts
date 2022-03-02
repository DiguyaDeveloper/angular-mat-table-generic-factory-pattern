import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { TableColumns } from './table-columns.interface';
import { TableCustom } from './table-custom.interface';

export abstract class TableCustomAbstract<T> implements TableCustom<T> {
  private columns: BehaviorSubject<TableColumns<T>[]>;
  private dataSource: BehaviorSubject<T[]>;
  private style?: Partial<CSSStyleDeclaration>;

  constructor(options: { columns: TableColumns<T>[]; dataSource?: T[] }) {
    this.columns.next(options.columns);
    this.dataSource.next(options.dataSource || []);
  }

  setColumns(columns: TableColumns<T>[]): void {
    this.columns.next(columns);
  }

  getColumns(): TableColumns<T>[] {
    return this.columns.value;
  }

  setDataSource(data: T[]): void {
    this.dataSource.next(data);
  }

  getDataSource(): T[] {
    return this.dataSource.value;
  }

  setStyle(styles: Partial<CSSStyleDeclaration>): void {
    this.style = styles;
  }

  getStyle(): Partial<CSSStyleDeclaration> | undefined {
    return this.style;
  }
}
