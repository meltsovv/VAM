import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StyleRenderingService } from 'src/app/services/style-rendering.service';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  button: FormGroup;
  @Output() buttonStyles = new EventEmitter<any>();

  constructor(fb: FormBuilder, public styleRenderingService: StyleRenderingService) {
    this.button = fb.group({
      color: ['#000000', [Validators.required]],
      fontSize: [15, [Validators.required]],
      fontWeight: [400, [Validators.required]],
      background: ['#fafafa', [Validators.required]],
      borderRadius: [5, [Validators.required]],
      height: [30, [Validators.required]],
      padding: [10, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.button.valueChanges.subscribe(() => {
      this.buttonStyles.emit(this.button.value);
    })
  }

}
