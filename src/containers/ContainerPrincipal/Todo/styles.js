import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  acordionPrincipal: {
    width: '70%',
    backgroundColor: '#465166',
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
  },
  descContainer: {},
  desc: {
    color: 'white',
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
  dica: {
    fontSize: 30,
  },
}))

export default useStyles
