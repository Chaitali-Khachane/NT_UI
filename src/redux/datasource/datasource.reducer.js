import { SET_API_DATA, SET_CONNECTOR_LIST, SET_SELECTED_CONNECTOR, SET_DYNAMIC_FIELDS, CHANGE_DETAIL } from "./datasource.type"
import { produce } from "immer"
import React from 'react'
import { Icon } from "@nt/dds-react"

const INITIAL_DATA = {
    apiField: {
        datasourceTableData: {
            responseData: [],
            columnDef: [],
            hideColumns: ["source_id"]
        },
        connectors: {
            list: [],
            selectedConnector: {},
            dynamicFields: [],
           
        },
        formData:{
            sourceName: "",
            sourceDescription: ""
        }
    }
}
let DataFormatter = (field, value) => {

    if (field.toLowerCase().indexOf("status") != -1) {
        if (value.toLowerCase() == "failed") {
            return <span style={{ color: "red", fontWeight: "400px" }}>{value}</span>
        } else if (value.toLowerCase() == "success") {
            return <span style={{ color: "green", fontWeight: "400px" }}>{value}</span>
        } else {
            return <span>{value}</span>
        }
    } else {
        return value
    }

}
const DataSourceReducer = (state = INITIAL_DATA, { type, payload }) => {
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
                        cellRenderer: ()=>{return <Icon
                            ariaHidden
                            name="delete"
                            type=""
                          /> }
                    }
                )
            })

        }
        case SET_CONNECTOR_LIST: {
            return produce(state, (draft) => {
                draft.apiField[payload.apiField].list = payload.data
            })
        }
        case SET_SELECTED_CONNECTOR: {
            return produce(state, (draft) => {
                draft.apiField[payload.apiField].list.filter((value) => {
                    console.log(value.connector_name, payload.data)
                    if (value.connector_name == payload.data) {
                        draft.apiField[payload.apiField].selectedConnector = value
                    }
                })
            })
        }
        case SET_DYNAMIC_FIELDS: {
            return produce(state, (draft) => {
                
                draft.apiField[payload.apiField].dynamicFields = payload.data
                draft.apiField[payload.apiField].dynamicFields.filter((value)=>{
                    draft.apiField.formData[value]=""
                })
                
            })
        }
        // draft.apiField[payload.apiField].selectedConnector = payload.data
        case CHANGE_DETAIL: {
           
            return produce(state, (draft) => {
                draft.apiField[payload.apiField][payload.field] = payload.data
            }

            )
        }
        default: {
            console.log("Case not define", state)
            return state
        }
    }
}
export default DataSourceReducer