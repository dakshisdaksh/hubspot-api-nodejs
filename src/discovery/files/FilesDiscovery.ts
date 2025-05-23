import {
  FilesApi,
  FoldersApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  createConfiguration,
} from '../../../codegen/files/index'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../services/ApiDecoratorService'
import IConfiguration from '../../configuration/IConfiguration'
import { Observable } from '../../../codegen/files/rxjsStub'

export default class FilesDiscovery {
  public filesApi: FilesApi
  public foldersApi: FoldersApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.filesApi = ApiDecoratorService.getInstance().apply<FilesApi>(new FilesApi(configuration))
    this.foldersApi = ApiDecoratorService.getInstance().apply<FoldersApi>(new FoldersApi(configuration))
  }
}
