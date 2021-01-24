export const PacketTypes = {
  HELLO:  1,
  TEXT:   2,
  ACTION: 3,
  TANK:   4
}

export const TankPacketNames = [
  "PACKET_STATE", "PACKET_CALL_FUNCTION", "PACKET_UPDATE_STATUS", "PACKET_TILE_CHANGE_REQUEST", "PACKET_SEND_MAP_DATA",
  "PACKET_SEND_TILE_UPDATE_DATA", "PACKET_SEND_TILE_UPDATE_DATA_MULTIPLE", "PACKET_TILE_ACTIVATE_REQUEST", "PACKET_TILE_APPLY_DAMAGE",
  "PACKET_SEND_INVENTORY_STATE", "PACKET_ITEM_ACTIVATE_REQUEST", "PACKET_ITEM_ACTIVATE_OBJECT_REQUEST", "PACKET_SEND_TILE_TREE_STATE",
  "PACKET_MODIFY_ITEM_INVENTORY", "PACKET_ITEM_CHANGE_OBJECT", "PACKET_SEND_LOCK", "PACKET_SEND_ITEM_DATABASE_DATA", "PACKET_SEND_PARTICLE_EFFECT",
  "PACKET_SET_ICON_STATE", "PACKET_ITEM_EFFECT", "PACKET_SET_CHARACTER_STATE", "PACKET_PING_REPLY", "PACKET_PING_REQUEST", "PACKET_GOT_PUNCHED",
  "PACKET_APP_CHECK_RESPONSE", "PACKET_APP_INTEGRITY_FAIL", "PACKET_DISCONNECT", "PACKET_BATTLE_JOIN", "PACKET_BATTLE_EVENT", "PACKET_USE_DOOR",
  "PACKET_SEND_PARENTAL", "PACKET_GONE_FISHIN", "PACKET_STEAM", "PACKET_PET_BATTLE", "PACKET_NPC", "PACKET_SPECIAL", "PACKET_SEND_PARTICLE_EFFECT_V2",
  "PACKET_ACTIVE_ARROW_TO_ITEM", "PACKET_SELECT_TILE_INDEX", "PACKET_SEND_PLAYER_TRIBUTE_DATA", "PACKET_SET_EXTRA_MODS", "PACKET_ON_STEP_ON_TILE_MOD",
  "PACKET_ERRORTYPE"
]

export const Z_MAX_LEVEL = 9

export const VariantTypes = {
  NONE:   0,
  FLOAT1: 1,
  STRING: 2,
  FLOAT2: 3,
  FLOAT4: 4,
  UINT:   5,
  INT:    9
}