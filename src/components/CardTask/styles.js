import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  cardPrincipal: {
    width: 450,
    backgroundColor: '#565B82',
    color: '#ffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 25,
    marginBottom: 20,
    borderRadius: '3%',
  },
  id: {
    color: '#A8A8A8',
    fontSize: 22,
    border: '0.9px solid white',
  },
  title: {
    margin: 10,
    fontSize: 22,
  },
  desc: {
    margin: 10,
    fontSize: 18,
  },
}))

export default useStyles
