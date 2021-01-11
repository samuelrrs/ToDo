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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '8px 0',
    padding: '10px',
    gap: '20px',
  },
  formedit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  switch: {
    color: 'white',
    borderStyle: 'solid',
  },
  date: {
    backgroundColor: '#93C0E4',
    borderStyle: 'solid',
  },
  icons: {
    padding: 10,
  },
}))

export default useStyles
