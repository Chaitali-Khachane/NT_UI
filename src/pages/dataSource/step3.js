import React, { Fragment, useEffect, useState } from 'react';
import { Card } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'
import DataGrid from '@nt/dds-datagrid';
require('@nt/dds-datagrid/lib/datagrid.css');
import { UtilityBar, Icon } from '@nt/dds-react';
import { Dropdown } from '@nt/dds-react';
import { Input } from '@nt/dds-react';
import { Grid, Row, Col } from '@nt/dds-react';
import { useDispatch, useSelector } from 'react-redux';
import {dynamicLabelFromKey} from '../../utils/dynamicLabel'

const Step3 = (props) => {
    const [clickSubmit, setClickSubmit] = useState(false);
    const [clickPrevious, setClickPrevious] = useState(false);
    const [clickCancel, setClickCancel] = useState(false);

    const { apiField } = useSelector((state) => state.datasource)

    let cancelButtonClick = () => {
        // setClickNext(false)
        setClickPrevious(false)
        props.cancelButtonClick()
    }

    let submitButtonClick = () => {
        setClickSubmit(true)
    }
    let previousButtonClick = () => {
       props.previousButtonClick()
    }
    // let cancelButtonClick = () => {
    //     setClickCancel(true)
    // }
    let returnComponent = () => {
        let rowsCount = apiField.connectors.dynamicFields.length / 2
        let rows = []
        let indexCount = 0
        for (let i = 0; i < rowsCount; i++) {
            let coulumns = []
            for (let j = 0; j < 2; j++) {
                
                coulumns.push(<Col>
                    <Input
                    readOnly
                    required
                        autoComplete
                        description=""
                        error=""
                        icon=""
                        iconAriaLabel=""
                        iconClassName=""
                        id={apiField.connectors.dynamicFields[indexCount]}
                        label={dynamicLabelFromKey(apiField.connectors.dynamicFields[indexCount])}
                        labelId=""
                        maxLength="80"
                        name={apiField.connectors.dynamicFields[indexCount]}
                        // onChange={(event)=>changeDetails(event)}
                        onIconClick={function noRefCheck() { }}
                        onKeyDown={function noRefCheck() { }}
                        placeholder=""
                        size="small"
                        type="text"
                        value={apiField.formData[apiField.connectors.dynamicFields[indexCount]]}
                        warning=""
                    />
                    <div style={{marginBottom:"5px"}}></div>
                </Col>)
                indexCount++
            }
            rows.push(<Row>{coulumns}</Row>)
        }
        return <Grid>
            {rows}
        </Grid>
    }
    return clickSubmit ? <Fragment></Fragment> : <Fragment>
        <p style={{ fontWeight: "800", fontSize: "16px" }}>Please review all the detail before Submit</p>
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
                        <Input
                            // required
                            readOnly
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
                            // onChange={(event) => changeConnector(event)}
                            open={false}
                            // optional={undefined}
                            // options={
                            //     apiField.connectors.list.map((valueObj) => {
                            //         return { label: valueObj.connector_name, value: valueObj.connector_name }
                            //     })
                            // }
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
                        readOnly
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
                            // onChange={(event)=>changeDetails("sourceName",event)}
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
                        readOnly
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
                            // onChange={(event)=>changeDetails("sourceDescription",event)}
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
           
        </Card>
        <Card>
            <UtilityBar
                //   accountMenu={function noRefCheck() {}}
                //   appMenu={function noRefCheck() {}}
                appTitle={<span style={{ fontWeight: "800", fontSize: "14px" }}>Step2: Enter the connectors credentials</span>}
                //   links={<nav><item name="Need Help?"/><item name="Sign Out"/></nav>}
                theme="light"
            />
            <div style={{marginTop:"10px"}}></div>
            {returnComponent()}
           
        </Card>
        <Grid style={{ width: "99%", margin: "10px" }}>
            <Row>
                <Col> <Button
                    danger={undefined}
                    icon="none"
                    iconName=""
                    kind="primary"
                    onClick={()=>cancelButtonClick()}
                    size="small"
                    type="button"
                // theme="dark"
                >
                    Cancel
                </Button></Col>
                <Col style={{ textAlign: "right" }}>
                    <Button
                        danger={undefined}
                        icon="left"
                        iconName="arrow_back"
                        kind="primary"
                        onClick={() => props.previousButtonClick()}
                        size="small"
                        type="button"
                    // theme="dark"
                    >
                        Previous
                    </Button>
                    <span style={{margin:"5px"}}></span>
                    <Button
                        danger={undefined}
                        icon="right"
                        iconName="arrow_forward"
                        kind="primary"
                        onClick={submitButtonClick}
                        size="small"
                        type="button"
                    // theme="dark"
                    >
                        Submit
                    </Button>
                </Col>
            </Row>
        </Grid>
    </Fragment>
};
export default Step3
