import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "./models/table.class";

@Component({
  selector: "ceccoff-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent<T> implements OnInit {
  @Input() table: Table<T>;
  @Input() columns: TableColumns<T>[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.table.dataSource.sort = this.sort;

    this.table.dataSource.sort?.sortChange.subscribe((sort) => {
      this.sortEvent(sort);
    });
    this._changeDetectorRef.detectChanges();
  }

  selectEvent(event: T[]): void {}

  sortEvent(sortEvent: Sort): void {
    this.table.setDataSource({
      sort: sortEvent.active,
      order: sortEvent.direction,
    });
  }

  paginationEvent(pageEvent: PageEvent): void {
    this.table.setDataSource({
      page: pageEvent.pageIndex,
      size: pageEvent.pageSize,
    });
  }

  getColumnsToDisplay(): (string | null)[] {
    return (
      this.columns && this.columns.map((column) => this.validateColumns(column))
    );
  }

  validateColumns(column: TableColumns<T>): string | null {
    const { columnDef } = column.header;

    if (columnDef) {
      return columnDef;
    }
    return null;
  }
}
