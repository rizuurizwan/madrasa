import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight, faCaretRight, faMosque, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const [activeSection, setActiveSection] = useState(null);

    const handleAccordionClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const data = localStorage.getItem('data');
    const userdata = data != undefined ? JSON.parse(data) : null;
    const userType = userdata != null ? userdata.userType : 1;

    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
                <div className="sb-sidenav-menu f-scroll">
                    <div className="">
                        {userType === 0 ? (
                            <>
                                <h2
                                    className={`acc_trigger ${activeSection === 'madrasa' ? 'active' : ''}`}
                                    onClick={() => handleAccordionClick('madrasa')}
                                >
                                    <i><FontAwesomeIcon icon={faMosque} className="float-start" /></i>
                                    <a className="float-start">மதரஸா</a>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={activeSection === 'madrasa' ? faChevronDown : faChevronRight}
                                            className="float-end"
                                        />
                                    </i>
                                </h2>
                                <div className="acc_container" style={{ display: activeSection === 'madrasa' ? 'block' : 'none' }}>
                                    <div className="leftm">
                                        <ul className="qmenu">
                                            <li>
                                                <div className="menu-item">
                                                    <FontAwesomeIcon icon={faCaretRight} className="icon" style={{ color: 'black' }} />
                                                    <Link className="link" to="madrasalist">மதரஸா பட்டியல்</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-item">
                                                    <FontAwesomeIcon icon={faCaretRight} className="icon" style={{ color: 'black' }} />
                                                    <Link className="link" to="madrasadetails">புதிய மதர்ஸாவைச் சேர்க்க</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h2
                                    className={`acc_trigger ${activeSection === 'settings' ? 'active' : ''}`}
                                    onClick={() => handleAccordionClick('settings')}
                                >
                                    <i><FontAwesomeIcon icon={faGear} className="float-start" /></i>
                                    <a className="float-start">அமைப்புகள்</a>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={activeSection === 'settings' ? faChevronDown : faChevronRight}
                                            className="float-end"
                                        />
                                    </i>
                                </h2>
                                <div className="acc_container" style={{ display: activeSection === 'settings' ? 'block' : 'none' }}>
                                    <div className="leftm">
                                        <ul className="qmenu">
                                            <li>
                                                <div className="menu-item">
                                                    <FontAwesomeIcon icon={faCaretRight} className="icon" style={{ color: 'black' }} />
                                                    <Link className="link" to="users">பயனர் விவரங்கள்
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-item">
                                                    <FontAwesomeIcon icon={faCaretRight} className="icon" style={{ color: 'black' }} />
                                                    <Link className="link" to="userslist">பயனர் பட்டியல்

                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2
                                    className={`acc_trigger ${activeSection === 'student' ? 'active' : ''}`}
                                    onClick={() => handleAccordionClick('student')}
                                >
                                    <i><FontAwesomeIcon icon={faUsers} className="float-start" /></i>
                                    <a className="float-start">மாணவர்</a>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={activeSection === 'student' ? faChevronDown : faChevronRight}
                                            className="float-end"
                                        />
                                    </i>
                                </h2>
                                <div className="acc_container" style={{ display: activeSection === 'student' ? 'block' : 'none' }}>
                                    <div className="leftm">
                                        <ul className="qmenu">
                                            <li>
                                                <div className="menu-item">
                                                    <FontAwesomeIcon icon={faCaretRight} className="icon menuicon" />
                                                    <Link className="link" to="studentlist">மாணவர் பட்டியல்</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-item">
                                                    <FontAwesomeIcon icon={faCaretRight} className="icon menuicon" />
                                                    <Link className="link" to="studentdetail">புதிய மாணவர் சேர்க்க</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;
