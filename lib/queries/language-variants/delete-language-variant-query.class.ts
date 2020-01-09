import { Observable } from 'rxjs';

import { IManagementClientConfig } from '../../config';
import { Identifiers } from '../../models';
import { BaseResponses } from '../../responses';
import { ContentManagementQueryService } from '../../services';
import { BaseQuery } from '../base-query';

export class DeleteLanguageVariantQuery extends BaseQuery<BaseResponses.EmptyContentManagementResponse> {
    constructor(
        protected config: IManagementClientConfig,
        protected queryService: ContentManagementQueryService,
        public contentItemIdentifier: Identifiers.ContentItemIdentifier,
        public languageIdentifier: Identifiers.LanguageIdentifier
    ) {
        super(config, queryService);
    }

    toObservable(): Observable<BaseResponses.EmptyContentManagementResponse> {
        return this.queryService.deleteLanguageVariant(this.getUrl(), this.queryConfig);
    }

    protected getAction(): string {
        return this.apiEndpoints.deleteLanguageVariant(this.contentItemIdentifier, this.languageIdentifier);
    }
}
