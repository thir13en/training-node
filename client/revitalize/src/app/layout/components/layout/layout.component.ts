import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  @HostBinding('fxLayoutAlign') flexAlign = 'center center';
  @HostBinding('class') classList: string;

  constructor() { }

  ngOnInit() {
  }

}
