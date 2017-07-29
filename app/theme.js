import createPalette from 'material-ui/styles/palette';
import createMuiTheme from 'material-ui/styles/theme';
import { red, blue } from 'material-ui/colors';

export default createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: red
  })
});
