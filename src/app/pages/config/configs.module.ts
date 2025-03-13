import {ConfigsComponent} from './configs.component';
import {NgModule} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule, NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule, NbSelectModule, NbUserModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import {FormsRoutingModule} from '../forms/forms-routing.module';
import {FormsModule as ngFormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ConfigsComponent],
})
export class ConfigsModule {
}
