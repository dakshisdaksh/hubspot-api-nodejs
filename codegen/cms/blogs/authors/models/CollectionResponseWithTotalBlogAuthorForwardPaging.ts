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
import { ForwardPaging } from '../models/ForwardPaging';

/**
* Response object for collections of blog authors with pagination information.
*/
export class CollectionResponseWithTotalBlogAuthorForwardPaging {
    /**
    * Total number of blog authors.
    */
    'total': number;
    'paging'?: ForwardPaging;
    /**
    * Collection of blog authors.
    */
    'results': Array<BlogAuthor>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "ForwardPaging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<BlogAuthor>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseWithTotalBlogAuthorForwardPaging.attributeTypeMap;
    }

    public constructor() {
    }
}
