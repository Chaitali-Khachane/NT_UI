import { SET_API_DATA,GET_API_DATA } from "../type/home.type"
import { produce } from "immer"
import React from 'react'
const INITIAL_DATA = {
    apiField: {
        pipelineHighLevelData: {
            responseData: [],
            columnDef: [],
            hideColumns: ["entity_id"]
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
const HomeReducer = (state = INITIAL_DATA, { type, payload }) => {
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
                                filter: true,
                                cellRenderer: params => DataFormatter(header, params.value)
                            }
                        )
                    }

                }
            })

        }
        case GET_API_DATA:{
            console.log("type")
            return produce(state, (draft) => {
                let keys = Object.keys(draft.apiField[payload.apiField].responseData[0])
                for (let key of keys) {
                    let found = 0
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
                                filter: true,
                                cellRenderer: params => DataFormatter(header, params.value)
                            }
                        )
                    }

                }
            })
        }
        default: {
            console.log("Case not define", state)
            return state
        }
    }
}
export default HomeReducer