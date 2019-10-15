import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props)
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    static defaultValue = {
        name: 'Shafiullah',
        email: 'shafillah3713@gmail.com',
        phone: '03149393713'
    }
    onSubmit = e => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        }
        console.log(contact)
    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                            </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" >Name</label>
                            <input type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="name"
                                // defaultValue={name}
                                // ref={this.nameInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <input type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Email"
                                name="email"
                                // defaultValue={email}
                                // ref={this.emailInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" >Phone No</label>
                            <input type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Phone"
                                name="phone"
                                // defaultValue={phone}
                                // ref={this.phoneInput}
                            />
                        </div>
                        <input type="submit" className="btn btn-block btn-success" value="Add Contact" />

                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;