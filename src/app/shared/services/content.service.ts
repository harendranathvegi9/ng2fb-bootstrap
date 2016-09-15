import { Injectable } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ContentService {

    constructor(private af: AngularFire) { }

    get(lang?: string): FirebaseObjectObservable<any> {
        return this.af.database.object(`/content/${lang}`);
    }
}
