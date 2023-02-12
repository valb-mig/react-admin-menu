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
        <div className='dashboard'>
            <div className='buttons'>
                <div className='date-button'>
                </div>
                <div className='filter-button'>
                </div>
            </div>
            <div className='dashboard-context'>
                <div className='context'>

                </div>
            </div>

            <div className='dashboard-out'>
               
                <Bar className='dashboard-content' options={chartOptions} data={chartData} height={`100px`} />
  
                <div className='bar'>
                    <div className='dashboard-months'>
                        <div className='months'>
                        <p>Jan</p>
                        <div className='actual-month'>Fev</div>
                        <p>Mar</p>
                        <p>Abr</p>
                        <p>Mai</p>
                        <p>Jun</p>
                        <p>Jul</p>
                        <p>Ago</p>
                        <p>Set</p>
                        <p>Out</p>
                        <p>Nov</p>
                        <p>Dez</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard