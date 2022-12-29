import colors from './colors';
import typography from './typography';
import sizes from './sizes';
import spacing from './spacing';
import radii from './radii';
import shadows from './shadows';

const foundations = (mode: 'light' | 'dark' = 'light') => {
  return {
    colors: colors(mode),
    typography,
    sizes,
    spacing,
    radii,
    shadows,
  };
};

export default foundations;
