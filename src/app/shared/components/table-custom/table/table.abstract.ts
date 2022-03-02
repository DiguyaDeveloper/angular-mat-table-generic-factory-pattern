import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { TableColumns } from 'src/app/core/interfaces/table-columns.interface';

export abstract class TableImplAbstract<T> {
  columns: BehaviorSubject<TableColumns<T>[]>;
  dataSource: MatTableDataSource<T>;

  constructor(
    columns: BehaviorSubject<TableColumns<T>[]>,
    dataSource: MatTableDataSource<T>
  ) {
    this.columns = columns;
    this.dataSource = dataSource;
  }
}
