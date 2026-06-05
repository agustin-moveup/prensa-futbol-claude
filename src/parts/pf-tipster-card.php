<?php defined( 'ABSPATH' ) || exit;

$tipster      = $data['tipster']             ?? [];
$profile_url  = $tipster['profile_url']      ?? '#';
$avatar_from  = $tipster['avatar_from']      ?? '#555';
$avatar_to    = $tipster['avatar_to']        ?? '#222';
$initials     = $tipster['initials']         ?? '';
$name         = $tipster['name']             ?? '';
$specialty    = $tipster['specialty']        ?? '';

$pick         = $data['pick']                ?? [];
$pick_label   = $pick['label']               ?? '';
$bm_name      = $pick['bm_name']             ?? '';
$bm_color     = $pick['bm_brand_color']      ?? '#555';
$bm_text      = $pick['bm_text_color']       ?? '#ffffff';
$odds         = number_format( (float) ( $pick['odds'] ?? 0 ), 2 );
$cta_url      = $pick['cta_url']             ?? '#';
$cta_label    = $pick['cta_label']           ?? __( 'Bet now', 'pf' );

$quote        = $data['quote']               ?? '';
?>
<article class="pf-tipster-card">

  <div class="pf-tipster-card__top">

    <div class="pf-tipster-card__identity">
      <a href="<?php echo esc_url( $profile_url ); ?>" class="pf-tipster-card__avatar-link" aria-label="<?php printf( esc_html__( 'View %s profile', 'pf' ), esc_attr( $name ) ); ?>">
        <span
          class="pf-tipster-card__avatar"
          style="--avatar-from:<?php echo esc_attr( $avatar_from ); ?>;--avatar-to:<?php echo esc_attr( $avatar_to ); ?>;"
          aria-hidden="true"
        ><?php echo esc_html( $initials ); ?></span>
      </a>
      <div class="pf-tipster-card__meta">
        <a href="<?php echo esc_url( $profile_url ); ?>" class="pf-tipster-card__name"><?php echo esc_html( $name ); ?></a>
        <span class="pf-tipster-card__specialty"><?php echo esc_html( $specialty ); ?></span>
      </div>
    </div>

    <div class="pf-tipster-card__divider" aria-hidden="true"></div>

    <div class="pf-tipster-card__pick">
      <span class="pf-tipster-card__pick-label"><?php echo esc_html( $pick_label ); ?></span>
      <div class="pf-tipster-card__pick-odds">
        <a
          href="<?php echo esc_url( $cta_url ); ?>"
          class="pf-tipster-card__bm-pill"
          style="--bm-brand-color:<?php echo esc_attr( $bm_color ); ?>;--bm-text-color:<?php echo esc_attr( $bm_text ); ?>;"
          target="_blank"
          rel="nofollow sponsored noopener"
          aria-label="<?php printf( esc_html__( '%1$s: odds %2$s', 'pf' ), esc_attr( $bm_name ), esc_attr( $odds ) ); ?>"
        >
          <span class="pf-tipster-card__bm-name"><?php echo esc_html( $bm_name ); ?></span>
          <span class="pf-tipster-card__bm-odds"><?php echo esc_html( $odds ); ?></span>
        </a>
      </div>
      <a href="<?php echo esc_url( $cta_url ); ?>" class="pf-tipster-card__cta" target="_blank" rel="nofollow sponsored noopener">
        <?php echo esc_html( $cta_label ); ?>
      </a>
    </div>

  </div>

  <div class="pf-tipster-card__quote-row">
    <blockquote class="pf-tipster-card__quote">
      <p>"<?php echo esc_html( $quote ); ?>"</p>
    </blockquote>
  </div>

</article>
