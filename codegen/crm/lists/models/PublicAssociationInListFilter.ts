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

import { PublicEventAnalyticsFilterCoalescingRefineBy } from '../models/PublicEventAnalyticsFilterCoalescingRefineBy';

export class PublicAssociationInListFilter {
    'filterType': PublicAssociationInListFilterFilterTypeEnum;
    'coalescingRefineBy': PublicEventAnalyticsFilterCoalescingRefineBy;
    'operator': string;
    'listId': number;
    'toObjectTypeId'?: string;
    'associationTypeId': number;
    'associationCategory': string;
    'toObjectType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicAssociationInListFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "coalescingRefineBy",
            "baseName": "coalescingRefineBy",
            "type": "PublicEventAnalyticsFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "listId",
            "baseName": "listId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "toObjectTypeId",
            "baseName": "toObjectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "associationTypeId",
            "baseName": "associationTypeId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "associationCategory",
            "baseName": "associationCategory",
            "type": "string",
            "format": ""
        },
        {
            "name": "toObjectType",
            "baseName": "toObjectType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociationInListFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicAssociationInListFilterFilterTypeEnum = "ASSOCIATION" ;
