import { Routes, RouterModule } from '@angular/router';

import { ExamplesComponent } from './examples.component';
import { ExamplesHomeComponent } from './examples-home/examples-home.component';
import { AnimationComponent } from './animation/animation.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

export const routes: Routes = [
  {
    path: '', component: ExamplesComponent, children: [
      { path: '', component: ExamplesHomeComponent },
      { path: 'animation', component: AnimationComponent },
      { path: 'typeahead', component: TypeaheadComponent }
    ]
  }
];

