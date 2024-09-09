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

import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';

export class PublicPropertyAssociationInListFilter {
    'listId': string;
    'coalescingRefineBy': PublicFormSubmissionFilterCoalescingRefineBy;
    'propertyWithObjectId': string;
    'filterType': PublicPropertyAssociationInListFilterFilterTypeEnum;
    'toObjectTypeId'?: string;
    'operator': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "listId",
            "baseName": "listId",
            "type": "string",
            "format": ""
        },
        {
            "name": "coalescingRefineBy",
            "baseName": "coalescingRefineBy",
            "type": "PublicFormSubmissionFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "propertyWithObjectId",
            "baseName": "propertyWithObjectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicPropertyAssociationInListFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "toObjectTypeId",
            "baseName": "toObjectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicPropertyAssociationInListFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicPropertyAssociationInListFilterFilterTypeEnum {
    PropertyAssociation = 'PROPERTY_ASSOCIATION'
}

