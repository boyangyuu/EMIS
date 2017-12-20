import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { provideRoutes} from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { DropdownDirective } from '../shared/dropdown.directive';

const COMPONENTS = [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
];

@NgModule({
    imports: [AppRoutingModule],
    providers: [],
    declarations: [
        ...COMPONENTS,
        DropdownDirective
    ],
    exports: COMPONENTS
})
export class LayoutModule { }
