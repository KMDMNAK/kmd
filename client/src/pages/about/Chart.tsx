// import Charts from "react-frappe-charts"
// const frappe = require('frappe-charts')
import dynamic from 'next/dynamic'
const Charts = dynamic(import('react-frappe-charts'), { ssr: false })

const mockEndDate = new Date()
const mockStartDate = new Date()
mockStartDate.setDate(mockStartDate.getDate() - 100);

const mockMidDate = new Date()
mockMidDate.setDate(mockStartDate.getDate() - 50);


const Component = () => {
	console.debug({ mockStartDate })
	console.debug({ mockEndDate })
	console.debug({ mockMidDate })
    return (<>
        <Charts
            type="heatmap"
            data={{
                dataPoints: {
                    [String(`${mockStartDate.getTime()}`).slice(0,10)]: 40,
                    [String(`${mockMidDate.getTime()}`).slice(0,10)]: 40
                },
                start: mockStartDate,
                end: mockEndDate,
            }}
            colors={['#ebedf0', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']}
        />
    </>)
}


const data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Another Set", type: "line",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ]
}

// const chart = new frappe.Chart("#chart", {  // or a DOM element,
//     // new Chart() in case of ES6 module with above usage
//     title: "My Awesome Chart",
//     data: data,
//     type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
//     height: 250,
//     colors: ['#7cd6fd', '#743ee2']
// })


// const Component = () => {
//     return (<div id="chart"></div>)
// }

export default Component