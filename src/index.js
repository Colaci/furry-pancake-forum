import React from 'react';
import ReactDOM from 'react-dom';
import ForumPage from './view/ForumPage/ForumPage';
// class ShoppingList extends React.Component {
//     render(){
//         return (
//             <div className="shopping-list">
//                 <h1>Shopping List for {this.props.name}</h1>
//                 <ul>
//                     <li>Instagram</li>
//                     <li>WhatsApp</li>
//                     <li>Reddit</li>
//                 </ul>
//             </div>
//         );
//     }
// }
const root = ReactDOM.createRoot(document.getElementById('root'))
// class Clock extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {date:new Date()}
//     }
//     // 生命周期方法
//     // 为Clock挂载一个定时器，每一秒都会setState从而修改DOM
//     componentDidMount(){
//         this.timerID = setInterval(()=>this.tick(),1000)
//     }
//     // 销毁
//     componentWillUnmount(){
//         clearInterval(this.timerID)
//     }
//     tick(){
//         this.setState({
//             date: new Date()
//         })
//     }
//     render(){return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>现在是{this.state.date.toLocaleString()}</h2>
//         </div>
//     )
//     }
// }
root.render(<ForumPage/>)

