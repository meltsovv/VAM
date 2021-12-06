import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SelectStyleComponentsEnum } from 'src/app/core/types/enums/select-style-components.enum';
import { StyleRenderingService } from 'src/app/services/style-rendering.service';


@Component({
  selector: 'app-select-style',
  templateUrl: './select-style.component.html',
  styleUrls: ['./select-style.component.scss']
})
export class SelectStyleComponent{

  selectStyleComponentsEnum = SelectStyleComponentsEnum;

  constructor(private bottomSheetRef: MatBottomSheetRef<SelectStyleComponent>, public styleRenderingService: StyleRenderingService) {}

  save() {
    this.bottomSheetRef.dismiss()
  }

  change(event: {style: any, show: boolean}) {
    if(event.style) {
      this.styleRenderingService.change(event);
    }
  }
}
