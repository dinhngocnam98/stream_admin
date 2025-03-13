import { Observable } from 'rxjs';
import {AxiosResponse} from 'axios';

export interface ConfigHeader {
  id?: number;
  creator: string;
  type: string;
  title: string;
  publisher: string;
  description: string;
  imageUrl: string;
  url: string;
  iconUrl: string;
}

export interface ConfigData {
  homePage: ConfigHeader;
  newPage: ConfigHeader;
}

export abstract class ConfigHeaderData {
  abstract getConfig(): Promise<AxiosResponse<any>>;
  abstract updateConfig(configData: ConfigData): Promise<AxiosResponse<any>>;
}
