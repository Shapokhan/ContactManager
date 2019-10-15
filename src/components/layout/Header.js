import React from 'react'
import PropType from 'prop-types'
import {Link} from 'react-router-dom'

const Header = (props) => {
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-3 py-0">
            <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="fa fa-home"/>
                            Home
                            </Link>
                        </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">
                        <i className="fa fa-plus"/>
                        Add Contact
                        </Link>
                        </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                        <i className="fa fa-question"/>
                            About
                            </Link>
                            </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}
Header.defaultProps = {
branding:'My App'
}
Header.propTypes = {
    branding: PropType.string.isRequired
}
export default Header;