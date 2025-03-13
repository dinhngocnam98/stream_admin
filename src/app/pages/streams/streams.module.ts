import {NgModule} from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule, NbDatepickerModule, NbDialogModule,
  NbIconModule,
  NbInputModule, NbThemeModule, NbTimepickerModule,
  NbTreeGridModule,
} from '@nebular/theme';
import {ThemeModule} from '../../@theme/theme.module';
import { ReactiveFormsModule} from '@angular/forms';
import { StreamsComponent} from './streams.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {DetailDialogComponent} from './detail-dialog/detail-dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {AddDialogComponent} from './add-dialog/add-dialog.component';

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
  declarations: [StreamsComponent, DetailDialogComponent, DeleteDialogComponent, AddDialogComponent],
})
export class StreamsModule {
}
