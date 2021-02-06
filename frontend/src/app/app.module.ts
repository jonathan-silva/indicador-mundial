import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './shared/angular-material.module';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#fff',
  pbColor: '#075fab',
  overlayColor: 'rgba(40, 40, 40, 0.9)',
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 60,
  bgsType: SPINNER.squareJellyBox,
  fgsType: SPINNER.foldingCube,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  logoPosition: 'center-center',
  logoSize: 120,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
