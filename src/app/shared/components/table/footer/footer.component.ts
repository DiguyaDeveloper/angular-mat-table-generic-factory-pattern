import { Component, Input, OnInit } from "@angular/core";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";

@Component({
  selector: "ceccoff-table-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent<T> implements OnInit {
  @Input() column: TableColumns<T>;
  @Input() rows: T[];

  constructor() {}

  ngOnInit(): void {}
}
