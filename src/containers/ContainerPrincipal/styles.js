import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  containerCard: {
    width: '100%',
    display: 'flex',
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBackground: {
    background: '#141212a6',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '15px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
    color: 'white',
    alignItems: 'center',
    display: 'flex',
  },
  main: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    margin: '2px 0',
    color: 'white',
    fontSize: '24px',
    padding: '35px',
  },
}))

export default useStyles
