import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  acordionPrincipal: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#465166',
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
  },
  descContainer: {
    gap: 20,
  },
  desc: {
    color: 'white',
  },
  icons: {
    color: 'white',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))

export default useStyles
