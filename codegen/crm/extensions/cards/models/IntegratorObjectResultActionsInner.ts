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

import { ActionConfirmationBody } from '../models/ActionConfirmationBody';

export class IntegratorObjectResultActionsInner {
    'type': IntegratorObjectResultActionsInnerTypeEnum;
    'confirmation'?: ActionConfirmationBody;
    'httpMethod': IntegratorObjectResultActionsInnerHttpMethodEnum;
    'url': string;
    'label'?: string;
    'propertyNamesIncluded': Array<string>;
    'width': number;
    'height': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "IntegratorObjectResultActionsInnerTypeEnum",
            "format": ""
        },
        {
            "name": "confirmation",
            "baseName": "confirmation",
            "type": "ActionConfirmationBody",
            "format": ""
        },
        {
            "name": "httpMethod",
            "baseName": "httpMethod",
            "type": "IntegratorObjectResultActionsInnerHttpMethodEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
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
            "name": "propertyNamesIncluded",
            "baseName": "propertyNamesIncluded",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return IntegratorObjectResultActionsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IntegratorObjectResultActionsInnerTypeEnum = "IFRAME" ;
export type IntegratorObjectResultActionsInnerHttpMethodEnum = "CONNECT" | "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT" | "TRACE" ;

