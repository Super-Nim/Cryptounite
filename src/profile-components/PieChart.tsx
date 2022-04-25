import React, { useState } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text'; // component for dealing with svg text
import { ScaleSVG } from '@visx/responsive';

export interface PieProps {
        symbol: string;
        amount: number;
        color: string;
        inUSD: number;
}   

const defaultActive: PieProps = {symbol: '', amount: 0, color: '', inUSD: 0}




const coins: PieProps[] = [
    { symbol: 'ETH', amount: 1, color: '#FFE156', inUSD: 3000},
    { symbol: 'BTC', amount: 0.1, color: '#F7931A', inUSD: 40000},
    { symbol: 'SOL', amount: 20, color: '#00ffbd', inUSD: 100} 
]

// This is a functional component that returns JSX of type JSX.Element
const PieChart: React.FC = (): JSX.Element => {
    
    const [active, setActive] = useState<PieProps | null>(null);
    const width = 400;
    const half = width / 2;

    return (
        <>
            <svg width={width} height={width}>
                <Group top={half} left={half}>
                    <Pie 
                        data={coins} 
                        pieValue={(data) => data.amount * data.inUSD} 
                        outerRadius={half}
                        innerRadius={({data}) => {
                            const size = active && active.symbol === data.symbol ? 22 : 18;
                            return half - size;
                        }}
                        padAngle={0.01}
                    >
                        {(pie: any) => {
                            return pie.arcs.map((arc: any) => {
                                return (
                                    <g 
                                        key={arc.data.symbol}
                                        onMouseEnter={() => setActive(arc.data)}
                                        onMouseLeave={() => setActive(null)}
                                    >
                                        <path d={pie.path(arc)} fill={arc.data.color}></path>
                                    </g>
                                )
                            })
                        }}


                    </Pie>
                    {active ? (
                        <>
                            <Text textAnchor='middle' fontSize={40} dy={-20}>
                            {/*Put whole text as a single string to remove the comma from appending two children*/}
                            {/*round down to nerest integer*/}
                            {`$${Math.floor( 
                                coins.reduce((acc, coin) => acc + active.amount * active.inUSD, 0)
                            )}`} 
                            </Text>

                            <Text textAnchor='middle' fill={active.color} fontSize={40} dy={20}>
                                {`${active.amount} ${active.symbol}`}
                            </Text>
                        
                        </>
                    ) : (
                        <>
                            <Text textAnchor='middle' fontSize={40} dy={-20}>
                            {`$${Math.floor( 
                                coins.reduce((acc, coin) => acc + coin.amount * coin.inUSD, 0)
                            )}`} 
                            </Text>

                            <Text textAnchor='middle' fontSize={40} dy={20}>
                                {`${coins.length} Assets`}
                            </Text>
                        
                        </>

                    )
                    }
                    

                    
                </Group>
            </svg> {/* */}
        </>
    )

}

export default PieChart;