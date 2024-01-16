/**
 * Tasks
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AssociatedId } from '../models/AssociatedId';
import { Paging } from '../models/Paging';

export class CollectionResponseAssociatedId {
    'paging'?: Paging;
    'results': Array<AssociatedId>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<AssociatedId>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseAssociatedId.attributeTypeMap;
    }

    public constructor() {
    }
}

