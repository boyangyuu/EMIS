import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { provideRoutes} from '@angular/router';

const COMPONENTS = [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
];

@NgModule({
    imports: [],
    providers: [],
    declarations: [
        ...COMPONENTS,
    ],
    exports: COMPONENTS
})
export class LayoutModule { }
