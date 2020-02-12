import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { tap } from 'rxjs/operators';

import { ROUTE_FRAGMENTS } from '@routes/routes';
import { NetworkUtils } from '@app/network';
import { ApiService } from '@services/api.service';


@Component({
  selector: 'app-massages-detail',
  templateUrl: './massages-detail.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MassagesDetailComponent implements OnInit {
  private massageId: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.massageId = this.route.snapshot.params[ROUTE_FRAGMENTS.MASSAGE_IDENTIFIER.replace(':', '')];

    if (this.massageId) {
      this.apiService.get({ path: NetworkUtils.ENDPOINTS.MASSAGES_DETAIL, pathParams: [this.massageId] }).pipe(
        tap(console.log),
      ).subscribe();
    }
  }

}
