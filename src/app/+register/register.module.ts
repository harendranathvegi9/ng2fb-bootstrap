import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './+register';
import { RegisterConfirmationComponent } from './+confirmation/register-confirmation.component';
import { routes } from './register.routes';


@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    declarations: [RegisterComponent, RegisterConfirmationComponent]
})
export class RegisterModule { }
