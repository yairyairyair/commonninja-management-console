// import { stringify } from 'query-string';
import { fetchUtils } from 'ra-core';

const commonNinjaServerProvider = {
    getList: (resource, params) => Promise,
    getOne: (resource, params) => Promise,
    getMany: (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create: (resource, params) => Promise,
    update: (resource, params) => Promise,
    updateMany: (resource, params) => Promise,
    delete: (resource, params) => Promise,
    deleteMany: (resource, params) => Promise,
}

const hey = (
    apiUrl,
    httpClient = fetchUtils.fetchJson,
) => ({
    getList: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;
        // const filter = params.filter;

        // const rangeStart = (page - 1) * perPage;
        // const rangeEnd = page * perPage - 1;

        // const query = {
        //     page,
        //     limit: perPage,
        //     // sort: JSON.stringify([field, order]),
        //     // range: JSON.stringify([rangeStart, rangeEnd]),
        //     // filter: JSON.stringify(params.filter),
        // };
        
        const url = `${apiUrl}/${resource}`;

        return httpClient(url).then(({ json }) => {
            const total = json.data.items.length;
            return {
                data: json.data.items,
                total,
            };
        });
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json.data,
        })),

    getMany: (resource, params) => {
        // const query = {
        //     filter: JSON.stringify({ id: params.ids }),
        // };
        const url = `${apiUrl}/${resource}`;
        return httpClient(url).then(({ json }) => ({ data: json.data }));
    },

    getManyReference: (resource, params) => {
        // const { page, perPage } = params.pagination;
        // const { field, order } = params.sort;

        // const rangeStart = (page - 1) * perPage;
        // const rangeEnd = page * perPage - 1;

        // const query = {
        //     page,
        //     limit: perPage,
        //     // sort: JSON.stringify([field, order]),
        //     // range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        //     // filter: JSON.stringify({
        //     //     ...params.filter,
        //     //     [params.target]: params.id,
        //     // }),
        // };

        const url = `${apiUrl}/${resource}`;

        return httpClient(url).then(({ json }) => {
            const total = json.data.items.length;
            return {
                data: json,
                total,
            };
        });
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json.data })),

    // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
    updateMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'PUT',
                    body: JSON.stringify(params.data),
                })
            )
        ).then(responses => ({ data: responses.map(({ json }) => json.data.id) })),

    create: (resource, params) => {
        const images = params.data.images || [];
        const imagesSrc = images.map(image => image.src);
        const normalizedImagesSrc = imagesSrc.length ? imagesSrc : undefined;
        
        return httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify({ ...params.data, images: normalizedImagesSrc }),
        }).then(({ json }) => ({ data: json.data }))
    },

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'text/plain',
            }),
        }).then(({ json }) => ({ data: json.data })),

    // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
    deleteMany: (resource, params) =>
        Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${resource}/${id}`, {
                    method: 'DELETE',
                    headers: new Headers({
                        'Content-Type': 'text/plain',
                    }),
                })
            )
        ).then(responses => ({
            data: responses.map(({ json }) => json.data.id),
        })),
});

export default hey;

export {
    commonNinjaServerProvider,
};