import {Injectable} from '@angular/core';
import {
  NbComponentStatus, NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrConfig,
  NbToastrService,
} from '@nebular/theme';

@Injectable()
export class ToastService {
  constructor(private toastrService: NbToastrService) {
  }
  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  positions: string[] = [
    NbGlobalPhysicalPosition.TOP_RIGHT,
    NbGlobalPhysicalPosition.TOP_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_LEFT,
    NbGlobalPhysicalPosition.BOTTOM_RIGHT,
    NbGlobalLogicalPosition.TOP_END,
    NbGlobalLogicalPosition.TOP_START,
    NbGlobalLogicalPosition.BOTTOM_END,
    NbGlobalLogicalPosition.BOTTOM_START,
  ];

  public showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    this.toastrService.show(
      body,
      title,
      config);
  }
}
