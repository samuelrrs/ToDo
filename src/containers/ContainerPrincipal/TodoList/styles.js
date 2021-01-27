import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  noTask: {
    color: 'gray',
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  list: {
    width: '90%',
    margin: 'auto',
    maxHeight: '300px',
    overflow: 'hidden',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    paddingBottom: '5px',
    flexDirection: 'column',
  },
}))

export default useStyles
