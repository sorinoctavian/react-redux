import React from 'react'
import {connect} from 'react-redux'
import { fetchAll } from '../apis/todos'

class Refresh extends React.Component{
 componentDidMount(){
     this.props.fetchToDos();
 }
}

export default connect(null,(fetchAll))(Refresh)