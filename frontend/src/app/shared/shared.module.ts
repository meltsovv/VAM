import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { SelectStyleForHeaderComponent } from './select-style-for-header/select-style-for-header.component';
import { SelectShadowComponent } from './select-shadow/select-shadow.component';
import { SelectBorderComponent } from './select-border/select-border.component';
import { SelectCustomBlockComponent } from './select-custom-block/select-custom-block.component';
import { SelectButtonComponent } from './select-button/select-button.component';

@NgModule({
  declarations: [
    SelectStyleForHeaderComponent,
    SelectShadowComponent,
    SelectBorderComponent,
    SelectCustomBlockComponent,
    SelectButtonComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SelectStyleForHeaderComponent
  ],
})
export class SharedModule {}
