/**
 * Products
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ForwardPaging } from '../models/ForwardPaging';
import { SimplePublicObject } from '../models/SimplePublicObject';

export class CollectionResponseWithTotalSimplePublicObjectForwardPaging {
    'total': number;
    'paging'?: ForwardPaging;
    'results': Array<SimplePublicObject>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SimplePublicObject>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseWithTotalSimplePublicObjectForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}

