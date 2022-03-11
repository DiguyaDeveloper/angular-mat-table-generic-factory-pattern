import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "./components/table/table.module";
import { ImageTemplateRefComponent } from './components/image-template-ref/image-template-ref.component';

@NgModule({
  declarations: [
    ImageTemplateRefComponent
  ],
  imports: [CommonModule, TableModule],
  exports: [TableModule],
})
export class SharedModule {}
