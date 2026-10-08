# VIETON — Web Design System & Motion Specification

> **Creative Direction:** White × Blue × Global × Premium Motion  
> **Goal:** Xây dựng website Vieton có cảm giác premium, quốc tế, hiện đại, nhiều animation nhưng mượt và có mục đích.  
> **Core message:** **BUILD. MARKET. SCALE.**

---

## 01. DESIGN NORTH STAR

Website phải khiến người xem cảm nhận Vieton là một **growth & commerce company**, không chỉ là một agency chạy quảng cáo.

### Cảm giác tổng thể

- Premium
- Clean
- Global
- Intelligent
- Fast
- Confident
- Modern
- Calm
- Technological
- Có chiều sâu thương hiệu

### Công thức hình ảnh

```text
WHITE
+
BLUE
+
BIG TYPOGRAPHY
+
GLOBAL NETWORK
+
EDITORIAL LAYOUT
+
SCROLL STORYTELLING
+
PREMIUM MOTION
```

### Nguyên tắc lớn

> **Less decoration. More movement.**

Không cần nhồi nhiều gradient, card hay 3D. Trang đẹp nhờ **typography + whitespace + grid + motion + interaction**.

---

# 02. BRAND CONCEPT

## Main statement

```text
BUILD.
MARKET.
SCALE.
```

## Business flow

```text
PRODUCT
   ↓
MARKETING
   ↓
COMMERCE
   ↓
MARKET
   ↓
SCALE
```

## Geographic message

```text
FROM VIETNAM.
ACROSS SOUTHEAST ASIA.
```

Vieton có thể được thể hiện như một hệ thống kết nối:

```text
Vietnam
   ↓
Thailand
Malaysia
Singapore
Indonesia
Philippines
   ↓
Southeast Asia
   ↓
Global
```

Không nên tuyên bố Vieton "global" quá mạnh nếu hiện tại hoạt động chủ yếu tại Đông Nam Á.

---

# 03. COLOR SYSTEM

```css
--background: #FFFFFF;
--foreground: #101828;

--blue: #155EEF;
--blue-dark: #0B1F3A;
--blue-light: #EAF2FF;
--blue-electric: #2E90FA;

--muted: #667085;
--muted-light: #98A2B3;

--border: #E4E7EC;
--border-light: #F2F4F7;
```

### Tỷ lệ màu

```text
White       88%
Dark text    7%
Blue         4%
Light blue   1%
```

White phải là màu chủ đạo.

Blue chỉ dùng để:

- CTA
- Active state
- Network
- Highlight
- Progress
- Link hover
- Data visualization
- Animation

Không biến toàn bộ website thành màu xanh.

---

# 04. TYPOGRAPHY

## Font

Ưu tiên:

```text
Geist
```

Alternative:

```text
Inter
Manrope
```

Nên chỉ dùng **một font family chính**.

---

## Type scale — Desktop

```text
Display XL       120–160px
Display L         88–120px
Display M         64–88px
Heading XL        56–72px
Heading L         48–56px
Heading M         36–44px
Heading S         28–32px

Body XL            24px
Body L             20px
Body M             18px
Body S             16px
Caption            13–14px
Label              12–13px
```

## Hero

```css
font-size: clamp(64px, 10vw, 160px);
line-height: 0.9;
letter-spacing: -0.055em;
font-weight: 500–650;
```

Hero:

```text
BUILD.
MARKET.
SCALE.
```

Các từ phải giống những khối kiến trúc lớn.

---

## Typography rules

Heading:

```css
letter-spacing: -0.05em;
line-height: 0.95;
```

Không nên dùng font-weight 800–900 quá nhiều.

Ưu tiên:

```text
500 / 600
```

Body:

```text
16–20px
line-height: 1.5–1.7
```

Body width:

```text
560–680px
```

---

# 05. GRID SYSTEM

Desktop 1440px:

```text
Horizontal padding: 64px
Columns: 12
Gutter: 20px
```

