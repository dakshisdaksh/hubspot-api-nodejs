/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicBoolPropertyOperation {
    'operationType': PublicBoolPropertyOperationOperationTypeEnum;
    'operator': string;
    'includeObjectsWithNoValueSet': boolean;
    'value': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "PublicBoolPropertyOperationOperationTypeEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
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
            "name": "value",
            "baseName": "value",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicBoolPropertyOperation.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicBoolPropertyOperationOperationTypeEnum {
    Bool = 'BOOL'
}

