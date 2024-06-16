export const handleChange = (e, formData, setFormData) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    return { [name]: value };
};

export const handleBlur = (e, formData, setTouched, validateField, touched, errors, setErrors) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
        ...prevTouched,
        [name]: true,
    }));
    validateField(name, formData[name], errors, setErrors);
};

export const validateField = (name, value, errors, setErrors) => {
    let error = '';
    if (!value) {   
        error = 'This field is required';
    } 
    setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
    }));
    return error;
};

export const fieldname = (formData) => {
    const emptyFields = [];        
    for (const key in formData) {
        if (!formData[key]) {
            emptyFields.push(key);
        }
    }
    return emptyFields;
};

export const handleSubmit = (e, formData, setTouched, validateField, setErrors, touched, errors) => {
    debugger
    e.preventDefault();
    
    const fields = fieldname(formData);
       
    // Check if any required field is empty
    const requiredFields = fields.filter(field => mandatoryFields.includes(field));
    let hasError = false;

    const updatedTouched = { ...touched };

    requiredFields.forEach(fieldNames => {
        if (!formData[fieldNames]) {
            hasError = true;
            updatedTouched[fieldNames] = true;
            validateField(fieldNames, formData[fieldNames], errors, setErrors);
        }
    });

    setTouched(updatedTouched);

    // If there's an error, exit without submitting the form
    if (hasError) {
        return;
    }

    // If no error, continue with form submission
    //console.log(formData);
    // alert(formData)
    return formData;
};
