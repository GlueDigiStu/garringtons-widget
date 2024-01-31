import React from 'react'

class DataBox extends React.Component{
    handleClick = () => {
        this.props.handlePin(this.props.values);
    }
    render() {
        let val = this.props.values;


        if (val.length > 0) {
        //     let PBC = null;
        //     if(val[0].PB === "Over £650k"){
        //         PBC = "106";
        //     }else if(val[0].PB === "£350k-£650k"){
        //         PBC = "605"
        //     } else if(val[0].PB === "less than £350k"){
        //         PBC = "661"
        //     } else{
        //         PBC = null;
        //     }
            return (
                <div className="data-box">
                    {!this.props.unpin ?
                    <button className="pin-me" onClick={this.handleClick}>Pin Me</button> :
                        <button onClick={this.handleClick}><i className="fas fa-times"></i></button>}
                    <h1>{val[0].SN}</h1>
                    <p className='large'>Overall rank: <span className="result large">{val[0].OR} /<span className="mini"> 1429</span></span> </p>
                    {/*<p>Change since last year: <span className="result">{val[0].CHANGE * -1}</span> </p>*/}
                    <hr/>
                    <p>Natural Environment: <span className="result">{val[0].NE}</span></p>
                    <p>Wellbeing: <span className="result">{val[0].WB}</span></p>
                    <p>Heritage / Culture: <span className="result">{val[0].HC}</span></p>
                    <p>Schools, employment and connectivity: <span className="result">{val[0].SCH}</span></p>
                    <p>House Price Quality and Value: <span className="result">{val[0].HP}</span></p>
                    {/*<p>Overall Ranking: </p>*/}
                    <hr/>
                    <p>Average family home cost: <span className="result">{val[0].AP}</span></p>
                    <p>Average sales price change in last 12 months: <span className="result">{val[0].SPC}</span></p>
                </div>
            )
        } else {
            return (
                <div>
                    {!this.props.unpin ?
                    <p></p> :
                        null}
                </div>
            )
        }
    }
}

export default DataBox


// export default function DataBox(props){
//     let val = props.values;
//     if(val.length > 0){
//         return(
//             <div>
//                 <button onClick={(val)=> props.handlePin(val)}>Pin This Result</button>
//                 <h1>{val[0].SN}</h1>
//                 <p>Physical Environment Score: {val[0].PE}</p>
//                 <p>Quality of living Score: {val[0].QL}</p>
//                 <p>Architecture, heritage, environmental credentials Score: {val[0].AC}</p>
//                 <p>Price band of average family home: {val[0].PB}</p>
//                 <p>Overall Ranking: {val[0].OR}</p>
//                 <p>Price Bracket Ranking: {val[0].PBR}</p>
//             </div>
//         )
//     } else {
//         return(
//             <div>
//                 <p>Please choose a town</p>
//             </div>
//         )
//     }
// }
