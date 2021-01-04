import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { Typography } from '@material-ui/core'
import useStyles from './styles'
function CardTask({ id, title, desc, date, edit, remove }) {

    const styles = useStyles()
    return (
        <Card
            variant="outlined"
            className={styles.cardPrincipal}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography color="textSecondary">
                    {desc}
                </Typography>
                <Typography variant="body2" component="p">
                    {date}
                </Typography>
            </CardContent>
            <CardActions>
                {remove}
                {edit}
            </CardActions>
        </Card>
    )
}

export default CardTask
