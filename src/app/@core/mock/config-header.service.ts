import {ConfigHeaderData, ConfigData} from '../data/config-header';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import ConfigAPI from '../api/ConfigAPI';
import {AxiosResponse} from 'axios';

@Injectable({providedIn: 'root'})
export class ConfigHeaderService extends ConfigHeaderData {
  getConfig(): Promise<AxiosResponse<any>> {
    return ConfigAPI.getConfig();
  }

  updateConfig(configData: ConfigData): Promise<AxiosResponse<any>> {
    return ConfigAPI.setConfig(configData);
  }
}
