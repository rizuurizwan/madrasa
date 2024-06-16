import React, { useEffect, useState } from 'react';
import CustomDataTable, { handleSearch } from '../../_services/datatable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import studentslist from '../user/students.json';
import { Link } from "react-router-dom";

function MadrasaList() {
    const [records, setRecords] = useState([]);
    const PageTitle = "மாணவர் பற்றிய விபரங்கள்"
    const [filterRecords, setFilterRecords] = useState([]);

    const columns = [
        //{ name: "ID", selector: row => row.id, sortable: true, width: '100px' },
        { name: "Name", selector: row => row.name, sortable: true, },
        { name: "DOB", selector: row => row.dob, sortable: true },
        { name: "Age", selector: row => row.age, sortable: true },
        { name: "Gender", selector: row => row.gender, sortable: true },
        { name: "Mobile.No", selector: row => row.mobileno, sortable: true },
        {
            name: "Action",
            cell: row => (
                <div>
                    <Link onClick={() => handleEdit(row.id)} className="btn btn-primary" to="/main/madrasasetails" style={{ marginRight: "10px", backgroundColor: "blue" }}><FontAwesomeIcon icon={faPencil} style={{ color: "#ffffff", }} /></Link>
                    <button onClick={() => handleDelete(row.id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff", }} /></button>
                </div>
            ),
            sortable: false,
            width: '130px'
        },
    ]

    const handleEdit = (id) => {
        console.log('Edit clicked for ID:', id);
    };

    const handleDelete = (id) => {
        console.log('Delete clicked for ID:', id);
    };

    //Its for API
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             // const response = await axios.get('https://e30531a034d04452af88ecd5d09d44c8.api.mockbin.io/');
    //             // const response = await fetch('https://e30531a034d04452af88ecd5d09d44c8.api.mockbin.io/');
    //             const response = await fetch('./students.json');
    //             console.log(response.data)
    //             setRecords(response.data);
    //             setFilterRecords(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    //Only for json
    useEffect(() => {
        // Directly use the imported JSON data
        const list = studentslist.data;
        setRecords(list);
        setFilterRecords(list);
    }, []);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            Search();
        }
    };

    const Search = (e) => {
        setRecords(handleSearch(filterRecords));
    };

    return (
        <div className="container-fluid px-4">
            <div className="d-flex top-bar justify-content-between align-items-center">
                <h4 className="mt-p6 mb-0 sm_page_head">
                    <span className="pagetitcolr">மாணவர் பற்றிய விபரங்கள்</span>
                </h4>
            </div>

            <div className="content">
                <div className="card mb-4">
                    <div className="card-body form">
                        <div className="d-flex justify-content-end mb-3">
                            <input type='text' id='searchInput' placeholder='தேடல்' style={{ width: "30%", marginRight: "10px" }} className="form-control" onKeyPress={handleKeyPress} />
                            <button onClick={Search} className="btn btn-danger">தேடல்
                            </button>
                        </div>
                        <CustomDataTable columns={columns} data={records} title={PageTitle} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MadrasaList;
