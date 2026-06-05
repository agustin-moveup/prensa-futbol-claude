<?php defined( 'ABSPATH' ) || exit;

$disclaimer = '18+ | Se aplican términos y condiciones | Juega responsablemente';

$items_full = [
  [
    'rank'       => 1,
    'bm_name'   => 'Betano',
    'logo_from' => '#e01f26',
    'logo_to'   => '#8b0000',
    'initials'  => 'BT',
    'rating'    => 4.8,
    'bonus'     => '200% hasta $200.000 CLP',
    'cta_url'   => 'https://www.betano.cl/',
    'cta_label' => 'Actívalo',
    'disclaimer' => $disclaimer,
  ],
  [
    'rank'       => 2,
    'bm_name'   => 'Novibet',
    'logo_from' => '#1b3a6b',
    'logo_to'   => '#0d1f3c',
    'initials'  => 'NV',
    'rating'    => 4.6,
    'bonus'     => 'Bono hasta $200.000 CLP',
    'cta_url'   => 'https://www.novibet.cl/',
    'cta_label' => 'Actívalo',
    'disclaimer' => $disclaimer,
  ],
  [
    'rank'       => 3,
    'bm_name'   => 'Epicbet',
    'logo_from' => '#16a34a',
    'logo_to'   => '#14532d',
    'initials'  => 'EP',
    'rating'    => 4.5,
    'bonus'     => '100% hasta $200.000 + depósito bonificado',
    'cta_url'   => 'https://www.epicbet.com/',
    'cta_label' => 'Actívalo',
    'disclaimer' => $disclaimer,
  ],
  [
    'rank'       => 4,
    'bm_name'   => 'Fortunazo',
    'logo_from' => '#f97316',
    'logo_to'   => '#c2410c',
    'initials'  => 'FZ',
    'rating'    => 4.3,
    'bonus'     => '500% + apuestas gratis por 1 año',
    'cta_url'   => 'https://www.fortunazo.cl/',
    'cta_label' => 'Actívalo',
    'disclaimer' => $disclaimer,
  ],
];

return [

  'card' => [
    'variant' => 'card',
    'title'   => 'Top casas de apuestas Chile',
    'items'   => $items_full,
  ],

  'sidebar' => [
    'variant' => 'sidebar',
    'title'   => 'Top Casas Chile',
    'items'   => array_slice( $items_full, 0, 3 ),
  ],

  'table' => [
    'variant' => 'table',
    'title'   => 'Comparativa de Casas de Apuestas',
    'items'   => $items_full,
  ],

];
