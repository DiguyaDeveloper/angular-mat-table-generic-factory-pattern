import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "./table.class";
import { ExpandCollapse } from "./table.animations";
import { MatSort, MatSortModule, Sort } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { CellComponent } from "./cell/cell.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "ceccoff-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
  animations: [ExpandCollapse],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    CellComponent,
    HeaderComponent,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
})
export class TableComponent<T> implements OnInit {
  @Input() table: Table<T>;
  @Input() columns: TableColumns<T>[];
  @Input() selectable = false;
  @Input() expandable: TemplateRef<HTMLElement>;
  @Input() sortingOffline: boolean = false;
  @Output() sortEvent = new EventEmitter<Sort>(null);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = [];

  ngOnInit(): void {
    this.setSorting();
    this.setDisplayedColumns();
  }

  setSorting(): void {
    if (this.sortingOffline) {
      this.table.dataSource.sort = this.sort;
    }
  }

  setDisplayedColumns(): void {
    if (!this.columns) {
      return;
    }

    this.displayedColumns = [
      ...this.columns.map((column) => this.validateColumns(column)),
    ];

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
    if (this.table.dataExpanded.value !== row) {
      this.table.dataExpanded.next(row);
    } else {
      this.table.dataExpanded.next(null);
    }
  }
}
