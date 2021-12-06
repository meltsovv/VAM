import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { SelectStyleComponent } from './select-style/select-style.component';
import { SelectShadowComponent } from './select-shadow/select-shadow.component';
import { SelectBorderComponent } from './select-border/select-border.component';
import { SelectCustomBlockComponent } from './select-custom-block/select-custom-block.component';
import { SelectButtonComponent } from './select-button/select-button.component';
import { SelectEditMenuComponent } from './select-edit-menu/select-edit-menu.component';
import { SelectColorComponent } from './select-color/select-color.component';

@NgModule({
  declarations: [
    SelectStyleComponent,
    SelectShadowComponent,
    SelectBorderComponent,
    SelectCustomBlockComponent,
    SelectButtonComponent,
    SelectEditMenuComponent,
    SelectColorComponent
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
    SelectStyleComponent,
    SelectEditMenuComponent
  ],
})
export class SharedModule {}
