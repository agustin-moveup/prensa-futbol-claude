<?php defined( 'ABSPATH' ) || exit;

$competition   = $data['competition']        ?? [];
$comp_name     = $competition['name']        ?? '';
$comp_logo_from = $competition['logo_from'] ?? '';
$comp_logo_to   = $competition['logo_to']   ?? '';
$comp_initials  = $competition['initials']  ?? '';
$is_open       = ! empty( $data['is_open'] );
$matches       = $data['matches']            ?? [];

$star_path = 'M6 1l1.4 2.8 3.1.45-2.25 2.19.53 3.09L6 8.05 3.22 9.53l.53-3.09L1.5 4.25l3.1-.45z';
?>
<details class="pf-competition-accordion"<?php echo $is_open ? ' open' : ''; ?>>

  <summary class="pf-competition-accordion__summary">
    <div class="pf-competition-accordion__summary-inner">
      <?php if ( $comp_logo_from ) : ?>
        <span
          class="pf-competition-accordion__comp-logo"
          style="--logo-from:<?php echo esc_attr( $comp_logo_from ); ?>;--logo-to:<?php echo esc_attr( $comp_logo_to ); ?>;"
          aria-hidden="true"
        ><?php echo esc_html( $comp_initials ); ?></span>
      <?php endif; ?>
      <span class="pf-competition-accordion__comp-name"><?php echo esc_html( $comp_name ); ?></span>
    </div>
    <svg class="pf-competition-accordion__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </summary>

  <div class="pf-competition-accordion__body">

    <div class="pf-competition-accordion__table-header" aria-hidden="true">
      <span></span>
      <span><?php esc_html_e( 'Match', 'pf' ); ?></span>
      <span><?php esc_html_e( 'Home', 'pf' ); ?></span>
      <span><?php esc_html_e( 'Draw', 'pf' ); ?></span>
      <span><?php esc_html_e( 'Away', 'pf' ); ?></span>
      <span></span>
    </div>

    <ol class="pf-competition-accordion__matches">
      <?php foreach ( $matches as $match ) :
        $status      = $match['status']            ?? 'upcoming';
        $kickoff     = $match['kickoff']            ?? '';
        $home        = $match['team_home']          ?? [];
        $away        = $match['team_away']          ?? [];
        $match_url   = $match['url']                ?? '#';
        $odds        = $match['odds']               ?? [];
        $odds_map    = [];
        foreach ( $odds as $odd ) {
          $odds_map[ $odd['outcome'] ] = $odd;
        }
      ?>
        <li class="pf-competition-accordion__match-row">

          <div class="pf-competition-accordion__kickoff">
            <?php if ( 'live' === $status ) : ?>
              <span class="pf-competition-accordion__badge pf-competition-accordion__badge--live">
                <span class="pf-competition-accordion__live-dot" aria-hidden="true"></span>
                <?php esc_html_e( 'Live', 'pf' ); ?>
              </span>
            <?php elseif ( 'finish' === $status ) : ?>
              <span class="pf-competition-accordion__badge pf-competition-accordion__badge--finish"><?php esc_html_e( 'Finished', 'pf' ); ?></span>
            <?php else : ?>
              <time class="pf-competition-accordion__time"><?php echo esc_html( $kickoff ); ?></time>
            <?php endif; ?>
          </div>

          <div class="pf-competition-accordion__teams">
            <div class="pf-competition-accordion__team-row">
              <span
                class="pf-competition-accordion__team-logo"
                style="--logo-from:<?php echo esc_attr( $home['logo_from'] ?? '#555' ); ?>;--logo-to:<?php echo esc_attr( $home['logo_to'] ?? '#222' ); ?>;"
                aria-hidden="true"
              ><?php echo esc_html( $home['initials'] ?? '' ); ?></span>
              <span class="pf-competition-accordion__team-name"><?php echo esc_html( $home['name'] ?? '' ); ?></span>
            </div>
            <div class="pf-competition-accordion__team-row">
              <span
                class="pf-competition-accordion__team-logo"
                style="--logo-from:<?php echo esc_attr( $away['logo_from'] ?? '#555' ); ?>;--logo-to:<?php echo esc_attr( $away['logo_to'] ?? '#222' ); ?>;"
                aria-hidden="true"
              ><?php echo esc_html( $away['initials'] ?? '' ); ?></span>
              <span class="pf-competition-accordion__team-name"><?php echo esc_html( $away['name'] ?? '' ); ?></span>
            </div>
          </div>

          <?php foreach ( [ '1', 'X', '2' ] as $outcome ) :
            if ( isset( $odds_map[ $outcome ] ) ) :
              $o = $odds_map[ $outcome ];
            ?>
              <a
                href="<?php echo esc_url( $o['deep_link'] ?? '#' ); ?>"
                class="pf-competition-accordion__odd-pill"
                style="--bm-brand-color:<?php echo esc_attr( $o['bm_brand_color'] ?? '#555' ); ?>;"
                target="_blank"
                rel="nofollow sponsored noopener"
                aria-label="<?php printf( esc_html__( '%1$s at %2$s', 'pf' ), esc_attr( number_format( (float) ( $o['value'] ?? 0 ), 2 ) ), esc_attr( $o['bm_name'] ?? '' ) ); ?>"
              >
                <span class="pf-competition-accordion__odd-logo" aria-hidden="true"><?php echo esc_html( mb_strtoupper( mb_substr( $o['bm_name'] ?? '', 0, 2 ) ) ); ?></span>
                <span class="pf-competition-accordion__odd-value"><?php echo esc_html( number_format( (float) ( $o['value'] ?? 0 ), 2 ) ); ?></span>
              </a>
            <?php else : ?>
              <span class="pf-competition-accordion__odd-empty">—</span>
            <?php endif;
          endforeach; ?>

          <a
            href="<?php echo esc_url( $match_url ); ?>"
            class="pf-competition-accordion__arrow"
            aria-label="<?php printf( esc_html__( 'View %1$s vs %2$s', 'pf' ), esc_attr( $home['name'] ?? '' ), esc_attr( $away['name'] ?? '' ) ); ?>"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

        </li>
      <?php endforeach; ?>
    </ol>

  </div>
</details>
