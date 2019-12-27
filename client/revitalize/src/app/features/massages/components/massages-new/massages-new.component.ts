import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import copy from './massages-new.copy.json';

import { ApiService } from '@services/api.service';
import { ENDPOINTS } from '@app/network';


@Component({
  selector: 'app-massages-new',
  templateUrl: './massages-new.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesNewComponent implements OnInit {
  copy: any;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.copy = copy;
  }

  addNewMassage(newMassage: { type: string, price: number, imgUrl: string }): void {
    this.apiService.post(ENDPOINTS.MASSAGES, newMassage);
  }

}
