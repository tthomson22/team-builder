import React from 'react';

const Form = (props) => {

    const onChange = (evt) => {
        const { name, value } = evt.target
        props.change(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.submit();
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Name
                <input 
                    placeholder='Enter name'
                    value={props.values.name}
                    name='name'
                    onChange={onChange}
                />
            </label>
            <label>Email
                <input 
                    placeholder='Enter email'
                    value={props.values.email}
                    name='email'
                    onChange={onChange}
                />
            </label>
            <label>Role
                <select value={props.values.role} name='role' onChange={onChange}>
                    <option value=''>--Select a role--</option>
                    <option value='Student'>Student</option>
                    <option value='Teacher'>Teacher</option>
                    <option value='Graduate'>Graduate</option>
                </select>
            </label>

            <input type='submit' value='Create team' />
        </form>
    )
}

export default Form;