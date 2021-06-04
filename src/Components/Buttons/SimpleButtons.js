import React from 'react';

const SimpleButtons = () => {

    return(
        <div>
            <div> Default: 
                <button className="btn btn-default">Button</button>
                <button className="btn btn-default-active">Button</button>
            </div>

            <div> Primary: 
                <button className="btn btn-primary">Button</button>
                <button className="btn btn-primary-active">Button</button>
            </div>

            <div> Danger:
                <button className="btn btn-danger">Button</button>
                <button className="btn btn-danger-active">Button</button>
            </div>

            <div> Warning: 
                <button className="btn btn-warning">Button</button>
                <button className="btn btn-warning-active">Button</button>
            </div>

            <div> Success: 
                <button className="btn btn-success">Button</button>
                <button className="btn btn-success-active">Button</button>
            </div>

            <div> Inverse: 
                <button className="btn btn-inverse">Button</button>
                <button className="btn btn-inverse-active">Button</button>
            </div>

            <div> Info: 
                <button className="btn btn-info">Button</button>
                <button className="btn btn-info-active">Button</button>
            </div>
        </div>
    )

};

export default SimpleButtons;