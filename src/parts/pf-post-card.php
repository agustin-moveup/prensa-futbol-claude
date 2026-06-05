<?php defined( 'ABSPATH' ) || exit;

$variant      = $data['variant']             ?? 'featured';
$cat_label    = $data['category_label']      ?? '';
$title        = $data['title']               ?? '';
$excerpt      = $data['excerpt']             ?? '';
$image_src    = $data['image_src']           ?? '';
$image_alt    = $data['image_alt']           ?? '';
$date_iso     = $data['date_iso']            ?? '';
$author_name  = $data['author_name']         ?? '';
$author_url   = $data['author_url']          ?? '#';
$post_url     = $data['url']                 ?? '#';

// Human-readable date via WP helper
$date_display = $date_iso ? human_time_diff( strtotime( $date_iso ), current_time( 'timestamp' ) ) . ' atrás' : '';

$show_image   = $image_src && 'xs' !== $variant;

$img_width    = 'sm' === $variant ? 100 : 400;
$img_height   = 'sm' === $variant ? 100 : ( 'md' === $variant ? 225 : 280 );
?>
<article class="pf-post-card pf-post-card--<?php echo esc_attr( $variant ); ?>">
  <a href="<?php echo esc_url( $post_url ); ?>" class="pf-post-card__link">

    <?php if ( $show_image ) : ?>
      <div class="pf-post-card__image-wrap">
        <img
          src="<?php echo esc_url( $image_src ); ?>"
          alt="<?php echo esc_attr( $image_alt ); ?>"
          class="pf-post-card__image"
          loading="lazy"
          width="<?php echo esc_attr( $img_width ); ?>"
          height="<?php echo esc_attr( $img_height ); ?>"
        />
        <?php if ( 'featured' === $variant ) : ?>
          <div class="pf-post-card__overlay" aria-hidden="true"></div>
        <?php endif; ?>
        <?php if ( 'md' === $variant && $cat_label ) : ?>
          <span class="pf-post-card__category" aria-label="<?php echo esc_attr( 'Categoría: ' . $cat_label ); ?>">
            <?php echo esc_html( $cat_label ); ?>
          </span>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    <?php if ( 'featured' === $variant && $cat_label ) : ?>
      <span class="pf-post-card__category" aria-label="<?php echo esc_attr( 'Categoría: ' . $cat_label ); ?>">
        <?php echo esc_html( $cat_label ); ?>
      </span>
    <?php endif; ?>

    <div class="pf-post-card__body">
      <?php if ( in_array( $variant, [ 'sm', 'xs' ], true ) && $cat_label ) : ?>
        <span class="pf-post-card__category" aria-label="<?php echo esc_attr( 'Categoría: ' . $cat_label ); ?>">
          <?php echo esc_html( $cat_label ); ?>
        </span>
      <?php endif; ?>

      <h3 class="pf-post-card__title"><?php echo esc_html( $title ); ?></h3>

      <?php if ( $excerpt && 'featured' === $variant ) : ?>
        <p class="pf-post-card__excerpt"><?php echo esc_html( $excerpt ); ?></p>
      <?php endif; ?>

      <div class="pf-post-card__byline">
        <span class="pf-post-card__author"><?php echo esc_html( $author_name ); ?></span>
        <span class="pf-post-card__byline-sep" aria-hidden="true">·</span>
        <time class="pf-post-card__date" datetime="<?php echo esc_attr( $date_iso ); ?>"><?php echo esc_html( $date_display ); ?></time>
      </div>
    </div>

  </a>
</article>
