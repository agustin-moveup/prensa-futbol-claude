<?php defined( 'ABSPATH' ) || exit;

$variant = $data['variant'] ?? 'card';
$title   = $data['title']   ?? 'Mejores Casas de Apuestas';
$items   = $data['items']   ?? [];

$list_class = 'pf-bookmaker-list pf-bookmaker-list--' . esc_attr( $variant );
?>
<section class="<?php echo esc_attr( $list_class ); ?>">

  <?php if ( $title ) : ?>
    <h2 class="pf-bookmaker-list__title"><?php echo esc_html( $title ); ?></h2>
  <?php endif; ?>

  <?php if ( 'table' === $variant ) : ?>
    <div class="pf-bookmaker-list__table-header" aria-hidden="true">
      <span class="pf-bookmaker-list__col pf-bookmaker-list__col--rank">#</span>
      <span class="pf-bookmaker-list__col pf-bookmaker-list__col--logo-name">Casa</span>
      <span class="pf-bookmaker-list__col pf-bookmaker-list__col--rating">Rating</span>
      <span class="pf-bookmaker-list__col pf-bookmaker-list__col--bonus">Bono</span>
      <span class="pf-bookmaker-list__col pf-bookmaker-list__col--cta"></span>
    </div>
  <?php endif; ?>

  <ol class="pf-bookmaker-list__list" aria-label="<?php echo esc_attr( $title ); ?>">
    <?php foreach ( $items as $item ) :
      $rank       = (int) ( $item['rank']             ?? 0 );
      $bm_name    = $item['bm_name']                  ?? '';
      $logo_from  = $item['logo_from']                ?? '#555';
      $logo_to    = $item['logo_to']                  ?? '#222';
      $initials   = $item['initials']                 ?? '';
      $rating     = (float) ( $item['rating']         ?? 0 );
      $bonus      = $item['bonus']                    ?? '';
      $cta_url    = $item['cta_url']                  ?? '#';
      $cta_label  = $item['cta_label']                ?? 'Activar';
      $disclaimer = $item['disclaimer']               ?? '';
      $logo_size  = 'sidebar' === $variant ? '40px' : ( 'table' === $variant ? '32px' : '48px' );

      $rank_class = 'pf-bookmaker-list__rank' . ( 1 === $rank ? ' pf-bookmaker-list__rank--gold' : '' );

      // Stars
      $full_stars  = (int) floor( $rating );
      $half_star   = ( fmod( $rating, 1 ) >= 0.5 );
      $empty_stars = 5 - $full_stars - ( $half_star ? 1 : 0 );

      $star_path = 'M6 1l1.4 2.8 3.1.45-2.25 2.19.53 3.09L6 8.05 3.22 9.53l.53-3.09L1.5 4.25l3.1-.45z';
    ?>

      <?php if ( 'card' === $variant ) : ?>

        <li class="pf-bookmaker-list__item">
          <div class="pf-bookmaker-list__item-main">
            <div class="pf-bookmaker-list__item-left">
              <div class="pf-bookmaker-list__logo-wrap">
                <span
                  class="pf-bookmaker-list__logo"
                  style="--logo-from:<?php echo esc_attr( $logo_from ); ?>;--logo-to:<?php echo esc_attr( $logo_to ); ?>;--logo-size:<?php echo esc_attr( $logo_size ); ?>;"
                  aria-hidden="true"
                ><?php echo esc_html( $initials ); ?></span>
                <span class="<?php echo esc_attr( $rank_class ); ?>"><?php echo esc_html( $rank ); ?></span>
              </div>
              <div class="pf-bookmaker-list__item-info">
                <span class="pf-bookmaker-list__bm-name"><?php echo esc_html( $bm_name ); ?></span>
                <span class="pf-bookmaker-list__rating" aria-label="<?php echo esc_attr( number_format( $rating, 1 ) . ' de 5 estrellas' ); ?>">
                  <?php for ( $i = 0; $i < $full_stars; $i++ ) : ?>
                    <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--full" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="<?php echo esc_attr( $star_path ); ?>" fill="currentColor" stroke="currentColor" stroke-width="0.8"/></svg>
                  <?php endfor; ?>
                  <?php if ( $half_star ) : ?>
                    <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--half" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><defs><clipPath id="pf-half-<?php echo esc_attr( $rank ); ?>"><rect x="0" y="0" width="6" height="12"/></clipPath></defs><path d="<?php echo esc_attr( $star_path ); ?>" fill="currentColor" clip-path="url(#pf-half-<?php echo esc_attr( $rank ); ?>)"/><path d="<?php echo esc_attr( $star_path ); ?>" fill="none" stroke="currentColor" stroke-width="0.8"/></svg>
                  <?php endif; ?>
                  <?php for ( $i = 0; $i < $empty_stars; $i++ ) : ?>
                    <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--empty" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="<?php echo esc_attr( $star_path ); ?>" fill="none" stroke="currentColor" stroke-width="0.8"/></svg>
                  <?php endfor; ?>
                  <span class="pf-bookmaker-list__rating-value"><?php echo esc_html( number_format( $rating, 1 ) ); ?></span>
                </span>
                <span class="pf-bookmaker-list__bonus"><?php echo esc_html( $bonus ); ?></span>
              </div>
            </div>
            <a href="<?php echo esc_url( $cta_url ); ?>" class="pf-bookmaker-list__cta" target="_blank" rel="nofollow sponsored noopener"><?php echo esc_html( $cta_label ); ?></a>
          </div>
          <?php if ( $disclaimer ) : ?>
            <p class="pf-bookmaker-list__disclaimer"><?php echo esc_html( $disclaimer ); ?></p>
          <?php endif; ?>
        </li>

      <?php elseif ( 'sidebar' === $variant ) : ?>

        <li class="pf-bookmaker-list__item pf-bookmaker-list__item--sidebar">
          <div class="pf-bookmaker-list__logo-wrap">
            <span
              class="pf-bookmaker-list__logo"
              style="--logo-from:<?php echo esc_attr( $logo_from ); ?>;--logo-to:<?php echo esc_attr( $logo_to ); ?>;--logo-size:<?php echo esc_attr( $logo_size ); ?>;"
              aria-hidden="true"
            ><?php echo esc_html( $initials ); ?></span>
            <span class="<?php echo esc_attr( $rank_class ); ?>"><?php echo esc_html( $rank ); ?></span>
          </div>
          <span class="pf-bookmaker-list__bm-name"><?php echo esc_html( $bm_name ); ?></span>
          <span class="pf-bookmaker-list__rating" aria-label="<?php echo esc_attr( number_format( $rating, 1 ) . ' de 5 estrellas' ); ?>">
            <?php for ( $i = 0; $i < $full_stars; $i++ ) : ?>
              <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--full" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="<?php echo esc_attr( $star_path ); ?>" fill="currentColor" stroke="currentColor" stroke-width="0.8"/></svg>
            <?php endfor; ?>
            <?php if ( $half_star ) : ?>
              <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--half" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><defs><clipPath id="pf-half-s-<?php echo esc_attr( $rank ); ?>"><rect x="0" y="0" width="6" height="12"/></clipPath></defs><path d="<?php echo esc_attr( $star_path ); ?>" fill="currentColor" clip-path="url(#pf-half-s-<?php echo esc_attr( $rank ); ?>)"/><path d="<?php echo esc_attr( $star_path ); ?>" fill="none" stroke="currentColor" stroke-width="0.8"/></svg>
            <?php endif; ?>
            <?php for ( $i = 0; $i < $empty_stars; $i++ ) : ?>
              <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--empty" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="<?php echo esc_attr( $star_path ); ?>" fill="none" stroke="currentColor" stroke-width="0.8"/></svg>
            <?php endfor; ?>
            <span class="pf-bookmaker-list__rating-value"><?php echo esc_html( number_format( $rating, 1 ) ); ?></span>
          </span>
          <span class="pf-bookmaker-list__bonus"><?php echo esc_html( $bonus ); ?></span>
          <a href="<?php echo esc_url( $cta_url ); ?>" class="pf-bookmaker-list__cta pf-bookmaker-list__cta--full" target="_blank" rel="nofollow sponsored noopener"><?php echo esc_html( $cta_label ); ?></a>
        </li>

      <?php elseif ( 'table' === $variant ) : ?>

        <li class="pf-bookmaker-list__item pf-bookmaker-list__item--row">
          <span class="pf-bookmaker-list__col pf-bookmaker-list__col--rank">
            <span class="<?php echo esc_attr( $rank_class ); ?>"><?php echo esc_html( $rank ); ?></span>
          </span>
          <span class="pf-bookmaker-list__col pf-bookmaker-list__col--logo-name">
            <div class="pf-bookmaker-list__logo-wrap">
              <span
                class="pf-bookmaker-list__logo"
                style="--logo-from:<?php echo esc_attr( $logo_from ); ?>;--logo-to:<?php echo esc_attr( $logo_to ); ?>;--logo-size:<?php echo esc_attr( $logo_size ); ?>;"
                aria-hidden="true"
              ><?php echo esc_html( $initials ); ?></span>
            </div>
            <span class="pf-bookmaker-list__bm-name"><?php echo esc_html( $bm_name ); ?></span>
          </span>
          <span class="pf-bookmaker-list__col pf-bookmaker-list__col--rating">
            <span class="pf-bookmaker-list__rating" aria-label="<?php echo esc_attr( number_format( $rating, 1 ) . ' de 5 estrellas' ); ?>">
              <?php for ( $i = 0; $i < $full_stars; $i++ ) : ?>
                <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--full" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="<?php echo esc_attr( $star_path ); ?>" fill="currentColor" stroke="currentColor" stroke-width="0.8"/></svg>
              <?php endfor; ?>
              <?php if ( $half_star ) : ?>
                <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--half" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><defs><clipPath id="pf-half-t-<?php echo esc_attr( $rank ); ?>"><rect x="0" y="0" width="6" height="12"/></clipPath></defs><path d="<?php echo esc_attr( $star_path ); ?>" fill="currentColor" clip-path="url(#pf-half-t-<?php echo esc_attr( $rank ); ?>)"/><path d="<?php echo esc_attr( $star_path ); ?>" fill="none" stroke="currentColor" stroke-width="0.8"/></svg>
              <?php endif; ?>
              <?php for ( $i = 0; $i < $empty_stars; $i++ ) : ?>
                <svg class="pf-bookmaker-list__star pf-bookmaker-list__star--empty" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="<?php echo esc_attr( $star_path ); ?>" fill="none" stroke="currentColor" stroke-width="0.8"/></svg>
              <?php endfor; ?>
              <span class="pf-bookmaker-list__rating-value"><?php echo esc_html( number_format( $rating, 1 ) ); ?></span>
            </span>
          </span>
          <span class="pf-bookmaker-list__col pf-bookmaker-list__col--bonus"><?php echo esc_html( $bonus ); ?></span>
          <span class="pf-bookmaker-list__col pf-bookmaker-list__col--cta">
            <a href="<?php echo esc_url( $cta_url ); ?>" class="pf-bookmaker-list__cta" target="_blank" rel="nofollow sponsored noopener"><?php echo esc_html( $cta_label ); ?></a>
          </span>
        </li>

      <?php endif; ?>

    <?php endforeach; ?>
  </ol>

</section>
