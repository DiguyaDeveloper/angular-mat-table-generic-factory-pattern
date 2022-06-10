import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { TableOfflineComponent } from "../table-offline/table-offline.component";
import { TableComponent } from "../table/table.component";

@NgModule({
  declarations: [TableOfflineComponent],
  imports: [CommonModule, MatPaginatorModule, TableComponent],
  exports: [TableOfflineComponent],
  providers: [],
})
export class TableOfflineModule {}
