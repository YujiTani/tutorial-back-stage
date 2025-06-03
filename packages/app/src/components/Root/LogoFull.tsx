import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  img: {
    width: 'auto',
    height: 30,
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.img}
      src="/logos/logo.jpeg"
      alt="Logo"
    />
  );
};

export default LogoFull;
