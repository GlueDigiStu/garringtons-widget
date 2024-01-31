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
                    <p>Hmm, we can’t seem to find that one. Try somewhere nearby.</p>
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
