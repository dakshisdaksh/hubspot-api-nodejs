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


export class PublicNumberPropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'operationType': PublicNumberPropertyOperationOperationTypeEnum;
    'value': number;
    'operator': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "includeObjectsWithNoValueSet",
            "baseName": "includeObjectsWithNoValueSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "PublicNumberPropertyOperationOperationTypeEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicNumberPropertyOperation.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicNumberPropertyOperationOperationTypeEnum {
    Number = 'NUMBER'
}

