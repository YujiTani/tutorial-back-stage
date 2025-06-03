import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: 'auto',
    height: 28,
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.img}
      src="/logos/logo.jpeg"
      alt="Logo"
    />
  );
};

export default LogoIcon;
