import { HttpService } from '@kentico/kontent-core';

import { IManagementClientConfig } from '../config';
import { ContentItemContracts } from '../contracts';
import {
    AssetFolderModels,
    AssetModels,
    ContentTypeElementsBuilder,
    ContentTypeModels,
    ContentTypeSnippetElementsBuilder,
    ContentTypeSnippetModels,
    LanguageModels,
    TaxonomyModels,
    WebhookModels,
    WorkflowModels
} from '../models';
import {
    AddAssetFoldersQuery,
    AddAssetQuery,
    AddContentItemQuery,
    AddContentTypeQuery,
    AddContentTypeSnippetQuery,
    AddLanguageQuery,
    AddTaxonomyQuery,
    AddWebhookQuery,
    AssetIdentifierQueryClass,
    CancelScheduledPublishingOfLanguageVariantQuery,
    ChangeWorkflowStepOfLanguageOrVariantQuery,
    ContentItemExternalIdIdentifierQuery,
    ContentItemIdentifierQuery,
    ContentTypeCodenameAndIdIdentifierQuery,
    ContentTypeIdentifierQuery,
    CreateNewVersionOfLanguageVariantQuery,
    DataQuery,
    DataQueryOptional,
    DeleteAssetQuery,
    DeleteContentItemQuery,
    DeleteContentTypeQuery,
    DeleteContentTypeSnippetQuery,
    DeleteLanguageVariantQuery,
    DeleteTaxonomyQuery,
    DeleteWebhookQuery,
    GetTaxonomyQuery,
    GetWebhookQuery,
    LanguageIdAndCodenameIdentifierQuery,
    LanguageIdentifierQuery,
    LanguageVariantElementsQuery,
    ListAssetFoldersQuery,
    ListAssetsQuery,
    ListContentItemsQuery,
    ListContentTypeSnippetsQuery,
    ListContentTypesQuery,
    ListLanguagesQuery,
    ListLanguageVariantsOfContentTypeQuery,
    ListLanguageVariantsOfContentTypeWithComponentsQuery,
    ListLanguageVariantsOfItemQuery,
    ListTaxonomiesQuery,
    ListWebhooksQuery,
    ListWorkflowStepsQuery,
    ModifyAssetFoldersQuery,
    ModifyContentTypeQuery,
    ModifyLanguageQuery,
    ProjectIdIdentifierQuery,
    ProjectInformationQuery,
    PublishOrScheduleLanguageVariantQuery,
    TaxonomyIdentifierQuery,
    UnpublishLanguageVariantQuery,
    UpdateContentItemQuery,
    UploadBinaryFileQuery,
    UpsertAssetQuery,
    UpsertContentItemQuery,
    UpsertLanguageVariantQuery,
    ValidateProjectContentQuery,
    ViewAssetsQuery,
    ViewContentItemQuery,
    ViewContentTypeQuery,
    ViewContentTypeSnippetQuery,
    ViewLanguageQuery,
    ViewLanguageVariantQuery,
    WebhookIdentifierQuery,
    WorkflowStepIdentifierQuery
} from '../queries';
import { sdkInfo } from '../sdk-info.generated';
import { ContentManagementQueryService, IMappingService, MappingService } from '../services';
import { IManagementClient } from './imanagement-client.interface';

export class ManagementClient implements IManagementClient {
    private queryService: ContentManagementQueryService;

    public mappingService: IMappingService = new MappingService();

    constructor(protected config: IManagementClientConfig) {
        this.queryService = new ContentManagementQueryService(
            config,
            config.httpService ? config.httpService : new HttpService(),
            {
                host: sdkInfo.host,
                name: sdkInfo.name,
                version: sdkInfo.version
            }
        );
    }

    createNewVersionOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CreateNewVersionOfLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<CreateNewVersionOfLanguageVariantQuery>
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<CreateNewVersionOfLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new CreateNewVersionOfLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    unpublishLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<UnpublishLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<UnpublishLanguageVariantQuery>>(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<UnpublishLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new UnpublishLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    cancelSheduledPublishingOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<CancelScheduledPublishingOfLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<CancelScheduledPublishingOfLanguageVariantQuery>
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<CancelScheduledPublishingOfLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new CancelScheduledPublishingOfLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    changeWorkflowStepOfLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<
                WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<
                    WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>
                >(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new WorkflowStepIdentifierQuery<ChangeWorkflowStepOfLanguageOrVariantQuery>(
                            nConfig,
                            nQueryService,
                            (mConfig, mQueryservice, workflowIdentifier) => {
                                return new ChangeWorkflowStepOfLanguageOrVariantQuery(
                                    config,
                                    queryService,
                                    contentItemIdentifier,
                                    languageIdentifier,
                                    workflowIdentifier
                                );
                            }
                        )
                )
        );
    }

    publishOrScheduleLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<
            DataQueryOptional<PublishOrScheduleLanguageVariantQuery, WorkflowModels.IPublishOrSchedulePublishData>
        >
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<
                DataQueryOptional<PublishOrScheduleLanguageVariantQuery, WorkflowModels.IPublishOrSchedulePublishData>
            >
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<
                    DataQueryOptional<
                        PublishOrScheduleLanguageVariantQuery,
                        WorkflowModels.IPublishOrSchedulePublishData
                    >
                >(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new DataQueryOptional<
                            PublishOrScheduleLanguageVariantQuery,
                            WorkflowModels.IPublishOrSchedulePublishData
                        >(
                            nConfig,
                            nQueryService,
                            (pConfig, pQueryService, data) =>
                                new PublishOrScheduleLanguageVariantQuery(
                                    pConfig,
                                    pQueryService,
                                    contentItemIdentifier,
                                    languageIdentifier,
                                    data
                                )
                        )
                )
        );
    }

    listWorkflowSteps(): ListWorkflowStepsQuery {
        return new ListWorkflowStepsQuery(this.config, this.queryService);
    }

    listContentTypeSnippets(): ListContentTypeSnippetsQuery {
        return new ListContentTypeSnippetsQuery(this.config, this.queryService);
    }

    viewContentTypeSnippet(): ContentTypeIdentifierQuery<ViewContentTypeSnippetQuery> {
        return new ContentTypeIdentifierQuery<ViewContentTypeSnippetQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewContentTypeSnippetQuery(config, queryService, identifier)
        );
    }

    deleteContentTypeSnippet(): ContentTypeIdentifierQuery<DeleteContentTypeSnippetQuery> {
        return new ContentTypeIdentifierQuery<DeleteContentTypeSnippetQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteContentTypeSnippetQuery(config, queryService, identifier)
        );
    }

    addContentTypeSnippet(): DataQuery<
        AddContentTypeSnippetQuery,
        (builder: ContentTypeSnippetElementsBuilder) => ContentTypeSnippetModels.IAddContentTypeSnippetData
    > {
        return new DataQuery<
            AddContentTypeSnippetQuery,
            (builder: ContentTypeSnippetElementsBuilder) => ContentTypeSnippetModels.IAddContentTypeSnippetData
        >(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddContentTypeSnippetQuery(config, queryService, data)
        );
    }

    viewLanguageVariant(): ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<ViewLanguageVariantQuery>> {
        return new ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<ViewLanguageVariantQuery>>(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<ViewLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new ViewLanguageVariantQuery(nConfig, nQueryService, contentItemIdentifier, languageIdentifier)
                )
        );
    }

    upsertLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<LanguageVariantElementsQuery<UpsertLanguageVariantQuery>>
    > {
        return new ContentItemIdentifierQuery<
            LanguageIdAndCodenameIdentifierQuery<LanguageVariantElementsQuery<UpsertLanguageVariantQuery>>
        >(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<LanguageVariantElementsQuery<UpsertLanguageVariantQuery>>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new LanguageVariantElementsQuery(
                            nConfig,
                            nQueryService,
                            (mConfig, mQueryService, elements) =>
                                new UpsertLanguageVariantQuery(
                                    mConfig,
                                    mQueryService,
                                    contentItemIdentifier,
                                    languageIdentifier,
                                    elements
                                )
                        )
                )
        );
    }

    deleteLanguageVariant(): ContentItemIdentifierQuery<
        LanguageIdAndCodenameIdentifierQuery<DeleteLanguageVariantQuery>
    > {
        return new ContentItemIdentifierQuery<LanguageIdAndCodenameIdentifierQuery<DeleteLanguageVariantQuery>>(
            this.config,
            this.queryService,
            (config, queryService, contentItemIdentifier) =>
                new LanguageIdAndCodenameIdentifierQuery<DeleteLanguageVariantQuery>(
                    config,
                    queryService,
                    (nConfig, nQueryService, languageIdentifier) =>
                        new DeleteLanguageVariantQuery(
                            nConfig,
                            nQueryService,
                            contentItemIdentifier,
                            languageIdentifier
                        )
                )
        );
    }

    validateProjectContent(): ProjectIdIdentifierQuery<ValidateProjectContentQuery> {
        return new ProjectIdIdentifierQuery<ValidateProjectContentQuery>(
            this.config,
            this.queryService,
            (config, queryService, projectId) => new ValidateProjectContentQuery(config, queryService, projectId)
        );
    }

    deleteContentType(): ContentTypeIdentifierQuery<DeleteContentTypeQuery> {
        return new ContentTypeIdentifierQuery<DeleteContentTypeQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteContentTypeQuery(config, queryService, identifier)
        );
    }

    addContentType(): DataQuery<
        AddContentTypeQuery,
        (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData
    > {
        return new DataQuery<
            AddContentTypeQuery,
            (builder: ContentTypeElementsBuilder) => ContentTypeModels.IAddContentTypeData
        >(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddContentTypeQuery(config, queryService, data)
        );
    }

    modifyContentType(): ContentTypeIdentifierQuery<
        DataQuery<ModifyContentTypeQuery, ContentTypeModels.IModifyContentTypeData[]>
    > {
        return new ContentTypeIdentifierQuery<
            DataQuery<ModifyContentTypeQuery, ContentTypeModels.IModifyContentTypeData[]>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ModifyContentTypeQuery, ContentTypeModels.IModifyContentTypeData[]>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new ModifyContentTypeQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    viewContentType(): ContentTypeIdentifierQuery<ViewContentTypeQuery> {
        return new ContentTypeIdentifierQuery<ViewContentTypeQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewContentTypeQuery(config, queryService, identifier)
        );
    }

    listContentTypes(): ListContentTypesQuery {
        return new ListContentTypesQuery(this.config, this.queryService);
    }

    deleteTaxonomy(): TaxonomyIdentifierQuery<DeleteTaxonomyQuery> {
        return new TaxonomyIdentifierQuery<DeleteTaxonomyQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteTaxonomyQuery(config, queryService, identifier)
        );
    }

    addTaxonomy(): DataQuery<AddTaxonomyQuery, TaxonomyModels.IAddTaxonomyRequestModel> {
        return new DataQuery<AddTaxonomyQuery, TaxonomyModels.IAddTaxonomyRequestModel>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddTaxonomyQuery(config, queryService, data)
        );
    }

    listTaxonomies(): ListTaxonomiesQuery {
        return new ListTaxonomiesQuery(this.config, this.queryService);
    }

    getTaxonomy(): TaxonomyIdentifierQuery<GetTaxonomyQuery> {
        return new TaxonomyIdentifierQuery<GetTaxonomyQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new GetTaxonomyQuery(config, queryService, identifier)
        );
    }

    deleteAsset(): AssetIdentifierQueryClass<DeleteAssetQuery> {
        return new AssetIdentifierQueryClass<DeleteAssetQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteAssetQuery(config, queryService, identifier)
        );
    }

    upsertAsset(): AssetIdentifierQueryClass<DataQuery<UpsertAssetQuery, AssetModels.IUpsertAssetRequestData>> {
        return new AssetIdentifierQueryClass<DataQuery<UpsertAssetQuery, AssetModels.IUpsertAssetRequestData>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<UpsertAssetQuery, AssetModels.IUpsertAssetRequestData>(
                    this.config,
                    this.queryService,
                    (xConfig, xQueryService, data) => new UpsertAssetQuery(config, queryService, identifier, data)
                )
        );
    }

    addAsset(): DataQuery<AddAssetQuery, AssetModels.IAddAssetRequestData> {
        return new DataQuery<AddAssetQuery, AssetModels.IAddAssetRequestData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddAssetQuery(config, queryService, data)
        );
    }

    uploadBinaryFile(): DataQuery<UploadBinaryFileQuery, AssetModels.IUploadBinaryFileRequestData> {
        return new DataQuery<UploadBinaryFileQuery, AssetModels.IUploadBinaryFileRequestData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new UploadBinaryFileQuery(config, queryService, data)
        );
    }

    viewAsset(): AssetIdentifierQueryClass<ViewAssetsQuery> {
        return new AssetIdentifierQueryClass<ViewAssetsQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewAssetsQuery(config, queryService, identifier)
        );
    }

    listAssets(): ListAssetsQuery {
        return new ListAssetsQuery(this.config, this.queryService);
    }

    listContentItems(): ListContentItemsQuery {
        return new ListContentItemsQuery(this.config, this.queryService);
    }

    viewContentItem(): ContentItemIdentifierQuery<ViewContentItemQuery> {
        return new ContentItemIdentifierQuery<ViewContentItemQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewContentItemQuery(config, queryService, identifier)
        );
    }

    addContentItem(): DataQuery<AddContentItemQuery, ContentItemContracts.IAddContentItemPostContract> {
        return new DataQuery<AddContentItemQuery, ContentItemContracts.IAddContentItemPostContract>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddContentItemQuery(config, queryService, data)
        );
    }

    updateContentItem(): ContentItemIdentifierQuery<
        DataQuery<UpdateContentItemQuery, ContentItemContracts.IUpdateContentItemPostContract>
    > {
        return new ContentItemIdentifierQuery<
            DataQuery<UpdateContentItemQuery, ContentItemContracts.IUpdateContentItemPostContract>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<UpdateContentItemQuery, ContentItemContracts.IUpdateContentItemPostContract>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new UpdateContentItemQuery(nConfig, nQueryService, data, identifier)
                )
        );
    }

    upsertContentItem(): ContentItemExternalIdIdentifierQuery<
        DataQuery<UpsertContentItemQuery, ContentItemContracts.IUpsertContentItemPostContract>
    > {
        return new ContentItemExternalIdIdentifierQuery<
            DataQuery<UpsertContentItemQuery, ContentItemContracts.IUpsertContentItemPostContract>
        >(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<UpsertContentItemQuery, ContentItemContracts.IUpsertContentItemPostContract>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) =>
                        new UpsertContentItemQuery(nConfig, nQueryService, data, identifier)
                )
        );
    }

    deleteContentItem(): ContentItemIdentifierQuery<DeleteContentItemQuery> {
        return new ContentItemIdentifierQuery<DeleteContentItemQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteContentItemQuery(config, queryService, identifier)
        );
    }

    listLanguageVariantsOfItem(): ContentItemIdentifierQuery<ListLanguageVariantsOfItemQuery> {
        return new ContentItemIdentifierQuery<ListLanguageVariantsOfItemQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ListLanguageVariantsOfItemQuery(config, queryService, identifier)
        );
    }

    listLanguageVariantsOfContentType(): ContentTypeCodenameAndIdIdentifierQuery<
        ListLanguageVariantsOfContentTypeQuery
    > {
        return new ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new ListLanguageVariantsOfContentTypeQuery(config, queryService, identifier)
        );
    }

    listLanguageVariantsOfContentTypeWithComponents(): ContentTypeCodenameAndIdIdentifierQuery<
        ListLanguageVariantsOfContentTypeWithComponentsQuery
    > {
        return new ContentTypeCodenameAndIdIdentifierQuery<ListLanguageVariantsOfContentTypeWithComponentsQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new ListLanguageVariantsOfContentTypeWithComponentsQuery(config, queryService, identifier)
        );
    }

    listLanguages(): ListLanguagesQuery {
        return new ListLanguagesQuery(this.config, this.queryService);
    }

    viewLanguage(): LanguageIdentifierQuery<ViewLanguageQuery> {
        return new LanguageIdentifierQuery<ViewLanguageQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new ViewLanguageQuery(config, queryService, identifier)
        );
    }

    addLanguage(): DataQuery<AddLanguageQuery, LanguageModels.IAddLanguageData> {
        return new DataQuery<AddLanguageQuery, LanguageModels.IAddLanguageData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddLanguageQuery(config, queryService, data)
        );
    }

    modifyLanguage(): LanguageIdentifierQuery<DataQuery<ModifyLanguageQuery, LanguageModels.IModifyLanguageData[]>> {
        return new LanguageIdentifierQuery<DataQuery<ModifyLanguageQuery, LanguageModels.IModifyLanguageData[]>>(
            this.config,
            this.queryService,
            (config, queryService, identifier) =>
                new DataQuery<ModifyLanguageQuery, LanguageModels.IModifyLanguageData[]>(
                    config,
                    queryService,
                    (nConfig, nQueryService, data) => new ModifyLanguageQuery(nConfig, nQueryService, identifier, data)
                )
        );
    }

    deleteWebhook(): WebhookIdentifierQuery<DeleteWebhookQuery> {
        return new WebhookIdentifierQuery<DeleteWebhookQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new DeleteWebhookQuery(config, queryService, identifier)
        );
    }

    addWebhook(): DataQuery<AddWebhookQuery, WebhookModels.IAddWebhookData> {
        return new DataQuery<AddWebhookQuery, WebhookModels.IAddWebhookData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddWebhookQuery(config, queryService, data)
        );
    }

    getWebhook(): WebhookIdentifierQuery<GetWebhookQuery> {
        return new WebhookIdentifierQuery<GetWebhookQuery>(
            this.config,
            this.queryService,
            (config, queryService, identifier) => new GetWebhookQuery(config, queryService, identifier)
        );
    }

    listWebhooks(): ListWebhooksQuery {
        return new ListWebhooksQuery(this.config, this.queryService);
    }

    projectInformation(): ProjectInformationQuery {
        return new ProjectInformationQuery(this.config, this.queryService);
    }

    listAssetFolders(): ListAssetFoldersQuery {
        return new ListAssetFoldersQuery(this.config, this.queryService);
    }

    addAssetFolders(): DataQuery<AddAssetFoldersQuery, AssetFolderModels.IAddAssetFoldersData> {
        return new DataQuery<AddAssetFoldersQuery, AssetFolderModels.IAddAssetFoldersData>(
            this.config,
            this.queryService,
            (config, queryService, data) => new AddAssetFoldersQuery(config, queryService, data)
        );
    }

    modifyAssetFolders(): DataQuery<ModifyAssetFoldersQuery, AssetFolderModels.IModifyAssetFoldersData[]> {
        return new DataQuery<ModifyAssetFoldersQuery, AssetFolderModels.IModifyAssetFoldersData[]>(
            this.config,
            this.queryService,
            (config, queryService, data) => new ModifyAssetFoldersQuery(config, queryService, data)
        );
    }
}
