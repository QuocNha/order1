import { fade, makeStyles } from '@material-ui/core';
const drawerWidth = 240;
   const useStyles =makeStyles ((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: theme.spacing(1),
     
    },

    Menu: {
        
        
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    Body: {
        padding:theme.spacing(2),
        marginTop:theme.spacing(6),
        '& .BodyLeft':{

        },
        '& .BodyCenter': {
          '& drawer'  : {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        '& .BodyRight': {
            width: '100%',
            float:'right',     
        },    
    },
    
    drawerContainer: {
        overflow: 'auto',
    },
  }));
  

export default useStyles;




