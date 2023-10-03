import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input } from '@nt/dds-react';
import { Grid, Row, Col } from '@nt/dds-react';
import { UtilityBar } from '@nt/dds-react';
import { Dropdown } from '@nt/dds-react';
import Button from '@nt/dds-react/core/Button'
import { get_RWS_schemaDiscovery } from '../../../redux/pipeline/pipeline.action'
import DataGrid from '@nt/dds-datagrid';
import { Checkbox } from '@nt/dds-react';
import { Modal } from '@nt/dds-react';
import { Switch, Label } from '@nt/dds-react';

const DIStep2 = (props) => {
    const dispatch = useDispatch()
    const { apiField } = useSelector((state) => state.pipeline)
    const [addPartitionFlag, setAddPartitionFlag] = useState(false)
    let addPartitionClick = () => {
        setAddPartitionFlag(true)
    }
    let cancelButtonClick = () => {
        props.cancelButtonClick()
    }
    let previousButtonClick = () => {
        props.previousButtonClick()
    }
    let getTargetDropdownOption = () => {
        let option = [
            { label: "binary", value: "binary" },
            { label: "string", value: "string" },
            { label: "timestamp", value: "timestamp" },
            { label: "boolean", value: "boolean" },
            { label: "smallint", value: "smallint" },
            { label: "int", value: "int" },
            { label: "float", value: "float" },
            { label: "long", value: "long" },
            { label: "double", value: "double" }
        ]
        return option
    }
    let getColumnDef = () => {
        let colDef = [
            {
                field: "name",
                headerName: "Column Name"
            },
            {
                field: "inferred_data_type",
                headerName: "Inferred DataType"
            },
            {
                field: "column_data_type",
                headerName: "Target DataType",
                cellRenderer: params => {
                    console.log(params)
                    return <Dropdown
                        alignRight={false}
                        defaultText="Select..."
                        description=""
                        disabled={false}
                        dropUp={false}
                        error=""
                        iconNameClose="arrow_drop_up"
                        iconNameOpen="arrow_drop_down"
                        id="sourceName"
                        label=""
                        nativeOnMobile
                        // onChange={(event) => changeDropdownDetails(event, "sourceName")}
                        open={false}
                        optional={undefined}
                        // options = {[]}
                        options={getTargetDropdownOption()
                        }
                        panelHeight={200}
                        parentElementId="root"
                        required
                        searchable={false}
                        size="small"
                        value={params.value}
                        virtualScroll={false}
                    />



                }
            },
            {
                field: "isPrimary",
                headerName: "Primary Key",
                cellRenderer: params => {
                    return <div style={{ textAlign: "center" }}><Checkbox
                        checked={params.isPrimary}
                        disabled={undefined}
                        error={null}
                        id="checkbox_1"
                        name="Option"
                        onChange={function noRefCheck() { }}
                        readOnly={undefined}
                        value=""
                    /></div>
                }
            }
            // ,
            // {
            //     field: "",
            //     headerName: "Partition",
            //     cellRenderer: params => {
            //         return <div style={{ textAlign: "center" }}><Checkbox
            //             checked={undefined}
            //             disabled={undefined}
            //             error={null}
            //             id="checkbox_1"
            //             name="Option"
            //             onChange={function noRefCheck() { }}
            //             readOnly={undefined}
            //             value=""
            //         /></div>
            //     }

            // }
        ]

        return colDef
    }
    useEffect(() => {
        dispatch(get_RWS_schemaDiscovery())
    }, [])
    return <Fragment>
        <Modal
            closeTimeoutMS={0}
            containerFooterProps={{
                buttonArrangement: 'fullWidth',
                primaryAction: {
                    label: 'Ok',
                    onClick: function noRefCheck() { }
                },
                secondaryAction: {
                    label: 'Cancel',
                    onClick: () => { setAddPartitionFlag(false) }
                }
            }}
            containerHeaderProps={{
                heading: 'Partition Ordering',
                onClose: () => { setAddPartitionFlag(false) }
            }}
            fullscreenOnMobile
            id="Modal_Id1"
            isOpen={addPartitionFlag}
            nextVersion
            onAfterOpen={function noRefCheck() { }}
            rootAppElement="#app, #root"
            shouldCloseOnOverlayClick
            showCloseButton
            size="small"
        >

        </Modal>
        <Card>
            <UtilityBar
                appTitle={<span style={{ fontWeight: "800", fontSize: "14px" }}>Step2:Review and create target schema</span>}
                theme="light"
            />
            <DataGrid
                pagination={true}
                paginationPageSize={10}
                rowData={apiField.step2FormData.schemaTable}
                columnDefs={getColumnDef()}
                defaultColDef={{
                    flex: 1,
                    minWidth: 150,
                    filter: true
                }}
                gridHeight="60vh"
            //   cacheQuickFilter={true}
            //   onGridReady={onGridReady}
            />
            <Grid>
                <Row>
                    <Col xs={2}>
                        <span>Partition Columns</span>
                    </Col>
                    <Col xs={7}>
                        <div style={{ border: "1px solid grey" }}></div>
                    </Col>
                    <Col xs={3}>
                        <Button
                            danger={undefined}
                            icon="none"
                            iconName=""
                            kind="primary"
                            onClick={addPartitionClick}
                            size="small"
                            type="button"

                        >
                            Add Partition
                        </Button>
                    </Col>
                </Row>
            </Grid>
            <>
                <Grid>
                    <Row>
                        <Col xs={2}>
                            <Label
                                className="marginbottom-md"
                                id="switch_01_Label"
                                name="switch_01"
                                text="Enable Incremental"
                            />
                        </Col>
                        <Col xs={10}>
                            <Switch
                                ariaLabelledBy="switch_01_Label"
                                id="switch_01"
                                isOn={false}
                                offText="OFF"
                                onChange={function noRefCheck() { }}
                                onText="ON"
                                stateTextPosition="right"
                            />
                        </Col>

                    </Row>
                </Grid>


            </>

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