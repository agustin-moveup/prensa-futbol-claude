<?php defined( 'ABSPATH' ) || exit;

$variant = $data['variant'] ?? 'features';
$eyebrow = $data['eyebrow'] ?? '';
$title   = $data['title']   ?? '';
$lead    = $data['lead']    ?? '';
$items   = $data['items']   ?? [];

// SVG icon map
$icons = [
  'shield' => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V6l-8-4z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'chart'  => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 3v18h18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><path d="M7 16l4-5 4 3 4-6" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'star'   => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg>',
  'users'  => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.75"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>',
  'bolt'   => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg>',
  'globe'  => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.75"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="1.75"/></svg>',
  'checkCircle' => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.75"/><path d="M8 12l3 3 5-5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  'lock'   => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.75"/><path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>',
];
$icon_default = $icons['checkCircle'];
?>
<section class="pf-content-block pf-content-block--<?php echo esc_attr( $variant ); ?>">

  <div class="pf-content-block__header">
    <?php if ( $eyebrow ) : ?>
      <p class="pf-content-block__eyebrow"><?php echo esc_html( $eyebrow ); ?></p>
    <?php endif; ?>
    <h2 class="pf-content-block__title"><?php echo esc_html( $title ); ?></h2>
    <?php if ( $lead ) : ?>
      <p class="pf-content-block__lead"><?php echo esc_html( $lead ); ?></p>
    <?php endif; ?>
  </div>

  <?php if ( 'features' === $variant ) :
    $outro = $data['outro'] ?? '';
  ?>
    <ul class="pf-content-block__grid" role="list">
      <?php foreach ( $items as $item ) :
        $icon_key = $item['icon'] ?? '';
        $icon_svg = $icons[ $icon_key ] ?? $icon_default;
      ?>
        <li class="pf-content-block__feature">
          <div class="pf-content-block__feature-icon" aria-hidden="true">
            <?php echo $icon_svg; // phpcs:ignore WordPress.Security.EscapeOutput ?>
          </div>
          <div class="pf-content-block__feature-text">
            <h3 class="pf-content-block__feature-title"><?php echo esc_html( $item['title'] ?? '' ); ?></h3>
            <p class="pf-content-block__feature-body"><?php echo esc_html( $item['body'] ?? '' ); ?></p>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>
    <?php if ( $outro ) : ?>
      <p class="pf-content-block__outro"><?php echo esc_html( $outro ); ?></p>
    <?php endif; ?>

  <?php elseif ( 'faq' === $variant ) :
    $intro = $data['intro'] ?? '';
  ?>
    <?php if ( $intro ) : ?>
      <p class="pf-content-block__intro"><?php echo esc_html( $intro ); ?></p>
    <?php endif; ?>

    <div class="pf-content-block__faq-list">
      <?php foreach ( $items as $item ) :
        $default_open = ! empty( $item['default_open'] );
      ?>
        <details class="pf-content-block__faq-item"<?php echo $default_open ? ' open' : ''; ?>>
          <summary class="pf-content-block__faq-trigger">
            <span class="pf-content-block__faq-question"><?php echo esc_html( $item['question'] ?? '' ); ?></span>
            <svg class="pf-content-block__faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </summary>
          <div class="pf-content-block__faq-answer">
            <p><?php echo esc_html( $item['answer'] ?? '' ); ?></p>
          </div>
        </details>
      <?php endforeach; ?>
    </div>

  <?php endif; ?>

</section>
