import { registerLocaleData } from "@angular/common";
import localeHU from "@angular/common/locales/HU";
import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from "@core/core.module";
import { PageTitleModule } from "@core/page-title/page-title.module";
import { ApiCallerModule } from "@deejayy/api-caller";
import { environment } from "@env/environment";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { WeatherCardComponent } from "./components/weather-card/weather-card.component";

const MATERIAL = [
  MatProgressSpinnerModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
];

registerLocaleData(localeHU);

@NgModule({
  declarations: [AppComponent, WeatherCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      }
    ),
    EffectsModule.forRoot(),
    ApiCallerModule,
    PageTitleModule,
    StoreDevtoolsModule.instrument({
      name: "Angular 13 Bootstrap",
      maxAge: 200,
      logOnly: environment.production,
    }),
    ReactiveFormsModule,
    ...MATERIAL,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "hu-HU" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
