/**
 * Authors
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ErrorDetail } from '../models/ErrorDetail';

/**
* Model definition for a standard error.
*/
export class StandardError {
    /**
    * Error subcategory.
    */
    'subCategory'?: any;
    /**
    * Error context.
    */
    'context': { [key: string]: Array<string>; };
    /**
    * Error links.
    */
    'links': { [key: string]: string; };
    /**
    * Error ID.
    */
    'id'?: string;
    /**
    * Error category.
    */
    'category': string;
    /**
    * Error message.
    */
    'message': string;
    /**
    * List of error details.
    */
    'errors': Array<ErrorDetail>;
    /**
    * Error status.
    */
    'status': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "subCategory",
            "baseName": "subCategory",
            "type": "any",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorDetail>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StandardError.attributeTypeMap;
    }

    public constructor() {
    }
}
