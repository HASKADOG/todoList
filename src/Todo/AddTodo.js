import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    form: {
        marginBottom: '1rem',
        height: '2rem'
    },
    input: {
        height: '2rem',
        padding: 0,
        borderRadius: '7px',
        border: '1px solid grey'
    },
    button: {
        height: '36px',
        background: 'lightblue',
        border: 'none',
        borderRadius: '7px',
        marginLeft: '0.4rem',
        padding: '0 5px'
    }
}

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
        }
    }

    return (
        <form style={ styles.form } onSubmit={ submitHandler }>
            <input value={ value } type="text" style={ styles.input } onChange={ event => setValue(event.target.value) }/>
            <button type="submit" style={ styles.button }>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;