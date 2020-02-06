import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  @HostBinding('class') classList: string;
  appName = 'Revitalize';
}
