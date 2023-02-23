import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ApiCallerService } from "@deejayy/api-caller";
import { BehaviorSubject, filter, map, switchMap, tap } from "rxjs";

import { PageTitleService } from "@core/page-title/service/page-title.service";
import {
  Coordinates,
  getWindStringByIndex,
  initGeolocationPositionError,
  initLatitude,
  initLocation,
  initLongitude,
  mapIconByResponse,
  mapWeatherByResponse,
  mapWeatherDetailByResponse,
  WEATHER_TYPES,
} from "./app.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public defaultTitle: string = "weather";
  public projectsTitle: string = $localize`:@@menuItemProjects:`;
  public apiCall = {
    api: "http://www.7timer.info/bin/api.pl",
    path: "?product=civillight&output=json",
  };
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public responseError$: BehaviorSubject<GeolocationPositionError> =
    new BehaviorSubject(initGeolocationPositionError);
  public locations$: BehaviorSubject<Coordinates> = new BehaviorSubject(
    initLocation
  );
  public response$ = this.locations$.pipe(
    filter(
      (locations) =>
        !!locations && locations.latitude != 0 && locations.longitude != 0
    ),
    tap(() => this.loading$.next(true)),
    switchMap(
      (coords: Coordinates) =>
        this.apiCallerService.callApi({
          ...this.apiCall,
          path: `${this.apiCall.path}&lon=${coords.latitude}&lat=${coords.longitude}`,
        }).data$
    )
  );
  public parsedData$ = this.response$.pipe(
    filter((response) => !!response),
    map((response: any) => response.dataseries),
    map((days) =>
      days.map((day: any) => ({
        ...day,
        date: `${day.date.toString().slice(0, 4)}-${day.date
          .toString()
          .slice(4, 6)}-${day.date.toString().slice(6, 8)}`,
        wind: getWindStringByIndex[day.wind10m_max],
        icon: mapIconByResponse[day.weather as WEATHER_TYPES],
        weather: mapWeatherByResponse[day.weather as WEATHER_TYPES],
        weatherHint: mapWeatherDetailByResponse[day.weather as WEATHER_TYPES],
      }))
    ),
    tap(() => this.loading$.next(false))
  );

  public latitudeControl = new FormControl(initLatitude, [Validators.required]);
  public longitudeControl = new FormControl(initLongitude, [
    Validators.required,
  ]);

  constructor(
    private pageTitle: PageTitleService,
    private apiCallerService: ApiCallerService
  ) {
    this.pageTitle.setTitle(this.defaultTitle);
    this.pageTitle.attachRoute(this.defaultTitle);
    this.getLocation();
  }

  public setCoords() {
    this.locations$.next({
      latitude: this.latitudeControl.value
        ? this.latitudeControl.value
        : initLatitude,
      longitude: this.longitudeControl.value
        ? this.longitudeControl.value
        : initLongitude,
    });
  }

  private getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          if (position) {
            this.locations$.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }
        },
        (error: GeolocationPositionError) => this.responseError$.next(error)
      );
    } else {
      this.responseError$.next({
        ...initGeolocationPositionError,
        message: "Geolocation is not supported by this browser.",
      });
    }
  }
}