Large desktop:

```text
max-width: 1440–1600px
margin: auto
padding: 48–80px
```

Mobile:

```text
padding-inline: 20px
```

Tablet:

```text
padding-inline: 32px
```

Desktop:

```text
padding-inline: 48–64px
```

Large:

```text
padding-inline: 64–80px
```

Tất cả section quan trọng nên bám cùng một grid.

---

# 06. SPACING SYSTEM

Dùng base 8px:

```text
4
8
12
16
24
32
40
48
64
80
96
120
160
200
240
```

### Typography spacing

```text
Label → Heading      16–24px
Heading → Body       24–32px
Body → CTA           32–40px
```

### Section spacing

Desktop:

```text
160–240px
```

Mobile:

```text
96–140px
```

Whitespace là một phần của thiết kế.

Không cố lấp mọi khoảng trống.

---

# 07. CONTAINER

Desktop:

```css
.container {
  width: min(100% - 128px, 1440px);
  margin-inline: auto;
}
```

Mobile:

```css
.container {
  width: calc(100% - 40px);
}
```

---

# 08. BORDER / RADIUS / SHADOW

## Border

```css
border: 1px solid #E4E7EC;
```

Subtle:

```css
border: 1px solid #F2F4F7;
```

Active:

```css
border-color: #155EEF;
```

## Radius

```text
Buttons       999px hoặc 4px
Cards         8–16px
Images        0–12px
Containers    16–24px
```

Không biến mọi thứ thành rounded card.

## Shadow

Chỉ dùng rất nhẹ:

```css
box-shadow: 0 10px 40px rgba(16, 24, 40, 0.06);
```

Phần lớn website không cần shadow.

---

# 09. NAVBAR

Desktop height:

```text
72–88px
```

Minimal:

```text
VIETON                              MENU
```

Hoặc:

```text
VIETON      ABOUT SERVICES MARKETS WORK      CONTACT
```

Initial:

```text
background: transparent;
```

After scrolling:

```css
background: rgba(255,255,255,0.88);
backdrop-filter: blur(12px);
border-bottom: 1px solid #E4E7EC;
```

Transition:

```text
400–600ms
```

---

# 10. FULL-SCREEN MENU

Khi click MENU:

```text
HOME
ABOUT
SERVICES
MARKETS
WORK
CONTACT
```

Animation:

```text
1. White/blue overlay xuất hiện
2. Menu container reveal
3. Navigation items slide lên
4. Item hover chuyển xanh
5. Close button xuất hiện
```

Stagger:

```text
50–80ms
```

Menu typography:

```text
48–96px desktop
36–56px mobile
```

---

# 11. HERO

## Height

Desktop:

```text
min-height: 100svh;
```

Mobile:

```text
min-height: 92svh;
```

Không ép cứng `100vh` nếu gây clipping.

---

## Layout

```text
┌──────────────────────────────────────────────┐
│ VIETON                              MENU     │
│                                              │
│                                              │
│ BUILD.                       GLOBAL          │
│ MARKET.                      NETWORK         │
│ SCALE.                                       │
│                                              │
│ We build and scale businesses                │
│ across Southeast Asia.                       │
│                                              │
│ [ DISCOVER VIETON → ]                        │
│                                              │
└──────────────────────────────────────────────┘
```

Hero title chiếm khoảng:

```text
55–65vw
```

Network:

```text
30–40vw
```

---

# 12. HERO TYPOGRAPHY ANIMATION

Initial:

```css
opacity: 0;
transform: translateY(80px);
```

Final:

```css
opacity: 1;
transform: translateY(0);
```

Duration:

```text
800–1100ms
```

Stagger:

```text
BUILD       0.00s
MARKET      0.10s
SCALE       0.20s
```

Word-level animation được ưu tiên.

Không cần animate từng character nếu không có mục đích.

---

# 13. HERO NETWORK

Network xuất hiện sau headline.

Sequence:

