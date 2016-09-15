import { NgModule }       from '@angular/core';

import { SharedModule }            from '../shared/shared.module';
import { RegisterComponent } from './+register';
import { RegisterConfirmationComponent } from './+confirmation';
import { routing }            from './register.routes';


@NgModule({
    imports: [routing, SharedModule],
    declarations: [RegisterComponent, RegisterConfirmationComponent]
})
export class RegisterModule { }
