import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { TableColumns } from 'src/app/core/interfaces/table-columns.interface';
import { TableImplAbstract } from '../table.abstract';
import { TableInterface } from '../table.interface';

export class Table<T>
  extends TableImplAbstract<T>
  implements TableInterface<T>
{
  constructor(
    columns: BehaviorSubject<TableColumns<T>[]>,
    dataSource: MatTableDataSource<T>
  ) {
    super(columns, dataSource);
  }
}
