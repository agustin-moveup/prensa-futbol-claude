<?php defined( 'ABSPATH' ) || exit;

$event        = $data['event']      ?? [];
$kicker       = $event['kicker']    ?? '';
$title        = $event['title']     ?? '';
$accent_from  = $event['accent_from'] ?? '';
$accent_to    = $event['accent_to']   ?? '';
$cta_label    = $event['cta_label'] ?? '';
$cta_url      = $event['cta_url']   ?? '#';
$layout       = $data['layout']     ?? 'spotlight';
$articles     = $data['articles']   ?? [];

$root_style = '';
if ( $accent_from ) $root_style .= '--es-accent-from:' . esc_attr( $accent_from ) . ';';
if ( $accent_to )   $root_style .= '--es-accent-to:' . esc_attr( $accent_to ) . ';';
?>
<section
  class="pf-event-spotlight pf-event-spotlight--<?php echo esc_attr( $layout ); ?>"
  data-layout="<?php echo esc_attr( $layout ); ?>"
  <?php echo $root_style ? 'style="' . $root_style . '"' : ''; ?>
>

  <header class="pf-event-spotlight__header">
    <div class="pf-event-spotlight__accent-bar" aria-hidden="true"></div>
    <div class="pf-event-spotlight__header-row">
      <div class="pf-event-spotlight__header-text">
        <?php if ( $kicker ) : ?>
          <p class="pf-event-spotlight__kicker"><?php echo esc_html( $kicker ); ?></p>
        <?php endif; ?>
        <h2 class="pf-event-spotlight__title"><?php echo esc_html( $title ); ?></h2>
      </div>
      <?php if ( $cta_label && $cta_url ) : ?>
        <a href="<?php echo esc_url( $cta_url ); ?>" class="pf-event-spotlight__cta">
          <?php echo esc_html( $cta_label ); ?>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      <?php endif; ?>
    </div>
  </header>

  <?php if ( 'spotlight' === $layout ) : ?>

    <div class="pf-event-spotlight__body">

      <?php if ( ! empty( $articles[0] ) ) :
        $primary = $articles[0];
        $data    = array_merge( $primary, [ 'variant' => 'featured' ] );
        include __DIR__ . '/pf-post-card.php';
      endif; ?>

      <?php if ( count( $articles ) > 1 ) : ?>
        <aside class="pf-event-spotlight__rail" aria-label="<?php esc_attr_e( 'Related articles', 'pf' ); ?>">
          <?php foreach ( array_slice( $articles, 1 ) as $article ) :
            $data = array_merge( $article, [ 'variant' => 'md' ] );
            include __DIR__ . '/pf-post-card.php';
          endforeach; ?>
        </aside>
      <?php endif; ?>

    </div>

  <?php elseif ( 'rail' === $layout ) : ?>

    <div class="pf-event-spotlight__scroll">
      <?php foreach ( $articles as $article ) : ?>
        <div class="pf-event-spotlight__scroll-item">
          <?php
          $data = array_merge( $article, [ 'variant' => 'md' ] );
          include __DIR__ . '/pf-post-card.php';
          ?>
        </div>
      <?php endforeach; ?>
    </div>

  <?php endif; ?>

</section>
