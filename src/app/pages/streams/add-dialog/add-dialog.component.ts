import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StreamDetail} from '../streams.component';
import * as moment from 'moment';

@Component({
  selector: 'ngx-add-dialog',
  templateUrl: 'add-dialog.component.html',
  styleUrls: ['add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {

  @Input() streamDetail: StreamDetail;

  constructor(protected ref: NbDialogRef<AddDialogComponent>) {
  }

  streamForm: FormGroup;

  ngOnInit(): void {
    console.log(this.streamDetail);
    // const startDate = new Date(this.streamDetail.startTime);
    this.streamForm = new FormGroup({
      name: new FormControl(this.streamDetail?.name, Validators.required),
      group: new FormControl(this.streamDetail?.group, Validators.required),
      logoUrl: new FormControl(this.streamDetail?.logoUrl, Validators.required),
      startDate: new FormControl(this.streamDetail?.startTime ? new Date(this.streamDetail?.startTime) : new Date(),
        Validators.required),
      startTime: new FormControl(this.streamDetail?.startTime ? new Date(this.streamDetail?.startTime) : new Date(),
        Validators.required),
      streamUrls: new FormGroup({
        streamUrl1: new FormControl(this.streamDetail?.streamUrlList[0]?.streamUrl),
        refererUrl1: new FormControl(this.streamDetail?.streamUrlList[0]?.refererUrl),
        streamUrl2: new FormControl(this.streamDetail?.streamUrlList[1]?.streamUrl),
        refererUrl2: new FormControl(this.streamDetail?.streamUrlList[1]?.refererUrl),
        streamUrl3: new FormControl(this.streamDetail?.streamUrlList[2]?.streamUrl),
        refererUrl3: new FormControl(this.streamDetail?.streamUrlList[2]?.refererUrl),
      }),
    });
  }

  cancel() {
    this.ref.close(false);
  }

  submit() {
    if (this.streamForm.valid) {
      const {name, group, logoUrl, startDate, startTime, streamUrls} = this.streamForm.value;
      const date = moment(startDate).format('YYYY-MM-DD');
      const time = moment(startTime).format('HH:mm:ss');
      const data = {
        name,
        group,
        logoUrl,
        startTime: date + ' ' + time,
        streamUrlList: [
          {
            streamUrl: streamUrls.streamUrl1,
            refererUrl: streamUrls.refererUrl1,
            isLive: false,
          },
          {
            streamUrl: streamUrls.streamUrl2,
            refererUrl: streamUrls.refererUrl2,
            isLive: false,
          },
          {
            streamUrl: streamUrls.streamUrl3,
            refererUrl: streamUrls.refererUrl3,
            isLive: false,
          },
        ],
      };
      this.ref.close(data);
    }
  }
}
