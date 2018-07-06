import React, { PureComponent } from 'react'
import {bindActionCreators} from 'redux';
import  { connect } from 'react-redux'
import {selectPhone} from '../../actions/index'
import style from './style.css'
import axios from 'axios'
import { RingLoader } from 'react-spinners';

class PhoneListContainer extends PureComponent {
	constructor(props) {
    super(props);
    this.state = {
      data: [],
	  loading:true
    }
	   axios.get('https://us-central1-reactjs-5d716.cloudfunctions.net/getList')
      .then(res => {
		this.setState({data: res.data,loading:false});

     }).catch(function (error) {
    
	})
  }

	createListItems(){
		
    return this.state.data.map(( phone )=>{
      return (
	      phone!=null && <p onClick={()=>this.props.selectPhone(phone)}   key={phone.id}>{phone.name}</p>
	
      )
    })
  }
  render () {
    return (
	
<div>
<div className="load">
   <RingLoader
          color={'#123abc'} 
          loading={this.state.loading} 
        />
		</div>
{this.createListItems()}
</div>
    )
  }
}
function mapStateToProps(state){
  return{
    phones:state.phones
  };
}
//for the action
function matchDispachToProps(dispach){
 return bindActionCreators({selectPhone:selectPhone},dispach);
}
export default connect(mapStateToProps,matchDispachToProps)(PhoneListContainer);
	

