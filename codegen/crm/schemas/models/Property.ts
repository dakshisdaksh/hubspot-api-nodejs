/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object's type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Option } from '../models/Option';
import { PropertyModificationMetadata } from '../models/PropertyModificationMetadata';
import { HttpFile } from '../http/http';

/**
* Defines a property
*/
export class Property {
    'updatedAt'?: Date;
    /**
    * When the property was created
    */
    'createdAt'?: Date;
    /**
    * When the property was archived.
    */
    'archivedAt'?: Date;
    /**
    * The internal property name, which must be used when referencing the property via the API.
    */
    'name': string;
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label': string;
    /**
    * The property data type.
    */
    'type': string;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType': string;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description': string;
    /**
    * The name of the property group the property belongs to.
    */
    'groupName': string;
    /**
    * A list of valid options for the property. This field is required for enumerated properties, but will be empty for other property types.
    */
    'options': Array<Option>;
    /**
    * The internal ID of the user who created the property in HubSpot. This field may not exist if the property was created outside of HubSpot.
    */
    'createdUserId'?: string;
    /**
    * The internal user ID of the user who updated the property in HubSpot. This field may not exist if the property was updated outside of HubSpot.
    */
    'updatedUserId'?: string;
    /**
    * If this property is related to other object(s), they'll be listed here.
    */
    'referencedObjectType'?: string;
    /**
    * The order that this property should be displayed in the HubSpot UI relative to other properties for this object type. Properties are displayed in order starting with the lowest positive integer value. A value of -1 will cause the property to be displayed **after** any positive values.
    */
    'displayOrder'?: number;
    /**
    * For default properties, true indicates that the property is calculated by a HubSpot process. It has no effect for custom properties.
    */
    'calculated'?: boolean;
    /**
    * For default properties, true indicates that the options are stored externally to the property settings.
    */
    'externalOptions'?: boolean;
    /**
    * Whether or not the property is archived.
    */
    'archived'?: boolean;
    /**
    * Whether or not the property's value must be unique. Once set, this can't be changed.
    */
    'hasUniqueValue'?: boolean;
    'hidden'?: boolean;
    /**
    * This will be true for default object properties built into HubSpot.
    */
    'hubspotDefined'?: boolean;
    /**
    * Whether the property will display the currency symbol set in the account settings.
    */
    'showCurrencySymbol'?: boolean;
    'modificationMetadata'?: PropertyModificationMetadata;
    /**
    * Whether or not the property can be used in a HubSpot form.
    */
    'formField'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date",
            "format": "date-time"
        },
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
            "type": "string",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
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
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<Option>",
            "format": ""
        },
        {
            "name": "createdUserId",
            "baseName": "createdUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedUserId",
            "baseName": "updatedUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "referencedObjectType",
            "baseName": "referencedObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "calculated",
            "baseName": "calculated",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "externalOptions",
            "baseName": "externalOptions",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasUniqueValue",
            "baseName": "hasUniqueValue",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hubspotDefined",
            "baseName": "hubspotDefined",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "showCurrencySymbol",
            "baseName": "showCurrencySymbol",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "modificationMetadata",
            "baseName": "modificationMetadata",
            "type": "PropertyModificationMetadata",
            "format": ""
        },
        {
            "name": "formField",
            "baseName": "formField",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Property.attributeTypeMap;
    }

    public constructor() {
    }
}

