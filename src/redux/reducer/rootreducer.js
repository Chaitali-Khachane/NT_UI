import { combineReducers } from "redux";
import HomeReducer from "./home.reducer";
import DataSourceReducer from "../datasource/datasource.reducer";
import DomainReducer from "../domain/domain.reducer";
import PipelineReducer from "../pipeline/pipeline.reducer";
export const reducer = combineReducers(
    {
        home: HomeReducer,
        datasource: DataSourceReducer,
        domain : DomainReducer,
        pipeline : PipelineReducer
    });