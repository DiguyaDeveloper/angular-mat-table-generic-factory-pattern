import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { TableColumns } from 'src/app/core/interfaces/table-columns.interface';
import { TableInterface } from './table.interface';
import { Table } from './tables/table.class';

export class TableFactory {
  static factory<T>(
    columns: BehaviorSubject<TableColumns<T>[]>,
    dataSource: MatTableDataSource<T>
  ): TableInterface<T> {
    return new Table(columns, dataSource);
  }
}
