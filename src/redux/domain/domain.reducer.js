import { Icon } from "@nt/dds-react"
import { SET_API_DATA, SET_CONNECTOR_LIST, SET_SELECTED_CONNECTOR, SET_DYNAMIC_FIELDS, CHANGE_DETAIL } from "./domain.type"
import { produce } from "immer"
import React from 'react'
const INITIAL_DATA = {
    apiField: {
        domainTableData: {
            responseData: [],
            columnDef: [],
            hideColumns: ["domain_id"]
        },
        domainDetail: {
            domainName: "",
            domainDescription: ""
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
const DomainReducer = (state = INITIAL_DATA, { type, payload }) => {
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
export default DomainReducer