```text
1. Point xuất hiện
2. Point expand nhẹ
3. Line draw
4. Point thứ hai xuất hiện
5. Line connect
6. Network idle
```

Timing:

```text
Point:          300ms
Line:           600–1200ms
Full reveal:    1.5–2.5s
Idle:           4–8s
```

Idle animation cực kỳ nhẹ.

---

# 14. GLOBAL NETWORK STYLE

Network phải giống:

- Digital commerce infrastructure
- Data network
- Global connection
- Business ecosystem

Dùng:

```text
Line:
#155EEF
1px
opacity: 0.3–0.5

Active line:
opacity: 1
1–1.5px
```

Point:

```text
3–5px
```

Active:

```text
5–8px
```

Không dùng neon.

Không làm giống sci-fi HUD.

---

# 15. SCROLL INDICATOR

Ở đáy Hero:

```text
SCROLL
↓
```

Arrow:

```text
translateY(0 → 8px → 0)
```

Duration:

```text
1.6s
```

Infinite.

Opacity thấp.

---

# 16. ABOUT VIETON

Section:

```text
01 — ABOUT VIETON
```

Heading:

```text
WE BUILD
FOR A
BIGGER WORLD.
```

Body:

> Vieton is a growth and commerce company combining performance marketing, product sourcing and e-commerce operations to discover, launch and scale products across Southeast Asia.

Layout desktop:

```text
12-column grid

LEFT:
01 — ABOUT VIETON

RIGHT:
WE BUILD
FOR A
BIGGER WORLD.

Body
CTA
```

Padding:

```text
180–220px vertical
```

---

# 17. ABOUT TEXT REVEAL

Trigger khi section vào khoảng:

```text
20–30% viewport
```

Initial:

```css
opacity: 0;
transform: translateY(40px);
```

Final:

```css
opacity: 1;
transform: translateY(0);
```

Duration:

```text
700–1000ms
```

Stagger:

```text
50–80ms
```

---

# 18. GROWTH ENGINE

Hiển thị:

```text
PRODUCT
   ↓
MARKETING
   ↓
COMMERCE
   ↓
MARKET
   ↓
SCALE
```

Inactive:

```text
#98A2B3
```

Active:

```text
#155EEF
```

Connector:

```text
#E4E7EC
```

Progress:

```text
#155EEF
```

Khi scroll, active item đổi theo tiến trình.

---

# 19. GLOBAL / SOUTHEAST ASIA SECTION

Đây là một trong những signature sections.

Height:

```text
100svh
```

Desktop:

```text
pin section
+
scroll storytelling
```

Ban đầu:

```text
● VIETNAM
```

Sau đó:

```text
● VIETNAM
             ● THAILAND
```

Tiếp:

```text
● VIETNAM ─── ● THAILAND
             ● MALAYSIA ─── ● SINGAPORE
```

Cuối:

```text
VIETNAM
THAILAND
MALAYSIA
SINGAPORE
INDONESIA
PHILIPPINES
```

kết nối thành network.

---

# 20. MAP STORY

Scroll progress:

```text
0.00 → Vietnam
0.25 → Thailand
0.50 → Malaysia / Singapore
0.75 → Indonesia / Philippines
1.00 → Full network
```

Cuối section:

```text
FROM VIETNAM.
ACROSS SOUTHEAST ASIA.
```

Camera / map movement phải smooth.

GSAP:

```text
scrub: 1
```

Không snap cứng.

---

# 21. SERVICES

Không dùng grid card bình thường.

Dùng horizontal storytelling.

Desktop:

```text
vertical scroll
        ↓
horizontal movement
```

Service panels:

```text
01

PERFORMANCE
MARKETING

Turn attention
into revenue.
```

```text
02

PRODUCT
SOURCING

Find products
worth scaling.
```

```text
03

E-COMMERCE

Build the machine
behind the sale.
```

```text
04

MARKET
EXPANSION

One product.
Multiple markets.
```

---

# 22. SERVICES SCROLL

