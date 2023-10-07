export const kGamesFeatures = new Map<number, string[]>([
  // TFT
  [
    21570,
    [
      'round_start',
      'round_end',
      'battle_start',
      'battle_end',
      'match_start',
      'match_end',
    ]
  ],
]);

export const kGameClassIds = Array.from(kGamesFeatures.keys());

export const kWindowNames = {
  inGame: 'in_game',
  desktop: 'desktop'
};

export const kHotkeys = {
  toggle: 'sample_app_ts_showhide'
};
