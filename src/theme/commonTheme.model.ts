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

interface FontFamily {
  headers: string
  body: string
}

interface Text {
  fontFamily: FontFamily
}
export interface CommonTheme {
  colors: ColorsThemes
  text: Text
}
