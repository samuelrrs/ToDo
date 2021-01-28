import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  acordionPrincipal: {
    width: '100%',
    backgroundColor: '#465166',
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  descContainer: {},
  desc: {
    color: 'white',
    width: '90%',
    wordBreak: 'break-all',
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
    color: 'white',
  },
  textContainer: {
    width: 480,
  },
  iconfalse: {
    opacity: '0.1',
  },
  listaBody: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  divider: {
    padding: 0.5,
    marginRight: 5,
    marginLeft: 5,
    backgroundColor: 'white',
  },
}))

export default useStyles
