import React, { Component } from 'react' ;

class Counter extends Component{
    state = {
        count: 1 
    }
    //setState({ count: this.state.count + 1})

      render(){
        return (
            <>
                <span className="badge badge-secondary"> { this.formatCount() } </span>
                <button onClick={()=>this.setState({ count: this.state.count + 1})} className="btn btn-primary"> increment </button>
            </>
        );
    }

    formatCount(){
        const { count } = this.state ;
        return count === 0 ? "Zero" : count ;
    }
}




export default Counter ;
