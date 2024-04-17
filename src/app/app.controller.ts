

import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger'; // Import Swagger decorators
import { FxRatesService } from '../fx-rates/fx-rates.service';
import { BalancesService } from '../balances/balances.service';
import { TopUpDto, ConversionDto } from './app.dto'; // Import DTOs

@Controller()
export class AppController {
    constructor(
        private readonly fxRatesService: FxRatesService,
        private readonly balancesService: BalancesService
    ) {}

    @Post('/accounts/topup')
    @ApiOperation({ summary: 'Top up account' }) // Describe the operation
    @ApiBody({ type: TopUpDto }) // Specify request body schema
    @ApiResponse({ status: 200, description: 'Account topped up successfully' }) // Specify response
    topUpAccount(@Body() body: TopUpDto) {
        return this.balancesService.topUp(body.currency, body.amount);
    }

    @Get('/fx-rates')
    @ApiOperation({ summary: 'Get exchange rate' })
    @ApiResponse({ status: 200, description: 'Exchange rate retrieved successfully' })
    getFxRates(@Query('from') from: string, @Query('to') to: string) {
        const rate = this.fxRatesService.getRate(from, to);
        return rate ? { rate } : { error: 'Rate not available' };
    }

    @Post('/fx-conversion')
    @ApiOperation({ summary: 'Convert currency' })
    @ApiBody({ type: ConversionDto })
    @ApiResponse({ status: 200, description: 'Currency conversion successful' })
    convertCurrency(@Body() body: ConversionDto) {
        return this.balancesService.convert(body.fromCurrency, body.toCurrency, body.amount);
    }

    @Get('/accounts/balance')
    @ApiOperation({ summary: 'Get account balances' })
    @ApiResponse({ status: 200, description: 'Account balances retrieved successfully' })
    getBalances() {
        return this.balancesService.getBalances();
    }
}



















// // src/app.controller.ts
// import { Controller, Post, Get, Body, Query } from '@nestjs/common';
// import { FxRatesService } from '../fx-rates/fx-rates.service';
// import { BalancesService } from '../balances/balances.service';

// @Controller()
// export class AppController {
//     constructor(
//         private readonly fxRatesService: FxRatesService,
//         private readonly balancesService: BalancesService
//     ) {}

//     @Post('/accounts/topup')
//     topUpAccount(@Body() body: { currency: string, amount: number }) {
//         return this.balancesService.topUp(body.currency, body.amount);
//     }

//     @Get('/fx-rates')
//     getFxRates(@Query('from') from: string, @Query('to') to: string) {
//         const rate = this.fxRatesService.getRate(from, to);
//         return rate ? { rate } : { error: 'Rate not available' };
//     }

//     @Post('/fx-conversion')
//     convertCurrency(@Body() body: { fromCurrency: string, toCurrency: string, amount: number }) {
//         return this.balancesService.convert(body.fromCurrency, body.toCurrency, body.amount);
//     }

//     @Get('/accounts/balance')
//     getBalances() {
//         return this.balancesService.getBalances();
//     }
// }
