import React from 'react';
import styled from 'styled-components';
import { ExchangeRate } from './exchangeRates';


type CurrencyTableProps = {
    currencyData: ExchangeRate[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currencyData }: CurrencyTableProps) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Currency</th>
                    <th>Amount</th>
                    <th>Code</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {currencyData.map((data) => (
                    <tr key={data.code}>
                        <td>{data.country}</td>
                        <td>{data.currency}</td>
                        <td>{data.amount}</td>
                        <td>{data.code}</td>
                        <td>{data.rate}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    thead {
        font-weight: bold;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }
`;

export default CurrencyTable;
