import tr from '@angular/common/locales/extra/tr';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent, 
    RouterModule 
  ]
})
export class AppComponent {
  title = 'my-diary';
}
