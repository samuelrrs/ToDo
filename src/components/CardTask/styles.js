import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  acordionPrincipal: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#465166',
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
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
}))

export default useStyles
