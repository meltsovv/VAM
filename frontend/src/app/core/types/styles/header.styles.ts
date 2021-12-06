import { Background } from "./background";
import { Border } from "./border.style";
import { ButtonStyles } from "./button.style";
import { CustomBlockStyles } from "./custom-block.style";
import { ShadowStyle } from "./shadow.style";

export class HeaderStyles {

  background: Background = new Background();



  customBlock: CustomBlockStyles = new CustomBlockStyles()
  shadow: ShadowStyle = new ShadowStyle();
  button: ButtonStyles = new ButtonStyles();
  border: Border = new Border();
  buttonBorder: Border = new Border();
}
