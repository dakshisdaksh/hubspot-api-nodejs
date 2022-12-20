/**
 * Custom Workflow Actions
 * Create custom workflow actions
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ActionFunctionIdentifier } from '../models/ActionFunctionIdentifier';
import { ActionLabels } from '../models/ActionLabels';
import { ExtensionActionDefinitionPatchInputFieldDependenciesInner } from '../models/ExtensionActionDefinitionPatchInputFieldDependenciesInner';
import { InputFieldDefinition } from '../models/InputFieldDefinition';
import { ObjectRequestOptions } from '../models/ObjectRequestOptions';
import { HttpFile } from '../http/http';

/**
* Configuration for custom workflow action.
*/
export class ExtensionActionDefinition {
    /**
    * The ID of the custom action.
    */
    'id': string;
    'revisionId': string;
    /**
    * A list of functions associated with the custom workflow action.
    */
    'functions': Array<ActionFunctionIdentifier>;
    /**
    * The URL that will accept an HTTPS request each time workflows executes the custom action.
    */
    'actionUrl': string;
    /**
    * Whether this custom action is published to customers.
    */
    'published': boolean;
    /**
    * The date that this custom action was archived, if the custom action is archived.
    */
    'archivedAt'?: number;
    /**
    * The list of input fields to display in this custom action.
    */
    'inputFields': Array<InputFieldDefinition>;
    'objectRequestOptions'?: ObjectRequestOptions;
    /**
    * A list of dependencies between the input fields. These configure when the input fields should be visible.
    */
    'inputFieldDependencies'?: Array<ExtensionActionDefinitionPatchInputFieldDependenciesInner>;
    /**
    * The user-facing labels for the custom action.
    */
    'labels': { [key: string]: ActionLabels; };
    /**
    * The object types that this custom action supports.
    */
    'objectTypes': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "revisionId",
            "baseName": "revisionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "functions",
            "baseName": "functions",
            "type": "Array<ActionFunctionIdentifier>",
            "format": ""
        },
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "published",
            "baseName": "published",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "inputFields",
            "baseName": "inputFields",
            "type": "Array<InputFieldDefinition>",
            "format": ""
        },
        {
            "name": "objectRequestOptions",
            "baseName": "objectRequestOptions",
            "type": "ObjectRequestOptions",
            "format": ""
        },
        {
            "name": "inputFieldDependencies",
            "baseName": "inputFieldDependencies",
            "type": "Array<ExtensionActionDefinitionPatchInputFieldDependenciesInner>",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "{ [key: string]: ActionLabels; }",
            "format": ""
        },
        {
            "name": "objectTypes",
            "baseName": "objectTypes",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ExtensionActionDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}

