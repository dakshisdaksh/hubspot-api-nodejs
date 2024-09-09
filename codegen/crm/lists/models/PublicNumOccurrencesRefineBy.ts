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


export class PublicNumOccurrencesRefineBy {
    'maxOccurrences'?: number;
    'type': PublicNumOccurrencesRefineByTypeEnum;
    'minOccurrences'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxOccurrences",
            "baseName": "maxOccurrences",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PublicNumOccurrencesRefineByTypeEnum",
            "format": ""
        },
        {
            "name": "minOccurrences",
            "baseName": "minOccurrences",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PublicNumOccurrencesRefineBy.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicNumOccurrencesRefineByTypeEnum {
    NumOccurrences = 'NUM_OCCURRENCES'
}

