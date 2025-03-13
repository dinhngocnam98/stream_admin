import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {StreamUrl} from './streams.component';

@Injectable({
  providedIn: 'root',
})
export class StreamsService {
  private apiUrl = environment.javaUrl; // Đổi thành API của bạn

  constructor(private http: HttpClient) {}

  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json',
  };

  addStream(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addStream`, data, {headers: new HttpHeaders(this.headers)});
  }

  updateStream(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/update`, data, {headers: new HttpHeaders(this.headers)});
  }

  getChannels(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`, {headers: new HttpHeaders(this.headers)});
  }

  liveStreams(streamUrl: StreamUrl): Observable<any[]> {
    return this.http.post<any>(`${this.apiUrl}/live`, streamUrl, {headers: new HttpHeaders(this.headers)});
  }

  deleteStream(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`, {headers: new HttpHeaders(this.headers)});
  }

  toggleLiveStream(stream: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${stream.id}`, { isLive: !stream.isLive });
  }
}
