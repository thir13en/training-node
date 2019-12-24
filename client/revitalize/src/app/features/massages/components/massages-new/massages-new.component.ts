import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import copy from './massages-new.copy.json';


@Component({
  selector: 'app-massages-new',
  templateUrl: './massages-new.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesNewComponent implements OnInit {
  copy: any;

  ngOnInit() {
    this.copy = copy;
    console.log(copy);
  }

  addNewMassage(newMassage: { type: string, price: number, imgUrl: string }): void {
    console.log(newMassage);
  }

}
