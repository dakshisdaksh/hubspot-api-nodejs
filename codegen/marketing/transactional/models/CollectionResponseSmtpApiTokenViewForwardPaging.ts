/**
 * Transactional Single Send
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
import { SmtpApiTokenView } from '../models/SmtpApiTokenView';

export class CollectionResponseSmtpApiTokenViewForwardPaging {
    'paging'?: ForwardPaging;
    'results': Array<SmtpApiTokenView>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SmtpApiTokenView>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseSmtpApiTokenViewForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}
