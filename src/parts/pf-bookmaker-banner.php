<?php defined( 'ABSPATH' ) || exit;

// Variables put in scope by core_bookmaker_render(): $atts, $brand, $bonus.

$type        = $atts['type']            ?? 'sports';
$highlight   = $atts['highlight']       ?? '';
$hl_color    = $atts['highlightcolor']  ?? '';
$cta_text    = $atts['cta']             ?? __( 'Activate bonus', 'pf' );

$bm_name     = $brand['name']           ?? '';
$bm_color    = $brand['color']          ?? '#555';
$bm_logo     = $brand['logo']           ?? '';
$bm_initials = mb_strtoupper( mb_substr( $bm_name, 0, 2 ) );

$tagline     = $bonus['bonusCatchline'] ?? '';
$offer       = $bonus['bonusAmount']    ?? '';
$cta_url     = $bonus['bonusUrl']       ?? ( $brand['website_url'] ?? '#' );

if ( 'casino' === $type ) {
	$terms = $brand['casino_terms'] ?? ( $brand['terms'] ?? '' );
} else {
	$terms = $brand['sports_terms'] ?? ( $brand['terms'] ?? '' );
}
if ( ! $terms ) {
	$terms = __( '18+ · Play responsibly · T&C apply', 'pf' );
}

$block_class = 'pf-bookmaker-banner';
if ( $highlight ) $block_class .= ' pf-bookmaker-banner--highlighted';
if ( '1' === (string) $atts['light'] ) $block_class .= ' pf-bookmaker-banner--light';

$block_style = $hl_color ? 'style="--hl-color:#' . esc_attr( $hl_color ) . ';"' : '';
?>
<aside class="<?php echo esc_attr( $block_class ); ?>"<?php echo $block_style ? ' ' . $block_style : ''; ?>>

  <?php if ( $highlight ) : ?>
    <span class="pf-bookmaker-banner__ribbon"><?php echo esc_html( $highlight ); ?></span>
  <?php endif; ?>

  <div class="pf-bookmaker-banner__inner">

    <div class="pf-bookmaker-banner__left">
      <?php if ( $bm_logo ) : ?>
        <img
          class="pf-bookmaker-banner__logo pf-bookmaker-banner__logo--img"
          src="<?php echo esc_url( $bm_logo ); ?>"
          alt="<?php echo esc_attr( $bm_name ); ?>"
          width="32"
          height="32"
          loading="lazy"
        />
      <?php else : ?>
        <span
          class="pf-bookmaker-banner__logo"
          style="--logo-color:<?php echo esc_attr( $bm_color ); ?>;"
          aria-hidden="true"
        ><?php echo esc_html( $bm_initials ); ?></span>
      <?php endif; ?>

      <span class="pf-bookmaker-banner__name"><?php echo esc_html( $bm_name ); ?></span>

      <?php if ( $tagline ) : ?>
        <span class="pf-bookmaker-banner__sep" aria-hidden="true">·</span>
        <span class="pf-bookmaker-banner__tagline"><?php echo esc_html( $tagline ); ?></span>
      <?php endif; ?>

      <?php if ( $offer ) : ?>
        <span class="pf-bookmaker-banner__sep" aria-hidden="true">·</span>
        <span class="pf-bookmaker-banner__value"><?php echo esc_html( $offer ); ?></span>
      <?php endif; ?>
    </div>

    <a
      href="<?php echo esc_url( $cta_url ); ?>"
      class="pf-bookmaker-banner__cta"
      target="_blank"
      rel="nofollow sponsored noopener"
    ><?php echo esc_html( $cta_text ); ?></a>

  </div>

  <p class="pf-bookmaker-banner__disclaimer"><?php echo esc_html( $terms ); ?></p>

</aside>
