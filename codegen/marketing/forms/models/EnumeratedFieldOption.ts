/**
 * Forms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class EnumeratedFieldOption {
    /**
    * The visible label for this choice.
    */
    'label': string;
    /**
    * The value which will be submitted if this choice is selected.
    */
    'value': string;
    'description'?: string;
    /**
    * The order the choices will be displayed in.
    */
    'displayOrder': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return EnumeratedFieldOption.attributeTypeMap;
    }

    public constructor() {
    }
}
