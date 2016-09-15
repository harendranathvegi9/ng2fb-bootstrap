import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { LoginModel } from './login.model';
import { AuthService } from '../shared/services/auth.service';
import { ControlBase, ControlTextbox, ControlCheckbox } from '../shared/forms';


@Component({
    selector: 'appc-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginModel: LoginModel;
    errors: string[];
    controls: any;

    constructor(private auth: AuthService, private router: Router, private authService: AuthService) {
        this.loginModel = new LoginModel('', '', false);
    }

    login(model: any) {
        this.loginModel.email = model.email;
        this.loginModel.password = model.password;
        this.auth.signInWithPassword(this.loginModel)
            .then(() => {
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
            });
    };

    ngOnInit() {
        let controls: ControlBase<any>[] = [
            new ControlTextbox({
                key: 'email',
                label: 'Email',
                placeholder: 'Email',
                value: '',
                type: 'email',
                required: true,
                order: 1
            }),
            new ControlTextbox({
                key: 'password',
                label: 'Password',
                placeholder: 'Password',
                value: '',
                type: 'password',
                required: true,
                order: 2
            })
        ];

        this.controls = controls;
    }

}
