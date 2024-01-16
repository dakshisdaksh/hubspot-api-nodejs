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
* Configuration for custom user actions on cards.
*/
export class CardActions {
    /**
    * A list of URL prefixes that will be accepted for card action URLs. If your data fetch response includes an action URL that doesn't begin with one of these values, it will result in an error and the card will not be displayed.
    */
    'baseUrls': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "baseUrls",
            "baseName": "baseUrls",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardActions.attributeTypeMap;
    }

    public constructor() {
    }
}

