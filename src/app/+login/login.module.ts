import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { SocialLoginComponent } from './sociallogin/social-login.component';
import { LoginComponent } from './login.component';
import { routes } from './login.routes';


@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    declarations: [LoginComponent, SocialLoginComponent]
})
export class LoginModule { }
