/**
 * CMS Performance
 * Use these endpoints to get a time series view of your website's performance.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PerformanceView } from '../models/PerformanceView';

export class PublicPerformanceResponse {
    'path'?: string;
    'period'?: PublicPerformanceResponsePeriodEnum;
    'startInterval': number;
    'data': Array<PerformanceView>;
    'domain'?: string;
    'interval': PublicPerformanceResponseIntervalEnum;
    'endInterval': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "period",
            "baseName": "period",
            "type": "PublicPerformanceResponsePeriodEnum",
            "format": ""
        },
        {
            "name": "startInterval",
            "baseName": "startInterval",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<PerformanceView>",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "PublicPerformanceResponseIntervalEnum",
            "format": ""
        },
        {
            "name": "endInterval",
            "baseName": "endInterval",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return PublicPerformanceResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicPerformanceResponsePeriodEnum = "ONE_MINUTE" | "FIVE_MINUTES" | "TEN_MINUTES" | "FIFTEEN_MINUTES" | "THIRTY_MINUTES" | "ONE_HOUR" | "FOUR_HOURS" | "TWELVE_HOURS" | "ONE_DAY" | "ONE_WEEK" ;
export type PublicPerformanceResponseIntervalEnum = "ONE_MINUTE" | "FIVE_MINUTES" | "TEN_MINUTES" | "FIFTEEN_MINUTES" | "THIRTY_MINUTES" | "ONE_HOUR" | "FOUR_HOURS" | "TWELVE_HOURS" | "ONE_DAY" | "ONE_WEEK" ;

