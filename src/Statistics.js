import React from 'react';

const Statistic = ({text, value}) => {
    return (
        <>
            <td>{text}</td> 
            <td>{value}</td>
        </>
    )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {  
    return (
      <table>
          <thead>
            <tr>
                <Statistic text={'good'} value={good}/>
            </tr>
            <tr>
                <Statistic text={'neutral'} value={neutral}/>
            </tr>
            <tr>
                <Statistic text={'bad'} value={bad}/>
            </tr>
            <tr>
                <Statistic text={'all'} value={all}/>
            </tr>
            <tr>
                <Statistic text={'average'} value={average}/>
            </tr>
            <tr>
                <Statistic text={'positive'} value={`${positive} %`}/>
            </tr>
          </thead>
      </table>
    );
}

export default Statistics