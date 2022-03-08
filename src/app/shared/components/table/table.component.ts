import { Component, Input, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Table } from "./models/table.class";

@Component({
  selector: "ceccoff-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent<T> {
  @Input() table: Table<T>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.table.dataSource.sort = this.sort;
    this.table.dataSource.paginator = this.paginator;
  }
}
