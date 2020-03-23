const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptopS: '1024px',
  laptopL: '1248px'
};

export const device = {
  mobileS: `(min-width: ${breakpoints.mobileS})`,
  mobileM: `(min-width: ${breakpoints.mobileM})`,
  mobileL: `(min-width: ${breakpoints.mobileL})`,
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptopS: `(min-width: ${breakpoints.laptop})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`
};
