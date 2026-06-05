<?php defined( 'ABSPATH' ) || exit;

$title    = $data['title']    ?? '';
$sections = $data['sections'] ?? [];
?>
<section class="pf-seo-text">
  <h2 class="pf-seo-text__title"><?php echo esc_html( $title ); ?></h2>
  <div class="pf-seo-text__body">
    <?php foreach ( $sections as $section ) : ?>
      <div class="pf-seo-text__section">
        <h3 class="pf-seo-text__section-heading"><?php echo esc_html( $section['heading'] ?? '' ); ?></h3>
        <p class="pf-seo-text__section-body"><?php echo esc_html( $section['body'] ?? '' ); ?></p>
      </div>
    <?php endforeach; ?>
  </div>
</section>
