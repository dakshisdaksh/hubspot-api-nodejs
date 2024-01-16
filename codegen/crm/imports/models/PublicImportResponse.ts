/**
 * Imports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImportTemplate } from '../models/ImportTemplate';
import { PublicImportMetadata } from '../models/PublicImportMetadata';

/**
* A current summary of the import, whether complete or not.
*/
export class PublicImportResponse {
    'importTemplate'?: ImportTemplate;
    'createdAt': Date;
    'metadata': PublicImportMetadata;
    'importRequestJson'?: any;
    'importSource'?: PublicImportResponseImportSourceEnum;
    'importName'?: string;
    /**
    * The status of the import.
    */
    'state': PublicImportResponseStateEnum;
    'id': string;
    /**
    * Whether or not the import is a list of people disqualified from receiving emails.
    */
    'optOutImport': boolean;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "importTemplate",
            "baseName": "importTemplate",
            "type": "ImportTemplate",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "PublicImportMetadata",
            "format": ""
        },
        {
            "name": "importRequestJson",
            "baseName": "importRequestJson",
            "type": "any",
            "format": ""
        },
        {
            "name": "importSource",
            "baseName": "importSource",
            "type": "PublicImportResponseImportSourceEnum",
            "format": ""
        },
        {
            "name": "importName",
            "baseName": "importName",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "PublicImportResponseStateEnum",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "optOutImport",
            "baseName": "optOutImport",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return PublicImportResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicImportResponseImportSourceEnum = "API" | "CRM_UI" | "IMPORT" | "MOBILE_ANDROID" | "MOBILE_IOS" | "SALESFORCE" ;
export type PublicImportResponseStateEnum = "STARTED" | "PROCESSING" | "DONE" | "FAILED" | "CANCELED" | "DEFERRED" | "REVERTED" ;

