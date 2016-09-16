import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import * as Firebase from 'firebase';

import { AuthModel } from '../models';


@Injectable()
export class AuthService {
    private authState: FirebaseAuthState = null;
    private _firebaseAuth: firebase.auth.Auth;

    constructor(public auth$: FirebaseAuth) {
        auth$.subscribe((state: FirebaseAuthState) => {
            this.authState = state;
        });

        // this._firebaseAuth = Firebase.apps[0].auth();
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get id(): string {
        return this.authenticated ? this.authState.uid : '';
    }

    get email(): any {
        return this.authenticated ? this.authState.auth.email : undefined;
    }

    createUser(model: AuthModel): firebase.Promise<FirebaseAuthState> {
        return this.auth$.createUser({ email: model.email, password: model.password })
            .catch(error => console.log('ERROR @ AuthService#createUser() :', error));;
    }

    signIn(provider: number): firebase.Promise<FirebaseAuthState> {
        return this.auth$.login({ provider })
            .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
    }

    signInWithGithub(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Github);
    }

    signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Facebook);
    }

    signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Google);
    }

    signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
        return this.signIn(AuthProviders.Twitter);
    }

    signInWithPassword(loginModel: any): firebase.Promise<FirebaseAuthState> {
        return this.auth$.login(loginModel, {
            provider: AuthProviders.Password, method: AuthMethods.Password
        });
    }

    // resetPassword(credentials: any): Promise<void> {
    //     return this._firebaseAuth.sendPasswordResetEmail(credentials)
    // }

    // changePassword(credentials: any): Promise<void> {
    //   return new Promise<void>((resolve, reject) => {
    //     this._firebase.changePassword(credentials, error => {
    //       if (error) {
    //         reject(error);
    //       } else {
    //         resolve();
    //       }
    //     });
    //   });
    // }

    // changeEmail(credentials: any): Promise<void> {
    //   return new Promise<void>((resolve, reject) => {
    //     this._firebase.changeEmail(credentials, error => {
    //       if (error) {
    //         reject(error);
    //       } else {
    //         resolve();
    //       }
    //     });
    //   });
    // }
    signOut(): void {
        this.auth$.logout();
    }
}
