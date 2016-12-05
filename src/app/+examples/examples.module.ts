import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';
import { ExamplesHomeComponent } from './examples-home/examples-home.component';
import { AnimationComponent } from './animation/animation.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { routes } from './examples.routes';

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    declarations: [
        ExamplesComponent,
        ExamplesHomeComponent,
        // Examples
        AnimationComponent,
        TypeaheadComponent
    ]
})
export class ExamplesModule { }
