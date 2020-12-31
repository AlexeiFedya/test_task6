import React, {useState} from "react";
import './form.scss'


export const AddEmployeeForm = ({onItemAdd}) => {

    const [employee, setEmployee] = useState({first_name: ""})
    const {first_name} = employee;
    

    const onNameChenge = (e) => {
        setEmployee({
            first_name: e.target.value
        })
    }

    const onSubmit = (e) =>{
        e.preventDefault(); // когда этот евент будет обраб, то действие по умол не нужно ( перезагрузка )
        onItemAdd(first_name)
        setEmployee({
            first_name: ""
        })
    }


        return(
            <form
                className="form-contact"
                onSubmit={onSubmit}>
                
                <div className="form-contact__group">
                    <input 
                        type="text"
                        placeholder ="Name"
                        className="form-contact__group__input"
                        id="name_input" 
                        onChange={onNameChenge}
                        value={first_name}/>
                    <label
                        htmlFor="name_input"
                        className="form-contact__group__label">Name</label>
                </div>
                <button
                    className='form-contact__group__button'
                    disabled={first_name === ""}>
                    Add Employee
                </button>
            </form>
        )

}
