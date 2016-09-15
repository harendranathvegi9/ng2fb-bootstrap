import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { AuthService } from '../../shared/services/auth.service';

@Component({
    selector: 'appc-social-login',
    styleUrls: ['./social-login.component.scss'],
    templateUrl: './social-login.component.html'
})
export class SocialLoginComponent implements OnInit {
    constructor(private auth: AuthService, private router: Router) { }

    ngOnInit() { }

    signInWithGithub(): void {
        this.auth.signInWithGithub()
            .then(() => this.postSignIn());
    }

    signInWithGoogle(): void {
        this.auth.signInWithGoogle()
            .then(() => this.postSignIn());
    }

    signInWithTwitter(): void {
        this.auth.signInWithTwitter()
            .then(() => this.postSignIn());
    }

    signInWithFacebook(): void {
        this.auth.signInWithFacebook()
            .then(() => this.postSignIn());
    }
    signInWithLinkedIn(): void {
        console.log('todo sigin with linked');
    }

    private postSignIn(): void {
        this.router.navigate(['/']);
    }
}
