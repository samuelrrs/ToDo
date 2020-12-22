import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
  display: 'flex',
  flexDirection: 'column',
  width: '520px',
  minHeight: '600px',
  background: '#112333',
  textAlign: 'center',
  margin: '80px auto',
  borderRadius: '10px',
  paddingBottom: '32px',
  color: 'red'
  },
}));

export default useStyles;
