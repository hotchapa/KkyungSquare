import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color:{
      main: string; // 주 색상
      sub : string; // 부 색상
      back: string; // 배경 색상
      text : string; // 텍스트 색상
      accent : string; // 강조 색상
      success: string; // 성공 상태 색상
      error: string; // 오류 상태 색상
      warning: string; // 경고 상태 색상
      light : string; // 밝은 색상
      dark : string; // 어두운 색상
    },
    fontsize:{
      header1 : string;
      header2 : string;
      body1 : string;
      body2 : string;
      default : string;
    }
  }
}