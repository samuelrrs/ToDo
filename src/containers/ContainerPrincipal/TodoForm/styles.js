import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  lista: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 0',
    color: '#fff',
    borderRadius: '5px',
    padding: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    gap: '20px',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  switch: {
    color: 'white',
  },
  icons: {
    padding: 10,
  },
  tooltip: {
    fill: 'gold',
    paddingLeft: 5,
  },
}))

export default useStyles
