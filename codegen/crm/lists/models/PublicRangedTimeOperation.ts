/**
 * Lists
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicTimePointOperationTimePoint } from '../models/PublicTimePointOperationTimePoint';

export class PublicRangedTimeOperation {
    'upperBoundEndpointBehavior'?: string;
    'includeObjectsWithNoValueSet': boolean;
    'upperBoundTimePoint': PublicTimePointOperationTimePoint;
    'propertyParser'?: string;
    'operationType': string;
    'type': PublicRangedTimeOperationTypeEnum;
    'lowerBoundEndpointBehavior'?: string;
    'operator': string;
    'lowerBoundTimePoint': PublicTimePointOperationTimePoint;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "upperBoundEndpointBehavior",
            "baseName": "upperBoundEndpointBehavior",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeObjectsWithNoValueSet",
            "baseName": "includeObjectsWithNoValueSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "upperBoundTimePoint",
            "baseName": "upperBoundTimePoint",
            "type": "PublicTimePointOperationTimePoint",
            "format": ""
        },
        {
            "name": "propertyParser",
            "baseName": "propertyParser",
            "type": "string",
            "format": ""
        },
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PublicRangedTimeOperationTypeEnum",
            "format": ""
        },
        {
            "name": "lowerBoundEndpointBehavior",
            "baseName": "lowerBoundEndpointBehavior",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "lowerBoundTimePoint",
            "baseName": "lowerBoundTimePoint",
            "type": "PublicTimePointOperationTimePoint",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicRangedTimeOperation.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicRangedTimeOperationTypeEnum {
    TimeRanged = 'TIME_RANGED'
}

