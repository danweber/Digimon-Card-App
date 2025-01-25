export const replacements: Array<[RegExp, string]> = [
  [/ACE/g, 'ace'],
  [/\[All Turns]/g, 'all_turns'],
  [/＜Alliance＞/g, 'alliance'],
  [/＜Armor Purge＞/g, 'armor_purge'],
  [/\[At End of Opponent's Turn]/g, 'at_end_of_opponents_turn'],
  [/＜Barrier＞/g, 'barrier'],
  [/＜Blast Digivolve＞/g, 'blast_digivolve'],
  [/＜Blast DNA Digivolve ([Angewomon] + [LadyDevimon])＞/g, 'blast_dna_digivolve_angewomon_ladydevimon',],
  [/＜Blast DNA Digivolve ([WarGreymon] + [MetalGarurumon])＞/g, 'blast_dna_digivolve_wargreymon_metalgarurumon',],
  [/＜Blast DNA Digivolve ([Durandamon] + [BryweLudramon])＞/g, 'blast_dna_digivolve_durandamon_bryweLudramon',],
  [/＜Blast DNA Digivolve ([Fenriloogamon] + [Paildramon])＞/g, 'blast_dna_digivolve_fenriloogamon_kazuchimon',],
  [/＜Blast DNA Digivolve ([DinoBeemon] + [Paildramon])＞/g, 'blast_dna_digivolve_dinobeemon_paildramon',],
  [/＜Blast DNA Digivolve ([Breakdramon] + [Slayerdramon])＞/g, 'blast_dna_digivolve_breakdramon_slayerdramon',],
  [/＜Blast DNA Digivolve ([Alphamon] + [Ouryumon])＞/g, 'blast_dna_digivolve_alphamon_ouryumon',],
  [/＜Blitz＞/g, 'blitz'],
  [/＜Blocker＞/g, 'blocker'],
  [/\[Burst Digivolve]/g, 'burst_digivolve'],
  [/\[Breeding]/g, 'breeding'],
  [/\[Counter]/g, 'counter'],
  [/＜Collision＞/g, 'collision'],
  [/＜Decode \(Blue Lv.4\)＞/g, 'decode_blue_level_4'],
  [/＜Decode \(Blue Lv.5\)＞/g, 'decode_blue_level_5'],
  [/＜Decoy \(\[Bagra Army\] trait\)＞/g, 'decoy_bagra_army'],
  [/＜Decoy \(Black\)＞/g, 'decoy_black'],
  [/＜Decoy \(Black\/White\)＞/g, 'decoy_black_white'],
  [/＜Decoy \(\[D\-Brigade\] trait\)＞/g, 'decoy_d-brigade'],
  [/＜Decoy \(\[Deva\/Four Sovereigns\] trait\)＞/g, 'decoy_deva_four_sovereigns',],
  [/＜Decoy \(Red\/Black\)＞/g, 'decoy_red_black'],
  [/＜Decoy \(\[Puppet\] trait\)＞/g, 'decoy_puppet'],
  [/＜Decoy \(\[Xros Heart\] trait\)＞/g, 'decoy_xros_heart'],
  [/＜De-Digivolve＞/g, 'de-digivolve'],
  [/＜De-Digivolve 1＞/g, 'de-digivolve_1'],
  [/＜De-Digivolve 2＞/g, 'de-digivolve_2'],
  [/＜De-Digivolve 3＞/g, 'de-digivolve_3'],
  [/＜De-Digivolve 4＞/g, 'de-digivolve_4'],
  [/＜De-Digivolve1＞/g, 'de-digivolve_1'],
  [/＜De-Digivolve2＞/g, 'de-digivolve_2'],
  [/＜De-Digivolve3＞/g, 'de-digivolve_3'],
  [/＜De-Digivolve4＞/g, 'de-digivolve_4'],
  [/＜Delay＞/g, 'delay'],
  [/＜Digi-Burst ＞/g, 'digi-burst_1'],
  [/＜Digi-Burst 1＞/g, 'digi-burst_1'],
  [/＜Digi-Burst 2＞/g, 'digi-burst_2'],
  [/＜Digi-Burst 3＞/g, 'digi-burst_3'],
  [/＜Digi-Burst 4＞/g, 'digi-burst_4'],
  [/＜Digi-Burst up to 4＞/g, 'digi-burst_up_to_4'],
  [/＜Digisorption -1＞/g, 'digisorption_-1'],
  [/＜Digisorption -2＞/g, 'digisorption_-2'],
  [/＜Digisorption -3＞/g, 'digisorption_-3'],
  [/Digivolve:/g, 'digivolve'],
  [/\[Digivolve]/g, 'digivolve'],
  [/\[DigiXros -1]/g, 'digixros_-1'],
  [/\[DigiXros -2]/g, 'digixros_-2'],
  [/\[DigiXros -3]/g, 'digixros_-3'],
  [/\[DNA Digivolve]/g, 'dna_digivolve'],
  [/＜Draw 1＞/g, 'draw_1'],
  [/＜Draw 2＞/g, 'draw_2'],
  [/＜Draw 3＞/g, 'draw_3'],
  [/\[End of All Turns]/g, 'end_of_all_turns'],
  [/\[End of Attack]/g, 'end_of_attack'],
  [/\[End of Opponent's Turn]/g, 'end_of_opponents_turn'],
  [/\[End of Your Turn]/g, 'end_of_your_turn'],
  [/＜Evade＞/g, 'evade'],
  [/＜Execute＞/g, 'execute'],
  [/＜Fortitude＞/g, 'fortitude'],
  [/＜Fragment \(3\)＞/g, 'fragment_3'],
  [/\[Hand]/g, 'hand'],
  [/＜Ice Clad＞/g, 'ice_clad'],
  [/＜Iceclad＞/g, 'ice_clad'],
  [/\[Main]/g, 'main'],
  [/＜Mind Link＞/g, 'mind_link'],
  [/＜Jamming＞/g, 'jamming'],
  [/＜Material Save 1＞/g, 'material_save_1'],
  [/＜Material Save 2＞/g, 'material_save_2'],
  [/＜Material Save 3＞/g, 'material_save_3'],
  [/＜Material Save 4＞/g, 'material_save_4'],
  [/\[On Deletion]/g, 'on_deletion'],
  [/\[On Play]/g, 'on_play'],
  [/\[Once Per Turn]/g, 'once_per_turn'],
  [/\[Opponent's Turn]/g, 'opponents_turn'],
  [/＜Overclock \(\[Composite\] trait\)＞/g, 'overclock_composite_trait'],
  [/＜Overclock \(\[Puppet\] trait\)＞/g, 'overclock_puppet_trait'],
  [/Overflow ＜-3＞/g, 'overflow_-3'],
  [/Overflow ＜-4＞/g, 'overflow_-4'],
  [/Overflow ＜-5＞/g, 'overflow_-5'],
  [
    /＜Partition \(Black Lv.4 \+ Yellow Lv.4\)＞/g,
    'partition_black_lv.4_yellow_lv.4',
  ],
  [
    /＜Partition \(Blue Lv.4 \+ Green Lv.4\)＞/g,
    'partition_blue_lv.4_green_lv.4',
  ],
  [
    /＜Partition \(Purple Lv.4 \+ Red Lv.4\)＞/g,
    'partition_purple_lv.4_red_lv.4',
  ],
  [
    /＜Partition \(Red Lv.4 \+ Yellow Lv.4\)＞/g,
    'partition_red_lv.4_yellow_lv.4',
  ],
  [
    /＜Partition \(Yellow Lv.6 \+ Black Lv.6\)＞/g,
    'partition_yellow_lv.6_black_lv.6',
  ],
  [
    /＜Partition \(Yellow\/Black Lv.6 \+ Green\/Purple Lv.4\)＞/g,
    'partition_yellow_black_lv.6_green_purple_lv.6',
  ],
  [/＜Piercing＞/g, 'piercing'],
  [/＜Raid＞/g, 'raid'],
  [/＜Reboot＞/g, 'reboot'],
  [/＜Recovery \+1 \(Deck\)＞/g, 'recovery_+1deck'],
  [/＜Recovery \+2 \(Deck\)＞/g, 'recovery_+2deck'],
  [/＜Retaliation＞/g, 'retaliation'],
  [/＜Rush＞/g, 'rush'],
  [/\[Rule]/g, 'rule'],
  [/＜Save＞/g, 'save'],
  [/\[Security]/g, 'security'],
  [/＜Security Attack＞/g, 'security_attack'],
  [/＜Security Attack -＞/g, 'security_attack_-'],
  [/＜Security Attack \+＞/g, 'security_attack_+'],
  [/＜Security Attack -1＞/g, 'security_attack_-1'],
  [/＜Security Attack \+1＞/g, 'security_attack_+1'],
  [/＜Security Attack \+2＞/g, 'security_attack_+2'],
  [/＜Security Attack -2＞/g, 'security_attack_-2'],
  [/＜Security Attack -3＞/g, 'security_attack_-_3'],
  [/＜Security A.＞/g, 'security_attack'],
  [/＜Security A. -＞/g, 'security_attack_-'],
  [/＜Security A. \+＞/g, 'security_attack_+'],
  [/＜Security A. -1＞/g, 'security_attack_-1'],
  [/＜Security A. \+1＞/g, 'security_attack_+1'],
  [/＜Security A. \+2＞/g, 'security_attack_+2'],
  [/＜Security A. -2＞/g, 'security_attack_-2'],
  [/＜Security A. -3＞/g, 'security_attack_-_3'],  [/\[Start of Your Main Phase]/g, 'start_of_your_main_phase'],
  [/\[Start of Your Turn]/g, 'start_of_your_turn'],
  [/\[Start of Opponent's Turn]/g, 'start_of_opponents_turn'],
  [/\[Trash]/g, 'trash'],
  [/\[Twice Per Turn]/g, 'twice_per_turn'],
  [/＜Vortex＞/g, 'vortex'],
  [/\[When Digivolving]/g, 'when_digivolving'],
  [/\[When Attacking]/g, 'when_attacking'],
  [/\[Your Turn]/g, 'your_turn'],
];

export const keywordTooltip: Map<string, string> = new Map<string, string>([
  ['ace', ''],
  ['all_turns', ''],
  ['alliance', ''],
  ['armor_purge', ''],
  ['at_end_of_opponents_turn', ''],
  ['barrier', ''],
  ['blast_digivolve', ''],
  ['blast_dna_digivolve_angewomon_ladydevimon', ''],
  ['blast_dna_digivolve_wargreymon_metalgarurumonn', ''],
  ['blast_dna_digivolve_durandamon_bryweLudramon', ''],
  ['blast_dna_digivolve_fenriloogamon_kazuchimon', ''],
  ['blast_dna_digivolve_dinobeemon_paildramon', ''],
  ['blast_dna_digivolve_breakdramon_slayerdramon', ''],
  ['blast_dna_digivolve_alphamon_ouryumon', ''],
  ['blitz', ''],
  ['blocker', ''],
  ['burst_digivolve', ''],
  ['breeding', ''],
  ['counter', ''],
  ['collision', ''],
  ['decode_blue_level_4', ''],
  ['decode_blue_level_5', ''],
  ['decoy_bagra_army', ''],
  ['decoy_black', ''],
  ['decoy_black_white', ''],
  ['decoy_d-brigade', ''],
  ['decoy_red_black', ''],
  ['decoy_xros_heart', ''],
  ['de-digivolve', ''],
  ['de-digivolve_1', ''],
  ['de-digivolve_2', ''],
  ['de-digivolve_3', ''],
  ['de-digivolve_4', ''],
  ['delay', ''],
  ['digi-burst_1', ''],
  ['digi-burst_1', ''],
  ['digi-burst_2', ''],
  ['digi-burst_3', ''],
  ['digi-burst_4', ''],
  ['digi-burst_up_to_4', ''],
  ['digisorption_-1', ''],
  ['digisorption_-2', ''],
  ['digisorption_-3', ''],
  ['digivolve', ''],
  ['digivolve', ''],
  ['digixros_-1', ''],
  ['digixros_-2', ''],
  ['digixros_-3', ''],
  ['dna_digivolve', ''],
  ['draw_1', ''],
  ['draw_2', ''],
  ['draw_3', ''],
  ['end_of_all_turns', ''],
  ['end_of_attack', ''],
  ['end_of_opponents_turn', ''],
  ['end_of_your_turn', ''],
  ['evade', ''],
  ['execute', ''],
  ['fortitude', ''],
  ['fragment_3', ''],
  ['hand', ''],
  ['ice_clad', ''],
  ['main', ''],
  ['mind_link', ''],
  ['jamming', ''],
  ['material_save_1', ''],
  ['material_save_2', ''],
  ['material_save_3', ''],
  ['material_save_4', ''],
  ['on_deletion', ''],
  ['on_play', ''],
  ['once_per_turn', ''],
  ['opponents_turn', ''],
  ['overflow_-3', ''],
  ['overflow_-4', ''],
  ['overflow_-5', ''],
  ['overclock_composite_trait', ''],
  ['overclock_puppet_trait', ''],
  ['partition_black_lv.4_yellow_lv.4', ''],
  ['partition_blue_lv.4_green_lv.4', ''],
  ['partition_purple_lv.4_red_lv.4', ''],
  ['partition_red_lv.4_yellow_lv.4', ''],
  ['partition_yellow_lv.6_black_lv.6', ''],
  ['partition_yellow_black_lv.6_green_purple_lv.6', ''],
  ['piercing', ''],
  ['raid', ''],
  ['reboot', ''],
  ['recovery_+1deck', ''],
  ['recovery_+2deck', ''],
  ['retaliation', ''],
  ['rush', ''],
  ['rule', ''],
  ['save', ''],
  ['security', ''],
  ['security_attack', ''],
  ['security_attack_-', ''],
  ['security_attack_+', ''],
  ['security_attack_-1', ''],
  ['security_attack_+1', ''],
  ['security_attack_+2', ''],
  ['security_attack_-2', ''],
  ['security_attack_-_3', ''],
  ['start_of_your_main_phase', ''],
  ['start_of_your_turn', ''],
  ['trash', ''],
  ['twice_per_turn', ''],
  ['when_digivolving', ''],
  ['when_attacking', ''],
  ['vortex', ''],
  ['your_turn', ''],
]);
