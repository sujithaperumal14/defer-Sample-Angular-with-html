import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'',component:WelcomeComponent},
    {path:'register',component:RegisterComponent},
];
