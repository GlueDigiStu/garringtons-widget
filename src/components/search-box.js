import React from 'react';

class SearchBox extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.props.onFormSubmit(e)}>
                    <input
                        onChange={(event) => this.props.handleKeyUp(event.target.value)}
                        value={this.props.value}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBox;
