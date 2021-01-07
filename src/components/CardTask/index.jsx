import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import useStyles from './styles'
function CardTask ( { id, title, desc, date, edit, remove, favorite } ) {

    const styles = useStyles()
    return (
        <Card
            variant="outlined"
            className={ styles.cardPrincipal }>
            <CardContent>
                <Typography className={ styles.id }>
                    { id }
                </Typography>
                <Typography className={ styles.title }>
                    { title }
                </Typography>
                <Typography className={ styles.desc }>
                    { desc }
                </Typography>
                <Typography variant="body2" component="p">
                    { date }
                </Typography>
                <Typography variant="body2" component="p">
                    { favorite }
                </Typography>
            </CardContent>
            <CardActions>
                { remove }
                { edit }
            </CardActions>
        </Card>
    )
}

export default CardTask
