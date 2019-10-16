// import React from 'react';
// class Sample extends React.Component { 
//     constructor(props){
//         super(props);
//         this.state = {
//             email: '',
//             name: '',
//             username: '',
//             password: '',
//             password_confirmation: ''
//           }
//           this.valueChange = this.valueChange.bind(this);
//           this.changeInTextField = this.changeInTextField.bind(this);
// console.log('hello', this.state.name)
//         }
//         valueChange(key,value){
//             console.log('valuechange')
//           this.setState({[key]: value})
//         }
       
//         changeInTextField(event){
//             this.state.valueChange(event.target.name , event.target.value)
//        }
//     render() { 
//         console.log(this.state)
//         return ( 
//                 <div>
//                     <label>hello</label>
//                   <input name={this.state.name} type={this.state.type} className="form-control col-md-9" value={this.state.value} placeholder={this.state.placeholder}
//                    onChange={this.changeInTextField}
//                  /> 
//                 </div>   
  
//         )
//     }
// }
// export default Sample;