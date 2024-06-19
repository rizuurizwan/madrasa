import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import OnlyNumbersInput from '../../_services/OnlyNumbersInput';
function UsersDetail() {
    const [formData, setFormData] = useState({
        name: '',
        madrasaname: '',
        password: '',
        cnfpassword: "",
        email: '',
        phoneNumber: '',
    });
    const [validated, setValidated] = useState(false);
    //const [submit, setSubmit] = useState(false);
    const [touched, setTouched] = useState({})
    const submitFn = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formDataCopy = { ...formData };
            console.log("Form Data:", formDataCopy);
            alert(formDataCopy)
        }

        setValidated(true);
    };
    const chngFn = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,

        });
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };
    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };
    return (
        <div className="container-fluid px-4">
            <Form noValidate validated={validated} onSubmit={submitFn}>
                <div className="d-flex justify-content-between align-items-center top-bar" style={{ width: '90%' }}>
                    <div className="sm_40p">
                        <h4 className="mt-p6 mb-0 sm_page_head">மதரஸா விவரங்கள்</h4>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-primary me-2" to="/main/userslist">மதரஸா பட்டியல்</Link>
                        <button type="submit" className="btn btn-primary">சேமிக்க</button>
                    </div>
                </div>

                <div className="content">

                    <div className="card mb-4" >
                        <div className="card-header d-flex align-items-right" >
                            <span>Users Details</span>
                        </div>
                        <div className="card-body form">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="madrasaname">
                                            <label>மதரஸா </label>
                                            <select
                                                className="form-control"
                                                type="text"
                                                name="madrasaname"
                                                value={formData.madrasaname}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                pattern="^[a-zA-Z0-9]+$"
                                                requiredoperatedBy
                                                isInvalid={
                                                    (validated || touched.madrasaname) &&
                                                    !/^[a-zA-Z0-9]+$/.test(formData.madrasaname)
                                                }
                                            >
                                                <option value={1}>mohamed bunder </option>
                                                <option value={2}>nadukadai</option>
                                                <option value={3}>kandiyur</option>
                                            </select>
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸாவின் பெயர் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="name">
                                            <label>பயனர் பெயர்
                                            </label>
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                pattern="^[a-zA-Z0-9]+$"
                                                required
                                                isInvalid={
                                                    (validated || touched.name) &&
                                                    !/^[a-zA-Z0-9]+$/.test(formData.name)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸாவின் பெயர் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="password">
                                            <label>கடவுச்சொல்</label>
                                            <Form.Control
                                                className="form-control"
                                                type="password"
                                                name="password"
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                pattern="^[a-zA-Z0-9]+$"
                                                required
                                                isInvalid={
                                                    (validated || touched.password) &&
                                                    !/^[a-zA-Z0-9]+$/.test(formData.password)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸாவின் பெயர் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="cnfpassword">
                                            <label>கடவுச்சொல்லை உறுதிப்படுத்தவும்
                                            </label>
                                            <Form.Control
                                                className="form-control"
                                                type="password"
                                                name="cnfpassword"
                                                value={formData.cnfpassword}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                pattern="^[a-zA-Z0-9]+$"
                                                required
                                                isInvalid={
                                                    validated &&
                                                    formData.confimPass !== formData.cnfpassword
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸாவின் பெயர் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="email">
                                            <label>மின்னஞ்சல்</label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                pattern="^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$"
                                                required
                                                isInvalid={
                                                    (validated || touched.email) &&
                                                    !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(formData.email)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மின்னஞ்சல் தரவுப் பொருந்தவில்லை.
                                            </Form.Control.Feedback>

                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="phoneNumber">
                                            <label>தொலைபேசி எண்
                                            </label>
                                            <OnlyNumbersInput
                                                className="form-control"
                                                type="text"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={(value) => handleInputChange('phoneNumber', value)}
                                                onBlur={handleBlur}
                                                pattern="^[0-9]+$"
                                                required
                                                isInvalid={
                                                    (validated || touched.phoneNumber) &&
                                                    !/^[0-9]+$/.test(formData.phoneNumber)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸாவின் பெயர் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Form>
        </div>
    );
}

export default UsersDetail;
