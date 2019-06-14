import { Injectable } from '@angular/core';
import {DayWeather, ForecastWeatherResult, NowWeather, NowWeatherBox, NowWeatherResult} from "../model/weather";
import {Observable} from "rxjs";
import {HttpClientService} from "./http-client.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private key = 'b196aa4a79ed4e9a9318f8142da52822';
  private location = "丰台,北京";
  private nowUrl = 'https://free-api.heweather.net/s6/weather/now';
  private forecastUrl = 'https://free-api.heweather.net/s6/weather/forecast';
  private hourlyUrl = 'https://free-api.heweather.net/s6/weather/hourly';
  private lifestyleUrl = 'https://free-api.heweather.net/s6/weather/lifestyle';

  constructor(private httpClient: HttpClientService) {

  }

  public getNowWeather(): Observable<NowWeather> {
    const param = new HttpParams()
      .append("key", this.key)
      .append("location", this.location);
    return new Observable<NowWeather>(ob => {
      this.httpClient.doGet<NowWeatherResult>(this.nowUrl,param)
        .subscribe(item => {
          ob.next(item.body.HeWeather6[0].now)
        })
    });
  }

  public getForecast(): Observable<DayWeather[]> {
    const param = new HttpParams()
      .append("key", this.key)
      .append("location", this.location);
    return new Observable<DayWeather[]>(ob => {
      this.httpClient.doGet<ForecastWeatherResult>(this.forecastUrl,param)
        .subscribe(item => {
          ob.next(item.body.HeWeather6[0].daily_forecast)
        })
    });
  }
}
