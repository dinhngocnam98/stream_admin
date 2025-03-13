import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {NbDialogService} from '@nebular/theme';
import {ToastService} from '../../@core/utils/toast.service';
import {NewsService} from './news.service';
import {MatPaginator} from '@angular/material/paginator';

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
  selector: 'ngx-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'group', 'startTime', 'action'];
  dataSource: MatTableDataSource<StreamDetail> = new MatTableDataSource();

  constructor(private newsService: NewsService,
              private dialogService: NbDialogService,
              private toastService: ToastService) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.fetchChannels();
  }

  fetchChannels(): void {
    this.newsService.getChannels().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
      },
      () => {
        this.toastService.showToast('danger', 'Get streams', 'Get streams failed.');
      },
    );
  }

  ngAfterViewInit() {
    console.log(this.paginator);
    this.dataSource.paginator = this.paginator;
  }

  onAddStream() {
    // this.dialogService.open(AddDialogComponent).onClose.subscribe((result) => {
    //   if (result) {
    //     this.newsService.addStream(result).subscribe(
    //       (res: any) => {
    //         this.fetchChannels();
    //         this.toastService.showToast('success', 'Add stream', 'Add stream successfully.');
    //       },
    //       (error) => {
    //         console.log(error);
    //         this.toastService.showToast('danger', 'Add stream', 'Add stream failed.');
    //       },
    //     );
    //   }
    // });
  }

  onEditStream(data: any) {
    // this.dialogService.open(AddDialogComponent, {
    //   context: {streamDetail: data},
    // }).onClose.subscribe((result) => {
    //   if (result) {
    //     this.streamsService.updateStream(result).subscribe(
    //       (res: any) => {
    //         this.fetchChannels();
    //         this.toastService.showToast('success', 'Add stream', 'Add stream successfully.');
    //       },
    //       (error) => {
    //         console.log(error);
    //         this.toastService.showToast('danger', 'Add stream', 'Add stream failed.');
    //       },
    //     );
    //   }
    // });
  }

  onDetail(stream: StreamDetail) {
    // this.dialogService.open(DetailDialogComponent, {
    //   context: {
    //     title: 'Detail',
    //     streamDetail: stream,
    //   },
    // });
  }

  onDelete(stream: StreamDetail) {
    // this.dialogService.open(DeleteDialogComponent).onClose.subscribe((value: any) => {
    //   if (value) {
    //     this.streamsService.deleteStream(stream.id).subscribe(
    //       (res: any) => {
    //         this.dataSource.data = this.dataSource.data.filter((s: StreamDetail) => s.id !== stream.id);
    //         this.dataSource._updateChangeSubscription();
    //         this.toastService.showToast('success', 'Delete stream', 'Delete stream successfully.');
    //       },
    //       (error) => {
    //         console.log(error);
    //         this.toastService.showToast('danger', 'Delete stream', 'Delete stream failed.');
    //       },
    //     );
    //   }
    // });
  }
}
