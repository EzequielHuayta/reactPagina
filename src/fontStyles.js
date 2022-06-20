import { createGlobalStyle } from "styled-components";
import FontTitles from './assets/fonts/KaiseiDecol-Bold.ttf'
import FontRegular from './assets/fonts/KaiseiDecol-Regular.ttf'

const FontStyle = createGlobalStyle`
    @font-face {
    font-family: 'Titles';
    src: url(${FontTitles}) format('ttf'),
    }
    @font-face {
    font-family: 'Regular';
    src: url(${FontRegular}) format('ttf'),
    }
`;


export default FontStyle;