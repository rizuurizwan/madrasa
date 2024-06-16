import React from 'react';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
    const results = [];
    for (let i = 1; i <= pages; i++) { // Changed the loop condition to i <= pages
        results.push(i);
    }
    return results;
}

export const handleSearch = (filterRecords) => {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchTerm === '') {
        return (filterRecords); // Reset to original data if search term is empty
    } else {
        const newData = filterRecords.filter(row => {
            // Check if any property in the row object contains the search term
            return Object.values(row).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(searchTerm) ||
                (typeof value === 'number' && String(value).includes(searchTerm))
            );
        });
        return newData
    }
};

const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
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
    const nextDisabled = currentPage === pages; // Changed from pageItems.length to pages
    const previousDisabled = currentPage === 1; // Fixed typo

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
    debugger
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

export const customStyles = {
    headRow: {
        style: {
            background: "radial-gradient(circle at 10% 20%, rgb(87, 108, 117) 0%, rgb(37, 50, 55) 100.2%)",
            color: 'white',
        }
    },
    headCells: {
        style: {
            fontSize: "16px",
            fontWeight: 'bold',
            //textTransform: 'uppercase',
        }
    },
    cells: {
        style: {
            fontSize: '15px',
        }
    },
};


const CustomDataTable = ({ columns, data, title }) => {
    return (
        <div className='table-responsive'>
            <div className="d-flex justify-content-end mb-2" style={{ marginRight: "20px" }}>
                {/* <button 
                    className="btn btn-primary"
                    onClick={() => exportCSV(columns, data, title)}
                ><FontAwesomeIcon icon={faFileExport} style={{color: "#ffffff",}} />    Export CSV
                </button> */}
            </div>
            <DataTable
                columns={columns}
                data={data}
                //title={title}
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
