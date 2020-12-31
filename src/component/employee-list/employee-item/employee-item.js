import React from 'react';
import './item.scss'


export const EmployeeItem = ({employee, onDeleted}) => {

    return (
        <div className="form-contact__wrap__size">
            {
                employee.map ((item) => {
                    return (
                    <div key={item.id} className="item">
                        <span className="item__name">
                        {item.first_name}
                        </span>
                
                        <button type="button"
                                className="item__button"
                                onClick={() => onDeleted(item.id)}>
                        &#10008;
                        </button>
                    </div>
                    )
                })
            }
        </div>
    );
}
