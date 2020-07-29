import React from "react";

function FormField({label, type, name, value, onChange}){
    if(type !== "textarea"){
        return (
            <div>
                <label>
                    {label}
                    <input 
                        name={name}
                        type={type} 
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }else{
        return(
            <div>
                <label>
                    {label}
                    <textarea 
                        name={name}
                        type="text"
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }
}

export default FormField;