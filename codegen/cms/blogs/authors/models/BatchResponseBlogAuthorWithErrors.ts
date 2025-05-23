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

import { BlogAuthor } from '../models/BlogAuthor';
import { StandardError } from '../models/StandardError';

/**
* Response object for batch operations on blog authors with errors.
*/
export class BatchResponseBlogAuthorWithErrors {
    /**
    * Time of batch operation completion.
    */
    'completedAt': Date;
    /**
    * Number of errors.
    */
    'numErrors'?: number;
    /**
    * Time of batch operation request.
    */
    'requestedAt'?: Date;
    /**
    * Time of batch operation start.
    */
    'startedAt': Date;
    /**
    * Links associated with batch operation.
    */
    'links'?: { [key: string]: string; };
    /**
    * Results of batch operation.
    */
    'results': Array<BlogAuthor>;
    /**
    * Errors in batch operation.
    */
    'errors'?: Array<StandardError>;
    /**
    * Status of batch operation.
    */
    'status': BatchResponseBlogAuthorWithErrorsStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "numErrors",
            "baseName": "numErrors",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<BlogAuthor>",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<StandardError>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseBlogAuthorWithErrorsStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseBlogAuthorWithErrors.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum BatchResponseBlogAuthorWithErrorsStatusEnum {
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    Canceled = 'CANCELED',
    Complete = 'COMPLETE'
}

