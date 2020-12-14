import React from 'react';

class SearchBox extends React.Component{
    render(){
        return(
            <div>
                <form>
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
