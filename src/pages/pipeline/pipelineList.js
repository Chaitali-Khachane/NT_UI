import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '@nt/dds-react';
import { Grid, Row, Col } from '@nt/dds-react';
import DIStep1 from './database_ingestion/DIStep1';
import FIStep1 from './file_ingestion/FIStep1';
import DBIStep1 from './database_bulk_ingestion/DBIStep1';
import DTStep1 from './data_transformation/DTStep1';
import Button from '@nt/dds-react/core/Button'

const PipelineList = (props) => {
    const { apiField } = useSelector((state) => state.pipeline)
    const [pipelineType, setPipelineType] = useState("")
    let pipelineClicked = (e) => {
        setPipelineType(e.target.id)
    }
    let cancelButtonClick = () => {
        props.cancelButtonClick()
    }
    let pipelineComponent = () => {
        switch (pipelineType) {
            case "database_ingestion": {
                return <DIStep1 cancelButtonClick={cancelButtonClick}/>
            }
            case "file_ingestion": {
                return <FIStep1 cancelButtonClick={cancelButtonClick}/>
            }
            case "database_bulk_ingestion": {
                return <DBIStep1 cancelButtonClick={cancelButtonClick}/>
            }
            case "data_transformation": {
                return <DTStep1 cancelButtonClick={cancelButtonClick}/>
            }
            default: {
                console.log("Pipeline Type Not found")
            }

        }

    }
    let returnComponent = () => {
        // alert(apiField.pipelineTableData.pipelineList.length)
        let rowsCount = apiField.pipelineTableData.pipelineList.length / 2
        let rows = []
        let indexCount = 0
        for (let i = 0; i < rowsCount; i++) {
            let columns = []
            for (let j = 0; j < 2; j++) {
                let id = apiField.pipelineTableData.pipelineList[indexCount].pipeline_type
                let name = apiField.pipelineTableData.pipelineList[indexCount].pipeline_type
                columns.push(<Col>
                    <div style={{ margin: "10px 0px" }}></div>
                    <Card
                        id={id}
                        name={name}
                        hover={false}
                        noPadding={false}
                        shadowSize="sm"
                        pipelineType={apiField.pipelineTableData.pipelineList[indexCount].pipeline_type}
                        onClick={(e) => { pipelineClicked(e) }}
                    >
                        <Grid id={id} name={name}>
                            <Row id={id}
                                name={name}>
                                <Col id={id}
                                    name={name} xs={2}>
                                    <img id={id}
                                        name={name} src={apiField.pipelineTableData.pipelineList[indexCount].pipeline_logo_url} style={{ width: "40px" }}></img>
                                </Col>
                                <Col id={id}
                                    name={name}>
                                    <div id={id}
                                        name={name} style={{ fontSize: "12px", fontWeight: "600" }}>{apiField.pipelineTableData.pipelineList[indexCount].pipeline_desc}</div>
                                    <div id={id}
                                        name={name}>{apiField.pipelineTableData.pipelineList[indexCount].pipeline_name}</div>
                                </Col>
                            </Row>
                        </Grid>

                    </Card>
                </Col>
                )
                indexCount++
            }
            rows.push(<Row>{columns}</Row>)
        }
        return <Grid>
            {rows}
        </Grid>
    }

    return <Fragment>
        {pipelineType == "" ?
            <Fragment><div style={{ margin: "20px 0px 10px", fontSize: "16px", fontWeight: "600" }}>To Create New Pipeline : Create Pipeline Type</div>
                {returnComponent()}
            </Fragment>
            :
            <Fragment>
                {pipelineComponent()}
            </Fragment>

        }
    </Fragment>

}

export default PipelineList