/**
 * Hubdb
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HubDbTableRowV3BatchUpdateRequest } from '../models/HubDbTableRowV3BatchUpdateRequest';

export class BatchInputHubDbTableRowV3BatchUpdateRequest {
    'inputs': Array<HubDbTableRowV3BatchUpdateRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<HubDbTableRowV3BatchUpdateRequest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputHubDbTableRowV3BatchUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
