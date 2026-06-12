# WDLAB-CommerceForge — 소개 웹페이지

**[CommerceForge](https://github.com/wdlab1958/CommerceForge)** (Compliance-first 네이버 스마트스토어
위탁판매 자율운영 플랫폼)의 공식 소개 페이지입니다.

> "빨리 많이 올리는" 도구가 아니라, **페널티·적자·품절·반품으로 죽지 않는 운영**을 자동화한다 —
> 깔때기의 아래쪽, 아무도 자동화하지 않는 그 지점을 자동화하는 플랫폼.

## 미리보기

- 로컬: `python3 -m http.server 8772` 후 http://localhost:8772/
- GitHub Pages 배포 시: `https://wdlab1958.github.io/webpage_CommerceForge/`

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
| 시작 | Hero (392 tests · INV-1~7 · 21 Circuit Rules) · 왜 CommerceForge 인가(깔때기 아래쪽) |
| 철학 | 4대 설계 원칙 (Compliance-first · Deterministic · Auditable · Rollback-able) · INV-1~7 불변식 · 자율운영 1주기 |
| 수익 정밀도 | 세후 순마진 · ROAS 경제학(손익분기/필요/한계) · 판다랭크 실수요 · 월계절 시즌 · 반품률 학습 |
| 안전 장치 | 실시간 재고 서킷브레이커 · 운영 안전 13종 · Loop Contract(Autonomy Slider P1→P3) |
| 지능화 | 온톨로지 · 3-Tier 메모리 · GEPA · 로컬 LLM(검증후채택) · 마케팅 콘텐츠 스튜디오 |
| 시스템 | 운영 콘솔(7그룹 28메뉴) · 아키텍처/기술 스택 · 구현 현황·검증 게이트(A/B·E2E·Chaos) |
| 운영 | 대량등록 도구 vs CommerceForge · 출시 사다리 S0→S4 · 운용 3대 수칙 |

## 관련 저장소

- 플랫폼 본체: https://github.com/wdlab1958/CommerceForge

---
© 2026 WDLAB. 본 페이지가 소개하는 플랫폼은 합법적 위탁판매 자동화를 전제로 하며,
사업자등록·통신판매업 신고·품목 인증의 최종 법적 책임은 운영자에게 있습니다.
