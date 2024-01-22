/**
 * Public App Crm Cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Option definition for STATUS dataTypes.
*/
export class DisplayOption {
    /**
    * JSON-friendly unique name for option.
    */
    'name': string;
    /**
    * The text that will be displayed to users for this option.
    */
    'label': string;
    /**
    * The type of status.
    */
    'type': DisplayOptionTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DisplayOptionTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DisplayOption.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DisplayOptionTypeEnum {
    Default = 'DEFAULT',
    Success = 'SUCCESS',
    Warning = 'WARNING',
    Danger = 'DANGER',
    Info = 'INFO'
}

