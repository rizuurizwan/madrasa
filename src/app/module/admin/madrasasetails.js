import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { onlyNumbers } from '../../_services/validation';
function MadrasaDetails() {

    const [validated, setValidated] = useState(false);
    //const [submit, setSubmit] = useState(false);
    const [touched, setTouched] = useState({});
    const [formData, setFormData] = useState({
        no: null, // Parse the value to an integer
        date: "",
        madrasaName: "",
        yearEstablished: "",
        operatedBy: "1",
        landDetails: "",
        registered: false,
        pattaChittaChanged: false,
        healthCertificate: false,
        fireCertificate: false,
        hostelApproval: false,
        annualAudit: false,
        totalStudents: "",
        hifzClass: "",
        arabicClass: "",
        tahseelClass: "",
        totalTeachers: "",
        otherstudent: "",
        publicEducation: false,
        distanceEducation: false,
        numberOfDorms: "",
        numberOfClassrooms: "",
        cctvInstalled: false,
        medicalFirstAid: false,
        gateKeeper: false,
        minuteBook: false,
    });
    
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
                        <h4 className="mt-p6 mb-0 sm_page_head">மதரஸா விவரங்கள்</h4>
                    </div>
                    <div className="float-end">
                        <Link className="btn btn-primary me-2" to="/main/madrasalist">மதரஸா பட்டியல்</Link>
                        <button type="submit" className="btn btn-primary">சேமிக்க</button>
                    </div>
                </div>
                <div className="content">
                    <div className="card mb-4">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <span>மதரஸா விவரங்கள்</span>
                        </div>
                        <div className="card-body form">
                            <div className="row mb-3">
                                <div className="col-md-3">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="no">
                                            <label>எண்:<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                type="text"
                                                className="form-control onlyNumbers"
                                                onKeyDown={onlyNumbers}
                                                name="no"
                                                value={formData.no}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={(validated || touched.no)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                எண் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="date">
                                            <label>நாள்:<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={(validated || touched.date) && !formData.date} // Check if date is empty
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {(!formData.date && "நாள் தேவைப்படுகிறது")} {/* Error message for empty date */}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="madrasaName">
                                            <label>மதரஸாவின் பெயர்<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                name="madrasaName"
                                                value={formData.madrasaName}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.madrasaName) &&
                                                    (formData.madrasaName.trim() == "")
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
                                        <Form.Group controlId="yearEstablished">
                                            <label>மதரஸாவை நிறுவிய ஆண்டு?<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                className="form-control onlyNumbers"
                                                onKeyDown={onlyNumbers}
                                                name="yearEstablished"
                                                value={formData.yearEstablished}
                                                onBlur={handleBlur}
                                                onChange={chngFn}
                                                required
                                                isInvalid={
                                                    (validated || touched.yearEstablished)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸாவை நிறுவிய ஆண்டு தேவைப்படுகிறது

                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="operatedBy">
                                            <label>மதரஸாவை நடத்துபவர்?<span style={{ color: 'red' }}>*</span></label>
                                            <select
                                                className="form-control"
                                                type="text"
                                                name="operatedBy"
                                                value={formData.operatedBy}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.operatedBy) &&
                                                    (formData.operatedBy.trim() == "")
                                                }
                                            >
                                                <option value={1}>தனி நபர்</option>
                                                <option value={2}>சொசைட்டி மூலமாக</option>
                                                <option value={3}>டிரஸ்ட் மூலமாக</option>
                                            </select>
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸாவை நடத்துபவர் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="landDetails">
                                            <label>மதரஸரவின் நிலம் தொடர்பான  விவரங்கள், அதாவது அது சொந்தமானதா?<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                type="text"
                                                name="landDetails"
                                                value={formData.landDetails}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.landDetails) &&
                                                    (formData.landDetails.trim() == "")
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மதரஸரவின் நிலம் தொடர்பான  விவரங்கள் தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label>பதிவு செய்யப்பட்டுள்ளதா?</label>
                                    <div className="ToogleBtn swtch2 FlLft mr-10">
                                        <Form.Group controlId="registered">
                                            <Form.Control
                                                className="p-absolute"
                                                type="checkbox"
                                                name="registered"
                                                checked={formData.registered}
                                                onChange={chngFn}
                                            />
                                            <label htmlFor="registered"></label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>பட்டா. சிட்டா, அடங்கல் பெயர் மாற்றம் செய்யப்பட்டுள்ளதா?</label>
                                    <div className="ToogleBtn swtch2 FlLft mr-10">
                                        <Form.Group controlId="pattaChittaChanged">
                                            <Form.Control
                                                className="p-absolute"
                                                type="checkbox"
                                                name="pattaChittaChanged"
                                                checked={formData.pattaChittaChanged}
                                                onChange={chngFn}
                                            />
                                            <label htmlFor="pattaChittaChanged"></label>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label>சுகாதாரத்துவற சான்று பெறப்பட்டுள்ளதா?</label>
                                    <div className="ToogleBtn swtch2 FlLft mr-10">
                                        <Form.Group controlId="healthCertificate">
                                            <Form.Control
                                                className="p-absolute"
                                                type="checkbox"

                                                name="healthCertificate"
                                                checked={formData.healthCertificate}
                                                onChange={chngFn}
                                            />
                                            <label htmlFor="healthCertificate"></label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <label>தீயணைப்புத் துறை சான்று  பெறப்பட்டுள்ளதா?</label>
                                        <div className="ToogleBtn swtch2 FlLft mr-10">
                                            <Form.Group controlId="fireCertificate">
                                                <Form.Control
                                                    className="p-absolute"
                                                    type="checkbox"

                                                    name="fireCertificate"
                                                    checked={formData.fireCertificate}
                                                    onChange={chngFn}
                                                />
                                                <label htmlFor="fireCertificate"></label>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label>விடுதி அங்கீகாரம் பெறப்பட்டுள்ளதா?</label>
                                    <div className="ToogleBtn swtch2 FlLft mr-10">
                                        <Form.Group controlId="hostelApproval">
                                            <Form.Control
                                                className="p-absolute"
                                                type="checkbox"

                                                name="hostelApproval"
                                                checked={formData.hostelApproval}
                                                onChange={chngFn}
                                            />
                                            <label htmlFor="hostelApproval"></label>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>ஆண்டு தோறும் கணக்கு தணிக்கை செய்யப்பட்டுள்ளதா?</label>
                                    <div className="ToogleBtn swtch2 FlLft mr-10">
                                        <Form.Group controlId="annualAudit">
                                            <Form.Control
                                                className="p-absolute"
                                                type="checkbox"

                                                name="annualAudit"
                                                checked={formData.annualAudit}
                                                onChange={chngFn}
                                            />
                                            <label htmlFor="annualAudit"></label>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <Form.Group controlId="totalStudents">
                                        <label>மாணவர்களின் மொத்த எண்ணிக்கை  எவ்வளவு? <span style={{ color: 'red' }}>*</span></label>
                                        <Form.Group
                                            className="form-control"
                                            type="text"
                                            name="totalStudents"
                                            value={formData.totalStudents}
                                            onChange={chngFn}
                                            onBlur={handleBlur}
                                            required
                                            isInvalid={
                                                (validated || touched.totalStudents)
                                            }

                                        />
                                        <Form.Control.Feedback type="invalid">
                                            மாணவர்களின் மொத்த எண்ணிக்கை தேவைப்படுகிறது

                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="hifzClass">
                                            <label>ஹிப்ளு வகுப்பு உள்ளதா? அதன் மாணவர்கள் எண்ணிக்கை? <span style={{ color: 'red' }}>*</span></label>
                                            <Form.Group
                                                className="form-control"
                                                type="text"
                                                name="hifzClass"
                                                value={formData.hifzClass}
                                                onChange={chngFn}
                                                onBlur={handleBlur}

                                                required
                                                isInvalid={
                                                    (validated || touched.hifzClass)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                ஹிப்ளு வகுப்பு அதன் மாணவர்கள் எண்ணிக்கை   தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="arabicClass">
                                            <label>அரபி வகுப்பில் எத்தவன மாணவர்கள்?<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Group
                                                className="form-control"
                                                type="text"
                                                name="arabicClass"
                                                value={formData.arabicClass}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.arabicClass)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                அரபி வகுப்பு மாணவர்கள் எண்ணிக்கை தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="tahseelClass">
                                            <label>தஹ்ஸீல் வகுப்பு வரை உள்ளதா? அல்லது எந்த ஜும்ரா வரை உள்ளது?<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                name="tahseelClass"
                                                value={formData.tahseelClass}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.tahseelClass) &&
                                                    (formData.tahseelClass.trim() == "")
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                தஹ்ஸீல் வகுப்பு தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="totalTeachers">
                                            <label>ஆசிரியர்களின்  எண்ணிக்கை எவ்வளவு?<span style={{ color: 'red' }}>*</span> </label>
                                            <Form.Group
                                                className="form-control"
                                                type="text"
                                                name="totalTeachers"
                                                value={formData.totalTeachers}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.totalTeachers) 
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                ஆசிரியர்களின் எண்ணிக்கை தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="otherstudent">
                                            <label>மற்ற பணியாளர்களின் எண்ணிக்கை  எவ்வளவு?<span style={{ color: 'red' }}>*</span></label>
                                            <Form.Group
                                                className="form-control"
                                                type="text"
                                                name="otherstudent"
                                                value={formData.otherstudent}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.otherstudent)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                மற்ற பணியாளர்களின் எண்ணிக்கை தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">

                                        <label>அரபி பாடங்களுடன்  பொதுக் கல்வி பாடத்திட்டத்தில் உள்ளதா? </label>
                                        <div className="ToogleBtn swtch2 FlLft mr-10">
                                            <Form.Group controlId="publicEducation">
                                                <Form.Control
                                                    className="p-absolute"
                                                    type="checkbox"
                                                    name="publicEducation"
                                                    checked={formData.publicEducation}
                                                    onChange={chngFn}
                                                />
                                                <label htmlFor="publicEducation"></label>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <label>தொலைதூரக் கல்வி மற்றும் NIOS போன்றவை உள்ளதா?</label>
                                        <div className="ToogleBtn swtch2 FlLft mr-10">
                                            <Form.Group controlId="distanceEducation">
                                                <Form.Control
                                                    className="p-absolute"
                                                    type="checkbox"

                                                    name="distanceEducation"
                                                    checked={formData.distanceEducation}
                                                    onChange={chngFn}
                                                />
                                                <label htmlFor="distanceEducation"></label>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="numberOfDorms">
                                            <label>தங்கும் அறைகள் எத்தனை? <span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                name="numberOfDorms"
                                                value={formData.numberOfDorms}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.numberOfDorms)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                தங்கும் அறைகள் எண்ணிக்கை தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <Form.Group controlId="numberOfClassrooms">
                                            <label>பாட அறைகள் எத்தனை? <span style={{ color: 'red' }}>*</span></label>
                                            <Form.Control
                                                className="form-control"
                                                type="text"
                                                name="numberOfClassrooms"
                                                value={formData.numberOfClassrooms}
                                                onChange={chngFn}
                                                onBlur={handleBlur}
                                                required
                                                isInvalid={
                                                    (validated || touched.numberOfClassrooms)
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                பாட அறைகள் எண்ணிக்கை தேவைப்படுகிறது
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <label>CCTV CAMERA பொறுத்தப்பட்டுள்ளதா?</label>
                                        <div className="ToogleBtn swtch2 FlLft mr-10">
                                            <Form.Group controlId="cctvInstalled">
                                                <Form.Control
                                                    className="p-absolute"
                                                    type="checkbox"

                                                    name="cctvInstalled"
                                                    checked={formData.cctvInstalled}
                                                    onChange={chngFn}
                                                />
                                                <label htmlFor="cctvInstalled"></label>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <label>மருத்துவ முதலுதவி வசதி ஏற்பாடு செய்யப்பட்டுள்ளதா?</label>
                                        <div className="ToogleBtn swtch2 FlLft mr-10">
                                            <Form.Group controlId="medicalFirstAid">
                                                <Form.Control
                                                    className="p-absolute"
                                                    type="checkbox"

                                                    name="medicalFirstAid"
                                                    checked={formData.medicalFirstAid}
                                                    onChange={chngFn}
                                                />
                                                <label htmlFor="medicalFirstAid"></label>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <label>கேட் கீப்பர் உள்ளாரா?</label>
                                        <div className="ToogleBtn swtch2 FlLft mr-10">
                                            <Form.Group controlId="gateKeeper">
                                                <Form.Control
                                                    className="p-absolute"
                                                    type="checkbox"

                                                    name="gateKeeper"
                                                    checked={formData.gateKeeper}
                                                    onChange={chngFn}
                                                />
                                                <label htmlFor="gateKeeper"></label>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3 mb-md-0">
                                        <label>மினிட் புக் தயார்செய்து வைக்கப்பட்டுள்ளதா?</label>
                                        <div className="ToogleBtn swtch2 FlLft mr-10">
                                            <Form.Group controlId="minuteBook">
                                                <Form.Control
                                                    className="p-absolute"
                                                    type="checkbox"

                                                    name="minuteBook"
                                                    checked={formData.minuteBook}
                                                    onChange={chngFn}
                                                />
                                                <label htmlFor="minuteBook"></label>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </Form>
        </div >
    );
}

export default MadrasaDetails;

