/**
 * Olsberg Messaging Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { UserType } from './userType';


export interface DisplayUser { 
    /**
     * User ID
     */
    userId?: string;
    /**
     * User name to be displayed
     */
    displayName?: string;
    userType?: UserType;
}
export namespace DisplayUser {
}


