import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  categories: any;
  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.categories = this.af.database.list('/categories');
  }
}
