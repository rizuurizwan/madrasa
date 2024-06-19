import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
function StudentDetail() {
    const [validated, setValidated] = useState(false);
    const [touched, setTouched] = useState({});

    const [formData, setFormData] = useState({
        name: '',
        birthDate: '',
        age: '',
        place: '',
        pin: '',
        district: '',
        madhab: '',
        guardianName: '',
        occupation: '',
        education: '',
        desiredSection: '',
        monthlyDonation: '',
        phoneNumber: '',
        address: ''
    });

    const submitFn = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const formDataCopy = { ...formData };
            console.log("Form Data:", formDataCopy);
        }

        setValidated(true);
    };

    const chngFn = (event) => {
        const { name, type, checked, value } = event.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched({
            ...touched,
            [name]: true,
        });
    };

    return (
        <div className="container-fluid px-4">
            <Form noValidate validated={validated} onSubmit={submitFn}>
                <div className="d-flex justify-content-between align-items-center top-bar" style={{ width: '1900px' }}>
                    <div className="sm_50p">
                        <h4 className="mt-p6 mb-0 sm_page_head">மாணவர் விவரங்கள்</h4>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-primary me-2" to="/main/studentlist">மதரஸா பட்டியல்</Link>
                        <button type="submit" className="btn btn-primary">சேமிக்க</button>
                    </div>
                </div>
                <div className="content">

                    <div className="card mb-4">
                        <div className="card-header d-flex align-items-right">
                            <span>மாணவர் பற்றிய விபரங்கள்</span>
                            
                        </div>
                        <div className="card-body form">
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='name'>பெயர்: <span style={{ color: 'red' }}>*</span></label>
                                        <Form.Control
                                            id='name'
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.name) && formData.name.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.name.trim() === "" && "பெயர் தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='birthDate'>பிறந்த தேதி</label>
                                        <Form.Control
                                            id='birthDate'
                                            className="form-control"
                                            type="date"
                                            name="birthDate"
                                            value={formData.birthDate}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.birthDate) && formData.birthDate.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.birthDate.trim() === "" && "பிறப்பு தேதி தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label>வயது</label>
                                        <Form.Control
                                            className="form-control"
                                            type="text"
                                            name="age"
                                            value={formData.age}
                                            pattern="^[0-9]+$"
                                            onChange={(e) => {
                                                const input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                                                setFormData({
                                                    ...formData,
                                                    age: input,
                                                });
                                            }}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={
                                                (validated || touched.age) && (!formData.age.trim() ||
                                                    !/^[0-9]*$/.test(formData.age))
                                            }
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            வயது தேவைப்படுகிறது
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='place'>ஊர்</label>
                                        <Form.Control
                                            id='place'
                                            className="form-control"
                                            type="text"
                                            name="place"
                                            value={formData.place}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.place) && formData.place.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.place.trim() === "" && "ஊர் தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='pin'>அஞ்சல் குறியீடு</label>
                                        <Form.Control
                                            id='pin'
                                            className="form-control"
                                            type="number"
                                            name="pin"
                                            value={formData.pin}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.pin) && formData.pin.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.pin.trim() === "" && "அஞ்சல் குறியீடு தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='district'>ஜில்லா</label>
                                        <Form.Control
                                            id='district'
                                            className="form-control"
                                            type="text"
                                            name="district"
                                            value={formData.district}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.district) && formData.district.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.district.trim() === "" && "ஜில்லா தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='madhab'>மத்ஹபு</label>
                                        <Form.Control
                                            id='madhab'
                                            className="form-control"
                                            type="text"
                                            name="madhab"
                                            value={formData.madhab}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.madhab) && formData.madhab.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.madhab.trim() === "" && "மத்ஹபு தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='guardianName'>தந்தை அல்லது போஷகர் பெயர்</label>
                                        <Form.Control
                                            id='guardianName'
                                            className="form-control"
                                            type="text"
                                            name="guardianName"
                                            value={formData.guardianName}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.guardianName) && formData.guardianName.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.guardianName.trim() === "" && "தந்தை அல்லது போஷகர் பெயர் தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='occupation'>தொழில்</label>
                                        <Form.Control
                                            id='occupation'
                                            className="form-control"
                                            type="text"
                                            name="occupation"
                                            value={formData.occupation}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.occupation) && formData.occupation.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.occupation.trim() === "" && "தொழில் தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='education'>கல்வி</label>
                                        <Form.Control
                                            id='education'
                                            className="form-control"
                                            type="text"
                                            name="education"
                                            value={formData.education}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.education) && formData.education.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.education.trim() === "" && "கல்வி தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='desiredSection'>தேவைப்படும் பிரிவு</label>
                                        <Form.Control
                                            id='desiredSection'
                                            className="form-control"
                                            as="select"
                                            name="desiredSection"
                                            value={formData.desiredSection}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.desiredSection) && formData.desiredSection.trim() === ""}
                                        >
                                            <option value="">தேர்ந்தெடுக்கவும்</option>
                                            <option value="Hifz">ஹிப்ளு</option>
                                            <option value="Arabic">அரபி</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {formData.desiredSection.trim() === "" && "தேவைப்படும் பிரிவு தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>

                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='monthlyDonation'>மாதாந்திர நன்கொடை</label>
                                        <Form.Control
                                            id='monthlyDonation'
                                            className="form-control"
                                            type="number"
                                            name="monthlyDonation"
                                            value={formData.monthlyDonation}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.monthlyDonation) && formData.monthlyDonation.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.monthlyDonation.trim() === "" && "மாதாந்திர நன்கொடை தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='phoneNumber'>தொலைபேசி எண்</label>
                                        <Form.Control
                                            id='phoneNumber'
                                            className="form-control"
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.phoneNumber) && formData.phoneNumber.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.phoneNumber.trim() === "" && "தொலைபேசி எண் தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group className="mb-3 mb-md-0">
                                        <label htmlFor='address'>முகவரி</label>
                                        <Form.Control
                                            id='address'
                                            className="form-control"
                                            as="textarea"
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={(validated || touched.address) && formData.address.trim() === ""}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formData.address.trim() === "" && "முகவரி தேவைப்படுகிறது"}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Form>
        </div>
    );
}

export default StudentDetail;

/* If field no need validation look like this*/
// <div className="col-md-6">
//     <Form.Group className="mb-3 mb-md-0">
//         <label htmlFor='name'>பெயர்: <span style={{ color: 'red' }}>*</span></label>
//         <Form.Control
//             id='name'
//             className="form-control"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={chngFn}
//         />
//     </Form.Group>
// </div>