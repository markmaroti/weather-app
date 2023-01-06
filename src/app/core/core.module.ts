import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '@app/app-routing.module';
import { AuthModule } from '@core/auth/auth.module';
import { ApiErrorModalComponent } from '@core/component/error-modal/api-error-modal.component';
import { PageTitleModule } from '@core/page-title/page-title.module';
import { ApiConnector } from '@deejayy/api-caller';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ConfigModule } from './config/config.module';
import { configProvider } from './config/service/configuration-factory';
import { FeatureFlagModule } from './feature-flag/feature-flag.module';
import { LocalizerModule } from './localizer/localizer.module';
import { localizerProvider } from './localizer/service/localizer-factory';
import { ApiConnectorService } from './service/api-connector.service';

const MATERIAL = [MatIconModule, MatButtonModule, MatMenuModule, MatDialogModule];

const IMPORT_EXPORT_COMPONENTS = [ApiErrorModalComponent, HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...IMPORT_EXPORT_COMPONENTS],
  imports: [
    CommonModule,
    HttpClientModule,
    ConfigModule,
    FeatureFlagModule,
    LocalizerModule,
    AuthModule,
    PageTitleModule,
    AppRoutingModule,
    ...MATERIAL,
  ],
  providers: [configProvider, localizerProvider, { provide: ApiConnector, useClass: ApiConnectorService }],
  exports: [...IMPORT_EXPORT_COMPONENTS],
})
export class CoreModule {}
