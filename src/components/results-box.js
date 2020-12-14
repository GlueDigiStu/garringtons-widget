import React from 'react'

class ResultsBox extends React.Component {
    render() {

        if (this.props.data.length === 0 && this.props.query.length > 2) {
            return (
                <div>
                    <p>Sorry We couldn't find anything</p>
                </div>
            )
        } else {

            return (
                <div>
                    <ul>
                        {
                            this.props.data.map((item) =>
                                <li
                                    onClick={(event) => this.props.handleClick(item.OR)}
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