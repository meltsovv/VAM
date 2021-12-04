import { Injectable } from '@angular/core';
import { HeaderStyles } from '../core/types/styles/header.styles';
import { ShadowStyle } from '../core/types/styles/shadow.style';

@Injectable({
  providedIn: 'root',
})
export class StyleRenderingService {
  getShadow(shadow: ShadowStyle): string {
    return `${shadow.horizontal}px ${shadow.vertical}px ${shadow.blur}px ${shadow.stretching}px ${shadow.shadowColor}`
  }

  formatSliderRadius(value: number): number | string {
    if (value >= 1) {
      return Math.round(value / 1) + 'px';
    }

    return value;
  }
}
