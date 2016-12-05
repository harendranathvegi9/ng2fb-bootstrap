import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { routes } from './home.routes';
import { WidgetService } from './widget/widget.service';


@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    providers: [WidgetService],
    declarations: [HomeComponent]
})
export class HomeModule { }