Section tổng:

```text
300–450vh
```

Viewport content:

```text
100svh
```

Horizontal movement:

```text
translateX()
```

Không dùng `left`.

GSAP:

```text
ScrollTrigger
scrub: 0.8–1.2
```

Active panel:

```text
opacity: 1
scale: 1
```

Inactive:

```text
opacity: 0.45
scale: 0.96
```

Scale rất nhẹ.

---

# 23. PRODUCT → MARKET

Headline:

```text
ONE PRODUCT.
MULTIPLE MARKETS.
```

Center:

```text
PRODUCT
```

Surrounding:

```text
THAILAND
MALAYSIA
INDONESIA
PHILIPPINES
SINGAPORE
```

Lines connect center to markets.

---

# 24. PRODUCT JOURNEY

Scroll sequence:

```text
PRODUCT
   ↓
MARKET TEST
   ↓
CREATIVE
   ↓
ADS
   ↓
CONVERSION
   ↓
SCALE
```

Mỗi bước thay đổi visual.

Ví dụ:

```text
PRODUCT
→ product visual

CREATIVE
→ creative thumbnails

ADS
→ performance graph

CONVERSION
→ sales/order signal

SCALE
→ multiple markets
```

---

# 25. HOW WE SCALE

Timeline:

```text
01 DISCOVER
02 SOURCE
03 TEST
04 SCALE
05 EXPAND
```

Line:

```text
2px
#E4E7EC
```

Progress:

```text
2px
#155EEF
```

Progress chạy theo scroll.

---

# 26. METRICS

Nếu có số liệu thật:

```text
06
MARKETS

100+
PRODUCTS TESTED

XXM+
AD SPEND

XX+
CAMPAIGNS
```

Animate:

```text
0 → final
```

Duration:

```text
1200–1800ms
```

Chỉ chạy một lần.

**Không bao giờ dùng số liệu giả.**

---

# 27. CASE STUDIES

Layout:

```text
Image:       7–8 columns
Information: 4–5 columns
```

Image hover:

```text
scale: 1 → 1.04
```

Duration:

```text
600–900ms
```

Ease:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Information:

```text
Market
Channel
Category
Result
```

Chỉ hiển thị verified data.

---

# 28. CASE STUDY CURSOR

Desktop hover:

```text
VIEW
```

Circular cursor:

```text
blue background
white text
```

Arrow:

```text
→
```

Không dùng custom cursor trên mobile.

---

# 29. MARKETS

Danh sách lớn:

```text
VIETNAM
THAILAND
INDONESIA
MALAYSIA
PHILIPPINES
SINGAPORE
```

Hover:

```text
text → blue
point → appear
line → draw
content → reveal
```

Map cập nhật theo country đang hover.

---

# 30. WHY VIETON

Không làm 6 card.

Dùng editorial list:

```text
DATA OVER
GUESSWORK

01
```

```text
SPEED
MATTERS

02
```

```text
THINK
LOCAL

03
```

```text
BUILD
FOR SCALE

04
```

Mỗi item có divider.

Hover:

```text
color → blue
translateX → 8–16px
```

---

# 31. FINAL CTA

Background:

```text
#EAF2FF
```

Headline:

```text
READY TO BUILD
SOMETHING BIGGER?
```

CTA:

```text
LET'S TALK →
```

Network rất mờ phía sau.

Không để network cạnh tranh với headline.

---

# 32. BUTTON SYSTEM

Primary:

```css
height: 52–60px;
padding-inline: 24–32px;
border-radius: 999px;
background: #155EEF;
color: white;
```

Hover:

```css
background: #0B1F3A;
transform: translateY(-2px);
```

Arrow:

```text
translateX(0 → 5px)
```

Duration:

```text
250–350ms
```

---

# 33. MAGNETIC BUTTON

Chỉ desktop.

Movement:

```text
8–14px max
```

Button phản hồi theo cursor nhưng không được "đuổi" chuột.

