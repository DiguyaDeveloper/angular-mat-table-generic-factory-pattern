import { SelectionModel } from "@angular/cdk/collections";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
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
  @Input() selectable = false;
  @Input() expandable: TemplateRef<HTMLElement>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  selection = new SelectionModel<T>(true, []);
  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.table.dataSource.sort = this.sort;

    this.table.dataSource.sort?.sortChange.subscribe((sort) => {
      this.sortEvent(sort);
    });

    this.setDisplayedColumns();
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

  setDisplayedColumns(): void {
    if (!this.columns) {
      return;
    }

    this.displayedColumns = this.columns.map((column) =>
      this.validateColumns(column)
    );

    if (this.selectable) {
      this.displayedColumns = ["select", ...this.displayedColumns];
    }

    if (this.expandable) {
      this.displayedColumns = [...this.displayedColumns, "showMore"];
    }
  }

  validateColumns(column: TableColumns<T>): string | null {
    const { columnDef } = column.header;

    if (columnDef) {
      return columnDef;
    }
    return null;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.table.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.table.dataSource.data.length;
    return numSelected === numRows;
  }
}
