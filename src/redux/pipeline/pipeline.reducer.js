import { Icon } from "@nt/dds-react"
import { SET_API_DATA, SET_PIPELINE_LIST, CHANGE_DETAIL, SET_DATA_SOURCE_API_DATA, SET_SOURCE_TABLE_API_DATA,SET_DOMAIN_LIST,SET_TABLE_SCHEMA_LIST } from "./pipeline.type"
import { produce } from "immer"
import React from 'react'
const INITIAL_DATA = {
    apiField: {
        pipelineTableData: {
            responseData: [],
            columnDef: [],
            pipelineList: [],
            hideColumns: ["entity_id", "domain_id", "source_type", "source_id", "source_name", "cron_schedule", "pipeline_id", "pipeline_name", "created_date", "last_modified_date", "user_id", "user_email", "entity_system_name"]
        },
        apiData: {
            sourceList: [],
            sourceTableList: [],
            domainList:[],
            schemaDiscoveryList:[]
        },
        step1FormData: {
            sourceId:"",
            sourceType: "",
            sourceName: "",
            sourceObject: "",
            domain:"",
            entity:"",
            entityDescription:"",
            businessTag:""
        },
        step2FormData: {
            schemaTable:[]
        }

    }
}
let DataFormatter = (field, value) => {
    //alert(field)
    //alert(field.toLowerCase())
    if (field.toLowerCase().indexOf("status") != -1) {
        //alert("in if")
        if (value.toLowerCase() == "failed") {
            return <span style={{ color: "red", fontWeight: "400px" }}>{value}</span>
        } else if (value.toLowerCase() == "success") {
            return <span style={{ color: "green", fontWeight: "400px" }}>{value}</span>
        } else {
            return <span>{value}</span>
        }
    } else if (field.toLowerCase() == "is active") {
        //alert("in else if")
        if (value) {
            return <span style={{ color: "green", fontWeight: "400px" }}>Active</span>
        } else {
            <span style={{ color: "red", fontWeight: "400px" }}>Not Active</span>
        }
    } else {
        //alert("in else")
        return value
    }

}
const PipelineReducer = (state = INITIAL_DATA, { type, payload }) => {
    console.log(type)



    switch (type) {
        case SET_API_DATA: {
            return produce(state, (draft) => {
                let found = 0
                draft.apiField[payload.apiField].columnDef = []
                draft.apiField[payload.apiField].responseData = payload.data
                let keys = Object.keys(payload.data[0])
                for (let key of keys) {
                    found = 0
                    for (let hd of draft.apiField[payload.apiField].hideColumns) {
                        if (hd == key) {
                            found = 1
                        }
                    }
                    if (found == 0) {
                        let headerArray = key.split("_")
                        let upperCaseArray = []
                        headerArray.filter((value) => {
                            // console.log(value[0].toUpperCase() + value.slice(1))
                            upperCaseArray.push(value[0].toUpperCase() + value.slice(1))
                        })
                        console.log(upperCaseArray)
                        let header = upperCaseArray.join(" ")
                        draft.apiField[payload.apiField].columnDef.push(
                            {
                                field: key,
                                headerName: header,
                                cellRenderer: params => DataFormatter(header, params.value)
                            }
                        )

                    }

                }
                draft.apiField[payload.apiField].columnDef.push(
                    {
                        field: "action",
                        headerName: "Action",
                        cellRenderer: () => {
                            return <Icon
                                ariaHidden
                                name="visibility"
                                type=""
                            />
                        }
                    }
                )
            })

        }

        // draft.apiField[payload.apiField].selectedConnector = payload.data
        case CHANGE_DETAIL: {

            return produce(state, (draft) => {
                draft.apiField[payload.apiField][payload.field] = payload.data
                if(payload.field == "sourceObject"){
                    var afterDot = payload.data.substr( payload.data.indexOf('.') + 1 );
                    // alert(afterDot.toLowerCase())
                    draft.apiField[payload.apiField].entity=afterDot.toLowerCase()
                }
            }

            )
        }
        case SET_PIPELINE_LIST: {
            return produce(state, (draft) => {
                draft.apiField[payload.apiField].pipelineList = payload.data
            })
        }
        case SET_DATA_SOURCE_API_DATA: {
            return produce(state, (draft) => {
                draft.apiField.step1FormData.sourceType = "RDBMS"
                console.log("Data display")
                console.log(payload.data)
                draft.apiField[payload.apiField].sourceList.length = 0
                payload.data.map((valueObj) => {
                    if (valueObj.source_type == "database_azuresql" || valueObj.source_type == "database_snowflake") {
                        draft.apiField[payload.apiField].sourceList.push(valueObj)
                    }
                })
            })
        }
        case SET_SOURCE_TABLE_API_DATA: {
            return produce(state, (draft) => {
                draft.apiField[payload.apiField].sourceTableList = payload.data
            })
        }
        case SET_DOMAIN_LIST:{
            return produce(state, (draft) => {
                draft.apiField[payload.apiField].domainList = payload.data
            })
        }
        case SET_TABLE_SCHEMA_LIST:{
            return produce(state, (draft) => {
                draft.apiField[payload.apiField].schemaDiscoveryList = payload.data
                let keys = Object.keys(payload.data)
                
                draft.apiField.step2FormData.schemaTable.length = 0
                for(let i=0;i<keys.length;i++){
                    let schemObj = {}
                    Object.assign(schemObj,{isPrimary:false})
                    Object.assign(schemObj,{name:keys[i]})
                    Object.assign(schemObj,payload.data[keys[i]])
                    draft.apiField.step2FormData.schemaTable.push(schemObj)
                }
               
            })
        }
        default: {
            console.log("Case not define", state)
            return state
        }
    }
}
export default PipelineReducer