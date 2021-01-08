import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  lista: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 0',
    color: '#fff',
    backgroundColor: '#839bb7',
    borderRadius: '5px',
    padding: '10px',
  },
  listaBody: {
    display: 'flex',
    flexDirection: 'row',
  },
  icons: {
    cursor: 'pointer',
    color: 'white',
    padding: 5,
  },
  cardListado: {
    display: 'flex',
  },
}))

export default useStyles
