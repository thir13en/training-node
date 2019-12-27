import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import copy from './massages-new.copy.json';

import { ApiService } from '@services/api.service';
import { ENDPOINTS } from '@app/network';
import { routing } from '@app/routes';


@Component({
  selector: 'app-massages-new',
  templateUrl: './massages-new.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesNewComponent implements OnInit {
  copy: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.copy = copy;
  }

  addNewMassage(newMassage: { type: string, price: number, imgUrl: string }): void {
    this.apiService.post(ENDPOINTS.MASSAGES, newMassage).subscribe(
      (res: any) => this.router.navigateByUrl(routing.ROUTES.MASSAGES),
      err => console.error(err),
    );
  }

}
