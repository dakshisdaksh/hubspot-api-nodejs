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

import { AssociationSpecWithLabel } from '../models/AssociationSpecWithLabel';
import { HttpFile } from '../http/http';

export class MultiAssociatedObjectWithLabel {
    'toObjectId': number;
    'associationTypes': Array<AssociationSpecWithLabel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "toObjectId",
            "baseName": "toObjectId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "associationTypes",
            "baseName": "associationTypes",
            "type": "Array<AssociationSpecWithLabel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MultiAssociatedObjectWithLabel.attributeTypeMap;
    }

    public constructor() {
    }
}

