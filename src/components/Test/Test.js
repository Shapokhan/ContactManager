import React from 'react'
class Test extends React.Component {
    state = {
        title:'',
        body:''
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => this.setState({
      title:data.title,
      body:data.body
  }))
    }
    render(){
        const {title, body} = this.state;
        return(
            <div>
                Title: {title}
                Body: {body}
            </div>
        )
    }
}
export default Test