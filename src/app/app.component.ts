import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItem = 1;

  onMenuClicked(event): void {
    this.menuItem = event;
  }
}
