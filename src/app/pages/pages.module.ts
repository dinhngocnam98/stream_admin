import { NgModule } from '@angular/core';
import {NbCardModule, NbIconModule, NbInputModule, NbMenuModule, NbTreeGridModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ConfigsModule} from './config/configs.module';
import {StreamsModule} from './streams/streams.module';
import {NewsModule} from './news/news.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    ConfigsModule,
    MiscellaneousModule,
    StreamsModule,
    NewsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
