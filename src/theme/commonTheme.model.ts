interface Colors {
  primary: string
  secondary: string
  accent: string
  body: string
  header: string
  menu: string
}
interface ColorsThemes {
  light: Colors
  dark: Colors
}
export interface CommonTheme {
  colors: ColorsThemes
}
