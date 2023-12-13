/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';
import { PublicPropertyAssociationFilterBranchFiltersInner } from '../models/PublicPropertyAssociationFilterBranchFiltersInner';

export class PublicAndFilterBranch {
    'filterBranchType': PublicAndFilterBranchFilterBranchTypeEnum;
    'filterBranches': Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>;
    'filters': Array<PublicPropertyAssociationFilterBranchFiltersInner>;
    'filterBranchOperator': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterBranchType",
            "baseName": "filterBranchType",
            "type": "PublicAndFilterBranchFilterBranchTypeEnum",
            "format": ""
        },
        {
            "name": "filterBranches",
            "baseName": "filterBranches",
            "type": "Array<PublicPropertyAssociationFilterBranchFilterBranchesInner>",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<PublicPropertyAssociationFilterBranchFiltersInner>",
            "format": ""
        },
        {
            "name": "filterBranchOperator",
            "baseName": "filterBranchOperator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAndFilterBranch.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicAndFilterBranchFilterBranchTypeEnum = "AND" ;