Dùng spring motion.

Mobile:

```text
disabled
```

---

# 34. MICRO INTERACTIONS

## Links

```text
default → #101828
hover → #155EEF
arrow → +4–6px
```

## Navigation underline

```text
width: 0 → 100%
```

Duration:

```text
250–350ms
```

## Image

```text
scale: 1 → 1.03–1.05
```

---

# 35. PAGE TRANSITION

Transition:

```text
White
 ↓
Blue line
 ↓
New page reveal
```

Timeline:

```text
0ms      start
100ms    blue line
300ms    new content
650ms    complete
```

Không quá 800ms.

---

# 36. IMAGE REVEAL

Ưu tiên mask/clip-path.

Initial:

```css
clip-path: inset(100% 0 0 0);
```

Final:

```css
clip-path: inset(0 0 0 0);
```

Duration:

```text
900–1200ms
```

Easing:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

---

# 37. TEXT REVEAL COMPONENT

Tạo component:

```text
<TextReveal />
```

Modes:

```text
fade-up
line
word
character
clip
```

Default:

```text
line / word
```

Character chỉ dành cho Hero / headline đặc biệt.

---

# 38. SCROLL REVEAL COMPONENT

Tạo:

```text
<ScrollReveal />
```

Default:

```text
opacity: 0 → 1
y: 40 → 0
duration: 0.8s
```

Trigger:

```text
start: 85%
end: 55%
```

Không animate từng span nhỏ nếu không cần.

Group nội dung.

---

# 39. MOTION EASING

Primary:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Alternative:

```text
cubic-bezier(0.16, 1, 0.3, 1)
```

Scroll-linked:

```text
linear / scrubbed
```

Spring:

```text
chỉ cho magnetic interaction
```

Không dùng bounce/elastic cho animation corporate.

---

# 40. MOTION SPEED

```text
Micro interaction    150–300ms
Hover                250–450ms
Text reveal          600–1000ms
Image reveal         800–1200ms
Section transition   800–1500ms
Hero sequence        2000–3000ms
```

Không để website có cảm giác chậm.

---

# 41. THREE.JS / WEBGL

Three.js chỉ nên dùng nếu thật sự cần.

### Tốt

- Interactive globe
- 3D product
- 3D global network
- Spatial data visualization

### Không tốt

- Cube xoay trang trí
- Object 3D không liên quan
- Background WebGL nặng
- Particle chỉ để "cho đẹp"

Ưu tiên:

```text
SVG
↓
Canvas
↓
Three.js
```

Bắt đầu từ SVG.

---

# 42. SVG GLOBAL NETWORK

SVG phù hợp cho:

- Country points
- Connection lines
- Route
- Market map
- Network

Style:

```text
stroke: #155EEF
stroke-width: 1
opacity: 0.35
```

Active:

```text
opacity: 1
stroke-width: 1.5
```

---

# 43. NETWORK PARTICLES

Nếu cần particle chạy trên line:

```text
1–3px
```

Movement:

```text
start → end
```

Duration:

```text
2–5s
```

Không nên có hàng trăm particle.

Mục tiêu là cảm giác **data flow**, không phải hiệu ứng game.

---

# 44. LOADING

Không nên có intro dài.

Nếu dùng preloader:

```text
VIETON
```

Duration:

```text
600–1200ms
```

Sau đó Hero xuất hiện.

Không dùng loading:

```text
3–5 seconds
```

---

# 45. IMAGE DIRECTION

Ưu tiên:

- Product photography
- E-commerce
- Packaging
- Logistics
- Southeast Asia
- Digital advertising
- Real business environments
- Market scenes

Không dùng:

- Handshake stock
- Generic office meeting
- Generic businessman
- Laptop stock
- Fake corporate team photo

---

# 46. ICON SYSTEM

Line icon:

```text
stroke: 1–1.5px
color: #155EEF
```

Icon phải cùng ngôn ngữ với network.

Không dùng icon pack nhiều màu.

