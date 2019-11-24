import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  title = 'revitalize';

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.apiService.get('massages').subscribe((res: any) => console.log(res));
  }
}
