import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WelcomeComponent,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task';
}
