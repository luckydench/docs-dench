import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot} />
            TypeScript Fetch Request Builder
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            <Translate id="homepage.hero.title.first">읽기 쉬운 요청,</Translate>
            <br />
            <span>
              <Translate id="homepage.hero.title.second">명확한 실행.</Translate>
            </span>
          </Heading>
          <p className={styles.heroDescription}>
            <Translate id="homepage.hero.description">
              dench-fetch는 네이티브 Fetch API의 유연함을 유지하면서, 반복되는
              요청 설정을 짧고 타입 안전한 체인으로 정리합니다.
            </Translate>
          </p>
          <div className={styles.buttons}>
            <Link
              className={styles.primaryButton}
              to="/docs/denchfetch/Introduction/">
              <Translate id="homepage.hero.getStarted">빠르게 시작하기</Translate>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              className={styles.secondaryButton}
              to="https://github.com/luckydench/dench-fetch">
              GitHub
            </Link>
          </div>
          <div className={styles.heroMeta}>
            <span>
              <Translate id="homepage.hero.meta.fetch">Fetch API 기반</Translate>
            </span>
            <span>
              <Translate id="homepage.hero.meta.types">타입 지원</Translate>
            </span>
            <span>
              <Translate id="homepage.hero.meta.execution">명시적 실행</Translate>
            </span>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.logoCard}>
            <img src="/img/dench_logo.svg" alt="Dench logo" />
            <div>
              <strong>dench-fetch</strong>
              <span>Small chain. Clear request.</span>
            </div>
          </div>

          <div className={styles.heroCode}>
            <div className={styles.codeHeader}>
              <span>request.ts</span>
              <span className={styles.codeStatus}>READY</span>
            </div>
            <pre>
              <code>
                <span className={styles.codeKeyword}>const</span>{' '}
                <span className={styles.codeVariable}>user</span> ={' '}
                <span className={styles.codeKeyword}>await</span> api
                {'\n  '}.get&lt;User&gt;(
                <span className={styles.codeString}>&apos;/users/1&apos;</span>)
                {'\n  '}.auth(token)
                {'\n  '}.timeout(
                <span className={styles.codeNumber}>3000</span>)
                {'\n  '}.toJson();
              </code>
            </pre>
          </div>

          <div className={styles.requestPill}>
            <span>GET</span>
            <code>/users/1</code>
            <strong>200</strong>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate(
        {
          id: 'homepage.meta.title',
          message: '{siteTitle} | TypeScript Fetch Request Builder',
        },
        {siteTitle: siteConfig.title},
      )}
      description={translate({
        id: 'homepage.meta.description',
        message:
          '네이티브 Fetch API를 읽기 쉬운 체이닝 방식으로 구성하는 TypeScript HTTP 요청 빌더',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
