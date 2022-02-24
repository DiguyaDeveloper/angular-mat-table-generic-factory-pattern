import { Component, VERSION } from '@angular/core';
import { TableCustomAbstract } from '../core/interfaces/table-custom.abstract';
import { appColumns } from './app.table';

type Contracts = {
  id: number;
  value: number;
  description: number;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends TableCustomAbstract<Contracts> {
  name = 'Angular ' + VERSION.major;

  constructor() {
    super({
      columns: appColumns,
    });
  }

  ngOnInit(): void {
    super.setDataSource([]);
  }
}
