<?php defined( 'ABSPATH' ) || exit;

$title       = $data['title']        ?? '';
$subtitle    = $data['subtitle']     ?? '';
$competition = $data['competition']  ?? '';
$team_home   = $data['team_home']    ?? '';
$team_away   = $data['team_away']    ?? '';
$items       = $data['items']        ?? [];

$star_path = 'M8 1.2 9.96 5.6l4.84.42-3.66 3.18 1.1 4.7L8 11.55 3.76 13.9l1.1-4.7L1.2 6.02l4.84-.42L8 1.2Z';

// Find best odds per column
$best_home = $best_draw = $best_away = 0;
foreach ( $items as $item ) {
  $best_home = max( $best_home, (float) ( $item['odds_home'] ?? 0 ) );
  $best_draw = max( $best_draw, (float) ( $item['odds_draw'] ?? 0 ) );
  $best_away = max( $best_away, (float) ( $item['odds_away'] ?? 0 ) );
}
?>
<section class="pf-match-odds">

  <header class="pf-match-odds__header">
    <?php if ( $competition ) : ?>
      <span class="pf-match-odds__competition"><?php echo esc_html( $competition ); ?></span>
    <?php endif; ?>
    <h2 class="pf-match-odds__title"><?php echo esc_html( $title ); ?></h2>
    <?php if ( $subtitle ) : ?>
      <p class="pf-match-odds__subtitle"><?php echo esc_html( $subtitle ); ?></p>
    <?php endif; ?>
  </header>

  <div class="pf-match-odds__table">

    <div class="pf-match-odds__col-headers" aria-hidden="true">
      <span></span>
      <span><?php echo esc_html( $team_home ); ?></span>
      <span>Empate</span>
      <span><?php echo esc_html( $team_away ); ?></span>
      <span></span>
    </div>

    <ol class="pf-match-odds__list">
      <?php foreach ( $items as $item ) :
        $bm_name    = $item['bm_name']     ?? '';
        $bm_color   = $item['bm_brand_color'] ?? '#555';
        $rating     = (float) ( $item['rating'] ?? 0 );
        $star_pct   = round( max( 0, min( 100, ( $rating / 5 ) * 100 ) ) );
        $odds_home  = (float) ( $item['odds_home'] ?? 0 );
        $odds_draw  = (float) ( $item['odds_draw'] ?? 0 );
        $odds_away  = (float) ( $item['odds_away'] ?? 0 );
        $cta_href   = $item['cta_href']    ?? '#';
        $cta_label  = $item['cta_label']   ?? 'Apostar';
        $bm_initials = mb_strtoupper( mb_substr( $bm_name, 0, 2 ) );
      ?>
        <li class="pf-match-odds__row">

          <div class="pf-match-odds__bm">
            <span class="pf-match-odds__bm-logo" style="--bm-brand-color:<?php echo esc_attr( $bm_color ); ?>;" aria-hidden="true"><?php echo esc_html( $bm_initials ); ?></span>
            <div class="pf-match-odds__bm-info">
              <span class="pf-match-odds__bm-name"><?php echo esc_html( $bm_name ); ?></span>
              <span class="pf-match-odds__bm-rating" aria-label="<?php echo esc_attr( number_format( $rating, 1 ) . ' de 5' ); ?>">
                <span class="pf-match-odds__stars">
                  <span class="pf-match-odds__stars-track" aria-hidden="true">
                    <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="12" height="12"><path d="<?php echo esc_attr( $star_path ); ?>"/></svg>
                    <?php endfor; ?>
                  </span>
                  <span class="pf-match-odds__stars-fill" style="width:<?php echo esc_attr( $star_pct ); ?>%;" aria-hidden="true">
                    <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="12" height="12"><path d="<?php echo esc_attr( $star_path ); ?>"/></svg>
                    <?php endfor; ?>
                  </span>
                </span>
                <span class="pf-match-odds__bm-rating-num"><?php echo esc_html( number_format( $rating, 1 ) ); ?></span>
              </span>
            </div>
          </div>

          <?php
          foreach ( [
            [ 'value' => $odds_home, 'best' => $best_home, 'label' => '1' ],
            [ 'value' => $odds_draw, 'best' => $best_draw, 'label' => 'X' ],
            [ 'value' => $odds_away, 'best' => $best_away, 'label' => '2' ],
          ] as $cell ) :
            $is_best   = $cell['value'] === $cell['best'];
            $odd_class = 'pf-match-odds__odd' . ( $is_best ? ' pf-match-odds__odd--best' : '' );
            $val_str   = number_format( $cell['value'], 2 );
          ?>
            <a
              href="<?php echo esc_url( $cta_href ); ?>"
              class="<?php echo esc_attr( $odd_class ); ?>"
              target="_blank"
              rel="nofollow sponsored noopener"
              aria-label="<?php echo esc_attr( $cell['label'] . ': ' . $val_str ); ?>"
            >
              <span class="pf-match-odds__odd-label"><?php echo esc_html( $cell['label'] ); ?></span>
              <span class="pf-match-odds__odd-value"><?php echo esc_html( $val_str ); ?></span>
            </a>
          <?php endforeach; ?>

          <a href="<?php echo esc_url( $cta_href ); ?>" class="pf-match-odds__cta" target="_blank" rel="nofollow sponsored noopener">
            <?php echo esc_html( $cta_label ); ?>
            <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" width="12" height="12">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

        </li>
      <?php endforeach; ?>
    </ol>

  </div>
</section>
