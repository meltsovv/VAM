import { Border } from "./border.style";
import { ShadowStyle } from "./shadow.style";

export class ButtonStyles {
  background: string = '#fafafa';
  color: string = '#000000';
  borderRadius: number = 5;
  height: number = 30;
  padding: number = 10;
  fontSize: number = 15;
  fontWeight: number = 400;
  border: Border = new Border();
  shadow: ShadowStyle = new ShadowStyle();
}
