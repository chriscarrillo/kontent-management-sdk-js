import { ContentTypeSnippetContracts } from '../../contracts';
import { ElementsInContentType } from '../content-types/content-type-elements.builder';
import { ElementModels } from '../elements/elements.models';
import { SharedModels } from '../shared/shared-models';

export namespace ContentTypeSnippetModels {
    export class ContentTypeSnippet
        implements SharedModels.IBaseModel<ContentTypeSnippetContracts.IContentTypeSnippetContract> {
        public id!: string;
        public name!: string;
        public codename!: string;
        public lastModified!: Date;
        public elements!: ElementModels.ElementModel[] | ElementModels.MultipleChoiceElementModel[];
        public _raw!: ContentTypeSnippetContracts.IContentTypeSnippetContract;

        constructor(data: {
            id: string;
            name: string;
            codename: string;
            lastModified: Date;
            elements: ElementModels.ElementModel[] | ElementModels.MultipleChoiceElementModel[];
            _raw: ContentTypeSnippetContracts.IContentTypeSnippetContract;
        }) {
            Object.assign(this, data);
        }
    }

    export interface IAddContentTypeSnippetData {
        name: string;
        elements: ElementsInContentType.IElementInContentType[];

        external_id?: string;
        codename?: string;
    }
}
