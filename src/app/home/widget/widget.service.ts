import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFire } from 'angularfire2';

@Injectable()
export class WidgetService {
  constructor(private af: AngularFire) { }

  get() {
    return this.af.database.list('/widgets');
  }
  put() {
    this.af.database.list('/widgets').remove();
    this.af.database.list('/widgets').push({ name: 'Angular 2', description: 'One Framework Mobile and desktop', link: 'https://angular.io/' });
    this.af.database.list('/widgets').push({ name: 'Firebase', description: 'Realtime backend as database', link: 'https://www.firebase.com/' });
    this.af.database.list('/widgets').push({ name: 'ng-bootstrap', description: 'Angular 2, powered by Bootstrap 4 written by the angular-ui Team.', link: 'https://ng-bootstrap.github.io/#/home' });
    this.af.database.list('/widgets').push({ name: 'Bootstrap 4', description: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.', link: 'http://v4-alpha.getbootstrap.com/' });
    this.af.database.list('/widgets').push({ name: 'Webpack', description: 'Module bundler', link: 'https://webpack.github.io/' });
  }

}
