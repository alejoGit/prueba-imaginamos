import { useState, useEffect } from 'react';
import { useValidateInputValue } from './useValidateInputValue';

export const useInputValue = initialValue => {
    const [value, setValue] = useState(initialValue);
    
    const validate = useValidateInputValue(value);

    const onChange = e => {
    	setValue(e.target.value);
    	validate.validate(e.target.value, e.target.name)
    }

    return { value, onChange, validate }
}