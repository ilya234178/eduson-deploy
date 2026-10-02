import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CustomComponent = () => {
    const navigate = useNavigate();
    
    function goBack() {
        navigate(-1);
    }

    function goForward() {
        navigate(1);
    }
    return (
    <div>
        Please register
        <input type="text" />
        <button onClick={goBack}>Go Back</button>
        <button onClick={goForward}>Go Forward</button>
    </div>
    );
}
