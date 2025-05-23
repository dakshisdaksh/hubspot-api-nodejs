/**
 * Hubdb
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ColumnRequest } from '../models/ColumnRequest';

export class HubDbTableV3Request {
    /**
    * Specifies the key value pairs of the [metadata fields](https://developers.hubspot.com/docs/cms/guides/dynamic-pages/hubdb#dynamic-pages) with the associated column IDs.
    */
    'dynamicMetaTags'?: { [key: string]: number; };
    /**
    * Specifies whether the table can be read by public without authorization
    */
    'allowPublicApiAccess'?: boolean;
    /**
    * Specifies whether the table can be used for creation of dynamic pages
    */
    'useForPages'?: boolean;
    /**
    * List of columns in the table
    */
    'columns'?: Array<ColumnRequest>;
    /**
    * Name of the table
    */
    'name': string;
    /**
    * Specifies creation of multi-level dynamic pages using child tables
    */
    'enableChildTablePages'?: boolean;
    /**
    * Label of the table
    */
    'label': string;
    /**
    * Specifies whether child tables can be created
    */
    'allowChildTables'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dynamicMetaTags",
            "baseName": "dynamicMetaTags",
            "type": "{ [key: string]: number; }",
            "format": "int32"
        },
        {
            "name": "allowPublicApiAccess",
            "baseName": "allowPublicApiAccess",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "useForPages",
            "baseName": "useForPages",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "columns",
            "baseName": "columns",
            "type": "Array<ColumnRequest>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "enableChildTablePages",
            "baseName": "enableChildTablePages",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "allowChildTables",
            "baseName": "allowChildTables",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return HubDbTableV3Request.attributeTypeMap;
    }

    public constructor() {
    }
}
