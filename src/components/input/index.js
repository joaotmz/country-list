import React, { useState } from 'react';

import { BoxField, Label, InputField } from './styles';

function Input({
    type,
    name,
    label,
    value
}) {

    const [valid, setValid] = useState(false);

    const onChangeValue = (e) => {
        const v = e.target.value.length > 0 ? 'visited' : ''
        setValid(v)
        value(e.target.value)
    };

    return (
        <>
            <BoxField>
                <InputField type={type} name={name} autoComplete="off" placeholder={label} onChange={onChangeValue}></InputField>
                <Label className={valid}>{label}</Label>
            </BoxField>
        </>
    );
}

export default Input;