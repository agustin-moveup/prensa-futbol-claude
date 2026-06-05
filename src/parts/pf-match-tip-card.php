<?php defined( 'ABSPATH' ) || exit;

$competition = $data['competition']  ?? '';
$kickoff     = $data['kickoff']      ?? '';
$is_live     = ! empty( $data['is_live'] );
$live_score  = $data['live_score']   ?? '';
$home        = $data['team_home']    ?? [];
$away        = $data['team_away']    ?? [];
$tip_text    = $data['tip_text']     ?? '';
$odds        = $data['odds']         ?? [];
$match_url   = $data['match_url']    ?? '#';
$cta_label   = $data['cta_label']    ?? 'Ver análisis del partido';
?>
<article class="pf-match-tip-card">

  <header class="pf-match-tip-card__header">
    <span class="pf-match-tip-card__competition"><?php echo esc_html( $competition ); ?></span>
    <div class="pf-match-tip-card__meta">
      <?php if ( $is_live ) : ?>
        <span class="pf-match-tip-card__live-dot" aria-hidden="true"></span>
        <span class="pf-match-tip-card__live-label">EN VIVO</span>
        <?php if ( $live_score ) : ?>
          <span class="pf-match-tip-card__live-score"><?php echo esc_html( $live_score ); ?></span>
        <?php endif; ?>
      <?php else : ?>
        <time class="pf-match-tip-card__kickoff" datetime="<?php echo esc_attr( $kickoff ); ?>">
          <?php echo esc_html( $kickoff ); ?>
        </time>
      <?php endif; ?>
    </div>
  </header>

  <div class="pf-match-tip-card__matchup">

    <div class="pf-match-tip-card__team pf-match-tip-card__team--home">
      <span
        class="pf-match-tip-card__team-logo"
        style="--team-color-from:<?php echo esc_attr( $home['color_from'] ?? '#555' ); ?>;--team-color-to:<?php echo esc_attr( $home['color_to'] ?? '#222' ); ?>;"
        aria-hidden="true"
      ><?php echo esc_html( mb_substr( $home['short_name'] ?? '', 0, 3 ) ); ?></span>
      <span class="pf-match-tip-card__team-name"><?php echo esc_html( $home['name'] ?? '' ); ?></span>
    </div>

    <span class="pf-match-tip-card__vs" aria-hidden="true">VS</span>

    <div class="pf-match-tip-card__team pf-match-tip-card__team--away">
      <span
        class="pf-match-tip-card__team-logo"
        style="--team-color-from:<?php echo esc_attr( $away['color_from'] ?? '#555' ); ?>;--team-color-to:<?php echo esc_attr( $away['color_to'] ?? '#222' ); ?>;"
        aria-hidden="true"
      ><?php echo esc_html( mb_substr( $away['short_name'] ?? '', 0, 3 ) ); ?></span>
      <span class="pf-match-tip-card__team-name"><?php echo esc_html( $away['name'] ?? '' ); ?></span>
    </div>

  </div>

  <div class="pf-match-tip-card__tip-box">
    <span class="pf-match-tip-card__tip-label">Tip experto</span>
    <p class="pf-match-tip-card__tip-text"><?php echo esc_html( $tip_text ); ?></p>
  </div>

  <div class="pf-match-tip-card__odds" role="list">
    <?php foreach ( $odds as $odd ) :
      $is_best    = ! empty( $odd['is_best'] );
      $pill_class = 'pf-match-tip-card__odd-pill' . ( $is_best ? ' pf-match-tip-card__odd-pill--best' : '' );
      $outcome    = $odd['outcome']         ?? '';
      $bm_name    = $odd['bm_name']         ?? '';
      $bm_color   = $odd['bm_brand_color']  ?? '#555';
      $value      = number_format( (float) ( $odd['value'] ?? 0 ), 2 );
      $deep_link  = $odd['deep_link']       ?? '#';
      $bm_initials = mb_strtoupper( mb_substr( $bm_name, 0, 2 ) );
    ?>
      <a
        href="<?php echo esc_url( $deep_link ); ?>"
        class="<?php echo esc_attr( $pill_class ); ?>"
        target="_blank"
        rel="nofollow sponsored noopener"
        aria-label="<?php echo esc_attr( "$outcome: $value en $bm_name" ); ?>"
      >
        <span class="pf-match-tip-card__odd-outcome"><?php echo esc_html( $outcome ); ?></span>
        <span
          class="pf-match-tip-card__odd-bm-logo"
          style="--bm-brand-color:<?php echo esc_attr( $bm_color ); ?>;"
          aria-hidden="true"
        ><?php echo esc_html( $bm_initials ); ?></span>
        <span class="pf-match-tip-card__odd-value"><?php echo esc_html( $value ); ?></span>
        <?php if ( $is_best ) : ?>
          <span class="pf-match-tip-card__odd-best-badge" aria-label="Mejor cuota">BEST</span>
        <?php endif; ?>
      </a>
    <?php endforeach; ?>
  </div>

  <a href="<?php echo esc_url( $match_url ); ?>" class="pf-match-tip-card__cta">
    <?php echo esc_html( $cta_label ); ?>
    <svg class="pf-match-tip-card__cta-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>

</article>
