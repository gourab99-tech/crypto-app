import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f228b02ae1mshfbe521da066f23cp1e289fjsnd39d7547fed9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({
    url,
    headers: cryptoApiHeaders
});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;