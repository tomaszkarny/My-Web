import facepaint from 'facepaint';

export const MEDIA_QUERIES = {
  small: '@media(max-width: 759px)',
  medium: '@media(min-width: 920px)',
  large: '@media(min-width: 1120px)',
  xLarge: '@media(min-width: 1500px)',
};

export const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)',
  '@media(min-width: 1500px)',
]);

export const mqMedium = facepaint([MEDIA_QUERIES.medium]);
export const mqSmall = facepaint([MEDIA_QUERIES.small]);
