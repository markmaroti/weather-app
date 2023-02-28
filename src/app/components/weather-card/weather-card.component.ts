import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-weather-card",
  templateUrl: "./weather-card.component.html",
  styleUrls: ["./weather-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCardComponent {
  @Input() public weatherData$: Observable<any> = of([]);
}
