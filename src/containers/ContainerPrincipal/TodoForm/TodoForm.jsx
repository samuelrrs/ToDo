import React, { useState/* , useRef, useEffect  */} from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import ButtonDefault from './../../../Components/ButtonDefault/index';
import InputText from './../../../Components/InputText/index';
import { FormControlLabel } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';


function TodoForm(props) {


    const [input, setInput] = useState(props.edit ? props.edit.value : '')
   /*  const [desc, setDesc] = useState('')
    const [date, setDate] = useState('') */


   /*  const inputRef = useRef(null)
 */
   /*  useEffect(() => {
        inputRef.current.focus()
    }) */
    function handleChange(e) {
        setInput(e.target.value)
    }
  /*   function handleChangeDesc(e) {
        setDesc(e.target.value)
    } */

    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')
    }



    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const switchChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const styles = useStyles()

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <InputText
                        label='Digite sua tarefa...'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input edit'
                       /*  inputRef={inputRef} */
                    />
                    <ButtonDefault onClick={handleSubmit} className='todo-button edit'>
                        Update
                    </ButtonDefault>
                </>
            ) : (
                    <Container className={styles.form}>
                        <InputText
                            label='Digite sua descrição...'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='todo-input'
                           /*  inputRef={inputRef} */
                        />
                        {/* <InputText
                            label='Digite a descrição'
                            value={desc}
                            onChange={handleChangeDesc}
                        />
                           <InputText
                            value={date}
                            type="date"

                        />  */}
                        <FormControlLabel
                            control={<Switch checked={state.checkedA} onChange={switchChange} name="checkedA" />}
                            label="Importante"
                        />
                        <ButtonDefault
                            color={'primary'}
                            type={'submit'}
                            onClick={handleSubmit}
                            className={styles.button} >
                            <AddBoxIcon />
                        </ButtonDefault>

                    </Container>
                )}
        </form>
    )
}

export default TodoForm
