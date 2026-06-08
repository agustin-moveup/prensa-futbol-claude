<?php defined( 'ABSPATH' ) || exit;

/*
 * Mock fixtures for themes/pf/src/parts/pf-bookmaker-banner.php.
 * Each entry mirrors the exact shape core_bookmaker_render() puts in scope:
 * $atts / $brand / $bonus.
 */

return [

	/* 1. Standard sports banner, copyable code, full pros + bonus + terms. */
	'standard_copy' => [
		'atts' => [
			'id'             => 'mock-coolbet',
			'type'           => 'sports',
			'position'       => 1,
			'light'          => '0',
			'highlight'      => '',
			'highlightcolor' => '',
			'cta'            => 'APOSTAR',
			'reviewurl'      => '',
		],
		'brand' => [
			'name'             => 'Coolbet',
			'identifier'       => 'coolbet',
			'color'            => '#0a1f44',
			'logo'             => 'https://via.placeholder.com/80x80/0a1f44/ffffff?text=CB',
			'transparent_logo' => '',
			'website_url'      => 'https://prensa.test/go-coolbet',
			'rate'             => 4.6,
			'sports_pros'      => "Cuotas competitivas en fútbol chileno\nApp móvil rápida y estable\nRetiros procesados en menos de 24h",
			'casino_pros'      => '',
			'sports_terms'     => 'Solo mayores de 18 años. Aplican términos y condiciones. Juega con responsabilidad.',
			'terms'            => '',
		],
		'bonus' => [
			'bonusAmount'    => '100% hasta $50.000',
			'bonusCode'      => 'PRENSA100',
			'bonusName'      => 'Bono de bienvenida',
			'bonusCatchline' => 'Duplica tu primer depósito',
			'bonusUrl'       => 'https://prensa.test/go-coolbet',
			'bonusDetail'    => null,
			'is_blurred'     => false,
			'is_revealed'    => true,
		],
	],

	/* 2. Featured (ribbon) + blurred code (reveal-on-click CRO branch). */
	'featured_blurred' => [
		'atts' => [
			'id'             => 'mock-betano',
			'type'           => 'sports',
			'position'       => 1,
			'light'          => '0',
			'highlight'      => 'MÁS POPULAR',
			'highlightcolor' => 'ff6b00',
			'cta'            => 'APOSTAR AHORA',
			'reviewurl'      => '',
		],
		'brand' => [
			'name'             => 'Betano',
			'identifier'       => 'betano',
			'color'            => '#ff6b00',
			'logo'             => 'https://via.placeholder.com/80x80/ff6b00/ffffff?text=B',
			'transparent_logo' => '',
			'website_url'      => 'https://prensa.test/go-betano',
			'rate'             => 4.8,
			'sports_pros'      => "Líder en apuestas deportivas en Chile\nStreaming en vivo gratuito\nMejores cuotas para la Primera División",
			'sports_terms'     => 'Solo mayores de 18 años. Bono sujeto a rollover x5. Juega con responsabilidad.',
			'terms'            => '',
		],
		'bonus' => [
			'bonusAmount'    => '200% hasta $100.000',
			'bonusCode'      => 'PRENSABET',
			'bonusName'      => 'Bono deportivo',
			'bonusCatchline' => 'El mejor bono del mercado',
			'bonusUrl'       => 'https://prensa.test/go-betano',
			'bonusDetail'    => null,
			'is_blurred'     => true,
			'is_revealed'    => false,
		],
	],

	/* 3. Light variant: no code, no pros list, just a tagline + CTA. */
	'light' => [
		'atts' => [
			'id'             => 'mock-jugabet',
			'type'           => 'sports',
			'position'       => 2,
			'light'          => '1',
			'highlight'      => '',
			'highlightcolor' => '',
			'cta'            => 'VER OFERTA',
			'reviewurl'      => '',
		],
		'brand' => [
			'name'             => 'Jugabet',
			'identifier'       => 'jugabet',
			'color'            => '#00b86b',
			'logo'             => 'https://via.placeholder.com/80x80/00b86b/ffffff?text=J',
			'transparent_logo' => '',
			'website_url'      => 'https://prensa.test/go-jugabet',
			'rate'             => 4.2,
			'sports_pros'      => "Registro en menos de 2 minutos\nDepósitos sin comisión\nSoporte 24/7 en español",
			'sports_terms'     => '',
			'terms'            => 'Solo mayores de 18 años.',
		],
		'bonus' => [
			'bonusAmount'    => '',
			'bonusCode'      => '',
			'bonusName'      => '',
			'bonusCatchline' => '',
			'bonusUrl'       => 'https://prensa.test/go-jugabet',
			'bonusDetail'    => null,
			'is_blurred'     => false,
			'is_revealed'    => false,
		],
	],

	/* 4. Casino type: pros come from casino_pros, terms from casino_terms. */
	'casino' => [
		'atts' => [
			'id'             => 'mock-betsson',
			'type'           => 'casino',
			'position'       => 3,
			'light'          => '0',
			'highlight'      => '',
			'highlightcolor' => '',
			'cta'            => 'JUGAR',
			'reviewurl'      => '',
		],
		'brand' => [
			'name'             => 'Betsson Casino',
			'identifier'       => 'betsson',
			'color'            => '#f5a623',
			'logo'             => 'https://via.placeholder.com/80x80/f5a623/000000?text=BS',
			'transparent_logo' => '',
			'website_url'      => 'https://prensa.test/go-betsson',
			'rate'             => 4.4,
			'sports_pros'      => '',
			'casino_pros'      => "Más de 2.000 tragamonedas\nMesas de ruleta en vivo\nGiros gratis cada semana",
			'sports_terms'     => '',
			'casino_terms'     => 'Solo mayores de 18 años. Giros sujetos a rollover x30.',
			'terms'            => '',
		],
		'bonus' => [
			'bonusAmount'    => '50 giros gratis',
			'bonusCode'      => 'PRENSACASINO',
			'bonusName'      => 'Bono de casino',
			'bonusCatchline' => 'Sin depósito requerido',
			'bonusUrl'       => 'https://prensa.test/go-betsson',
			'bonusDetail'    => null,
			'is_blurred'     => false,
			'is_revealed'    => true,
		],
	],

];
