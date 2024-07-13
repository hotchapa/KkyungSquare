import { DefaultTheme } from 'styled-components'

const mainTheme: DefaultTheme = {
  color: {
    main: '#0066FF', // 주 색상
    sub: '#15F288', // 부 색상
    back: '#23212D', // 배경 색상
    text: '#010101', // 텍스트 색상
    accent: '#FF6B00', // 강조 색상
    success: '#28a745', // 성공 상태 색상
    error: '#dc3545', // 오류 상태 색상
    warning: '#ffc107', // 경고 상태 색상
    light: '#f8f9fa', // 밝은 색상
    mediumDark: '#1B1C28',
    dark: '#0B0B0B', // 어두운 색상
  },
  fontsize: {
    header1: '2em',
    header2: '1.5em',
    body1: '1.13em',
    body2: '1em',
    default: '0.81em',
  },
}

export { mainTheme }

const darkTheme: DefaultTheme = {
  color: {
    main: '#19181E', // 주 색상
    sub: '#FFC786', // 부 색상
    back: '#474650', // 배경 색상
    text: '#010101', // 텍스트 색상
    accent: '#FF6B00', // 강조 색상
    success: '#28a745', // 성공 상태 색상
    error: '#dc3545', // 오류 상태 색상
    warning: '#ffc107', // 경고 상태 색상
    light: '#f8f9fa', // 밝은 색상
    mediumDark: '#1B1C28',
    dark: '#343a40', // 어두운 색상
  },
  fontsize: {
    header1: '2em',
    header2: '1.5em',
    body1: '1.13em',
    body2: '1em',
    default: '0.81em',
  },
}

export { darkTheme }
