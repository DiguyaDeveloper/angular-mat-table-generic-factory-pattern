import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Table } from "../table/table.class";

@Component({
  selector: "ceccoff-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent<T> implements OnInit {
  @Input() table: Table<T>;
  @Output() paginationEvent = new EventEmitter<PageEvent>();

  constructor() {}

  ngOnInit(): void {}

  pageEvents(event: PageEvent): void {
    this.paginationEvent.emit(event);
  }
}
