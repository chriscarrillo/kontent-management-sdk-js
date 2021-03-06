# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.14](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.13...v0.3.14) (2020-01-15)


### Bug Fixes

* assigns raw data to asset folders correctly ([654ef6b](https://github.com/Kentico/kontent-management-sdk-js/commit/654ef6b027dac040219a90f02e58d89208e78395))

### [0.3.13](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.12...v0.3.13) (2020-01-15)


### Bug Fixes

* re-release due to leftover files in dist folder (no code changes) ([eb84a96](https://github.com/Kentico/kontent-management-sdk-js/commit/eb84a96f3750f5b95d33d274fc7619d12b35f692))

### [0.3.12](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.11...v0.3.12) (2020-01-15)


### Bug Fixes

* fixes typo in 'ILinkedITemsInType' elements builder interface ([fc36157](https://github.com/Kentico/kontent-management-sdk-js/commit/fc361577082bfe9ceb2f8ddb775a6434ec6776cb))
* removes obsolete update asset query in favor of upsert query which is now in sync with other endpoints and use proper input data and indentifiers ([9308880](https://github.com/Kentico/kontent-management-sdk-js/commit/93088802df6a4312e5586ff4413ad2837d304971))

### [0.3.11](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.10...v0.3.11) (2020-01-14)


### Features

* adds '_raw' property to language variant with component ([58fcb6b](https://github.com/Kentico/kontent-management-sdk-js/commit/58fcb6be07f4647112d74c110f7fef347c7198be))

### [0.3.10](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.9...v0.3.10) (2020-01-13)


### Features

* adds new url property to asset contract & models ([fd188c1](https://github.com/Kentico/kontent-management-sdk-js/commit/fd188c1652a488bd836825fcc0472b856bc275ee))

### [0.3.9](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.8...v0.3.9) (2020-01-09)


### Bug Fixes

* assigns raw data to language model ([e09e7c1](https://github.com/Kentico/kontent-management-sdk-js/commit/e09e7c11703e532f2f89fd0203c947a96c0ce402))
* fixes model for adding assets ([f938501](https://github.com/Kentico/kontent-management-sdk-js/commit/f938501f895fa56a3cf0f129747be94c5cf2d46d))

### [0.3.8](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.7...v0.3.8) (2020-01-09)


### Bug Fixes

* removes elements query data from delete language variant query ([f7cee7a](https://github.com/Kentico/kontent-management-sdk-js/commit/f7cee7ad0a9a7fa4abdd88dc9566621df1510e6e))

### [0.3.7](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.6...v0.3.7) (2020-01-09)


### Features

* adds support delete language variant API endpoint ([90188c7](https://github.com/Kentico/kontent-management-sdk-js/commit/90188c747fd2b3d6c84823116d869be3ca1330ef))

### [0.3.6](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.5...v0.3.6) (2020-01-07)


### Features

* updates all dependencies (reworks retryStrategy options to give more control over what errors should be retried) ([29dc496](https://github.com/Kentico/kontent-management-sdk-js/commit/29dc4965cc56f58d830895a96ada20ecbb1de075))

### [0.3.5](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.4...v0.3.5) (2020-01-06)


### Features

* exposes more mapping methods (e.g. mapping contentType instead of whole response) ([c01804f](https://github.com/Kentico/kontent-management-sdk-js/commit/c01804fa694e0be83b80a233edb78cd09f6c5f36))

### [0.3.4](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.3...v0.3.4) (2020-01-06)


### Features

* adds '_raw' property with original data to base models & fixes incorrect model for content type snippes responses ([c4606c8](https://github.com/Kentico/kontent-management-sdk-js/commit/c4606c82e7ed8c84e3a7a012413d5c638d8eacce))

### [0.3.3](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.2...v0.3.3) (2020-01-06)


### Bug Fixes

* fixes return type of 'toAllPromise' so that it matched original 'toAllObservable'. Adds type check test for items in listing query. ([212829e](https://github.com/Kentico/kontent-management-sdk-js/commit/212829e3da730b37486265034fc5a42aa730c2c5))

### [0.3.2](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.1...v0.3.2) (2019-12-19)


### Features

* creates MappingService and exposes it via ManagementClient. This service can be used for mapping raw data to SDK models. ([146b4b7](https://github.com/Kentico/kontent-management-sdk-js/commit/146b4b72b502f3047d56e15b330398a896789cc0))

### [0.3.1](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.0...v0.3.1) (2019-12-19)


### Features

* adds ability to set delay between requests made by listing queries to prevent being rate limited by CM API ([b561d10](https://github.com/Kentico/kontent-management-sdk-js/commit/b561d102c1feff443d42ffdba3274cddc06f5209))

## [0.3.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.2.8...v0.3.0) (2019-12-18)


### ⚠ BREAKING CHANGES

* implements ability to get all items with automatic paging using `toAllObservable` and `toAllPromise` extension methods. This commit changes names of some responses and also changes name of property holding paged items to 'items'.

### Features

* adds support for list/add/modify asset folders endpoints ([b35b08d](https://github.com/Kentico/kontent-management-sdk-js/commit/b35b08d6391f0ae6cbfb988499ec6bbe05213a0e))
* implements ability to get all items with automatic paging using `toAllObservable` and `toAllPromise` extension methods. This commit changes names of some responses and also changes name of property holding paged items to 'items'. ([c77353f](https://github.com/Kentico/kontent-management-sdk-js/commit/c77353f460cfe8a6f85f8e4a02a14fbaaf9eed3e))


### Bug Fixes

* fixes incorrect import source in readme ([5642343](https://github.com/Kentico/kontent-management-sdk-js/commit/5642343dbdbfec2b0347cfab627cc3195b22a16b))
* uses base github url in package.json to fix automatic commit url generation ([38b243e](https://github.com/Kentico/kontent-management-sdk-js/commit/38b243ec1f7e2079f40ead553254e611d45b4084))

### [0.2.8](https://github.com///compare/v0.2.7...v0.2.8) (2019-12-16)


### Features

* adds codename to add taxonomy data model ([7bb118b](https://github.com/Kentico/kontent-management-sdk-js/commit/7bb118b8ea429856f50de6095488744e0a554486))
* adds support for add/get/list webhooks endpoints ([5744e94](https://github.com/Kentico/kontent-management-sdk-js/commit/5744e943fd44e13dc10bd173f290e2eeb33dcd0e))
* adds support for project information endpoint ([234f175](https://github.com/Kentico/kontent-management-sdk-js/commit/234f175865ea3dcf0e4852c91cbec19e1f2119e1))
* adds support for retrieving single taxonomy items ([0cdb48f](https://github.com/Kentico/kontent-management-sdk-js/commit/0cdb48fc54e43d95f7c029d9e8dca8c46d4f1e1c))
* adds support for setting content item codename during  creation ([94c1f94](https://github.com/Kentico/kontent-management-sdk-js/commit/94c1f940fb9bf99b43ca69a2c49a48c8ac6e8753))
* adds support for updating conten item codename ([9c7786e](https://github.com/Kentico/kontent-management-sdk-js/commit/9c7786e6cf6904c065a77ca06f77b0938ee78f1a))


### Bug Fixes

* uses internal id for content type identifier instead of external id ([bb6d46b](https://github.com/Kentico/kontent-management-sdk-js/commit/bb6d46b0233d1951bc0931a699b70fd3ee629caa))

### [0.2.7](https://github.com///compare/v0.2.6...v0.2.7) (2019-11-21)


### Features

* add support for 'ListLanguageVariantsOfContentTypeWithVariants' API endpoint ([008f5e5](https://github.com/Kentico/kontent-management-sdk-js/commit/008f5e5dc5bd3dd9f5d7619b6ca4ed3c32d4d6fd))
* adds additional language reference properties and fixes filename ([73109ad](https://github.com/Kentico/kontent-management-sdk-js/commit/73109adc058054ee3eeff3fd82e7cc799ed7ce0a))

### [0.2.6](https://github.com///compare/v0.2.5...v0.2.6) (2019-11-21)


### Bug Fixes

* uses reference contract instead of reference object ([5df58b1](https://github.com/Kentico/kontent-management-sdk-js/commit/5df58b17a196d09c20584207d4ec17455e8f4b86))

### [0.2.5](https://github.com///compare/v0.2.4...v0.2.5) (2019-11-20)


### Bug Fixes

* updates @kentico/kontent-core dep which removes testing warn logging in console ([cf38dbe](https://github.com/Kentico/kontent-management-sdk-js/commit/cf38dbe307beeaefe5d3e4a96ab3d4ec2aaf0fe3))

### [0.2.4](https://github.com///compare/v0.2.3...v0.2.4) (2019-11-13)


### Features

* adds codename property to 'addContentType' and 'addContentTypeSnippet' queries, adds 'content_groups' property to 'addContentType' ([bec6a8c](https://github.com/Kentico/kontent-management-sdk-js/commit/bec6a8c9b64da104d2066ef10451b549caea87ac))

### [0.2.3](https://github.com///compare/v0.2.2...v0.2.3) (2019-11-13)


### Features

* adds 'isDeveloperMode' client configuration option. If this option is enabled, additional errors are logged in console. ([7d64864](https://github.com/Kentico/kontent-management-sdk-js/commit/7d648648f467e0f356e073e134910c7dd7ebea4c))
* adds optional data query builder class and uses it for 'publishOrScheduleLanguageVariant' method to allow for skipping data. Fixes https://github.com/Kentico/kontent-management-sdk-js/issues/5 ([e5cb868](https://github.com/Kentico/kontent-management-sdk-js/commit/e5cb868689b0c9699b344c6ae316d644d9f47ce0))
* adds support for pagination with x-continuation header token, adds ability to set headers in query config, internally refactors the way headers are retrieved, changes debug response type to include strongly typed properties ([7efafc0](https://github.com/Kentico/kontent-management-sdk-js/commit/7efafc002dbfba00f218b39377c82b6233b833a4))
* internal - separates query builders from queries ([513d058](https://github.com/Kentico/kontent-management-sdk-js/commit/513d05848990b5fbf10b34f0c02750447110ba2e))


### Bug Fixes

* removes the ability to set entire query config to prevent overriding headers ([8115e2a](https://github.com/Kentico/kontent-management-sdk-js/commit/8115e2a4037c0d1f45d289458fb825be80fccc23))
* sets correct data model for modifying language (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/7) ([ae740e4](https://github.com/Kentico/kontent-management-sdk-js/commit/ae740e4af92efe1f3ab9897a0cb7236d4a33334d))

### [0.2.2](https://github.com///compare/v0.2.1...v0.2.2) (2019-11-05)


### Features

* adds elements builder for add content type snippet query ([74249a9](https://github.com/Kentico/kontent-management-sdk-js/commit/74249a9b3f2f7d129cfead97c2f39610b8ae6584))
* adds elements builder with models for convenient creation of new content types ([6b0128e](https://github.com/Kentico/kontent-management-sdk-js/commit/6b0128ea5482e23cf310c6c1743e4f7062b226b6))


### Bug Fixes

* updates kontent-core package which fixes http retry requests ([5545f10](https://github.com/Kentico/kontent-management-sdk-js/commit/5545f10f663287a5cea1aff8a87864d250d5bc6e))

### [0.2.1](https://github.com///compare/v0.2.0...v0.2.1) (2019-10-31)


### Bug Fixes

* Fixes modifyLanguage request type (https://github.com/Kentico/kontent-management-sdk-js/issues/3) ([cc989ce](https://github.com/Kentico/kontent-management-sdk-js/commit/cc989cefb26ddd45324e15710dfd5a02a76b0166))
* Updates kontent-core package which fixes patch requests incorrectly using put callback ([e9faa5d](https://github.com/Kentico/kontent-management-sdk-js/commit/e9faa5d8d4f1b8293fc01b9d809458c12964f498))

## 0.2.0 (2019-10-25)


### ⚠ BREAKING CHANGES

* implements 'modifyContentType' endpoint, uses new retry policy & uses standard versioning

### Features

* implements 'modifyContentType' endpoint, uses new retry policy & uses standard versioning ([75a9e74](https://github.com/Kentico/kontent-management-sdk-js/commit/75a9e7439b6f87fe71cd6118ec7eb4e57099c210))
