import { Title } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule, AuthMethods } from 'angularfire2';
import { Routes, RouterModule } from '@angular/router';

// import { routing } from './app.routes';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: any = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Lazy async modules
    {
        path: 'login', loadChildren: './+login/login.module#LoginModule'
    },
    {
        path: 'register', loadChildren: './+register/register.module#RegisterModule'
    },
    {
        path: 'profile', loadChildren: './+profile/profile.module#ProfileModule'
    },
    {
        path: 'admin', loadChildren: './+admin/admin.module#AdminModule'
    },
    {
        path: 'about', loadChildren: './+about/about.module#AboutModule'
    },
    {
        path: 'examples', loadChildren: './+examples/examples.module#ExamplesModule'
    },
    { path: '**', component: PageNotFoundComponent }
];

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyDc80oGq40D-65A8xP3lIEIPthH2xc72oI",
    authDomain: "ng2fb-bootstrap.firebaseapp.com",
    databaseURL: "https://ng2fb-bootstrap.firebaseio.com",
    storageBucket: "ng2fb-bootstrap.appspot.com"
};

export const firebaseAuthConfig = {
    method: AuthMethods.Popup,
    remember: 'default'
};

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        RouterModule.forRoot(routes),
        // Only module that app module loads
        SharedModule.forRoot(),
        HomeModule
    ],
    exports: [
        CommonModule
    ],
    providers: [
        AppService,
        Title
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


