import { state, style, trigger } from "@angular/animations";
import { SelectionModel } from "@angular/cdk/collections";
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort, Sort } from "@angular/material/sort";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "./table.class";
import { ExpandCollapse } from "./table.animations";

@Component({
  selector: "ceccoff-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  animations: [ExpandCollapse],
})
export class TableComponent<T> implements OnInit, OnDestroy {
  @Input() table: Table<T>;
  @Input() columns: TableColumns<T>[];
  @Input() selectable = false;
  @Input() expandable: TemplateRef<HTMLElement>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.table.dataSource.sort = this.sort;
    this.table.dataSource.paginator = this.paginator;

    this.table.dataSource.sort?.sortChange.subscribe((sort) => {
      this.sortEvent(sort);
    });

    this.setDisplayedColumns();
  }

  sortEvent(sortEvent: Sort): void {
    this.table.setFilters({
      sort: sortEvent.active,
      order: sortEvent.direction,
    });
  }

  paginationEvent(pageEvent: PageEvent): void {
    this.table.setFilters({
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
      ? this.table.dataSelection.clear()
      : this.table.dataSource.data.forEach((row) =>
          this.table.dataSelection.select(row)
        );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.table.dataSelection.selected.length;
    const numRows = this.table.dataSource.data.length;
    return numSelected === numRows;
  }

  clickShowMore(row: T): void {
    if (this.table.getDataExpanded() !== row) {
      this.table.setDataExpanded(row);
    } else {
      this.table.setDataExpanded(undefined);
    }
  }

  ngOnDestroy(): void {
    this.sort.sortChange.unsubscribe();
  }
}
