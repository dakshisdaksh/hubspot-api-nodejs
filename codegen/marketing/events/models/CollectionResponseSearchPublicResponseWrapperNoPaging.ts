/**
 * Marketing Events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SearchPublicResponseWrapper } from '../models/SearchPublicResponseWrapper';

export class CollectionResponseSearchPublicResponseWrapperNoPaging {
    'results': Array<SearchPublicResponseWrapper>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SearchPublicResponseWrapper>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseSearchPublicResponseWrapperNoPaging.attributeTypeMap;
    }

    public constructor() {
    }
}
