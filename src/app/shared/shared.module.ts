import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "./components/table/table.module";
import { TableVerticalBadgeComponent } from './components/table-vertical-badge/table-vertical-badge.component';
@NgModule({
  declarations: [
    TableVerticalBadgeComponent
  ],
  imports: [CommonModule, TableModule],
  exports: [TableModule],
})
export class SharedModule {}
