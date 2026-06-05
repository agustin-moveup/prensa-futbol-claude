<?php defined( 'ABSPATH' ) || exit;

return [

  'features' => [
    'variant' => 'features',
    'eyebrow' => 'Por qué elegirnos',
    'title'   => 'Prensa Fútbol une deporte y apuestas',
    'lead'    => 'Las apuestas deportivas son legales en Chile. Nuestro equipo de expertos analiza cada casa de apuestas para que puedas apostar con seguridad y conocimiento.',
    'items'   => [
      [ 'icon' => 'shield', 'title' => 'Casas licenciadas y reguladas',     'body' => 'Solo recomendamos operadoras con licencia vigente, garantizando que tu dinero y datos estén protegidos.' ],
      [ 'icon' => 'chart',  'title' => 'Cuotas y mercados analizados',       'body' => 'Comparamos cuotas en tiempo real para que siempre encuentres el mejor valor antes de apostar.' ],
      [ 'icon' => 'star',   'title' => 'Opiniones de expertos',              'body' => 'Nuestros tipsters tienen años de experiencia cubriendo fútbol sudamericano, europeo y más.' ],
      [ 'icon' => 'users',  'title' => 'Comunidad activa',                   'body' => 'Únete a miles de aficionados que ya siguen nuestros pronósticos y estrategias cada semana.' ],
      [ 'icon' => 'bolt',   'title' => 'Actualizaciones en tiempo real',     'body' => 'Resultados, cuotas y noticias actualizados al instante para que no te pierdas ningún detalle.' ],
      [ 'icon' => 'globe',  'title' => 'Cobertura internacional',            'body' => 'Liga Chilena, Copa Libertadores, Champions League y más: cubrimos los torneos que te importan.' ],
    ],
    'outro'   => 'Toda la información de Prensa Fútbol tiene carácter informativo. Apuesta de forma responsable. Si crees que tienes un problema con el juego, visita jugarbien.cl.',
  ],

  'faq' => [
    'variant' => 'faq',
    'eyebrow' => 'Preguntas frecuentes',
    'title'   => '¿Cómo elegimos las mejores casas de apuestas en Chile?',
    'lead'    => 'Nuestro proceso de evaluación es riguroso y transparente. Revisamos cada aspecto de la experiencia de usuario antes de hacer una recomendación.',
    'intro'   => 'Cada reseña que publicamos es el resultado de horas de investigación, pruebas reales y análisis comparativo.',
    'items'   => [
      [
        'question'     => 'Calidad de las cuotas y mercados',
        'answer'       => 'Evaluamos el margen del operador en los mercados más populares (1X2, handicap asiático, ambos equipos marcan) comparándolo contra el promedio del sector. Una casa con cuotas competitivas puede marcar la diferencia en tus ganancias a largo plazo.',
        'default_open' => true,
      ],
      [
        'question'     => 'Seguridad y licencias',
        'answer'       => 'Verificamos que la casa de apuestas opere con una licencia válida emitida por un organismo regulador reconocido. También revisamos el historial de pagos, la política de verificación de identidad y las medidas de juego responsable disponibles.',
        'default_open' => false,
      ],
      [
        'question'     => 'Bonos y promociones',
        'answer'       => 'Analizamos el bono de bienvenida, las condiciones de rollover, los plazos de vencimiento y las restricciones de apuesta mínima. Un bono atractivo con requisitos razonables suma puntos; un bono trampa resta.',
        'default_open' => false,
      ],
      [
        'question'     => 'Métodos de pago disponibles en Chile',
        'answer'       => 'Evaluamos la disponibilidad de métodos locales como Webpay, transferencias bancarias en pesos chilenos y billeteras digitales. También revisamos los plazos de retiro y los límites mínimos y máximos de depósito.',
        'default_open' => false,
      ],
    ],
  ],

];
