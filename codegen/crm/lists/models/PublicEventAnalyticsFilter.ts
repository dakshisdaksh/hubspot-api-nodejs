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

export class PublicEventAnalyticsFilter {
    'eventId': string;
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicEventAnalyticsFilterFilterTypeEnum;
    'operator': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventId",
            "baseName": "eventId",
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
            "name": "pruningRefineBy",
            "baseName": "pruningRefineBy",
            "type": "PublicFormSubmissionFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicEventAnalyticsFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicEventAnalyticsFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicEventAnalyticsFilterFilterTypeEnum {
    Event = 'EVENT'
}

