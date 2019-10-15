import React, { Component } from 'react'
import PropType from 'prop-types'
import { Consumer } from '../../Context'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Contact extends Component {

    state = {
        showContactInfo: false
    }
    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }
    onDeleteClick = async (id,dispatch) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

      dispatch({type:'DELETE_CONTACT', payload:id})
        
    }
    render() {
        const { id, name, email, phone } = this.props.contact
        const { showContactInfo } = this.state;
        return (
            
            <Consumer>
               
                {value => {
                    const {dispatch} = value;
                    return (
                        
                        <div className="card card-body mb-3">
                            <h4>{name}
                                <i onClick={this.onShowClick} className="fa fa-sort-down" style={{ cursor: 'pointer' }}></i>
                                <i onClick={this.onDeleteClick.bind(this,id,dispatch)} className="fa fa-times" style={{ cursor: 'pointer', color: 'red', float: 'right' }}></i>
                                <Link to={`contact/edit/${id}`}>
                                    <i className="fa fa-pencil mx-2" style={{ cursor: 'pointer', color: 'black', float: 'right' }}>

                                    </i>
                                </Link>
                            </h4>
                            {
                                showContactInfo ? (<ul className="list-group">
                                    <li className="list-group-item">Email : {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>) : null
                            }
                        </div>
                    )
                }}
            </Consumer>

        )
    }
}
Contact.propTypes = {
    contact: PropType.object.isRequired,

}
export default Contact;