// app.dto.ts
import { ApiProperty } from '@nestjs/swagger';

// DTO for top up account endpoint
export class TopUpDto {
    @ApiProperty({ description: 'Currency code (e.g., USD, EUR)' })
    currency: string;

    @ApiProperty({ description: 'Amount to top up' })
    amount: number;
}

// DTO for currency conversion endpoint
export class ConversionDto {
    @ApiProperty({ description: 'From currency code (e.g., USD, EUR)' })
    fromCurrency: string;

    @ApiProperty({ description: 'To currency code (e.g., USD, EUR)' })
    toCurrency: string;

    @ApiProperty({ description: 'Amount to convert' })
    amount: number;
}
