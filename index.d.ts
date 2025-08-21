export interface JavaUser {
    username: string,
    uuid: string,
    skin: string,
    cape: string,
    linked: boolean,
    bedrock_gamertag?: string,
    bedrock_xuid?: number,
    bedrock_fuid?: string
}

export interface BedrockUser {
  gamertag: string,
  xuid: string,
  floodgateuid: string,
  icon: string,
  gamescore: string,
  accounttier: string,
  textureid: string,
  skin: string,
  linked: boolean,
  java_uuid?: string,
  java_name?: string
}

export const java: {
  getPlayerByUsername(username: string): Promise<JavaUser>;
  getPlayerByUUID(uuid: string): Promise<JavaUser>;
};

export const bedrock: {
  getPlayerByUsername(gamertag: string): Promise<BedrockUser>;
  getPlayerByXUID(xuid: string): Promise<BedrockUser>;
  getPlayerByFUID(fuid: string): Promise<BedrockUser>;
};
