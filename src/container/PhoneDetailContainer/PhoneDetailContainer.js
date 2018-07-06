import React, { PureComponent } from 'react'
import  { connect } from 'react-redux'
import style from './style.css'
class PhoneDetailContainer extends PureComponent {
  render () {
    if(!this.props.phone){
      return <h3>d</h3>;
    }
      return (
    <div>
	<div className="title">{this.props.phone.name} </div>
		{this.props.phone.url!=null &&<img className="imgc" src={this.props.phone.url}/> }
		<ul>
		{this.props.phone.price!=null && <li> - {this.props.phone.price} </li>}
			{this.props.phone.des!=null && <li> - {this.props.phone.des} </li>}
			{this.props.phone.color!=null && <li> - {this.props.phone.color}</li>}
		</ul>
   </div>
      );
  }
}
function mapStateToProps(state){
  return{
    phone: state.activePhone
  };
}




export default connect(mapStateToProps)(PhoneDetailContainer);
