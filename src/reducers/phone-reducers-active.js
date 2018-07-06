export default function (state={},action) {
 switch(action.type){
     case "PHONE_SELECTED":
        return action.payload;
       
	 default: // need this for default case
      return state 
 }

}
