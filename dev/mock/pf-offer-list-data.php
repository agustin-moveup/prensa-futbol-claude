<?php defined( 'ABSPATH' ) || exit;

$terms = '18+. Se aplican términos y condiciones. Las apuestas están prohibidas para menores de edad. Juega responsablemente.';

return [

  'codigos' => [
    'title'     => 'Ofertas destacadas',
    'cta_label' => 'Ver todas',
    'cta_href'  => '/casas-de-apuestas',
    'items'     => [
      [
        'rank'           => 1,
        'bm_name'        => 'Betano',
        'bm_brand_color' => '#e01f26',
        'rating'         => 4.8,
        'offer'          => '200% hasta $200.000 CLP en tu primer depósito',
        'promo_code'     => 'LATAMVIP',
        'code_mode'      => 'copy',
        'cta_label'      => 'Obtener bono',
        'cta_href'       => 'https://www.betano.cl/',
        'terms'          => $terms,
      ],
      [
        'rank'           => 2,
        'bm_name'        => 'Novibet',
        'bm_brand_color' => '#1b3a6b',
        'rating'         => 4.6,
        'offer'          => 'Bono exclusivo $200.000 — código solo para lectores',
        'promo_code'     => 'NOVICHILE',
        'code_mode'      => 'reveal',
        'cta_label'      => 'Obtener bono',
        'cta_href'       => 'https://www.novibet.cl/',
        'terms'          => $terms,
      ],
      [
        'rank'           => 3,
        'bm_name'        => 'Stake',
        'bm_brand_color' => '#1a9e6e',
        'rating'         => 4.7,
        'offer'          => 'Apuesta sin riesgo — bono automático sin código',
        'code_mode'      => 'none',
        'cta_label'      => 'Obtener bono',
        'cta_href'       => 'https://www.stake.com/',
        'terms'          => $terms,
      ],
    ],
  ],

  'pros' => [
    'title'     => 'Mejores casas de apuestas',
    'cta_label' => 'Ver ranking completo',
    'cta_href'  => '/casas-de-apuestas',
    'items'     => [
      [
        'rank'           => 1,
        'bm_name'        => 'Stake',
        'bm_brand_color' => '#1a9e6e',
        'rating'         => 4.7,
        'offer'          => 'Apuesta sin riesgo en tu primer depósito',
        'pros'           => [
          'Depósitos instantáneos vía Pix y cripto',
          'Streaming en vivo de más de 10.000 eventos',
          'Cash out disponible en todos los mercados',
        ],
        'cta_label'      => 'Ir a Stake',
        'cta_href'       => 'https://www.stake.com/',
        'terms'          => $terms,
      ],
      [
        'rank'           => 2,
        'bm_name'        => 'Betsson',
        'bm_brand_color' => '#f7a600',
        'rating'         => 4.5,
        'offer'          => '100% de bono en tu primer depósito hasta $100.000',
        'pros'           => [
          'Cuotas mejoradas en fútbol chileno',
          'App móvil disponible en iOS y Android',
          'Atención al cliente 24/7 en español',
        ],
        'cta_label'      => 'Ir a Betsson',
        'cta_href'       => 'https://www.betsson.cl/',
        'terms'          => $terms,
      ],
      [
        'rank'           => 3,
        'bm_name'        => 'Betano',
        'bm_brand_color' => '#e01f26',
        'rating'         => 4.8,
        'offer'          => '200% hasta $200.000 en tu primer depósito',
        'pros'           => [
          'Más de 500 mercados por partido',
          'Retiro en menos de 24 horas',
          'Bonos de recarga semanales',
        ],
        'cta_label'      => 'Ir a Betano',
        'cta_href'       => 'https://www.betano.cl/',
        'terms'          => $terms,
      ],
    ],
  ],

  'codigo_pros' => [
    'title'     => 'Bonos con código exclusivo',
    'cta_label' => 'Ver todas',
    'cta_href'  => '/bonos',
    'items'     => [
      [
        'rank'           => 1,
        'bm_name'        => 'Betano',
        'bm_brand_color' => '#e01f26',
        'rating'         => 4.8,
        'offer'          => '200% hasta $200.000 — solo con código Prensa',
        'promo_code'     => 'LATAMVIP',
        'code_mode'      => 'copy',
        'pros'           => [
          'Bono exclusivo para lectores de Prensa Fútbol',
          'Retiro disponible tras cumplir el rollover x1',
        ],
        'cta_label'      => 'Activar bono',
        'cta_href'       => 'https://www.betano.cl/',
        'terms'          => $terms,
      ],
      [
        'rank'           => 2,
        'bm_name'        => 'Novibet',
        'bm_brand_color' => '#1b3a6b',
        'rating'         => 4.6,
        'offer'          => 'Bono hasta $200.000 + giros gratis',
        'promo_code'     => 'NOVICHILE',
        'code_mode'      => 'reveal',
        'pros'           => [
          'Giros gratis acreditados en 24 horas',
          'Sin requisito mínimo de cuota',
        ],
        'cta_label'      => 'Activar bono',
        'cta_href'       => 'https://www.novibet.cl/',
        'terms'          => $terms,
      ],
    ],
  ],

];
