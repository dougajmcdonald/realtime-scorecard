import React from 'react'
import Layout from '../components/Layout.js'

class Index extends React.Component {

  state = {
    value: ''
  }

  componentDidMount() {

    const storageValue = localStorage.getItem('value')

    if(!storageValue) {
      return
    }

    this.setState({
      value: storageValue
    })
  }

  handleChange(e) {

    const val = e.target.value

    this.setState({
      value: val
    })

    localStorage.setItem('value', val)
  }

  render() {
    return <Layout>
       <p>Hello Next.js</p>
       <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.value}></input>
    </Layout>
  }
}

export default Index