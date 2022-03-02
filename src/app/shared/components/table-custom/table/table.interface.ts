import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { TableColumns } from 'src/app/core/interfaces/table-columns.interface';

export interface TableInterface<T> {
  columns: BehaviorSubject<TableColumns<T>[]>;
  dataSource: MatTableDataSource<T>;
}
