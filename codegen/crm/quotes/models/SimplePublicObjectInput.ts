/**
 * Quotes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SimplePublicObjectInput {
    'objectWriteTraceId'?: string;
    'properties': { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectWriteTraceId",
            "baseName": "objectWriteTraceId",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObjectInput.attributeTypeMap;
    }

    public constructor() {
    }
}

