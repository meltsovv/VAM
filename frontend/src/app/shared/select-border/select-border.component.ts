import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StyleRenderingService } from 'src/app/services/style-rendering.service';

@Component({
  selector: 'app-select-border',
  templateUrl: './select-border.component.html',
  styleUrls: ['./select-border.component.scss']
})
export class SelectBorderComponent implements OnInit {
  border: FormGroup;
  @Output() borderStyles = new EventEmitter<any>();

  constructor(fb: FormBuilder, public styleRenderingService: StyleRenderingService) {
    this.border = fb.group({
      width: [1, [Validators.required]],
      borderStyle: ['solid', [Validators.required]],
      color: ['#000000', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.border.valueChanges.subscribe(() => {
      this.borderStyles.emit(this.border.value);
    })
  }

}
