import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableVerticalBadgeComponent } from "./components/table-vertical-badge/table-vertical-badge.component";
import { TableComponent } from "./components/table/table.component";
@NgModule({
  declarations: [TableVerticalBadgeComponent],
  imports: [CommonModule, TableComponent],
  exports: [TableComponent],
})
export class SharedModule {}
