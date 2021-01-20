import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  acordionPrincipal: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
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
    display: 'flex',
    gap: 10,
    paddingLeft: 5,
  },
  important: {
    fill: 'gold',
    position: 'relative',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingLeft: 5,
  },
  infoSec: {},
  listaBody: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default useStyles
