import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { glucoseLevelArr, glucoseTimeStampArr} = this.props;
        console.log(JSON.stringify(this.props))

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: glucoseTimeStampArr,
                datasets: [
                    {
                        label: "Recorded Glucose level",
                        data: glucoseLevelArr,
                        fill: false,
                        borderColor: "#6610f2"
                    },
                ]
            },
            options: {
                //Customize chart options
                responsive: true
                // ,maintainAspectRation: false
            }
        });

    }

    render() {

        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}