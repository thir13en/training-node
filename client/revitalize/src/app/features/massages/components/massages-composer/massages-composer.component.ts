import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import copy from './massages-composer.copy.json';

import { ApiService } from '@services/api.service';
import { NetworkUtils } from '@app/network';
import { routing } from '@app/routes';


@Component({
  selector: 'app-massages-new',
  templateUrl: './massages-composer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesComposerComponent implements OnInit {
  // TODO: turn this into a create/edit component
  copy: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.copy = copy;
  }

  addNewMassage(newMassage: { type: string, price: number, imgUrl: string }): void {
    this.apiService.post({ path: NetworkUtils.ENDPOINTS.MASSAGES, payload: newMassage}).subscribe(
      (res: any) => this.router.navigateByUrl(routing.ROUTES.MASSAGES),
      err => console.error(err),
    );
  }

}
