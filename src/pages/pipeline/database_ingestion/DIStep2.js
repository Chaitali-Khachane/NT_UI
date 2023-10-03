import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input } from '@nt/dds-react';
import { Grid, Row, Col } from '@nt/dds-react';
import { UtilityBar } from '@nt/dds-react';
import { Dropdown } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'

const DIStep2 = (props) => {
    let cancelButtonClick = () => {
        props.cancelButtonClick()
    }
    let previousButtonClick = () =>{
        props.previousButtonClick()
    }
    return <Fragment>
       
        <Card>
            <UtilityBar
                appTitle={<span style={{ fontWeight: "800", fontSize: "14px" }}>Step2:Review and create target schema</span>}
                theme="light"
            />
            DIStep2

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
                        icon="left"
                        iconName="arrow_back"
                        kind="primary"
                        onClick={previousButtonClick}
                        size="small"
                        type="button"

                    >
                        Previous
                    </Button>
                    <span style={{ margin: "5px" }}></span>
                    <Button
                        danger={undefined}
                        icon="right"
                        iconName="arrow_forward"
                        kind="primary"
                        // onClick={nextButtonClick}
                        size="small"
                        type="button"

                    >
                       Next
                    </Button>
                </Col>
            </Row>
        </Grid>
    </Fragment>
}
export default DIStep2