---

# 47. SECTION LABELS

Format:

```text
01 — ABOUT VIETON
02 — WHAT WE DO
03 — OUR MARKETS
04 — SELECTED WORK
```

Style:

```text
font-size: 12–14px
letter-spacing: 0.08–0.12em
text-transform: uppercase
color: #667085
```

---

# 48. SECTION HEADINGS

Không nên dùng:

```text
About Us
Services
Our Team
```

Nên dùng:

```text
WE BUILD
FOR A
BIGGER WORLD.
```

```text
FROM PRODUCT
TO MARKET.
```

```text
ONE PRODUCT.
MULTIPLE MARKETS.
```

```text
READY TO BUILD
SOMETHING BIGGER?
```

Headline phải kể câu chuyện.

---

# 49. CONTENT WIDTH

Large heading:

```text
max-width: 1000–1200px
```

Body:

```text
max-width: 560–680px
```

Description:

```text
max-width: 480–620px
```

Không để paragraph kéo toàn màn hình.

---

# 50. VISUAL RHYTHM

Không section nào cũng được thiết kế giống nhau.

Nhịp đề xuất:

```text
TEXT HEAVY
↓
VISUAL HEAVY
↓
TEXT HEAVY
↓
INTERACTION HEAVY
↓
CASE STUDY
↓
CTA
```

Ví dụ:

```text
Hero             → visual
About            → typography
Global Network   → visual
Services         → interaction
Product Markets  → visual
Process          → typography
Cases            → image
CTA              → typography
```

---

# 51. MOBILE

Desktop có full creative experience.

Mobile phải là **phiên bản kể chuyện đơn giản hơn**, không phải desktop thu nhỏ.

## Mobile disable

- Magnetic cursor
- Heavy parallax
- Complex horizontal scroll
- High-density particles
- Heavy WebGL nếu performance kém

## Mobile keep

- Text reveal
- Image reveal
- Simple network
- Button interaction
- Section transition

---

# 52. MOBILE TYPOGRAPHY

Hero:

```text
56–76px
```

Section title:

```text
44–64px
```

Body:

```text
16–18px
```

Use:

```css
font-size: clamp(...);
```

---

# 53. MOBILE SPACING

```text
Horizontal padding: 20px

Section:
96–140px

Heading → Body:
20–24px

Body → CTA:
28–32px
```

---

# 54. MOBILE LAYOUT

Desktop 2-column:

```text
TEXT | VISUAL
```

Mobile:

```text
TEXT
↓
VISUAL
↓
CTA
```

Thứ tự ưu tiên:

```text
1. Heading
2. Explanation
3. Visual
4. CTA
```

---

# 55. REDUCED MOTION

Bắt buộc hỗ trợ:

```css
@media (prefers-reduced-motion: reduce) {
  /* disable non-essential motion */
}
```

Reduced mode:

- Tắt parallax
- Tắt custom cursor
- Tắt camera movement
- Tắt long page transition
- Giữ opacity transition đơn giản
- Giữ đầy đủ nội dung

---

# 56. PERFORMANCE

Animation-heavy nhưng phải nhanh.

### Rules

- Next/Image
- Lazy-load media
- Optimize image size
- Avoid huge background video
- Avoid unnecessary WebGL
- Transform/opacity preferred
- GSAP ScrollTrigger
- Không tạo quá nhiều DOM
- Không chạy scroll handler nặng

Target:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

---

# 57. ANIMATION PERFORMANCE

Ưu tiên:

```text
transform
opacity
scale
clip-path
```

Hạn chế animate liên tục:

```text
top
left
width
height
box-shadow
```

Animation phải đạt cảm giác:

```text
smooth
stable
60fps
```

---

