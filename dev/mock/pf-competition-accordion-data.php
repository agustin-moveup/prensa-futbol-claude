<?php defined( 'ABSPATH' ) || exit;

return [

  'sudamericana' => [
    'competition' => [
      'name'      => 'CONMEBOL Sudamericana',
      'logo_from' => '#f7a600',
      'logo_to'   => '#c27d00',
      'initials'  => 'SA',
    ],
    'is_open' => true,
    'matches' => [
      [
        'status'    => 'finish',
        'kickoff'   => 'Finalizado',
        'team_home' => [ 'name' => 'Sao Paulo',     'initials' => 'SP', 'logo_from' => '#cc0000', 'logo_to' => '#800000' ],
        'team_away' => [ 'name' => 'Boston River',  'initials' => 'BR', 'logo_from' => '#0066cc', 'logo_to' => '#003d7a' ],
        'url'       => '/pronosticos/sao-paulo-vs-boston-river',
        'odds'      => [
          [ 'outcome' => '1', 'bm_name' => 'Betano',    'bm_brand_color' => '#e01f26', 'value' => 1.20, 'deep_link' => 'https://www.betano.cl/' ],
          [ 'outcome' => 'X', 'bm_name' => 'EpicBet',   'bm_brand_color' => '#16a34a', 'value' => 7.00, 'deep_link' => 'https://www.epicbet.com/' ],
          [ 'outcome' => '2', 'bm_name' => 'Novibet',   'bm_brand_color' => '#1b3a6b', 'value' => 15.77, 'deep_link' => 'https://www.novibet.cl/' ],
        ],
      ],
      [
        'status'    => 'live',
        'kickoff'   => 'En vivo',
        'team_home' => [ 'name' => 'Palestino',          'initials' => 'PA', 'logo_from' => '#006600', 'logo_to' => '#004000' ],
        'team_away' => [ 'name' => 'Deportivo Riestra',  'initials' => 'DR', 'logo_from' => '#cc0000', 'logo_to' => '#8b0000' ],
        'url'       => '/pronosticos/palestino-vs-deportivo-riestra',
        'odds'      => [
          [ 'outcome' => '1', 'bm_name' => 'Betano',    'bm_brand_color' => '#e01f26', 'value' => 2.27, 'deep_link' => 'https://www.betano.cl/' ],
          [ 'outcome' => 'X', 'bm_name' => 'Novibet',   'bm_brand_color' => '#1b3a6b', 'value' => 3.20, 'deep_link' => 'https://www.novibet.cl/' ],
          [ 'outcome' => '2', 'bm_name' => 'Fortunazo', 'bm_brand_color' => '#f97316', 'value' => 3.46, 'deep_link' => 'https://www.fortunazo.cl/' ],
        ],
      ],
      [
        'status'    => 'upcoming',
        'kickoff'   => "27 Mayo\n18:00",
        'team_home' => [ 'name' => 'Olimpia',       'initials' => 'OL', 'logo_from' => '#1a1a1a', 'logo_to' => '#000000' ],
        'team_away' => [ 'name' => 'Audax Italiano', 'initials' => 'AI', 'logo_from' => '#006600', 'logo_to' => '#004000' ],
        'url'       => '/pronosticos/olimpia-vs-audax-italiano',
        'odds'      => [
          [ 'outcome' => '1', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 1.65, 'deep_link' => 'https://www.betano.cl/' ],
          [ 'outcome' => 'X', 'bm_name' => 'EpicBet', 'bm_brand_color' => '#16a34a', 'value' => 4.00, 'deep_link' => 'https://www.epicbet.com/' ],
          [ 'outcome' => '2', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 5.40, 'deep_link' => 'https://www.betano.cl/' ],
        ],
      ],
    ],
  ],

  'primera_division' => [
    'competition' => [
      'name'      => 'Primera División Chile',
      'logo_from' => '#FF2F2F',
      'logo_to'   => '#cc0000',
      'initials'  => 'PD',
    ],
    'is_open' => false,
    'matches' => [
      [
        'status'    => 'upcoming',
        'kickoff'   => "28 Mayo\n20:00",
        'team_home' => [ 'name' => 'Colo-Colo',             'initials' => 'CC', 'logo_from' => '#ffffff', 'logo_to' => '#cccccc' ],
        'team_away' => [ 'name' => 'Universidad de Chile',   'initials' => 'UC', 'logo_from' => '#003087', 'logo_to' => '#001a4d' ],
        'url'       => '/pronosticos/colo-colo-vs-u-de-chile',
        'odds'      => [
          [ 'outcome' => '1', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 2.10, 'deep_link' => 'https://www.betano.cl/' ],
          [ 'outcome' => 'X', 'bm_name' => 'Novibet', 'bm_brand_color' => '#1b3a6b', 'value' => 3.25, 'deep_link' => 'https://www.novibet.cl/' ],
          [ 'outcome' => '2', 'bm_name' => 'Betsson', 'bm_brand_color' => '#f7a600', 'value' => 3.50, 'deep_link' => 'https://www.betsson.cl/' ],
        ],
      ],
      [
        'status'    => 'upcoming',
        'kickoff'   => "28 Mayo\n17:30",
        'team_home' => [ 'name' => 'Cobresal',     'initials' => 'CO', 'logo_from' => '#f97316', 'logo_to' => '#c2410c' ],
        'team_away' => [ 'name' => 'Antofagasta',  'initials' => 'AN', 'logo_from' => '#0066cc', 'logo_to' => '#003d7a' ],
        'url'       => '/pronosticos/cobresal-vs-antofagasta',
        'odds'      => [
          [ 'outcome' => '1', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 1.90, 'deep_link' => 'https://www.betano.cl/' ],
          [ 'outcome' => 'X', 'bm_name' => 'EpicBet', 'bm_brand_color' => '#16a34a', 'value' => 3.40, 'deep_link' => 'https://www.epicbet.com/' ],
          [ 'outcome' => '2', 'bm_name' => 'Novibet', 'bm_brand_color' => '#1b3a6b', 'value' => 4.10, 'deep_link' => 'https://www.novibet.cl/' ],
        ],
      ],
    ],
  ],

  'libertadores' => [
    'competition' => [
      'name'      => 'Copa Libertadores',
      'logo_from' => '#c9a84c',
      'logo_to'   => '#8a6a1a',
      'initials'  => 'LI',
    ],
    'is_open' => true,
    'matches' => [
      [
        'status'    => 'live',
        'kickoff'   => 'En vivo',
        'team_home' => [ 'name' => 'River Plate', 'initials' => 'RIV', 'logo_from' => '#cc0000', 'logo_to' => '#8b0000' ],
        'team_away' => [ 'name' => 'Flamengo',    'initials' => 'FLA', 'logo_from' => '#cc0000', 'logo_to' => '#1a1a1a' ],
        'url'       => '/pronosticos/river-plate-vs-flamengo',
        'odds'      => [
          [ 'outcome' => '1', 'bm_name' => 'Betsson', 'bm_brand_color' => '#f7a600', 'value' => 1.85, 'deep_link' => 'https://www.betsson.cl/' ],
          [ 'outcome' => 'X', 'bm_name' => 'Betano',  'bm_brand_color' => '#e01f26', 'value' => 3.60, 'deep_link' => 'https://www.betano.cl/' ],
          [ 'outcome' => '2', 'bm_name' => 'EpicBet', 'bm_brand_color' => '#16a34a', 'value' => 4.20, 'deep_link' => 'https://www.epicbet.com/' ],
        ],
      ],
      [
        'status'    => 'upcoming',
        'kickoff'   => "28 Mayo\n22:30",
        'team_home' => [ 'name' => 'Boca Juniors', 'initials' => 'BOC', 'logo_from' => '#003087', 'logo_to' => '#001a4d' ],
        'team_away' => [ 'name' => 'Palmeiras',    'initials' => 'PAL', 'logo_from' => '#006600', 'logo_to' => '#004000' ],
        'url'       => '/pronosticos/boca-juniors-vs-palmeiras',
        'odds'      => [
          [ 'outcome' => '1', 'bm_name' => 'Betano',    'bm_brand_color' => '#e01f26', 'value' => 2.70, 'deep_link' => 'https://www.betano.cl/' ],
          [ 'outcome' => 'X', 'bm_name' => 'Fortunazo', 'bm_brand_color' => '#f97316', 'value' => 3.10, 'deep_link' => 'https://www.fortunazo.cl/' ],
          [ 'outcome' => '2', 'bm_name' => 'Novibet',   'bm_brand_color' => '#1b3a6b', 'value' => 2.55, 'deep_link' => 'https://www.novibet.cl/' ],
        ],
      ],
    ],
  ],

];
