import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { ResultCalculationForChart } from "../Interfaces/PropsInteface";

const DisplayChart = (props: { data: ResultCalculationForChart }) => {
    const data = props.data.data
    
    const primaryAxis = React.useMemo< AxisOptions<typeof data[number]["data"][number]> >( () => ({
        getValue: (datum) => datum.primary as unknown as Date,
    }), [] );

    const secondaryAxes = React.useMemo< AxisOptions<typeof data[number]["data"][number]>[] >( () => [ {
        getValue: (datum) => datum.secondary,
    }, ], [] );

    
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "12px",
                    height: "400px",
                }} >
                <div
                    style={{
                        flex: 2,
                        maxHeight: "400px",
                        margin: "10px",
                        overflow: "hidden",
                    }} >
                    <Chart
                        options={{
                            data,
                            primaryAxis,
                            secondaryAxes,
                        }}
                    />
                </div>
            </div>
        </>
    );
}


export default DisplayChart