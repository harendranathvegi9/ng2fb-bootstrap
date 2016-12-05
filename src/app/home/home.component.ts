import { Component, OnInit } from '@angular/core';

import { WidgetService } from './widget/widget.service';

@Component({
  selector: 'appc-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  widgets: any;
  constructor(public ws: WidgetService) { }

  ngOnInit() {
    this.widgets = this.ws.get();
  }

  put() {
    this.ws.put();
  }

}
