import React, { useState,  useRef } from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import ButtonDefault from './ButtonDefault/index';
import InputText from './InputText/index';

function TodoForm(props) {


    const [input, setInput] = useState('')

    const inputRef = useRef(null)

  /*   useEffect(() => {
        inputRef.current.focus()
    }) */
    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')
    }


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'>
                        Update
          </button>
                </>
            ) : (
                    <>
                        <InputText
                            label='Digite sua tarefa...'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='todo-input'
                        />
                        <ButtonDefault
                            color={'primary'}
                            type={'submit'}
                            onClick={handleSubmit} >
                            <AddBoxIcon />
                        </ButtonDefault>





                    </>
                )}
        </form>
    )
}

export default TodoForm
