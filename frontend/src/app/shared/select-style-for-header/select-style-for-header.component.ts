import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Border } from 'src/app/core/types/styles/border.style';
import { ButtonStyles } from 'src/app/core/types/styles/button.style';
import { CustomBlockStyles } from 'src/app/core/types/styles/custom-block.style';
import { ShadowStyle } from 'src/app/core/types/styles/shadow.style';

@Component({
  selector: 'app-select-style-for-header',
  templateUrl: './select-style-for-header.component.html',
  styleUrls: ['./select-style-for-header.component.scss']
})
export class SelectStyleForHeaderComponent implements OnInit {
  form: FormGroup;
  @Output() styles = new EventEmitter<any>();

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      customBlock: fb.group({
        background: ['#ffffff', [Validators.required]],
        color: ['#000', [Validators.required]],
        borderRadius: [5, [Validators.required]],
        height: [50, [Validators.required]],
      }),
      shadow: fb.group({
        horizontal: [0, [Validators.required]],
        vertical: [0, [Validators.required]],
        blur: [0, [Validators.required]],
        stretching: [0, [Validators.required]],
        shadowColor: ['#000000', [Validators.required]],
      }),
      button: fb.group({
        color: ['#000000', [Validators.required]],
        fontSize: [15, [Validators.required]],
        fontWeight: [400, [Validators.required]],
        background: ['#fafafa', [Validators.required]],
        borderRadius: [5, [Validators.required]],
        height: [30, [Validators.required]],
        padding: [10, [Validators.required]],
      }),
      buttonBorder: fb.group({
        borderStyle: ['solid', [Validators.required]],
        color: ['#000000', [Validators.required]],
        width: [1, [Validators.required]],
      }),
      border: fb.group({
        width: [1, [Validators.required]],
        borderStyle: ['solid', [Validators.required]],
        color: ['#000000', [Validators.required]],
      })
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.styles.emit(this.form.value);
    })
  }

  getShadowStyle(data: ShadowStyle): void {
    this.form.get('shadow')?.patchValue(data);
  }

  getBorderStyles(data: Border): void {
    this.form.get('border')?.patchValue(data);
  }

  getCustomBlockStyles(data: CustomBlockStyles): void {
    this.form.get('customBlock')?.patchValue(data);
  }

  getButtonStyles(data: ButtonStyles): void {
    this.form.get('button')?.patchValue(data);
  }

  getBorderStylesForButton(data: ShadowStyle): void {
    this.form.get('buttonBorder')?.patchValue(data);
  }
}
