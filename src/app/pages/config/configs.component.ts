import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfigHeaderService} from '../../@core/mock/config-header.service';
import {ConfigData, ConfigHeader } from '../../@core/data/config-header';
import {ToastService} from '../../@core/utils/toast.service';

@Component({
  selector: 'ngx-configs',
  styleUrls: ['./configs.component.scss'],
  templateUrl: './configs.component.html',
})
export class ConfigsComponent implements OnInit {
  formHome: FormGroup;
  formNew: FormGroup;

  constructor(private configHeaderService: ConfigHeaderService, private toastService: ToastService) {
    this.formHome = new FormGroup({
      id: new FormControl(),
      type: new FormControl('Home Page'),
      creator: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      publisher: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      iconUrl: new FormControl('', Validators.required),
    });

    this.formNew = new FormGroup({
      id: new FormControl(),
      type: new FormControl('New Page'),
      creator: new FormControl('', Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      publisher: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      iconUrl: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.configHeaderService.getConfig().then(res => {
      const homePage: ConfigData = res.data.homePage;
      const newPage: ConfigData = res.data.newPage;
      if (homePage) {
        this.formHome.setValue(homePage);
      }
      if (newPage) {
        this.formNew.setValue(newPage);
      }
    });
  }

  onSubmit() {
    const configData: ConfigData = {
      homePage: this.formHome.value,
      newPage: this.formNew.value,
    };
    this.configHeaderService.updateConfig(configData).then( res => {
      const homePage: ConfigData = res.data.homePage;
      const newPage: ConfigData = res.data.newPage;
      if (homePage) {
        this.formHome.setValue(homePage);
      }
      if (newPage) {
        this.formNew.setValue(newPage);
      }
    }).catch((err) => {
      console.log(err);
      this.toastService.showToast('danger', 'Update Config', 'Update config faild');
    });
    this.toastService.showToast('success', 'Update Config', 'Update config success');
  }
}
