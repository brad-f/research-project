import _ from 'lodash';
import createPalette from 'material-ui/styles/palette';
import createTypography from 'material-ui/styles/typography';
import createMuiTheme from 'material-ui/styles/theme';
import { red, blue } from 'material-ui/colors';

const palette = createPalette({
  primary: blue,
  accent: red
});

const typography = createTypography(palette, {
  fontFamily: [
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif'
  ].join(',')
});

export default createMuiTheme({
  palette,
  typography: _.assign({}, typography, {
    body1: _.assign({}, typography.body1, {
      color: 'white'
    })
  })
});
