import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { TableOnlineComponent } from "../table-online/table-online.component";
import { TableComponent } from "../table/table.component";

@NgModule({
  declarations: [TableOnlineComponent],
  imports: [CommonModule, MatPaginatorModule, TableComponent],
  exports: [TableOnlineComponent],
})
export class TableOnlineModule {}
