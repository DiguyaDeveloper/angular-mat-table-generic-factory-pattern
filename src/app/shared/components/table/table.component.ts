import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Table } from "./models/table.class";

type Contracts = {
  id: number;
  value: number;
  description: number;
};

@Component({
  selector: "ceccoff-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent<T = Contracts>
  implements OnChanges, OnInit, AfterViewInit
{
  @Input() table: Table<Contracts>;
  @Output() eventPagination = new EventEmitter<void>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["table"].currentValue.dataSource) {
      this.table.dataSource.paginator = this.paginator;
      this.table.dataSource.sort = this.sort;
    }
  }

  pageEvents(event: PageEvent): void {
    this.table.handlePageEvents(event);
    this.eventPagination.emit();
  }

  ngAfterViewInit() {}
}
