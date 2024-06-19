import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';
import themeFile from './theme.json'
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

const getNumberOfPages = (rowCount, rowsPerPage) => {
    return Math.ceil(rowCount / rowsPerPage);
}

const toPages = (pages) => {
    const results = [];
    for (let i = 1; i <= pages; i++) {
        results.push(i);
    }
    return results;
}

export const handleSearch = (filterRecords) => {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchTerm === '') {
        return filterRecords; // Reset to original data if search term is empty
    } else {
        const newData = filterRecords.filter(row => {
            // Check if any property in the row object contains the search term
            return Object.values(row).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchTerm) ||
                (typeof value === 'number' && String(value).includes(searchTerm))
            );
        });
        return newData;
    }
};

const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage,
    currentPage
}) => {
    const handleBackButtonClick = () => {
        onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
        onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
        onChangePage(Number(e.target.value));
    };

    const handleRowsPerPageChange = (e) => {
        onChangeRowsPerPage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pages;
    const previousDisabled = currentPage === 1;

    return (
        <nav className="d-flex justify-content-between align-items-center">
            <ul className="pagination">
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleBackButtonClick}
                        disabled={previousDisabled}
                        aria-disabled={previousDisabled}
                        aria-label="previous page"
                    >
                        Previous
                    </button>
                </li>
                {pageItems.map((page) => {
                    const className =
                        page === currentPage ? "page-item active" : "page-item";

                    return (
                        <li key={page} className={className}>
                            <button
                                className="page-link"
                                onClick={handlePageNumber}
                                value={page}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleNextButtonClick}
                        disabled={nextDisabled}
                        aria-disabled={nextDisabled}
                        aria-label="next page"
                    >
                        Next
                    </button>
                </li>
            </ul>
            <div className="form-group mb-0" style={{ marginRight: "20px" }}>
                <label htmlFor="rowsPerPage" className="mr-2" style={{ fontWeight: "bold", color: "black" }}>Rows per page:</label>
                <select
                    id="rowsPerPage"
                    className="form-control"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                >
                    {[10, 15, 20, 25, 30].map(size => (
                        <option key={size} value={size}>{size}</option>
                    ))}
                </select>
            </div>
        </nav>
    );
};

const exportCSV = (columns, data, title) => {
    const csvRows = [];

    // Get the headers
    const headers = columns.map(col => col.name);
    csvRows.push(headers.join(','));

    // Loop over the rows
    for (const row of data) {
        const values = columns.map(col => {
            const val = col.selector ? col.selector(row) : '';
            return `"${val}"`; // Enclose each value in double quotes to handle commas within data
        });
        csvRows.push(values.join(','));
    }

    // Create a Blob from the CSV string and create a link to download it
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', title + '.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

const CustomDataTable = ({ columns, data, title }) => {

    const [selectedColor, setSelectedColor] = useState('radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)');

    useEffect(() => {
        const themeData = themeFile.themeData;
        const color = sessionStorage.getItem('themes');
        const selectedTheme = themeData.find(theme => theme.id === parseInt(color));
        if (selectedTheme) {
            setSelectedColor(selectedTheme.themecolor);
        }
    }, []);

    const customStyles = {
        headRow: {
            style: {
                background: selectedColor,
                color: 'white',
            }
        },
        headCells: {
            style: {
                fontSize: "16px",
                fontWeight: 'bold',
            }
        },
        cells: {
            style: {
                fontSize: '15px',
            }
        },
    };

    return (
        <div className='table-responsive'>
            <div className="d-flex justify-content-end mb-2" style={{ marginRight: "20px" }}>
            </div>
            <DataTable
                columns={columns}
                data={data}
                direction="auto"
                fixedHeader
                fixedHeaderScrollHeight="600px"
                paginationRowsPerPageOptions={[10, 15, 20, 25, 30]}
                highlightOnHover
                pagination
                pointerOnHover
                responsive
                selectableRows
                selectableRowsHighlight
                striped
                subHeaderAlign="right"
                subHeaderWrap
                customStyles={customStyles}
                paginationComponent={BootyPagination}
            />
        </div>
    );
};

export default CustomDataTable;
