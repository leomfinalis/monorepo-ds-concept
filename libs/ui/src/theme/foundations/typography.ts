interface TypographySizes {
  '01': '8px';
  '02': '12px';
  '03': '14px';
  '04': '16px';
  '05': '18px';
  '06': '24px';
  '07': '28px';
  '08': '32px';
}

const typography = {
  fonts: {
    body: `"Effra", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    heading: `"Effra", "Helvetica Neue", Helvetica, Arial, sans-serif`,
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  sizes: {
    '01': '8px',
    '02': '12px',
    '03': '14px',
    '04': '16px',
    '05': '18px',
    '06': '24px',
    '07': '28px',
    '08': '32px',
  } as TypographySizes,
};

export default typography;
