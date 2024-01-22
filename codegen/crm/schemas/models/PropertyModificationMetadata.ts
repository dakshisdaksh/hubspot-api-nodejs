/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object\'s type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PropertyModificationMetadata {
    /**
    * 
    */
    'readOnlyOptions'?: boolean;
    /**
    * 
    */
    'readOnlyValue': boolean;
    /**
    * 
    */
    'readOnlyDefinition': boolean;
    /**
    * 
    */
    'archivable': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "readOnlyOptions",
            "baseName": "readOnlyOptions",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readOnlyValue",
            "baseName": "readOnlyValue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "readOnlyDefinition",
            "baseName": "readOnlyDefinition",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivable",
            "baseName": "archivable",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PropertyModificationMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}

