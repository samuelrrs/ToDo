import React from 'react'
import Divider from '@material-ui/core/Divider';
import useStyles from './styles';

const Divide = () => {

    const styles = useStyles()

    return (

        <Divider orientation="vertical" flexItem className={ styles.divider } />

    )
}

export default Divide
