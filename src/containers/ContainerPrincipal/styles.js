import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '540px',
    minHeight: '600px',
    background: '#141212a6',
    textAlign: 'center',
    margin: '80px auto',
    borderRadius: '10px',
    paddingBottom: '32px',
    color: 'red',
  },
}))

export default useStyles
