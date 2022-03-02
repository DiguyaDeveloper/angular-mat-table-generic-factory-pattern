import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { appColumns } from './app.table';
import { TableColumns } from './core/interfaces/table-columns.interface';
import { TableImplAbstract } from './shared/components/table-custom/table/table.abstract';
import { TableFactory } from './shared/components/table-custom/table/table.factory';
import { Table } from './shared/components/table-custom/table/tables/table.class';

type Contracts = {
  id: number;
  value: number;
  description: number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements TableImplAbstract<Contracts> {
  columns = new BehaviorSubject<TableColumns<Contracts>[]>(appColumns);

  dataSource: MatTableDataSource<Contracts>;

  tableFactory: Table<Contracts>;

  ngOnInit(): void {
    this.tableFactory = this.getTableFactory();
  }

  getTableFactory(): Table<Contracts> {
    return TableFactory.factory(
      this.columns,
      new MatTableDataSource([
        {
          id: 0,
          value: 0,
          description: 0,
        },
      ])
    );
  }
}
