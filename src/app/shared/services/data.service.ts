﻿import { Injectable } from '@angular/core';

import { ApiGatewayService } from './api-gateway.service';

@Injectable()
export class DataService {

    constructor(public http: ApiGatewayService) { }

    public get(url: string, params?: any): any {
        return this.http.get(url, undefined);
    }

    public post(url: string, data: any, params?: any): any {
        return this.http.post(url, data, params);
    }
}
