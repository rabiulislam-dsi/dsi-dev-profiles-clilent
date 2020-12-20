import {Card} from "react-bootstrap";
import React, {useState} from "react";
import {ResponsiveContainer, PieChart, Pie, Cell, Legend, Sector} from "recharts";
import CountUp from "react-countup";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Count ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

function PieContributionCard({pieChartData, title, total}) {
    const [activeIndex, setActiveIndex] = useState([0]);
    const onPieEnter = (data, index) => {
        setActiveIndex(index);
    }
    return (
        <Card className="shadow py-2 border-0">
            <Card.Body>
                <Card.Title className="text-secondary text-center">
                    <h2>
                        {title}
                    </h2>
                </Card.Title>
                <Card.Subtitle className="text-secondary text-center">
                    <h4>
                        Total <CountUp end={total} separator={','} className="text-secondary h4"/>
                    </h4>
                </Card.Subtitle>
            </Card.Body>
            <div className="pie-card-content" style={{overflowX: "auto"}}>
                    <ResponsiveContainer width="100%" minWidth={500} height={300}>
                        <PieChart>
                            <Pie
                                activeIndex={activeIndex}
                                activeShape={renderActiveShape}
                                data={pieChartData}
                                dataKey="value"
                                nameKey="name"
                                innerRadius={70}
                                outerRadius={100}
                                onMouseEnter={onPieEnter}
                            >
                                {
                                    pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color}/>
                                    ))
                                }
                            </Pie>
                            <Legend verticalAlign="bottom"/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
        </Card>
    )
}

export default PieContributionCard;