import { Injectable } from '@angular/core';
import { BottomSheetsOptions } from '../core/types/others/bottom-sheets-options';
import { GlobalStyles } from '../core/types/styles/global-styles';
import { HeaderStyles } from '../core/types/styles/header.styles';
import { ShadowStyle } from '../core/types/styles/shadow.style';

@Injectable({
  providedIn: 'root',
})
export class StyleRenderingService {

  bottomSheetsOption: BottomSheetsOptions = new BottomSheetsOptions();

  globalStyles: GlobalStyles = new GlobalStyles();

  getShadow(shadow: ShadowStyle): string {
    return `${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.stretching}px ${shadow.shadowColor}`
  }

  formatSliderRadius(value: number): number | string {
    if (value >= 1) {
      return Math.round(value / 1) + 'px';
    }

    return value;
  }

  change(el: {style: any, show: boolean}) {
    switch (this.bottomSheetsOption.options[0]) {
      case 'header':
        switch (this.bottomSheetsOption.options[1]) {
          case 'background':
            this.globalStyles.header.background.background = el.style;
            this.globalStyles.header.background.show = el.show;
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }
  }
}
