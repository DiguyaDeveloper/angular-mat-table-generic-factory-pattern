import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-table-vertical-badge",
  templateUrl: "./table-vertical-badge.component.html",
  styleUrls: ["./table-vertical-badge.component.scss"],
})
export class TableVerticalBadgeComponent {
  @Input() color: string;
}
