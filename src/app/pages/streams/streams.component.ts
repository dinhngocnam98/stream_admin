import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {StreamsService} from './streams.service';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {NbDialogService} from '@nebular/theme';
import {DetailDialogComponent} from './detail-dialog/detail-dialog.component';
import {ToastService} from '../../@core/utils/toast.service';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';
import {AddDialogComponent} from './add-dialog/add-dialog.component';

export interface StreamUrl {
  id: number;
  liveStreamId: number;
  streamUrl: string;
  refererUrl: string;
  isLive: boolean;
  created: string;
  updated: string;
}

export interface StreamDetail {
  id: number;
  name: string;
  group: string;
  startTime: string;
  logoUrl: string;
  streamUrlList: StreamUrl[];
  created: string;
  updated: string;
}

@Component({
  selector: 'ngx-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss'],
})
export class StreamsComponent implements AfterViewInit, OnInit {
  private _liveAnnouncer = inject(LiveAnnouncer);
  isLoading = false;
  displayedColumns: string[] = ['name', 'group', 'startTime', 'action'];
  dataSource: MatTableDataSource<StreamDetail> = new MatTableDataSource();

  constructor(private streamsService: StreamsService,
              private dialogService: NbDialogService,
              private toastService: ToastService) {
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.fetchChannels();
  }

  fetchChannels(): void {
    this.streamsService.getChannels().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);
      },
      () => {
        this.toastService.showToast('danger', 'Get streams', 'Get streams failed.');
      },
    );
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onAddStream() {
    this.dialogService.open(AddDialogComponent).onClose.subscribe((result) => {
      if (result) {
       this.streamsService.addStream(result).subscribe(
         (res: any) => {
           this.fetchChannels();
           this.toastService.showToast('success', 'Add stream', 'Add stream successfully.');
         },
         (error) => {
           console.log(error);
           this.toastService.showToast('danger', 'Add stream', 'Add stream failed.');
         },
       );
      }
    });
  }

  onEditStream(data: any) {
    this.dialogService.open(AddDialogComponent, {
      context: {streamDetail: data},
    }).onClose.subscribe((result) => {
      if (result) {
        this.streamsService.updateStream(result).subscribe(
          (res: any) => {
            this.fetchChannels();
            this.toastService.showToast('success', 'Add stream', 'Add stream successfully.');
          },
          (error) => {
            console.log(error);
            this.toastService.showToast('danger', 'Add stream', 'Add stream failed.');
          },
        );
      }
    });
  }

  onDetail(stream: StreamDetail) {
    this.dialogService.open(DetailDialogComponent, {
      context: {
        title: 'Detail',
        streamDetail: stream,
      },
    });
  }

  onDelete(stream: StreamDetail) {
    this.dialogService.open(DeleteDialogComponent).onClose.subscribe((value: any) => {
      if (value) {
        this.streamsService.deleteStream(stream.id).subscribe(
          (res: any) => {
            this.dataSource.data = this.dataSource.data.filter((s: StreamDetail) => s.id !== stream.id);
            this.dataSource._updateChangeSubscription();
            this.toastService.showToast('success', 'Delete stream', 'Delete stream successfully.');
          },
          (error) => {
            console.log(error);
            this.toastService.showToast('danger', 'Delete stream', 'Delete stream failed.');
          },
        );
      }
    });
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
