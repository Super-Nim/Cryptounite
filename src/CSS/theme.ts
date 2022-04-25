import { createTheme } from "@material-ui/core";
import { blue, green, orange } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu'
  },
  palette: {
    primary: {
      main: '#00ccff'
    },
    secondary: {
      main: '#32CD32'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50
      }
    },
    MuiTabs: {
       indicator: {
         background: 'green'
       } 
    }
  },

  // default_tab:{
  //   color: green,
  //   backgroundColor: blue,
  //   fontWeight: 400,
  // },
  // active_tab:{
  //   color: orange
  // }

  });

  // set typography to Ubuntu, but it uses google fonts how to do?


  export default theme;