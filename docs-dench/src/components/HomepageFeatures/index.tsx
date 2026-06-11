import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  code: string;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '01',
    eyebrow: 'READABLE CHAIN',
    title: '요청의 의도가 그대로 읽힙니다',
    description: (
      <>
        HTTP 메서드부터 인증, 제한 시간, 응답 형식까지 요청의 흐름을
        위에서 아래로 자연스럽게 작성합니다.
      </>
    ),
    code: ".get<User>('/users/1')\n.auth(token)\n.timeout(3000)\n.toJson()",
  },
  {
    icon: '02',
    eyebrow: 'EXPLICIT RUNNER',
    title: '실행 시점은 마지막에 명확하게',
    description: (
      <>
        빌더를 구성하는 동안 요청은 전송되지 않습니다. 원하는 응답 형식을
        선택하는 순간 실제 <code>fetch</code>가 실행됩니다.
      </>
    ),
    code: '.toJson()\n.toResponse()\n.toFormData()',
  },
  {
    icon: '03',
    eyebrow: 'BODY HELPERS',
    title: 'body 형식도 고민 없이',
    description: (
      <>
        JSON, FormData, Blob, URL encoded 데이터와 원시 body를 목적에 맞는
        메서드로 설정할 수 있습니다.
      </>
    ),
    code: '.sendJson(data)\n.sendForm(form)\n.sendBlob(blob)',
  },
  {
    icon: '04',
    eyebrow: 'REUSABLE BUILDER',
    title: '공통 설정은 한 번만',
    description: (
      <>
        인증과 timeout을 가진 빌더를 복사하고 API 경로만 바꿔 반복 설정을
        줄일 수 있습니다.
      </>
    ),
    code: "common.copy().api('/users')\ncommon.copy().api('/posts')",
  },
];

function Feature({icon, eyebrow, title, description, code}: FeatureItem) {
  return (
    <article className={styles.featureCard}>
      <div className={styles.cardTop}>
        <span className={styles.cardNumber}>{icon}</span>
        <span className={styles.eyebrow}>{eyebrow}</span>
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
      <pre className={styles.cardCode}>
        <code>{code}</code>
      </pre>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.intro}>
          <div>
            <span className={styles.sectionLabel}>FETCH, BUT FRIENDLIER</span>
            <Heading as="h2" className={styles.sectionTitle}>
              fetch의 힘은 그대로,
              <br />
              작성 경험은 더 가볍게.
            </Heading>
          </div>
          <p className={styles.sectionDescription}>
            dench-fetch는 네이티브 Fetch API 위에 만들어진 TypeScript 요청
            빌더입니다. 복잡한 설정 객체 대신 짧고 읽기 쉬운 체인으로 요청을
            구성하고, 필요한 순간에 명확하게 실행하세요.
          </p>
        </div>

        <div className={styles.playground}>
          <div className={styles.playgroundGlow} />
          <div className={styles.codeWindow}>
            <div className={styles.windowBar}>
              <div className={styles.windowDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className={styles.windowName}>request.ts</span>
              <span className={styles.windowBadge}>dench-fetch</span>
            </div>
            <pre className={styles.mainCode}>
              <code>
                <span className={styles.codeMuted}>const</span>{' '}
                <span className={styles.codeAccent}>user</span>{' '}
                <span className={styles.codeMuted}>= await</span>{' '}
                <span className={styles.codePurple}>api</span>
                {'\n  '}.get&lt;User&gt;(
                <span className={styles.codeString}>&apos;/users/1&apos;</span>)
                {'\n  '}.auth(
                <span className={styles.codeString}>&apos;access-token&apos;</span>)
                {'\n  '}.timeout(
                <span className={styles.codeNumber}>3000</span>)
                {'\n  '}.toJson();
              </code>
            </pre>
          </div>

          <div className={styles.transform} aria-hidden="true">
            <span>BUILD</span>
            <div className={styles.transformLine} />
            <span className={styles.arrow}>→</span>
          </div>

          <div className={styles.resultPanel}>
            <div className={styles.resultHeader}>
              <span>실제로 만들어지는 요청</span>
              <span className={styles.liveBadge}>
                <i />
                READY
              </span>
            </div>
            <div className={styles.requestUrl}>
              <strong>GET</strong>
              <span>https://api.example.com/users/1</span>
            </div>
            <dl className={styles.requestDetails}>
              <div>
                <dt>Authorization</dt>
                <dd>Bearer access-token</dd>
              </div>
              <div>
                <dt>Timeout</dt>
                <dd>3,000ms</dd>
              </div>
              <div>
                <dt>Returns</dt>
                <dd>Promise&lt;User&gt;</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className={styles.featureGrid}>
          {FeatureList.map((feature) => (
            <Feature key={feature.icon} {...feature} />
          ))}
        </div>

        <div className={styles.closing}>
          <div>
            <span className={styles.closingPrompt}>$</span>
            <code>npm install dench-fetch</code>
          </div>
          <Link
            className={styles.docsLink}
            to="/docs/denchfetch/Introduction/Introduction">
            문서에서 시작하기
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
