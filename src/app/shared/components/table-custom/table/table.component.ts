import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { TableInterface } from "./table.interface";
import { Table } from "./tables/table.class";

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
