<?php defined( 'ABSPATH' ) || exit;

return [

  'clasico_chileno' => [
    'competition' => 'Primera División Chile',
    'kickoff'     => 'Hoy · 20:00',
    'is_live'     => false,
    'team_home'   => [
      'name'       => 'Colo-Colo',
      'short_name' => 'COL',
      'color_from' => '#ffffff',
      'color_to'   => '#cccccc',
    ],
    'team_away'   => [
      'name'       => 'Universidad de Chile',
      'short_name' => 'UCH',
      'color_from' => '#003087',
      'color_to'   => '#001a4d',
    ],
    'tip_text'    => 'Colo-Colo para ganar en casa',
    'odds'        => [
      [ 'outcome' => '1', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 2.10, 'is_best' => true,  'deep_link' => 'https://www.betano.cl/' ],
      [ 'outcome' => 'X', 'bm_name' => 'Novibet', 'bm_brand_color' => '#1b3a6b', 'value' => 3.25, 'is_best' => false, 'deep_link' => 'https://www.novibet.cl/' ],
      [ 'outcome' => '2', 'bm_name' => 'Codere',  'bm_brand_color' => '#1a7233', 'value' => 3.50, 'is_best' => false, 'deep_link' => 'https://www.codere.cl/' ],
    ],
    'match_url'   => '/pronosticos/colo-colo-vs-universidad-de-chile',
    'cta_label'   => 'Ver análisis del partido',
  ],

  'clasico_en_vivo' => [
    'competition' => 'Primera División Chile',
    'kickoff'     => 'Hoy · 20:00',
    'is_live'     => true,
    'live_score'  => '1 - 0',
    'team_home'   => [
      'name'       => 'Colo-Colo',
      'short_name' => 'COL',
      'color_from' => '#ffffff',
      'color_to'   => '#cccccc',
    ],
    'team_away'   => [
      'name'       => 'Universidad de Chile',
      'short_name' => 'UCH',
      'color_from' => '#003087',
      'color_to'   => '#001a4d',
    ],
    'tip_text'    => 'Colo-Colo mantiene la ventaja — apuesta al marcador final',
    'odds'        => [
      [ 'outcome' => '1', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 1.75, 'is_best' => true,  'deep_link' => 'https://www.betano.cl/' ],
      [ 'outcome' => 'X', 'bm_name' => 'Betsson', 'bm_brand_color' => '#f7a600', 'value' => 3.80, 'is_best' => false, 'deep_link' => 'https://www.betsson.cl/' ],
      [ 'outcome' => '2', 'bm_name' => 'Codere',  'bm_brand_color' => '#1a7233', 'value' => 4.50, 'is_best' => false, 'deep_link' => 'https://www.codere.cl/' ],
    ],
    'match_url'   => '/pronosticos/colo-colo-vs-universidad-de-chile',
    'cta_label'   => 'Ver análisis en vivo',
  ],

  'libertadores' => [
    'competition' => 'Copa Libertadores',
    'kickoff'     => 'Hoy · 22:30',
    'is_live'     => false,
    'team_home'   => [
      'name'       => 'River Plate',
      'short_name' => 'RIV',
      'color_from' => '#cc0000',
      'color_to'   => '#8b0000',
    ],
    'team_away'   => [
      'name'       => 'Flamengo',
      'short_name' => 'FLA',
      'color_from' => '#cc0000',
      'color_to'   => '#1a1a1a',
    ],
    'tip_text'    => 'River Plate para ganar por más de 1 gol',
    'odds'        => [
      [ 'outcome' => '1', 'bm_name' => 'Betsson', 'bm_brand_color' => '#f7a600', 'value' => 1.85, 'is_best' => true,  'deep_link' => 'https://www.betsson.cl/' ],
      [ 'outcome' => 'X', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 3.60, 'is_best' => false, 'deep_link' => 'https://www.betano.cl/' ],
      [ 'outcome' => '2', 'bm_name' => 'EpicBet', 'bm_brand_color' => '#16a34a', 'value' => 4.20, 'is_best' => false, 'deep_link' => 'https://www.epicbet.com/' ],
    ],
    'match_url'   => '/pronosticos/river-plate-vs-flamengo',
    'cta_label'   => 'Ver análisis del partido',
  ],

  'premier_league' => [
    'competition' => 'Premier League',
    'kickoff'     => 'Mañana · 17:30',
    'is_live'     => false,
    'team_home'   => [
      'name'       => 'Arsenal',
      'short_name' => 'ARS',
      'color_from' => '#EF0107',
      'color_to'   => '#9c0000',
    ],
    'team_away'   => [
      'name'       => 'Manchester City',
      'short_name' => 'MCI',
      'color_from' => '#6CABDD',
      'color_to'   => '#1c5fa8',
    ],
    'tip_text'    => 'Arsenal para ganar en casa',
    'odds'        => [
      [ 'outcome' => '1', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 2.45, 'is_best' => true,  'deep_link' => 'https://www.betano.cl/' ],
      [ 'outcome' => 'X', 'bm_name' => 'Coolbet', 'bm_brand_color' => '#0a4f8f', 'value' => 3.10, 'is_best' => false, 'deep_link' => 'https://www.coolbet.com/' ],
      [ 'outcome' => '2', 'bm_name' => 'Codere',  'bm_brand_color' => '#1a7233', 'value' => 2.95, 'is_best' => false, 'deep_link' => 'https://www.codere.cl/' ],
    ],
    'match_url'   => '/pronosticos/arsenal-vs-manchester-city',
    'cta_label'   => 'Ver análisis del partido',
  ],

];
