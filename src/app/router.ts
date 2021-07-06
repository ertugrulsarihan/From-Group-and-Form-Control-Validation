import { Routes } from '@angular/router';
import { GoodJobComponent } from './gj/Goodjob.component';
import { SignComponent } from './Sign/sign.component';

export const appRoutes: Routes = [
    { path: 'signup', component: SignComponent },
    { path: 'goodjob', component: GoodJobComponent },
    { path: '', redirectTo: '/sign', pathMatch: 'full' }
]