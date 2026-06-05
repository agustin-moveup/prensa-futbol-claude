<?php defined( 'ABSPATH' ) || exit;

$title       = $data['title']               ?? '¡Sigue en el juego!';
$subtitle    = $data['subtitle']            ?? '';
$body        = $data['body']                ?? '';
$input_label = $data['input_label']         ?? 'Tu correo electrónico';
$placeholder = $data['input_placeholder']   ?? 'tucorreo@ejemplo.com';
$hint        = $data['hint']               ?? 'Sin spam. Puedes darte de baja en cualquier momento.';
$cta_label   = $data['cta_label']          ?? 'Enviar';

// Split title accent (text before first space after ¡Sigue)
preg_match( '/^(¡Sigue)\s*(.+)$/us', $title, $m );
$title_accent = $m[1] ?? $title;
$title_rest   = $m[2] ?? '';
?>
<section class="pf-newsletter" aria-labelledby="pf-nl-title">
  <div class="pf-newsletter__inner">

    <div class="pf-newsletter__text">
      <h2 class="pf-newsletter__title" id="pf-nl-title">
        <span class="pf-newsletter__title-accent"><?php echo esc_html( $title_accent ); ?></span>
        <?php if ( $title_rest ) : ?>
          <?php echo ' ' . esc_html( $title_rest ); ?>
        <?php endif; ?>
      </h2>
      <?php if ( $subtitle ) : ?>
        <p class="pf-newsletter__subtitle"><?php echo esc_html( $subtitle ); ?></p>
      <?php endif; ?>
      <?php if ( $body ) : ?>
        <p class="pf-newsletter__body"><?php echo esc_html( $body ); ?></p>
      <?php endif; ?>
    </div>

    <form class="pf-newsletter__form" method="post" action="<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>" novalidate>
      <?php wp_nonce_field( 'pf_newsletter_subscribe', 'pf_nl_nonce' ); ?>
      <input type="hidden" name="action" value="pf_newsletter_subscribe" />

      <div class="pf-newsletter__field">
        <label class="pf-newsletter__label" for="pf-nl-email">
          <?php echo esc_html( $input_label ); ?>
        </label>
        <div class="pf-newsletter__input-row">
          <input
            id="pf-nl-email"
            type="email"
            name="email"
            class="pf-newsletter__input"
            placeholder="<?php echo esc_attr( $placeholder ); ?>"
            required
            autocomplete="email"
            aria-describedby="pf-nl-hint"
          />
          <button type="submit" class="pf-newsletter__cta">
            <?php echo esc_html( $cta_label ); ?>
          </button>
        </div>
        <p id="pf-nl-hint" class="pf-newsletter__hint"><?php echo esc_html( $hint ); ?></p>
      </div>
    </form>

  </div>
</section>