# 58. NEXT.JS COMPONENT ARCHITECTURE

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── markets/page.tsx
│   ├── work/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── GlobalNetwork.tsx
│   │   ├── Services.tsx
│   │   ├── ProductMarkets.tsx
│   │   ├── Process.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Markets.tsx
│   │   ├── WhyVieton.tsx
│   │   └── FinalCTA.tsx
│   │
│   └── animation/
│       ├── TextReveal.tsx
│       ├── ScrollReveal.tsx
│       ├── ImageReveal.tsx
│       ├── MagneticButton.tsx
│       └── NetworkAnimation.tsx
│
├── data/
│   ├── services.ts
│   ├── markets.ts
│   └── cases.ts
│
└── hooks/
    └── useReducedMotion.ts
```

---

# 59. SERVER / CLIENT COMPONENTS

Giữ static content là Server Component.

Chỉ `"use client"` cho:

- Navbar interaction
- Menu
- GSAP
- Mouse interaction
- Interactive map
- 3D
- Contact form
- Animated sections

Không biến toàn bộ app thành Client Component.

---

# 60. DATA-DRIVEN CONTENT

Markets:

```ts
const markets = [
  {
    name: "Vietnam",
    code: "VN",
    description: "...",
  },
  {
    name: "Thailand",
    code: "TH",
    description: "...",
  },
];
```

Services:

```ts
const services = [
  {
    number: "01",
    title: "Performance Marketing",
    description: "...",
  },
];
```

Không hardcode hàng loạt JSX giống nhau.

---

# 61. SEO

Homepage title:

```text
Vieton — Building & Scaling Businesses Across Southeast Asia
```

Description:

```text
Vieton combines performance marketing, product sourcing and
e-commerce operations to build and scale businesses across
Southeast Asia.
```

Mỗi page cần:

- Metadata
- Open Graph
- Semantic headings
- Alt text
- Sitemap
- Robots
- Favicon

Animation không được thay thế HTML content.

Ví dụ phải có:

```html
<h1>Build. Market. Scale.</h1>
```

không chỉ vẽ bằng Canvas.

---

# 62. PAGE STRUCTURE

## HOME

```text
NAVBAR
↓
HERO
BUILD. MARKET. SCALE.
↓
ABOUT
WE BUILD FOR A BIGGER WORLD.
↓
GLOBAL NETWORK
FROM VIETNAM. ACROSS SOUTHEAST ASIA.
↓
WHAT WE DO
Performance Marketing
Product Sourcing
E-commerce
Market Expansion
↓
ONE PRODUCT. MULTIPLE MARKETS.
↓
HOW WE SCALE
Discover → Source → Test → Scale → Expand
↓
SELECTED WORK
↓
OUR MARKETS
↓
WHY VIETON
↓
FINAL CTA
READY TO BUILD SOMETHING BIGGER?
↓
FOOTER
```

---

# 63. ABOUT PAGE

```text
Hero
↓
Our Story
↓
Mission
↓
Vision
↓
What We Believe
↓
What We Do
↓
Our Markets
↓
Our Approach
↓
CTA
```

Hero:

```text
BUILDING
WHAT COMES
NEXT.
```

---

# 64. SERVICES PAGE

```text
Hero
↓
Performance Marketing
↓
Product Sourcing
↓
E-commerce
↓
Market Expansion
↓
How We Work
↓
CTA
```

Mỗi service có một visual riêng.

---

# 65. MARKETS PAGE

```text
Hero
↓
Interactive Southeast Asia Map
↓
Vietnam
↓
Thailand
↓
Malaysia
↓
Singapore
↓
Indonesia
↓
Philippines
↓
Market Expansion Process
↓
CTA
```

---

# 66. WORK PAGE

```text
Hero
↓
Featured Case
↓
Case Study Grid
↓
Results
↓
Markets
↓
CTA
```

Chỉ dùng case thật.

---

# 67. CONTACT PAGE

Hero:

```text
LET'S BUILD
SOMETHING
BIGGER.
```

Form:

```text
Name
Company
Email
Phone
What are you looking for?
Message
Submit
```

Form không cần quá nhiều field.

---

# 68. DESIGN DETAILS TẠO CẢM GIÁC PREMIUM

Quan trọng nhất:

- Typography chính xác
- Spacing nhất quán
- 1px borders
- Grid alignment
- Motion có chủ đích
- Hover rất nhẹ
- Image crop đẹp
- Easing đồng nhất
- Không dùng quá nhiều màu
- Không dùng quá nhiều shadow
- Không dùng quá nhiều radius
- Không lạm dụng 3D

> Premium không đến từ việc thêm thật nhiều effect. Premium đến từ việc **mọi thứ đều đúng vị trí và chuyển động đúng lúc**.

---

# 69. MOTION HIERARCHY

Animation có 3 tầng.

## Level 1 — Micro

```text
Hover
Arrow
Underline
Button
Cursor
```

Duration:

```text
150–450ms
```

## Level 2 — Content

```text
Text reveal
Image reveal
Section reveal
Number
```

Duration:

```text
600–1200ms
```

## Level 3 — Signature

```text
Global Network
Horizontal Services
Product Journey
Page Transition
```

Duration:

```text
1–5s
```

Không để tất cả animation chạy cùng lúc.

---

# 70. ANIMATION RULE

Mỗi animation phải trả lời được ít nhất một câu:

```text
Nó đang giúp người dùng hiểu điều gì?
Nó đang dẫn mắt đi đâu?
Nó đang thể hiện business concept nào?
```

Nếu không trả lời được:

> **Remove the animation.**

---

# 71. FINAL CREATIVE STANDARD

Website phải đẹp ngay cả khi **tạm dừng tất cả animation**.

Khi bắt đầu scroll:

> Website bắt đầu kể chuyện.

Khi hover:

> Interface phản hồi nhẹ nhàng.

Khi đi qua Global Network:

> Người dùng hiểu Vieton kết nối các thị trường như thế nào.

Khi tới CTA:

> Người dùng hiểu mình nên làm gì tiếp theo.

---

# 72. FINAL CREATIVE BRIEF

> **Create Vieton as a premium white-and-blue digital commerce experience connecting Vietnam with Southeast Asia.**
>
> Use large editorial typography, generous whitespace, precise grid alignment, thin blue network lines, interactive market visualizations and sophisticated scroll-driven motion.
>
> The design should feel global without becoming futuristic or gimmicky.
>
> Animation should be smooth, restrained and meaningful.
>
> The experience should communicate:
>
> **PRODUCT → MARKETING → COMMERCE → MARKET → SCALE**
>
> The final impression:
>
> **Vieton is a serious, ambitious company built to discover, market and scale products across Southeast Asia.**

---

# 73. IMPLEMENTATION CHECKLIST

## Foundation

- [ ] Geist font
- [ ] Color variables
- [ ] Spacing variables
- [ ] Container
- [ ] 12-column grid
- [ ] Responsive breakpoints
- [ ] Global typography
- [ ] Reduced motion

## Navigation

- [ ] Transparent navbar
- [ ] Scroll navbar
- [ ] Full-screen menu
- [ ] Menu animation
- [ ] Page transition

## Hero

- [ ] BUILD / MARKET / SCALE
- [ ] Text reveal
- [ ] Global network
- [ ] CTA
- [ ] Scroll indicator

## Storytelling

- [ ] About reveal
- [ ] Growth engine
- [ ] Global map
- [ ] Services horizontal scroll
- [ ] Product → Market
- [ ] Process timeline

## Interaction

- [ ] Hover states
- [ ] Magnetic CTA
- [ ] Custom cursor
- [ ] Image reveal
- [ ] Number animation

## Pages

- [ ] Home
- [ ] About
- [ ] Services
- [ ] Markets
- [ ] Work
- [ ] Contact

## Quality

- [ ] Mobile
- [ ] Safari
- [ ] Chrome
- [ ] Firefox
- [ ] Reduced motion
- [ ] Performance
- [ ] SEO
- [ ] Accessibility
- [ ] No fake statistics
