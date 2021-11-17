import { createGlobalStyle } from "styled-components";
import Hollow from "./fonts/SfDistantGalaxyOutline-xoeO.ttf";
import DGR from "./fonts/SfDG.ttf";
import Aurebesh from "./fonts/Aurebesh.otf";

const FontStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Encode Sans Expanded", sans-serif;
}

@font-face {
  font-family: dgr; 
  src: url(${DGR}) format('truetype');
}

@font-face {
  font-family: Hollow; 
  src: url(${Hollow}) format('truetype');
}

@font-face {
  font-family: Aurebesh;
  src: url(${Aurebesh}) format('opentype');
}

h1 {
  font-family: "dgr";
}
`;

export default FontStyles;
