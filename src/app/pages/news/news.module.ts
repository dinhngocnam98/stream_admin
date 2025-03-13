import {NgModule} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbDatepickerModule, NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbTimepickerModule,
  NbTreeGridModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import { ReactiveFormsModule} from '@angular/forms';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NewsComponent} from './news.component';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbTreeGridModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbInputModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatSortModule,
    MatTooltipModule,
    NbDialogModule.forChild(),
    ReactiveFormsModule,
    NbDatepickerModule,
    NbTimepickerModule.forChild(),
  ],
  declarations: [NewsComponent],
})
export class NewsModule {
}
