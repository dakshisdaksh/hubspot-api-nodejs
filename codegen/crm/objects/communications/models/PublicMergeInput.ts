/**
 * Communications
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicMergeInput {
    'objectIdToMerge': string;
    'primaryObjectId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectIdToMerge",
            "baseName": "objectIdToMerge",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryObjectId",
            "baseName": "primaryObjectId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicMergeInput.attributeTypeMap;
    }

    public constructor() {
    }
}

