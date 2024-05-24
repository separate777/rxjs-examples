import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import { PokeService } from './services/poke.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import './operators/switchMap/switchMap';
import './operators/map/map';
import './operators/tap/tap';
import './operators/combineLatest/combineLatest';
import './operators/startWith/startWith';
import './operators/takeUntil/takeUntil';
import './operators/take/take';
import './operators/debounceTime/debounceTime';
import './operators/filter/filter';
import './operators/withLatestFrom/withLatestFrom';
import './operators/of/of';

@NgModule({
  declarations: [AppComponent],
  providers: [PokeService],
  imports: [
    InputNumberModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
