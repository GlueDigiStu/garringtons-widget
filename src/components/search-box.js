import React from 'react';

class SearchBox extends React.Component{

    constructor(props) {
        super();
        this.state = {
            value: ''
        }
    }

    handleKeyUp(value){
        this.props.handleKeyUp(value)
        this.setState({
            value: value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.props.onFormSubmit(e)}>
                    {this.state.value.length < 3 ? <div className='results-text'><p style={{marginBottom: 0}}>Where are you looking for?  To get started, type the first three letters</p></div> : <></>}
                    <input
                        onChange={(event) => this.handleKeyUp(event.target.value)}
                        value={this.props.value}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBox;
