import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TableInterface } from './table.interface';

@Component({
  selector: 'ceccoff-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> {
  @Input() table: TableInterface<T>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  get displayedColumns(): string[] {
    return this.table.columns.value.map((column) => column.columnDef);
  }

  ngOnInit(): void {
    this.table.dataSource.sort = this.sort;
    this.table.dataSource.paginator = this.paginator;
  }
}
