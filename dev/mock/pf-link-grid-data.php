<?php defined( 'ABSPATH' ) || exit;

return [

  'default' => [
    'heading' => 'Guías y Códigos Promocionales',
    'columns' => [
      [
        'title' => 'Casas de Apuestas',
        'links' => [
          [ 'label' => 'Mejores casas de apuestas Chile',    'url' => '/casas-de-apuestas' ],
          [ 'label' => 'Betano Chile código promo',          'url' => '/casas-de-apuestas/betano' ],
          [ 'label' => 'Betsson bono bienvenida',            'url' => '/casas-de-apuestas/betsson' ],
          [ 'label' => 'Novibet registro Chile',             'url' => '/casas-de-apuestas/novibet' ],
          [ 'label' => 'Codere apuestas deportivas',         'url' => '/casas-de-apuestas/codere' ],
        ],
      ],
      [
        'title' => 'Guías de Apuestas',
        'links' => [
          [ 'label' => 'Cómo apostar en fútbol',            'url' => '/guias/como-apostar-futbol' ],
          [ 'label' => 'Qué es el handicap asiático',       'url' => '/guias/handicap-asiatico' ],
          [ 'label' => 'Apuestas en vivo: guía completa',   'url' => '/guias/apuestas-en-vivo' ],
          [ 'label' => 'Gestión de bankroll',               'url' => '/guias/gestion-bankroll' ],
          [ 'label' => 'Mejores mercados de apuestas',      'url' => '/guias/mercados-apuestas' ],
        ],
      ],
      [
        'title' => 'Competiciones',
        'links' => [
          [ 'label' => 'Apuestas Primera División Chile',   'url' => '/pronosticos/primera-division-chile' ],
          [ 'label' => 'Copa Libertadores cuotas',          'url' => '/pronosticos/copa-libertadores' ],
          [ 'label' => 'CONMEBOL Sudamericana',             'url' => '/pronosticos/sudamericana' ],
          [ 'label' => 'Eliminatorias Sudamericanas',       'url' => '/pronosticos/eliminatorias' ],
          [ 'label' => 'Liga Premier apuestas',             'url' => '/pronosticos/premier-league' ],
        ],
      ],
      [
        'title' => 'Pronósticos',
        'links' => [
          [ 'label' => 'Pronósticos del día',               'url' => '/pronosticos' ],
          [ 'label' => 'Tips de fútbol gratis',             'url' => '/pronosticos/tips-gratis' ],
          [ 'label' => 'Mejores cuotas hoy',                'url' => '/pronosticos/mejores-cuotas' ],
          [ 'label' => 'Predicciones fin de semana',        'url' => '/pronosticos/fin-de-semana' ],
          [ 'label' => 'Análisis de partidos',              'url' => '/pronosticos/analisis' ],
        ],
      ],
    ],
  ],

  'compacto' => [
    'heading' => 'Accesos rápidos',
    'columns' => [
      [
        'title' => 'Lo más buscado',
        'links' => [
          [ 'label' => 'Pronósticos de hoy',                'url' => '/pronosticos' ],
          [ 'label' => 'Mejores casas Chile',               'url' => '/casas-de-apuestas' ],
          [ 'label' => 'Ofertas activas',                   'url' => '/ofertas' ],
        ],
      ],
      [
        'title' => 'Guías populares',
        'links' => [
          [ 'label' => 'Cómo registrarse en Betano',        'url' => '/guias/registro-betano' ],
          [ 'label' => 'Cómo cobrar en Betsson',            'url' => '/guias/cobrar-betsson' ],
          [ 'label' => 'Métodos de pago Chile',             'url' => '/guias/metodos-de-pago' ],
        ],
      ],
    ],
  ],

];
