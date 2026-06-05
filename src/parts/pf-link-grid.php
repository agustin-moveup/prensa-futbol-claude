<?php defined( 'ABSPATH' ) || exit;

$heading = $data['heading'] ?? '';
$columns = $data['columns'] ?? [];
?>
<section class="pf-link-grid">

  <?php if ( $heading ) : ?>
    <h2 class="pf-link-grid__heading"><?php echo esc_html( $heading ); ?></h2>
  <?php endif; ?>

  <div class="pf-link-grid__grid">
    <?php foreach ( $columns as $col ) : ?>
      <div class="pf-link-grid__col">
        <h3 class="pf-link-grid__col-title"><?php echo esc_html( $col['title'] ?? '' ); ?></h3>
        <ul class="pf-link-grid__list">
          <?php foreach ( $col['links'] ?? [] as $link ) : ?>
            <li class="pf-link-grid__item">
              <a href="<?php echo esc_url( $link['url'] ?? '#' ); ?>" class="pf-link-grid__link">
                <svg class="pf-link-grid__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <?php echo esc_html( $link['label'] ?? '' ); ?>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>
    <?php endforeach; ?>
  </div>

</section>
