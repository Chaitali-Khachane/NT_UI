import React, { Fragment, useEffect, useState } from 'react';
import { Card } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'
import DataGrid from '@nt/dds-datagrid';
require('@nt/dds-datagrid/lib/datagrid.css');
import { UtilityBar } from '@nt/dds-react';
import { Dropdown } from '@nt/dds-react';
import { Input } from '@nt/dds-react';
import Step2 from './step2';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DETAIL } from '../../redux/datasource/datasource.type';
import { set_RWS_SelectedConnector, get_RWS_ConnectorField } from '../../redux/datasource/datasource.action';
import { useHistory } from 'react-router-dom';
import { Grid, Row, Col } from '@nt/dds-react';
// const connectors = {
//     "status": "Success",
//     "result": [
//         {
//             "connector_name": "azuresql",
//             "connector_type": "database",
//             "connector_desc": "Connector for Azure Sql Database"
//         },
//         {
//             "connector_name": "adls",
//             "connector_type": "storage",
//             "connector_desc": "Connector for Data Lake Storage"
//         }
//     ]
// }

const Step1 = (props) => {
    const [clickNext, setClickNext] = useState(false);
    const [clickPrevious, setClickPrevious] = useState(false);
    const [clickCancel, setClickCancel] = useState(false);

    const { apiField } = useSelector((state) => state.datasource)
    const dispatch = useDispatch()
    const history = useHistory();


    
    let nextButtonClick = () => {
        setClickNext(true)
    }
    let previousButtonClick = () => {
        setClickNext(false)
        // setClickPrevious(true)
    }
    let cancelButtonClick = () => {
        props.cancelButtonClick()
    }
    let changeConnector = (event) => {
        console.log(event)

        dispatch(set_RWS_SelectedConnector(event.value))
        dispatch(get_RWS_ConnectorField(event.value))
        console.log(apiField)
        
    }
   
    let changeDetails=(field,event)=>{
        console.log("chnage detail")
        // console.log(event)
        console.log(event.target.value)
        // console.log(event.value)
        let vfield=""
        switch(field){
            case "sourceName":{
                vfield="sourceName"
                break
            }
            case "sourceDescription":{
                vfield="sourceDescription"
                break
            }
        }
        dispatch( {
            type:CHANGE_DETAIL,
            payload:{
                apiField:"formData",
                field:vfield,
                data:event.target.value
            }
        })
    }
    return clickNext ? <Fragment><Step2 cancelButtonClick={cancelButtonClick} previousButtonClick={previousButtonClick} /></Fragment> : <Fragment>
        <Card>
            <UtilityBar
                //   accountMenu={function noRefCheck() {}}
                //   appMenu={function noRefCheck() {}}
                appTitle={<span style={{ fontWeight: "800", fontSize: "14px" }}>Step1: Enter the datsource detail</span>}
                //   links={<nav><item name="Need Help?"/><item name="Sign Out"/></nav>}
                theme="light"
            />
            <Grid style={{ width: "99%", margin: "10px" }}>
                <Row style={{ width: "100%", marginBottom: "10px" }}>
                    <Col style={{ width: "50%" }}>
                        {/* <span style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}> Connector Name<span style={{ color: "red" }}>*</span></span><br /> */}
                        <Dropdown
                            // required
                            alignRight={false}
                            defaultText="Select..."
                            description=""
                            disabled={false}
                            dropUp={false}
                            error=""
                            iconNameClose="arrow_drop_up"
                            iconNameOpen="arrow_drop_down"
                            id="dd-03"
                            label="Connector Name"
                            nativeOnMobile
                            onChange={(event) => changeConnector(event)}
                            open={false}
                            optional={undefined}
                            options={
                                apiField.connectors.list.map((valueObj) => {
                                    return { label: valueObj.connector_name, value: valueObj.connector_name }
                                })
                            }
                            panelHeight={200}
                            parentElementId="root"
                            required
                            searchable={false}
                            size="small"
                            value={apiField.connectors.selectedConnector.connector_name}
                            virtualScroll={false}
                        />
                    </Col>
                    <Col style={{ width: "50%" }}>
                        {/* <span style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}>Connector Type<span style={{ color: "red" }}>*</span></span><br /> */}
                        <Input
                            readOnly
                            autoComplete
                            description=""
                            error=""
                            icon=""
                            iconAriaLabel=""
                            iconClassName=""
                            id="input01"
                            label="Connector Type"
                            labelId=""
                            maxLength="80"
                            name=""
                            // onChange={(event)=>changeDetails(event)}
                            onIconClick={function noRefCheck() { }}
                            onKeyDown={function noRefCheck() { }}
                            placeholder=""
                            size="small"
                            type="text"
                            value={apiField.connectors.selectedConnector.connector_type}
                            warning=""
                            required
                        />
                    </Col>
                </Row >
                <Row style={{ width: "100%" }}>
                    <Col style={{ marginTop: "10px", width: "50%" }}>
                        <br /><br />
                        {/* <span style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}>Source Name<span style={{ color: "red" }}>*</span></span><br /> */}
                        <Input
                            required
                            autoComplete
                            description=""
                            error=""
                            icon=""
                            iconAriaLabel=""
                            iconClassName=""
                            id="input01"
                            label="Source Name"
                            labelId=""
                            maxLength="80"
                            name=""
                            onChange={(event)=>changeDetails("sourceName",event)}
                            onIconClick={function noRefCheck() { }}
                            onKeyDown={function noRefCheck() { }}
                            placeholder=""
                            size="small"
                            type="text"
                            value={apiField.formData.sourceName}
                            warning=""
                        />
                    </Col>
                    <Col style={{ marginTop: "10px", width: "50%" }}>
                        <br /><br />
                        {/* <span style={{ fontWeight: "bold", fontSize: "14px", marginLeft: "10px" }}>Source Description<span style={{ color: "red" }}>*</span></span><br /> */}
                        <Input
                            required
                            autoComplete
                            description=""
                            error=""
                            icon=""
                            iconAriaLabel=""
                            iconClassName=""
                            id="input01"
                            label="Source Description"
                            labelId=""
                            maxLength="80"
                            name=""
                            onChange={(event)=>changeDetails("sourceDescription",event)}
                            onIconClick={function noRefCheck() { }}
                            onKeyDown={function noRefCheck() { }}
                            placeholder=""
                            size="small"
                            type="text"
                            value={apiField.formData.sourceDescription}
                            warning=""
                        />
                    </Col>
                </Row>
            </Grid>
            <Grid style={{ width: "99%", margin: "10px" }}>
                <Row>
                    <Col> <Button
                        danger={undefined}
                        icon="none"
                        iconName=""
                        kind="primary"
                        onClick={cancelButtonClick}
                        size="small"
                        type="button"
                    // theme="dark"
                    >
                        Cancel
                    </Button></Col>
                    <Col style={{ textAlign: "right" }}>
                        {/* <Button
                            danger={undefined}
                            icon="left"
                            iconName="arrow_back"
                            kind="primary"
                            onClick={previousButtonClick}
                            size="small"
                            type="button"
                        // theme="dark"
                        >
                            Previous
                        </Button>
                        <span style={{margin:"5px"}}></span> */}
                        <Button
                            danger={undefined}
                            icon="right"
                            iconName="arrow_forward"
                            kind="primary"
                            onClick={nextButtonClick}
                            size="small"
                            type="button"
                        // theme="dark"
                        >
                            Next
                        </Button>
                    </Col>
                </Row>
            </Grid>
        </Card>
    </Fragment>
};
export default Step1
