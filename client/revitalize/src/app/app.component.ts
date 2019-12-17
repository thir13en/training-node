import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  copy: any;

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
