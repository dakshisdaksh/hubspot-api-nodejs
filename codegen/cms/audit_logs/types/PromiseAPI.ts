import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponsePublicAuditLog } from '../models/CollectionResponsePublicAuditLog';
import { ObservableAuditLogsApi } from './ObservableAPI';

import { AuditLogsApiRequestFactory, AuditLogsApiResponseProcessor} from "../apis/AuditLogsApi";
export class PromiseAuditLogsApi {
    private api: ObservableAuditLogsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuditLogsApiRequestFactory,
        responseProcessor?: AuditLogsApiResponseProcessor
    ) {
        this.api = new ObservableAuditLogsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param [userId] Comma separated list of user ids to filter by.
     * @param [eventType] Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @param [objectType] Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     * @param [objectId] Comma separated list of object ids to filter by.
     * @param [after] Timestamp after which audit logs will be returned
     * @param [before] Timestamp before which audit logs will be returned
     * @param [limit] The number of logs to return.
     * @param [sort] The sort direction for the audit logs. (Can only sort by timestamp).
     */
    public getPageWithHttpInfo(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditLog>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(userId, eventType, objectType, objectId, after, before, limit, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns audit logs based on filters.
     * Query audit logs
     * @param [userId] Comma separated list of user ids to filter by.
     * @param [eventType] Comma separated list of event types to filter by (CREATED, UPDATED, PUBLISHED, DELETED, UNPUBLISHED).
     * @param [objectType] Comma separated list of object types to filter by (BLOG, LANDING_PAGE, DOMAIN, HUBDB_TABLE etc.)
     * @param [objectId] Comma separated list of object ids to filter by.
     * @param [after] Timestamp after which audit logs will be returned
     * @param [before] Timestamp before which audit logs will be returned
     * @param [limit] The number of logs to return.
     * @param [sort] The sort direction for the audit logs. (Can only sort by timestamp).
     */
    public getPage(userId?: Array<string>, eventType?: Array<string>, objectType?: Array<string>, objectId?: Array<string>, after?: string, before?: string, limit?: number, sort?: Array<string>, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAuditLog> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(userId, eventType, objectType, objectId, after, before, limit, sort, observableOptions);
        return result.toPromise();
    }


}



