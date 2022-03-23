import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "./models/table.class";

@Component({
  selector: "ceccoff-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent<T> {
  @Input() table: Table<T>;
  @Input() columns: TableColumns<T>[];
  @Output() paginationEvent = new EventEmitter<PageEvent>();

  pageEvents(event: PageEvent): void {
    this.paginationEvent.emit(event);
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
