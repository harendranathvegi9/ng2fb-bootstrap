import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, AngularFire } from 'angularfire2';

import { AuthService } from '../shared/services/auth.service';
import { ChangeNameModel } from './changename/change-name.model';
import { ChangePasswordModel } from './changepassword/change-password.model';

@Injectable()
export class ProfileService {
    public userNameModel: FirebaseObjectObservable<ChangeNameModel>;
    public newPasswordModel: FirebaseObjectObservable<ChangePasswordModel>;

    constructor(private af: AngularFire, private auth: AuthService) { }

    userName(userNameModel?: ChangeNameModel): any {
        let path = `/profile/${this.auth.id}`;
        if (userNameModel) {
            return this.af.database.object(path).set(userNameModel);
        } else {
            return this.af.database.object(path);
        }
    }

    changePassword(changePasswordModel: ChangePasswordModel) {
        this.newPasswordModel.set(changePasswordModel)
    }

}
