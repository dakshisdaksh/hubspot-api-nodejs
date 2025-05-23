import {
  RequestContext,
  ResponseContext,
  RolesApi,
  ServerConfiguration,
  TeamsApi,
  UsersApi,
  createConfiguration,
} from '../../../../codegen/settings/users/index'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import ApiDecoratorService from '../../../services/ApiDecoratorService'
import IConfiguration from '../../../configuration/IConfiguration'
import { Observable } from '../../../../codegen/settings/users/rxjsStub'

export default class UsersDiscovery {
  public rolesApi: RolesApi
  public teamsApi: TeamsApi
  public usersApi: UsersApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<Record<string, string>>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.rolesApi = ApiDecoratorService.getInstance().apply<RolesApi>(new RolesApi(configuration))
    this.teamsApi = ApiDecoratorService.getInstance().apply<TeamsApi>(new TeamsApi(configuration))
    this.usersApi = ApiDecoratorService.getInstance().apply<UsersApi>(new UsersApi(configuration))
  }
}
