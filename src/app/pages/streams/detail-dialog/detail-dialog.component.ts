import {Component, Input, OnInit} from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import {StreamDetail, StreamUrl} from '../streams.component';
import {MatTableDataSource} from '@angular/material/table';
import {StreamsService} from '../streams.service';
import {ToastService} from '../../../@core/utils/toast.service';

@Component({
  selector: 'ngx-detail-dialog',
  templateUrl: 'detail-dialog.component.html',
  styleUrls: ['detail-dialog.component.scss'],
})
export class DetailDialogComponent implements OnInit {

  @Input() title: string;
  @Input() streamDetail: StreamDetail;

  displayedColumns: string[] = ['streamUrl', 'refererUrl', 'isLive'];
  dataSource = new MatTableDataSource();
  constructor(protected ref: NbDialogRef<DetailDialogComponent>,
              private streamsService: StreamsService,
              private toastService: ToastService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.streamDetail.streamUrlList);
  }

  pressLive(streamUrl: StreamUrl) {
    this.streamsService.liveStreams(streamUrl).subscribe(
      (res: any) => {
        const newStreamUrl = res.data.streamUrlList;
        this.dataSource = new MatTableDataSource(newStreamUrl);
        this.toastService.showToast('success', 'Live stream', 'Start/stop stream successfully.');
      },
      (error) => {
        console.log(error);
        this.toastService.showToast('danger', 'Live stream', 'Start/stop stream failed.');
      },
    );
  }

  dismiss() {
    this.ref.close();
  }
}
