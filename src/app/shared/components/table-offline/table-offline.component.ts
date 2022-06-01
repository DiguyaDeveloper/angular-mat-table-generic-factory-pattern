import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "../table/table.class";

@Component({
  selector: "ceccoff-table-offline",
  templateUrl: "./table-offline.component.html",
  styleUrls: ["./table-offline.component.scss"],
})
export class TableOfflineComponent<T> implements OnInit {
  @Input() table: Table<T>;
  @Input() columns: TableColumns<T>[];
  @Input() selectable = false;
  @Input() expandable: TemplateRef<HTMLElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.table.dataSource.paginator = this.paginator;
    this.table.dataSource.sort = this.sort;
  }
}
