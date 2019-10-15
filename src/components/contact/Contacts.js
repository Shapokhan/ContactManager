import React, { Component } from 'react'
import { Consumer } from '../../Context'
import Contact from './Contact'

export default class Contacts extends Component {



    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-3">
                            <span className="text-danger">Contact </span>List
                            </h1>
                            {value.contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                />
                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )

    }
}
