const _ = require('lodash')
const mysql = require('mysql')
const Promise = require('bluebird')

let connection = null

const MYSQL_HOST = process.env.MYSQL_HOST
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_DATABASE = process.env.MYSQL_DATABASE
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

const MAPPINGS_TABLE_INIT = `create table if not exists mappings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  board_id          VARCHAR(255)  NOT NULL,
  board_list_id     VARCHAR(255)  default null,
  pipeline_id       VARCHAR(255)  NOT NULL,
  pipeline_stage_id VARCHAR(255)  default null,
  created_at        datetime      default CURRENT_TIMESTAMP,
  UNIQUE KEY board_id_pipeline_id_board_list_id (board_id, pipeline_id, board_list_id),
  UNIQUE KEY board_id_pipeline_id_pipeline_stage_id (board_id, pipeline_id, pipeline_stage_id)
);`

const HUBSPOT_TOKENS_TABLE_INIT = `create table if not exists hubspot_tokens  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  refresh_token  VARCHAR(255)   default null,
  access_token   VARCHAR(255)   default null,
  expires_in     bigint         default null,
  created_at     datetime       default CURRENT_TIMESTAMP,
  updated_at     datetime       default CURRENT_TIMESTAMP
);`

const TRELLO_TOKENS_TABLE_INIT = `create table if not exists trello_tokens  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  token  VARCHAR(255)   default null
);`

const URLS_TABLE_INIT = `create table if not exists urls  (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  url                    VARCHAR(255)   default null
);`

const run = (sql) => {
    console.log(sql)
    return _.isNull(connection) ? Promise.reject(new Error('MYSQL DB not initialized!')) : connection.queryAsync(sql)
}

module.exports = {
    init: async () => {
        try {
            connection = new mysql.createConnection({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE,
            })

            connection.connectAsync = Promise.promisify(connection.connect)
            connection.queryAsync = Promise.promisify(connection.query)

            console.log('connecting to MYSQL DB')
            await connection.connectAsync()

            console.log('init tables')
            await connection.queryAsync(MAPPINGS_TABLE_INIT)
            await connection.queryAsync(HUBSPOT_TOKENS_TABLE_INIT)
            await connection.queryAsync(TRELLO_TOKENS_TABLE_INIT)
            await connection.queryAsync(URLS_TABLE_INIT)
        } catch (e) {
            console.error('DB is not available')
            console.error(e)
            throw e
        }
    },
    close: () => {
        if (connection) connection.end()
    },
    getMappings: (boardId, pipelineId) => {
        const getMappingsSql = `select * from mappings where board_id = "${boardId}" AND pipeline_id = "${pipelineId}" ORDER BY id ASC`
        return run(getMappingsSql)
    },
    addMapping: (boardId, pipelineId) => {
        const getMappingsSql = `insert into mappings (board_id, pipeline_id) values ("${boardId}", "${pipelineId}")`
        return run(getMappingsSql)
    },
    updateMapping: ({ id, boardListId, pipelineStageId } = {}) => {
        const updateMappingsSql = `update mappings set board_list_id = '${boardListId}', pipeline_stage_id = '${pipelineStageId}' WHERE id = ${_.toNumber(
            id,
        )}`
        return run(updateMappingsSql)
    },
    removeMapping: (mappingId) => {
        const removeMappingsSql = `delete from mappings WHERE id = ${_.toNumber(mappingId)}`
        return run(removeMappingsSql)
    },
    getHubspotTokensData: async () => {
        const getHubspotTokensData = `select * from hubspot_tokens ORDER BY updated_at DESC limit 1`
        const result = await run(getHubspotTokensData)
        return result[0]
    },
    saveHubspotTokensData: ({ refreshToken, accessToken, expiresIn } = {}) => {
        const saveHubspotTokens = `insert into hubspot_tokens (refresh_token, access_token, expires_in) values ("${refreshToken}", "${accessToken}", ${expiresIn})`
        return run(saveHubspotTokens)
    },
    updateHubspotTokensData: async ({ refreshToken, accessToken, expiresIn } = {}) => {
        const updateHubspotTokensData = `update hubspot_tokens set access_token = '${accessToken}', expires_in = '${expiresIn}', updated_at = CURRENT_TIMESTAMP where refresh_token = "${refreshToken}"`
        const getHubspotTokensData = `select * from hubspot_tokens where refresh_token = "${refreshToken}"`

        await run(updateHubspotTokensData)
        const result = await run(getHubspotTokensData)
        return result[0]
    },
    // getTrelloToken: () => redisClient.get(TRELLO_TOKEN_KEY),
    // saveTrelloToken: (token) => redisClient.set(TRELLO_TOKEN_KEY, token),
    // getUrl: () => redisClient.get(URL_KEY),
    // saveUrl: (url) => redisClient.set(URL_KEY, url),
    // getCardId: () => redisClient.get(CARD_ID_KEY),
    // saveCardId: (cardId) => redisClient.set(CARD_ID_KEY, cardId),
    // getDealAssociation: (dealId) => redisClient.get(getDealAssociationKey(dealId)),
    // createDealAssociation: (dealId, cardId) => redisClient.set(getDealAssociationKey(dealId), cardId),
    // deleteDealAssociation: (dealId) => redisClient.del(getDealAssociationKey(dealId)),
}
