import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageSnippet } from 'src/app/core/types/others/image-snippet'
import { HeaderStyles } from 'src/app/core/types/styles/header.styles';
import { StyleRenderingService } from 'src/app/services/style-rendering.service';
@Component({
  selector: 'app-create-header',
  templateUrl: './create-header.component.html',
  styleUrls: ['./create-header.component.scss']
})
export class CreateHeaderComponent implements OnInit {
  form: FormGroup;

  linkToLogo: string = 'https://cdn.logo.com/hotlink-ok/logo-social.png'
  nameMarket = new FormControl('');

  selectedFile!: ImageSnippet;

  styles: HeaderStyles = new HeaderStyles()

  constructor(fb: FormBuilder, public styleRenderingService: StyleRenderingService) {
    this.form = fb.group({
      nameMarket: fb.group ({
        name: ['Logo', [Validators.required]],
        isName: [false, [Validators.required]],
      }),
      logoMarket: fb.group ({
        logo: ['Logo', [Validators.required]],
        isLogo: [true, [Validators.required]],
      }),
      categoryMarket: fb.group ({
        countCategory: [5, [Validators.required, Validators.max(5), Validators.min(0)]],
      })
    });
  }

  ngOnInit(): void {
  }

  processFile(imageInput: any): void {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.linkToLogo = this.selectedFile.src
    });
    reader.readAsDataURL(file);
  }

  editStyles(el: HeaderStyles): void {
    this.styles = el;
  }

  getArrayWithCount(count: number): number[] {
    const array: number[] = []
    for (let index = 0; index < ((count < 0 || count > 5)? 0: count) ; index++) {
      array.push(index)
    }
    return array;
  }

  saveHeaderStyles(): void {
    console.log(this.styles);
  }
}
