/**
 * Notes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValueWithTimestamp } from './ValueWithTimestamp';
import { HttpFile } from '../http/http';

export class SimplePublicObject {
    'id': string;
    'properties': { [key: string]: string; };
    'propertiesWithHistory'?: { [key: string]: Array<ValueWithTimestamp>; };
    'createdAt': Date;
    'updatedAt': Date;
    'archived'?: boolean;
    'archivedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "propertiesWithHistory",
            "baseName": "propertiesWithHistory",
            "type": "{ [key: string]: Array<ValueWithTimestamp>; }",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObject.attributeTypeMap;
    }

    public constructor() {
    }
}
