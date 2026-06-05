<?php defined( 'ABSPATH' ) || exit;

$bm         = $data['bookmaker']       ?? [];
$logo_from  = $bm['logo_from']         ?? '#555';
$logo_to    = $bm['logo_to']           ?? '#222';
$initials   = $bm['initials']          ?? '';
$bm_name    = $bm['name']              ?? '';
$tagline    = $data['offer_tagline']   ?? '';
$value      = $data['offer_value']     ?? '';
$cta_label  = $data['cta_label']       ?? 'Activar bono';
$cta_url    = $data['cta_url']         ?? '#';
$disclaimer = $data['disclaimer']      ?? '18+ · Juega con responsabilidad · T&C aplican';
?>
<aside class="pf-bookmaker-banner">
  <div class="pf-bookmaker-banner__inner">

    <div class="pf-bookmaker-banner__left">
      <span
        class="pf-bookmaker-banner__logo"
        style="--logo-from:<?php echo esc_attr( $logo_from ); ?>;--logo-to:<?php echo esc_attr( $logo_to ); ?>;"
        aria-hidden="true"
      ><?php echo esc_html( $initials ); ?></span>

      <span class="pf-bookmaker-banner__name"><?php echo esc_html( $bm_name ); ?></span>
      <span class="pf-bookmaker-banner__sep" aria-hidden="true">·</span>
      <span class="pf-bookmaker-banner__tagline"><?php echo esc_html( $tagline ); ?></span>
      <span class="pf-bookmaker-banner__sep" aria-hidden="true">·</span>
      <span class="pf-bookmaker-banner__value"><?php echo esc_html( $value ); ?></span>
    </div>

    <a
      href="<?php echo esc_url( $cta_url ); ?>"
      class="pf-bookmaker-banner__cta"
      target="_blank"
      rel="nofollow sponsored noopener"
    ><?php echo esc_html( $cta_label ); ?></a>

  </div>
  <p class="pf-bookmaker-banner__disclaimer"><?php echo esc_html( $disclaimer ); ?></p>
</aside>
