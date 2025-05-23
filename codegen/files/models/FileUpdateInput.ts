/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Object for updating files.
*/
export class FileUpdateInput {
    /**
    * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead. 
    */
    'access'?: FileUpdateInputAccessEnum;
    /**
    * FolderId where the file should be moved to. folderId and folderPath parameters cannot be set at the same time.
    */
    'parentFolderId'?: string;
    /**
    * New name for the file.
    */
    'name'?: string;
    /**
    * Folder path where the file should be moved to. folderId and folderPath parameters cannot be set at the same time.
    */
    'parentFolderPath'?: string;
    'clearExpires'?: boolean;
    /**
    * Mark whether the file should be used in new content or not.
    */
    'isUsableInContent'?: boolean;
    'expiresAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "access",
            "baseName": "access",
            "type": "FileUpdateInputAccessEnum",
            "format": ""
        },
        {
            "name": "parentFolderId",
            "baseName": "parentFolderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentFolderPath",
            "baseName": "parentFolderPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "clearExpires",
            "baseName": "clearExpires",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isUsableInContent",
            "baseName": "isUsableInContent",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return FileUpdateInput.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum FileUpdateInputAccessEnum {
    PublicIndexable = 'PUBLIC_INDEXABLE',
    PublicNotIndexable = 'PUBLIC_NOT_INDEXABLE',
    HiddenIndexable = 'HIDDEN_INDEXABLE',
    HiddenNotIndexable = 'HIDDEN_NOT_INDEXABLE',
    HiddenPrivate = 'HIDDEN_PRIVATE',
    Private = 'PRIVATE',
    HiddenSensitive = 'HIDDEN_SENSITIVE',
    Sensitive = 'SENSITIVE'
}

