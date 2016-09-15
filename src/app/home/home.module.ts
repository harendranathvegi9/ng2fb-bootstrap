import { NgModule }       from '@angular/core';

import { SharedModule }            from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { routing }            from './home.routes';
import { WidgetService } from './widget';


@NgModule({
    imports: [routing, SharedModule],
    providers: [WidgetService],
    declarations: [HomeComponent]
})
export class HomeModule { }
