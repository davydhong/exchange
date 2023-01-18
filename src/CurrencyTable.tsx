import React from 'react';
import styled from 'styled-components';
import { ExchangeRate } from './exchangeRates';

type CurrencyTableProps = {
    currencyData: ExchangeRate[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = ({ currencyData }: CurrencyTableProps) => {

    return (
        <StyledTable>
            <thead>
                <tr>
                    <StyledTh>Country</StyledTh>
                    <StyledTh>Currency</StyledTh>
                    <StyledTh>Amount</StyledTh>
                    <StyledTh>Code</StyledTh>
                    <StyledTh>Rate</StyledTh>
                </tr>
            </thead>
            <tbody>
                {currencyData.map((data) => (
                    <StyledTr key={data.code}>
                        <StyledTd>{data.country}</StyledTd>
                        <StyledTd>{data.currency}</StyledTd>
                        <StyledTd>{data.amount}</StyledTd>
                        <StyledTd>{data.code}</StyledTd>
                        <StyledTd>{data.rate}</StyledTd>
                    </StyledTr>
                ))}
            </tbody>
        </StyledTable>
    );
};

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 30px 0;
`;

const StyledTh = styled.th`
    font-weight: bold;
    text-align: left;
    padding: 12px;
    background-color: #f5f5f5;
`;

const StyledTd = styled.td`
    padding: 12px;
    border-bottom: 1px solid #ddd;
`;

const StyledTr = styled.tr`
    &:hover {
        background-color: #f5f5f5;
    }
`;

export default CurrencyTable;
