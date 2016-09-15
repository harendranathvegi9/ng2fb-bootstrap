import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { RegisterModel } from '../register.model';
import { ControlBase, ControlTextbox } from '../../shared/forms';

@Component({
    selector: 'appc-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    registerModel: RegisterModel;
    private errors: string[];
    private controls: ControlBase<any>[];

    constructor(public auth: AuthService, public router: Router, private route: ActivatedRoute) {
        this.registerModel = new RegisterModel('', '');
    }

    register(model: any): void {
        this.registerModel.email = model.email;
        this.registerModel.password = model.password;
        this.auth.createUser(this.registerModel)
            .then(() => {
                this.router.navigate(['/']);
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
