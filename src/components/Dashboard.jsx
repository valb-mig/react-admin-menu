import React from 'react'
import { Bar } from 'react-chartjs-2'
import './css/dashboard.css'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {

    const chartOptions = {
        responsive:          true,
        maintainAspectRatio: false,
        
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: colors.purple,
                borderRadius:    15,
                borderSkipped:   'none'
            }
        }
    }

    const chartData = {

        labels: data.revenueByMonths.labels,

        datasets: [
            {
                label: 'Quantidade',
                data: data.revenueByMonths.data
            }
        ]
    }

    return (
        <>
            <div className='dashboard'>
                <Bar className='dashboard-content' options={chartOptions} data={chartData} height={`100px`} />
            </div>
        </>
    )
}

export default Dashboard