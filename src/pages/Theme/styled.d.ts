import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
