import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { routes } from './profile.routes';
import { ChangeNameComponent } from './changename/change-name.component';
import { ChangePasswordComponent } from './changepassword/change-password.component';

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    declarations: [ProfileComponent, ChangeNameComponent, ChangePasswordComponent],
    providers: [ProfileService]
})
export class ProfileModule { }
