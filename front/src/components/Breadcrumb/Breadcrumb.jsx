import React from 'react';
import './Breadcrumb.scss';
const Breadcrumb = ({ categories, loadProducts }) => {
    return (
        <nav id="breadcrumbNav" className="mt-small mb-small">
            <div className="row h-100 margin-horizontal">
                <div className="col-lg-10 mx-auto row flex-align-center pl-0 pr-0" >
                    <div className="col-12 pl-0">
                        <ul id="breadcrumb">
                            {categories?.map((category, index) => <li key={'CT' + index}><a onClick={() => loadProducts(category)}>{category}</a></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Breadcrumb;
