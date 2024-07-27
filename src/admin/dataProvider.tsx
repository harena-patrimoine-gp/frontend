import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from 'react-admin';
import axios from 'axios';
import { Patrimoine } from '../gen';

const apiUrl = 'https://virtserver.swaggerhub.com/tovomihajajonathanRAJAONARISON/harena/1.0.0';
const conf = axios.create({ baseURL: apiUrl });

const patrimoineProvider: DataProvider = {
    getList: async (resource:string ,params: any) => {
        const{id} = params
        let queryParams = ''
        if (resource === 'patrimoines'){
            queryParams += `/${resource}`
        }else if(resource === 'possessions'){
            queryParams += `/patrimoine/?nom_patrimoine=${id}/${resource}`
        }
        const response = await conf.get(`${apiUrl}${queryParams}`);
        const data = response.data.data.map((item: any, index: number) => ({
            ...item,
            id: index, 
        }));
        return {
            data: data,
            total: response.data.length,
        };
    },
    getOne: async (resource:string,params: GetOneParams<RaRecord>) => {
        const {id} = params
        const response = await conf.get(`${apiUrl}/${resource}/?nom=${id}`)
        const dataWithId = {
            ...response.data,
            id: response.data.id || id
        }
        return {
            data:dataWithId,
        };
    },
    getMany: function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    getManyReference: function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    update: async (resource:string,params:{data:Patrimoine}) => {
        const {data} = params;
        const response = await conf.put(`${resource}`,data);
        return{
            data:response.data.data
        }
    },
    updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    create:  async (resource:string,params:{data:Patrimoine}) => {
        const {data} = params
        const response = await conf.put(`${resource}`,data);
        const dataWithId = {
            ...response.data,
            id: response.data.id
        }
        return{
            data:dataWithId
        }
    },
    delete: function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    }
};

export default patrimoineProvider;
