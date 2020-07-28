import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';
class App extends React.Component{
	constructor(){
		super()
		this.state={  //state changes in in app
			robots :[],
			searchfield : ''
		}
	}
	//function with react to check components loaded on page
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users =>this.setState({robots:users}));
		
	}
	onSearchChange= (event) =>{
		this.setState({searchfield:event.target.value}) // to change state 
		//(event.target.value);//to give value of input
        
	}
	render(){
		const filteredRobots=this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
        	return <h1> Loading</h1>;
        }	else{

        	
        
			return (
		     <div className='tc'>
				<h1 className='f1'>ROBO-FRIENDS</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
				<CardList robots={filteredRobots}/>
				</Scroll>
			 </div>
			);
		}
	}
}
export default App;