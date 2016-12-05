import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { AdminService } from './admin.service';
import { routes } from './admin.routes';


@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule, CategoryModule, ProductModule],
    declarations: [AdminComponent, AdminHomeComponent],
    providers: [AdminService]
})
export class AdminModule { }
