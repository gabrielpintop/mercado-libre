import React from 'react';
import './Pagination.scss';

const Pagination = ({ total, selectPage, offset, hasNext, hasBefore }) => {
    return (total > 4 &&
        <div id="paginationContainer" className="row margin-horizontal mt-medium mb-small">
            <div className="col-md-2 col-12"></div>
            <div id="backButtonContainer" className="col-md-3 col-5">
                {hasBefore && <button onClick={() => selectPage(offset - 4)}><span>&lsaquo;</span>&nbsp;Anterior</button>}
            </div>
            <div className="col-md-2 col-2"></div>
            <div id="forwardButtonContainer" className="col-md-3 col-5">
                {hasNext && <button onClick={() => selectPage(offset + 4)}>Siguiente&nbsp;<span>&rsaquo;</span></button>}
            </div>
            <div className="col-md-2 col-12"></div>
        </div>
    );
};

export default Pagination;
