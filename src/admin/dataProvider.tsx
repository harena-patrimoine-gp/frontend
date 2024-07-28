import axios from 'axios';
import {
    DeleteManyParams,
    DeleteManyResult,
    DeleteParams,
    DeleteResult,
    GetManyParams,
    GetManyReferenceParams,
    GetManyReferenceResult,
    GetManyResult,
    GetOneParams,
    QueryFunctionContext,
    RaRecord,
    UpdateManyParams,
    UpdateManyResult,
} from 'react-admin';
import { Patrimoine, PatrimoineBody } from './providers/gen';

const apiUrl = '/api';

const conf = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json', // Assurez-vous que le type de contenu est correct
    },
});

interface CustomGetOneParams extends GetOneParams<RaRecord> {
    idPatrimoine?: number;
    idPossession?: number;
}

const patrimoineProvider = {
    getList: async (resource: string, params: any) => {
        const { id } = params;
        let queryParams = '';

        if (resource === 'patrimoines') {
            queryParams = '/patrimoines';
        } else if (resource === 'possessions') {
            queryParams = `/patrimoines/${id}/possessions`;
        }

        try {
            const response = await conf.get(queryParams);

            if (Array.isArray(response.data)) {
                const data = response.data.map((item: any, index: number) => ({
                    ...item,
                    id: index,
                }));
                return {
                    data: data,
                    total: response.data.length,
                };
            } else if (response.data && response.data.patrimoine) {
                const item = response.data.patrimoine;
                const data = {
                    ...item,
                    id: 0,
                };
                return {
                    data: [data],
                    total: 1,
                };
            } else {
                console.error('Unexpected response structure:', response.data);
                return {
                    data: [],
                    total: 0,
                };
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                data: [],
                total: 0,
            };
        }
    },
    getOne: async (resource: string, params: CustomGetOneParams) => {
        const { idPatrimoine, idPossession } = params;
        let queryParams = '';

        if (resource === 'patrimoines') {
            queryParams = `/patrimoines/${idPatrimoine}`;
        } else if (resource === 'possessions') {
            queryParams = `/patrimoines/${idPatrimoine}/possessions/${idPossession}`;
        }

        try {
            const response = await conf.get(queryParams);
            const dataWithId = {
                ...response.data,
                id: response.data.id,
            };
            return {
                data: dataWithId,
            };
        } catch (error) {
            console.error('Error fetching data:', error);
            return {
                data: null,
            };
        }
    },
    getMany: function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    getManyReference: function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    update: async (resource: string, params: { data: Patrimoine, id: number }) => {
        const { id, data } = params;
        let queryParams = '';

        if (resource === 'patrimoines') {
            queryParams = `/patrimoines/${id}`;
        } else if (resource === 'possessions') {
            queryParams = `/patrimoines/${data.nom}/possessions/${id}`;
        }

        try {
            const response = await conf.put(queryParams, data);
            return {
                data: response.data,
            };
        } catch (error) {
            console.error('Error updating data:', error);
            return {
                data: null,
            };
        }
    },
    updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    create: async (resource: string, params: { data: PatrimoineBody }) => {
        const { data } = params;
        let queryParams = '';

        if (resource === 'patrimoines') {
            queryParams = '/patrimoines';
        } else if (resource === 'possessions') {
            queryParams = `/patrimoines/${data.nom}/possessions`;
        }

        try {
            const response = await conf.post(queryParams, data);
            const dataWithId = {
                ...response.data,
                id: response.data.id,
            };
            return {
                data: dataWithId,
            };
        } catch (error) {
            console.error('Error creating data:', error);
            return {
                data: null,
            };
        }
    },
    delete: function <RecordType extends RaRecord = any>(resource: string, params: DeleteParams<RecordType>): Promise<DeleteResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
    deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
        throw new Error('Function not implemented.');
    },
};

export default patrimoineProvider;
