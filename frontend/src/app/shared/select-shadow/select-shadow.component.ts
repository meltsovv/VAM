import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StyleRenderingService } from 'src/app/services/style-rendering.service';

@Component({
  selector: 'app-select-shadow',
  templateUrl: './select-shadow.component.html',
  styleUrls: ['./select-shadow.component.scss']
})
export class SelectShadowComponent implements OnInit {
  shadow: FormGroup;
  @Output() shadowStyles = new EventEmitter<any>();

  constructor(fb: FormBuilder, public styleRenderingService: StyleRenderingService) {
    this.shadow = fb.group({
      horizontal: [0, [Validators.required]],
      vertical: [0, [Validators.required]],
      blur: [0, [Validators.required]],
      stretching: [0, [Validators.required]],
      shadowColor: ['#000000', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.shadow.valueChanges.subscribe(() => {
      this.shadowStyles.emit(this.shadow.value);
    })
  }


}
