import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';
import { AboutMeComponent } from './me/about-me.component';
import { AboutYouComponent } from './you/about-you.component';
import { routes } from './about.routes';

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    declarations: [AboutComponent, AboutMeComponent, AboutYouComponent]
})
export class AboutModule { }
