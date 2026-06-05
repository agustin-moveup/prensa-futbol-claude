<?php defined( 'ABSPATH' ) || exit;

$title     = $data['title']      ?? '';
$cta_label = $data['cta_label']  ?? '';
$cta_href  = $data['cta_href']   ?? '#';
$items     = $data['items']      ?? [];

$star_path = 'M8 1.2 9.96 5.6l4.84.42-3.66 3.18 1.1 4.7L8 11.55 3.76 13.9l1.1-4.7L1.2 6.02l4.84-.42L8 1.2Z';
?>
<section class="pf-offer-list">

  <div class="pf-offer-list__header">
    <h2 class="pf-offer-list__title"><?php echo esc_html( $title ); ?></h2>
    <?php if ( $cta_label ) : ?>
      <a href="<?php echo esc_url( $cta_href ); ?>" class="pf-offer-list__header-cta">
        <?php echo esc_html( $cta_label ); ?>
        <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" width="13" height="13">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    <?php endif; ?>
  </div>

  <ol class="pf-offer-list__items">
    <?php foreach ( $items as $item ) :
      $rank       = isset( $item['rank'] ) ? (int) $item['rank'] : null;
      $bm_name    = $item['bm_name']       ?? '';
      $bm_color   = $item['bm_brand_color'] ?? '#555';
      $rating     = (float) ( $item['rating'] ?? 0 );
      $offer      = $item['offer']          ?? '';
      $promo_code = $item['promo_code']     ?? '';
      $code_mode  = $item['code_mode']      ?? 'copy';
      $pros       = $item['pros']           ?? [];
      $item_cta   = $item['cta_label']      ?? 'Obtener bono';
      $item_href  = $item['cta_href']       ?? '#';
      $terms      = $item['terms']          ?? '';

      $has_code = $promo_code || 'none' === $code_mode;
      $has_pros = ! empty( $pros );
      if ( $has_code && $has_pros )      $card_variant = 'code-pros';
      elseif ( $has_code )               $card_variant = 'code';
      elseif ( $has_pros )               $card_variant = 'pros';
      else                               $card_variant = 'plain';

      // Stars
      $star_pct   = round( max( 0, min( 100, ( $rating / 5 ) * 100 ) ) );

      // Rank modifier
      if ( $rank === 1 )      $rank_mod = 'gold';
      elseif ( $rank === 2 )  $rank_mod = 'silver';
      elseif ( $rank === 3 )  $rank_mod = 'bronze';
      else                    $rank_mod = 'plain';
    ?>

      <li class="pf-offer-list__item">
        <article class="pf-offer-list__card pf-offer-list__card--<?php echo esc_attr( $card_variant ); ?>" aria-label="<?php echo esc_attr( "$bm_name — $offer" ); ?>">

          <div class="pf-offer-list__head">
            <?php if ( null !== $rank ) : ?>
              <span class="pf-offer-list__rank pf-offer-list__rank--<?php echo esc_attr( $rank_mod ); ?>" aria-label="#<?php echo esc_attr( $rank ); ?>"><?php echo esc_html( $rank ); ?></span>
            <?php endif; ?>
            <span class="pf-offer-list__logo" style="--bm-brand-color:<?php echo esc_attr( $bm_color ); ?>;" aria-hidden="true"><?php echo esc_html( mb_strtoupper( mb_substr( $bm_name, 0, 2 ) ) ); ?></span>
            <div class="pf-offer-list__head-text">
              <span class="pf-offer-list__name"><?php echo esc_html( $bm_name ); ?></span>
              <span class="pf-offer-list__rating" aria-label="<?php echo esc_attr( number_format( $rating, 1 ) . ' de 5 estrellas' ); ?>">
                <span class="pf-offer-list__stars">
                  <span class="pf-offer-list__stars-track" aria-hidden="true">
                    <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="14" height="14"><path d="<?php echo esc_attr( $star_path ); ?>"/></svg>
                    <?php endfor; ?>
                  </span>
                  <span class="pf-offer-list__stars-fill" style="width:<?php echo esc_attr( $star_pct ); ?>%;" aria-hidden="true">
                    <?php for ( $i = 0; $i < 5; $i++ ) : ?>
                      <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="14" height="14"><path d="<?php echo esc_attr( $star_path ); ?>"/></svg>
                    <?php endfor; ?>
                  </span>
                </span>
                <span class="pf-offer-list__rating-num"><?php echo esc_html( number_format( $rating, 1 ) ); ?></span>
              </span>
            </div>
          </div>

          <p class="pf-offer-list__offer"><?php echo esc_html( $offer ); ?></p>

          <?php if ( $has_code || $has_pros ) : ?>
            <div class="pf-offer-list__zone">

              <?php if ( 'none' === $code_mode ) : ?>
                <div class="pf-offer-list__code pf-offer-list__code--none" aria-label="No requiere código promocional">
                  <span class="pf-offer-list__code-label">Código promo</span>
                  <span class="pf-offer-list__code-nocode">No necesita código</span>
                </div>

              <?php elseif ( 'reveal' === $code_mode ) : ?>
                <button
                  class="pf-offer-list__code pf-offer-list__code--reveal"
                  type="button"
                  data-copy-mode="reveal"
                  data-code="<?php echo esc_attr( $promo_code ); ?>"
                  aria-label="Haz clic para ver el código"
                >
                  <span class="pf-offer-list__code-label">Clic para ver</span>
                  <span class="pf-offer-list__code-value"><?php echo esc_html( $promo_code ); ?></span>
                  <span class="pf-offer-list__code-icon" aria-hidden="true">
                    <svg viewBox="0 0 18 18" fill="none" width="15" height="15"><path d="M1.5 9s3-6 7.5-6 7.5 6 7.5 6-3 6-7.5 6-7.5-6-7.5-6Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="9" cy="9" r="2.25" stroke="currentColor" stroke-width="1.4"/></svg>
                  </span>
                </button>

              <?php else : ?>
                <button
                  class="pf-offer-list__code"
                  type="button"
                  data-copy-mode="copy"
                  data-code="<?php echo esc_attr( $promo_code ); ?>"
                  aria-label="<?php echo esc_attr( 'Copiar código ' . $promo_code ); ?>"
                >
                  <span class="pf-offer-list__code-label">Código promo</span>
                  <span class="pf-offer-list__code-value"><?php echo esc_html( $promo_code ); ?></span>
                  <span class="pf-offer-list__code-icon" aria-hidden="true">
                    <svg viewBox="0 0 18 18" fill="none" width="15" height="15"><rect x="5.75" y="5.75" width="9" height="9" rx="1.25" stroke="currentColor" stroke-width="1.5"/><path d="M11.5 5V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6.5a1 1 0 0 0 1 1h1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </span>
                </button>
              <?php endif; ?>

              <?php if ( $has_pros ) : ?>
                <ul class="pf-offer-list__pros">
                  <?php foreach ( $pros as $pro ) : ?>
                    <li class="pf-offer-list__pro">
                      <span class="pf-offer-list__pro-icon" aria-hidden="true">
                        <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><circle cx="8" cy="8" r="7.5" stroke="currentColor" stroke-width="1"/><path d="m4.5 8.25 2.25 2.25L11.5 5.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </span>
                      <span><?php echo esc_html( $pro ); ?></span>
                    </li>
                  <?php endforeach; ?>
                </ul>
              <?php endif; ?>

            </div>
          <?php endif; ?>

          <a href="<?php echo esc_url( $item_href ); ?>" class="pf-offer-list__cta" target="_blank" rel="nofollow sponsored noopener">
            <?php echo esc_html( $item_cta ); ?>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" width="14" height="14">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

        </article>

        <?php if ( $terms ) : ?>
          <p class="pf-offer-list__terms"><?php echo esc_html( $terms ); ?></p>
        <?php endif; ?>
      </li>

    <?php endforeach; ?>
  </ol>

</section>
