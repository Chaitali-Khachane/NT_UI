import React, { Fragment, useEffect, useState } from 'react';
import { Card } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'
require('@nt/dds-datagrid/lib/datagrid.css');
import { UtilityBar } from '@nt/dds-react';
import { Input } from '@nt/dds-react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_DETAIL } from '../../redux/domain/domain.type';
import { useHistory } from 'react-router-dom';
import { Grid, Row, Col } from '@nt/dds-react';


const Step1 = (props) => {
    const [clickSubmit, setclickSubmit] = useState(false);
 

    const { apiField } = useSelector((state) => state.domain)
    const dispatch = useDispatch()
    const history = useHistory();


    
    let submitButtonClick = () => {
        setclickSubmit(true)
    }
    
    let cancelButtonClick = () => {
        props.cancelButtonClick()
    }
  
   
    let changeDetails=(field,event)=>{
        console.log("chnage detail")
        // console.log(event)
        console.log(event.target.value)
        // console.log(event.value)
        let vfield=""
        switch(field){
            case "domainName":{
                vfield="domainName"
                break
            }
            case "domainDescription":{
                vfield="domainDescription"
                break
            }
        }
        dispatch( {
            type:CHANGE_DETAIL,
            payload:{
                apiField:"domainDetail",
                field:vfield,
                data:event.target.value
            }
        })
    }
    return <Fragment>
        <Card>
            <UtilityBar
                //   accountMenu={function noRefCheck() {}}
                //   appMenu={function noRefCheck() {}}
                appTitle={<span style={{ fontWeight: "800", fontSize: "14px" }}>Enter the Domain detail</span>}
                //   links={<nav><item name="Need Help?"/><item name="Sign Out"/></nav>}
                theme="light"
            />
            <Grid >
                
                <Row >
                    <Col >
                    <br />
                        <Input
                            required
                            autoComplete
                            description=""
                            error=""
                            icon=""
                            iconAriaLabel=""
                            iconClassName=""
                            id="input01"
                            label="Domain Name"
                            labelId=""
                            maxLength="80"
                            name=""
                            onChange={(event)=>changeDetails("domainName",event)}
                            onIconClick={function noRefCheck() { }}
                            onKeyDown={function noRefCheck() { }}
                            placeholder=""
                            size="small"
                            type="text"
                            value={apiField.domainDetail.domainName}
                            warning=""
                        />
                    </Col>
                    <Col>
                        <br />
                        <Input
                            required
                            autoComplete
                            description=""
                            error=""
                            icon=""
                            iconAriaLabel=""
                            iconClassName=""
                            id="input01"
                            label="Domain Description"
                            labelId=""
                            maxLength="80"
                            name=""
                            onChange={(event)=>changeDetails("domainDescription",event)}
                            onIconClick={function noRefCheck() { }}
                            onKeyDown={function noRefCheck() { }}
                            placeholder=""
                            size="small"
                            type="text"
                            value={apiField.domainDetail.domainDescription}
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
        </Card>
    </Fragment>
};
export default Step1
