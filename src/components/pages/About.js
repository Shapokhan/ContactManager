import React from 'react'

export default props => {
    return (
        <div>
            <h1 className="display-4">
                {props.match.params.id}
                About Contact Manager
            </h1>
        </div>
    )
}
