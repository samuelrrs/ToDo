import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  acordionPrincipal: {
    width: '100%',
    backgroundColor: '#465166',
    color: 'white',
    marginTop: 5,
    marginBottom: 15,
  },
  descContainer: {},
  desc: {
    color: 'white',
    width: '50%',
  },
  icons: {
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
  },
  important: {
    fill: 'gold',
    position: 'relative',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    maxWidth: '50%',
  },
  iconfalse: {
    opacity: 0,
  },
  listaBody: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
}))

export default useStyles
