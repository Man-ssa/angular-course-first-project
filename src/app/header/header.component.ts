import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() menuClicked = new EventEmitter<number>();

  onRecipesClicked(): void {
    this.menuClicked.emit(1);
  }

  onShoppingListClicked(): void {
    this.menuClicked.emit(2);
  }
}
