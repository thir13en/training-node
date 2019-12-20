import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  @HostBinding('fxLayoutAlign') flexAlign = 'center center';
  @HostBinding('class') classList: string;

  constructor() { }

  ngOnInit() {
  }

}
