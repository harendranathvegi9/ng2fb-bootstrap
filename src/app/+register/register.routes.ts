import { Routes } from '@angular/router';

import { RegisterComponent } from './+register';
import { RegisterConfirmationComponent } from './+confirmation/register-confirmation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'registerhome', pathMatch: 'full' },
  { path: 'registerhome', component: RegisterComponent },
  { path: 'registerconfirmation', component: RegisterConfirmationComponent }
];
