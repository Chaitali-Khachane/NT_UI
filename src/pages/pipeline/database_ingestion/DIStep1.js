import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input } from '@nt/dds-react';
import { Grid, Row, Col } from '@nt/dds-react';
import { UtilityBar } from '@nt/dds-react';
import { Dropdown } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'
import DIStep2 from './DIStep2';

const DIStep1 = (props) => {
    const [advancesSetupFlag,setAdvancesSetupFlag] = useState(false)
    const dispatch = useDispatch()
    let cancelButtonClick = () => {
        props.cancelButtonClick()
    }
    let advancedButtonClick=()=>{
        setAdvancesSetupFlag(true)
    }
    let previousButtonClick=()=>{
        setAdvancesSetupFlag(false)
    }
    // useEffect(()=>{
    //     dispatch(get_RWS_SourceList())
    // },[])
    return <Fragment>{advancesSetupFlag?<DIStep2 cancelButtonClick={cancelButtonClick} previousButtonClick={previousButtonClick}/>:
        <Fragment>
        <Card>
            <UtilityBar
                appTitle={<span style={{ fontWeight: "800", fontSize: "14px" }}>Step1a: Select the datasource</span>}
                theme="light"
            />
            <Grid style={{ width: "99%", margin: "10px" }}>
                <Row style={{ width: "100%", marginBottom: "10px" }}>
                    <Col style={{ width: "50%" }}>
                        <Input
                            required
                            readOnly
                            label="Data Source Type"
                            value="RDBMS"
                        />
                    </Col>
                    <Col style={{ width: "50%" }}>
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
                            label="Data Source"
                            nativeOnMobile
                            // onChange={(event) => changeConnector(event)}
                            open={false}
                            optional={undefined}
                            options={[]
                            }
                            panelHeight={200}
                            parentElementId="root"
                            required
                            searchable={false}
                            size="small"
                            // value={apiField.connectors.selectedConnector.connector_name}
                            virtualScroll={false}
                        />
                    </Col>
                </Row >
                <Row style={{ width: "100%" }}>
                    <Col style={{ marginTop: "10px", width: "50%" }}>
                        {/* <br /><br /> */}
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
                            label="Source Object"
                            nativeOnMobile
                            // onChange={(event) => changeConnector(event)}
                            open={false}
                            optional={undefined}
                            options={[]
                            }
                            panelHeight={200}
                            parentElementId="root"
                            required
                            searchable={false}
                            size="small"
                            // value={apiField.connectors.selectedConnector.connector_name}
                            virtualScroll={false}
                        />
                    </Col>
                    <Col style={{ marginTop: "10px", width: "50%" }}>
                        {/* <br /><br /> */}

                    </Col>
                </Row>
            </Grid>

        </Card>
        <div style={{ margin: '10px' }}></div>
        <Card>
            <UtilityBar
                appTitle={<span style={{ fontWeight: "800", fontSize: "14px" }}>Step1b:Specify the target domain and entity details</span>}
                theme="light"
            />
            <Grid style={{ width: "99%", margin: "10px" }}>
                <Row style={{ width: "100%", marginBottom: "10px" }}>

                    <Col style={{ width: "50%" }}>
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
                            label="Domain"
                            nativeOnMobile
                            // onChange={(event) => changeConnector(event)}
                            open={false}
                            optional={undefined}
                            options={[]
                            }
                            panelHeight={200}
                            parentElementId="root"
                            required
                            searchable={false}
                            size="small"
                            // value={apiField.connectors.selectedConnector.connector_name}
                            virtualScroll={false}
                        />
                    </Col>
                    <Col style={{ width: "50%" }}>
                        <Input
                            required

                            label="Entity"
                            value=""
                        />
                    </Col>
                </Row >
                <Row style={{ width: "100%" }}>
                    <Col style={{ marginTop: "10px", width: "50%" }}>
                        {/* <br/><br/> */}
                        <Input
                            required

                            label="Entity Description"
                            value=""
                        />
                    </Col>
                    <Col style={{ marginTop: "10px", width: "50%" }}>
                        {/* <br/><br/> */}
                        <Input
                            required
                            label="Business Tags"
                            value=""
                        />
                    </Col>
                </Row>
            </Grid>

        </Card>
        <div style={{ margin: '10px' }}></div>
        <Grid style={{ width: "99%", margin: "10px" }}>
            <Row>
                <Col>
                    <Button
                        danger={undefined}
                        icon="none"
                        iconName=""
                        kind="primary"
                        onClick={cancelButtonClick}
                        size="small"
                        type="button"

                    >
                        Cancel
                    </Button></Col>
                <Col style={{ textAlign: "right" }}>

                    <Button
                        danger={undefined}
                        // icon="right"
                        // iconName="arrow_forward"
                        kind="primary"
                        // onClick={nextButtonClick}
                        size="small"
                        type="button"

                    >
                        Quick SetUp
                    </Button>
                    <span style={{ margin: "5px" }}></span>
                    <Button
                        danger={undefined}
                        // icon="right"
                        // iconName="arrow_forward"
                        kind="primary"
                        onClick={advancedButtonClick}
                        size="small"
                        type="button"

                    >
                        Advanced Setup
                    </Button>
                </Col>
            </Row>
        </Grid>
        </Fragment>}
        
    </Fragment>
}
export default DIStep1