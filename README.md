# WDLAB-CommerceForge — 소개 웹페이지

**[CommerceForge](https://github.com/wdlab1958/CommerceForge)** (Compliance-first 네이버 스마트스토어
위탁판매 자율운영 플랫폼)의 공식 소개 페이지입니다.

> "빨리 많이 올리는" 도구가 아니라, **페널티·적자·품절·반품으로 죽지 않는 운영**을 자동화한다 —
> 깔때기의 아래쪽, 아무도 자동화하지 않는 그 지점을 자동화하는 플랫폼.

## 🌐 Live Page

**https://wdlab1958.github.io/webpage_CommerceForge/** — GitHub Pages 배포 완료(`main` / 루트, HTTPS).

- 로컬 미리보기: `python3 -m http.server 8772` 후 http://localhost:8772/
- 수정 후 `git push` 하면 1~2분 내 자동 재배포됩니다.

## 구조

```
webpage_CommerceForge/
├── index.html      # 단일 페이지 (16개 섹션 · 한국어)
├── css/style.css   # Forge 패밀리 디자인 시스템 (Neumorphism)
└── js/main.js      # scrollspy · reveal 애니메이션 · 통계 카운터
```

정적 사이트 — 빌드 도구·프레임워크·외부 의존성 없음(Google Fonts 만 사용, 미로드 시 시스템 폰트 폴백).

## 디자인

**Forge 패밀리** 디자인 언어를 따릅니다 —
[WDLAB-AlphaForge](https://wdlab1958.github.io/WDLAB-AlphaForge-Webpage/) ·
[WDLAB-LLMOps](https://wdlab1958.github.io/WDLAB-LLMOps-Webpage/) · PatentForge 와 동일 계열.

- **Neumorphism** (`#E6E9EF` 배경, raised/pressed 그림자) + 고정 사이드바 내비(스크롤스파이)
- 폰트: Noto Sans KR · Inter · JetBrains Mono
- 시그니처 컬러: **네이버 그린 `#03C75A`**(안전·수익·통과) / 핑크 `#FF2D7A`(차단·halt) / 앰버(주의·HITL)

## 섹션 구성

| 그룹 | 섹션 |
|---|---|
| 시작 | Hero (2026.06.24 · 439 tests · 1 skip · S0 Shadow 완료 · Peer Review 통과 · Telegram 연동 · INV-1~7 · 21 Circuit Rules) · 왜 CommerceForge 인가(깔때기 아래쪽) |
| 철학 | 4대 설계 원칙 (Compliance-first · Deterministic · Auditable · Rollback-able) · INV-1~7 불변식 · 자율운영 1주기 |
| 수익 정밀도 | 세후 순마진 · ROAS 경제학(손익분기/필요/한계) · 판다랭크 실수요 · 월계절 시즌 · 반품률 학습 |
| 안전 장치 | 실시간 재고 서킷브레이커 · 운영 안전 13종(+등록 Shadow 정직표시·자격증명 자동복원·배송비 SKU별 부담주체) · 등록 Shadow 시스템("시뮬레이션(네이버 미반영)" 정직 표시 → 통신판매업 신고 + Autonomy P2+ 시 live 전환) · Loop Contract(Autonomy Slider P1→P3) |
| 지능화 | 온톨로지 · 3-Tier 메모리 · GEPA · 로컬 LLM(검증후채택) · 마케팅 콘텐츠 스튜디오 |
| 시스템 | 운영 콘솔(7그룹 28메뉴) · 아키텍처/기술 스택 · 구현 현황·검증 게이트(A/B 22 · E2E 24+5 + S0 Shadow 실API · Chaos 54 · Peer Review 5건 전부 수정) |
| 운영 | 대량등록 도구 vs CommerceForge · 출시 사다리 S0→S4 · 운용 3대 수칙 |

## 최근 업데이트 (2026-10-15 기준)

- **2026-06-24** — 플랫폼 현황 반영: 테스트 392 → **439**(1 skip, CI green), Hero 칩에 **S0 Shadow(실 API 읽기전용) 검증 완료 · Peer Review 통과 · Telegram 연동** 추가.
  운영 안전 배지 3종(등록 Shadow 정직표시 · 자격증명 자동복원 · 배송비 SKU별 부담주체)과 "등록 Shadow 시스템 — 정직성 원칙" 카드 신설,
  검증 게이트 표에 **Peer Review**(2026-06-19, 실제 결함 5건 발견·전부 수정) 행 추가, A/B 에 페이싱(실 토큰버킷) 비교·E2E 에 S0 Shadow 실API 검증 반영,
  tests 디렉터리 설명을 `439+ (A/B·E2E·Chaos·Gap·PeerReview·Circuit·LLM·Marketing·Telegram)` 로 갱신.

## 관련 저장소

- 플랫폼 본체: https://github.com/wdlab1958/CommerceForge

---
© 2026 WDLAB. 본 페이지가 소개하는 플랫폼은 합법적 위탁판매 자동화를 전제로 하며,
사업자등록·통신판매업 신고·품목 인증의 최종 법적 책임은 운영자에게 있습니다.
