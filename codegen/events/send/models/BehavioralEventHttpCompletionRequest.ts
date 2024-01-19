/**
 * Send Event Completions
 * HTTP API for triggering instances of custom behavioral events
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class BehavioralEventHttpCompletionRequest {
    /**
    * The time when this event occurred (if any). If this isn't set, the current time will be used
    */
    'occurredAt'?: Date;
    /**
    * Internal name of the event-type to trigger
    */
    'eventName': string;
    /**
    * User token
    */
    'utk'?: string;
    'uuid'?: string;
    /**
    * Email of visitor
    */
    'email'?: string;
    /**
    * Map of properties for the event in the format property internal name - property value
    */
    'properties'?: { [key: string]: string; };
    /**
    * The object id that this event occurred on. Could be a contact id or a visitor id.
    */
    'objectId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "occurredAt",
            "baseName": "occurredAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "string",
            "format": ""
        },
        {
            "name": "utk",
            "baseName": "utk",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
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
            "name": "objectId",
            "baseName": "objectId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BehavioralEventHttpCompletionRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

