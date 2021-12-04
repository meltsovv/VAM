import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StyleRenderingService } from 'src/app/services/style-rendering.service';

@Component({
  selector: 'app-select-custom-block',
  templateUrl: './select-custom-block.component.html',
  styleUrls: ['./select-custom-block.component.scss']
})
export class SelectCustomBlockComponent implements OnInit {

  customBlock: FormGroup;

  @Output() customBlockStyles = new EventEmitter<any>();

  constructor(fb: FormBuilder, public styleRenderingService: StyleRenderingService) {
    this.customBlock = fb.group({
      width: [100, [Validators.required]],
      background: ['#ffffff', [Validators.required]],
      color: ['#000', [Validators.required]],
      borderRadius: [5, [Validators.required]],
      height: [50, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.customBlock.valueChanges.subscribe(() => {
      this.customBlockStyles.emit(this.customBlock.value);
    })
  }

}
