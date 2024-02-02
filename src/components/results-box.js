import React from 'react'



    class ResultsBox extends React.Component {
    render() {

        if(this.props.query.length <= 2){
            return(
<></>
            )
        } else if (this.props.query.length > 2 && this.props.data.length === 0 ) {
            return (
                <div className='results-text'>
                    <p>Unfortunately, your search has not made our results table. Please try searching again with somewhere nearby.</p>
                </div>
            )
        } else {

            return (
                <div className="results-box">
                    <ul>
                        {
                            this.props.data.map((item) =>
                                <li
                                    onClick={(event) => this.props.handleClick(item.UID)}
                                    key={item.UID}>{item.SN}</li>
                            )
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default ResultsBox
