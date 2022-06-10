import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableOnlineComponent } from '../table-online/table-online.component';
import { TableModule } from './../table/table.module';

@NgModule({
  declarations: [TableOnlineComponent],
  imports: [CommonModule, MatPaginatorModule, TableModule],
  exports: [TableOnlineComponent]
})
export class TableOnlineModule {}
