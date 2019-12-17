import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  copy: any;

  ngOnInit(): void {
    // this.copy = copy;
    // this.massages$ = this.apiService.get(ENDPOINTS.MASSAGES);
  }

  // submit(newMassageFrom: NgForm): void {
  //   this.apiService.post(
  //     ENDPOINTS.MASSAGES,
  //     { type: newMassageFrom.controls.massageType.value, price: newMassageFrom.controls.price.value }
  //   ).subscribe(
  //     (res: any): void => console.log(res),
  //     (err: HttpErrorResponse): void => console.log(err),
  //   );
  // }

}
