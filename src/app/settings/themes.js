import React, { useState, useEffect } from 'react';
import themeFile from '../_services/theme.json';
// const themeData = {
//     data: [
//         {
//             id: 1,
//             name: "Black",
//             themecolor: "radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)",
//             header: "rgb(87, 108, 117)"
//         },
//         {
//             id: 2,
//             name: "Pink",
//             themecolor: "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
//             header: "#c471f5"
//         },
//         {
//             id: 3,
//             name: "Blue",
//             themecolor: "linear-gradient(179.2deg, rgb(21, 21, 212) 0.9%, rgb(53, 220, 243) 95.5%)",
//             header: "rgb(21, 21, 212)"
//         },
//         {
//             id: 4,
//             name: "Green",
//             themecolor: "radial-gradient(circle at 10% 20%, rgb(4, 159, 108) 0%, rgb(194, 254, 113) 90.1%)",
//             header: "rgb(4, 159, 108)"
//         },
//         {
//             id: 5,
//             name: "Orange",
//             themecolor: "radial-gradient(circle at 10% 20%, rgba(239, 87, 87, 0.74) 0%, rgba(245, 123, 13, 0.74) 90.2%)",
//             header: "rgba(239, 87, 87, 0.74)"
//         }
//     ]
// };

function Themes() {
    const [selectedThemeId, setSelectedThemeId] = useState('');

    useEffect(() => {
        const savedThemeId = sessionStorage.getItem('themes');
        const themeData = themeFile.themeData;
        if (savedThemeId) {
            setSelectedThemeId(parseInt(savedThemeId));
            const selectedTheme = themeData.find(theme => theme.id === parseInt(savedThemeId));
            if (selectedTheme) {
                document.documentElement.style.setProperty('--themecolr1', selectedTheme.themecolor);
                document.documentElement.style.setProperty('--themecolr2', selectedTheme.header);
            }
        }
    }, []);

    const handleColorChange = (event) => {
        const themeData = themeFile.themeData;
        const selectedThemeId = parseInt(event.target.value);
        setSelectedThemeId(selectedThemeId);
        const selectedTheme = themeData.find(theme => theme.id === selectedThemeId);
        if (selectedTheme) {
            sessionStorage.setItem('themes', selectedTheme.id);
            document.documentElement.style.setProperty('--themecolr1', selectedTheme.themecolor);
            document.documentElement.style.setProperty('--themecolr2', selectedTheme.header);
        }
    };

    return (
        <div className="container-fluid px-4">
            <div className="d-flex top-bar justify-content-between align-items-center">
                <h4 className="mt-p6 mb-0 sm_page_head">
                    <span className="pagetitcolr">Themes</span>
                </h4>
            </div>
            <div className="content">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <span>Themes</span>
                    </div>
                    <div className="card-body form">
                        <div className="row mb-3">
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <label>Selected Theme</label>
                                    <select className="form-control" value={selectedThemeId} onChange={handleColorChange}>
                                        {themeFile.themeData.map(theme => (
                                            <option key={theme.id} value={theme.id}>{theme.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    <label></label>
                                    <input type='text' className='form-control selectedcolor' disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Themes;
