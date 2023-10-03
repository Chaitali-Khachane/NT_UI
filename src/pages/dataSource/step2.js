import React, { Fragment, useEffect, useState } from 'react';
import { Card } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'
import DataGrid from '@nt/dds-datagrid';
require('@nt/dds-datagrid/lib/datagrid.css');
import { UtilityBar } from '@nt/dds-react';
import { Dropdown } from '@nt/dds-react';
import { Input } from '@nt/dds-react';
import Step3 from './step3';
import { Grid, Row, Col } from '@nt/dds-react';
import { useDispatch, useSelector } from 'react-redux';
import {dynamicLabelFromKey} from '../../utils/dynamicLabel'
import { CHANGE_DETAIL } from '../../redux/datasource/datasource.type';

const Step2 = (props) => {
    const [clickNext, setClickNext] = useState(false);
    const [passwordIcon, setClickPasswordIcon] = useState(true);

    const { apiField } = useSelector((state) => state.datasource)
    const dispatch = useDispatch()

    let nextButtonClick = () => {
        setClickNext(true)
    }
    let previousButtonClick = () => {
        setClickNext(false)
       
    }
    let cancelButtonClick = () => {
        setClickNext(false)
        setClickPrevious(false)
        props.cancelButtonClick()
    }
    let onPasswordClick = () =>{
        setClickPasswordIcon(!passwordIcon)
       
    }
    let getPasswordType = () =>{
        if(passwordIcon){
                return "password"
        }else{
            return "text"
        }
    }
    let returnComponent = () => {
        let rowsCount = apiField.connectors.dynamicFields.length / 2
        let rows = []
        let indexCount = 0
        for (let i = 0; i < rowsCount; i++) {
            let coulumns = []
            for (let j = 0; j < 2; j++) {
                if( apiField.connectors.dynamicFields[indexCount] == "password"){
                    coulumns.push(<Col>
                        <Input
                        required
                            autoComplete
                            description=""
                            error=""
                            icon="visibility"
                            iconAriaLabel="visibility"
                            iconClassName=""
                            id={apiField.connectors.dynamicFields[indexCount]}
                            label={dynamicLabelFromKey(apiField.connectors.dynamicFields[indexCount])}
                            labelId=""
                            maxLength="80"
                            name={apiField.connectors.dynamicFields[indexCount]}
                            onChange={(event)=>changeDetails(event)}
                            onIconClick={onPasswordClick}
                            onKeyDown={function noRefCheck() { }}
                            placeholder=""
                            size="small"
                            type={getPasswordType()}
                            value={apiField.formData[apiField.connectors.dynamicFields[indexCount]]}
                            warning=""
                        />
                        <div style={{marginBottom:"5px"}}></div>
                    </Col>)
                }else{
                    coulumns.push(<Col>
                        <Input
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
                            onChange={(event)=>changeDetails(event)}
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
                }
               
                indexCount++
            }
            rows.push(<Row>{coulumns}</Row>)
        }
        return <Grid>
            {rows}
        </Grid>
    }

    let changeDetails=(event)=>{
       
        
          dispatch( {
            type:CHANGE_DETAIL,
            payload:{
                apiField:"formData",
                field:event.target.id,
                data:event.target.value
            }
        })
    }
    return clickNext ? <Fragment><Step3 cancelButtonClick={cancelButtonClick} previousButtonClick={previousButtonClick}/></Fragment> : <Fragment>
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
                        <Button
                            danger={undefined}
                            icon="left"
                            iconName="arrow_back"
                            kind="primary"
                            onClick={ ()=>props.previousButtonClick()}
                            size="small"
                            type="button"
                        // theme="dark"
                        >
                            Previous
                        </Button>
                        <span style={{ margin: "5px" }}></span>
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
export default Step2
