# Color Tokens

このディレクトリは [Design Tokens Color Module 2025.10](https://www.designtokens.org/tr/2025.10/color/) の形式に沿った色情報を定義しています。

[Variables Import](https://www.figma.com/community/plugin/1253424530216967528/variables-import) プラグインを使用して、Figmaに取り込むことができます。

## 手順

1. FigmaにVariables Importプラグインをインストール
2. Figma上でVariables Importプラグインを起動
3. 以下のファイルを選択してインポート：
   - `manifest.json`
   - `global-colors.json`
   - `light-mode-colors.json`
   - `dark-mode-colors.json`
4. 自動的にColor Variablesとして登録されます

## カラー定義

それぞれの色は [OKLCH Color Picker & Converter](https://oklch.com/) で明るさ・彩度・色合いを調整しながら決定しています。DCI-P3色域に収まる範囲内で色を指定しています。

コントラスト比は [APCA Contrast Calculator](https://apcacontrast.com/) で確認しています。

### Red

| Name   | OKLCH                  | Hex       |
| ------ | ---------------------- | --------- |
| Red50  | `oklch(0.97 0.013 25)` | `#fef2f1` |
| Red100 | `oklch(0.90 0.042 25)` | `#f9d4d0` |
| Red200 | `oklch(0.83 0.080 25)` | `#f7b4ad` |
| Red300 | `oklch(0.75 0.135 25)` | `#f88a82` |
| Red400 | `oklch(0.67 0.190 25)` | `#f45a56` |
| Red500 | `oklch(0.59 0.224 25)` | `#e4212f` |
| Red600 | `oklch(0.51 0.196 25)` | `#bd1624` |
| Red700 | `oklch(0.43 0.160 25)` | `#94151d` |
| Red800 | `oklch(0.35 0.132 25)` | `#700b12` |
| Red900 | `oklch(0.28 0.103 25)` | `#50080b` |
| Red950 | `oklch(0.21 0.070 25)` | `#320607` |

### Green

| Name     | OKLCH                   | Hex       |
| -------- | ----------------------- | --------- |
| Green50  | `oklch(0.97 0.010 144)` | `#f1f7f1` |
| Green100 | `oklch(0.90 0.041 144)` | `#cee6cd` |
| Green200 | `oklch(0.83 0.077 144)` | `#a9d5a8` |
| Green300 | `oklch(0.75 0.121 144)` | `#7dc27c` |
| Green400 | `oklch(0.67 0.155 144)` | `#51ad53` |
| Green500 | `oklch(0.59 0.165 144)` | `#2d9534` |
| Green600 | `oklch(0.51 0.141 144)` | `#257a2a` |
| Green700 | `oklch(0.43 0.119 144)` | `#1b601f` |
| Green800 | `oklch(0.35 0.087 144)` | `#19461a` |
| Green900 | `oklch(0.28 0.070 144)` | `#0f3110` |
| Green950 | `oklch(0.21 0.050 144)` | `#081e08` |

### Blue

| Name    | OKLCH                   | Hex       |
| ------- | ----------------------- | --------- |
| Blue50  | `oklch(0.97 0.011 253)` | `#f0f6fd` |
| Blue100 | `oklch(0.90 0.041 253)` | `#cbe0f9` |
| Blue200 | `oklch(0.83 0.077 253)` | `#a4cbf9` |
| Blue300 | `oklch(0.75 0.121 253)` | `#75b2f9` |
| Blue400 | `oklch(0.67 0.155 253)` | `#4698f1` |
| Blue500 | `oklch(0.59 0.165 253)` | `#217edb` |
| Blue600 | `oklch(0.51 0.141 253)` | `#1b67b4` |
| Blue700 | `oklch(0.43 0.119 253)` | `#13508f` |
| Blue800 | `oklch(0.35 0.087 253)` | `#133b66` |
| Blue900 | `oklch(0.28 0.070 253)` | `#0b294a` |
| Blue950 | `oklch(0.21 0.050 253)` | `#06192e` |

### Yellow

| Name      | OKLCH                   | Hex       |
| --------- | ----------------------- | --------- |
| Yellow50  | `oklch(0.97 0.040 102)` | `#faf7d8` |
| Yellow100 | `oklch(0.90 0.099 102)` | `#ebe193` |
| Yellow200 | `oklch(0.83 0.162 102)` | `#ddca2f` |
| Yellow300 | `oklch(0.75 0.157 102)` | `#c2b000` |
| Yellow400 | `oklch(0.67 0.135 102)` | `#a69716` |
| Yellow500 | `oklch(0.59 0.123 102)` | `#8c7f02` |
| Yellow600 | `oklch(0.51 0.104 102)` | `#726708` |
| Yellow700 | `oklch(0.43 0.085 102)` | `#59510b` |
| Yellow800 | `oklch(0.35 0.067 102)` | `#423b09` |
| Yellow900 | `oklch(0.28 0.051 102)` | `#2e2a07` |
| Yellow950 | `oklch(0.21 0.040 102)` | `#1c1902` |

### Monotone

| Name        | OKLCH             | Hex       |
| ----------- | ----------------- | --------- |
| Monotone50  | `oklch(0.97 0 0)` | `#f5f5f5` |
| Monotone100 | `oklch(0.90 0 0)` | `#dedede` |
| Monotone200 | `oklch(0.83 0 0)` | `#c7c7c7` |
| Monotone300 | `oklch(0.75 0 0)` | `#aeaeae` |
| Monotone400 | `oklch(0.67 0 0)` | `#959595` |
| Monotone500 | `oklch(0.59 0 0)` | `#7d7d7d` |
| Monotone600 | `oklch(0.51 0 0)` | `#666666` |
| Monotone700 | `oklch(0.43 0 0)` | `#505050` |
| Monotone800 | `oklch(0.35 0 0)` | `#3a3a3a` |
| Monotone900 | `oklch(0.28 0 0)` | `#292929` |
| Monotone950 | `oklch(0.21 0 0)` | `#181818` |

## カラートークンの使用方法

### ビルド方法

以下のコマンドを実行して、カラーファイルを生成します：

```bash
npm run build
```

このコマンドにより、以下のファイルが自動生成されます：

- `dist/main.css` - Pure CSS Custom Properties（OKLCH形式）
- `dist/main.tailwind.css` - Tailwind CSS v4 テーマ設定
- `dist/panda.config.ts` - Panda CSS 設定ファイル

### フレームワーク別の使用方法

#### Pure CSS

プロジェクトでCSS変数をインポートして使用します：

```css
@import '@o2project/design-system/main.css';

.my-component {
  /* global color */
  color: var(--color-blue-700);
  border: 1px solid var(--color-blue-200);

  /* semantic token */
  background: var(--color-neutral-background);
  color: var(--color-neutral-text);
}
```

ダークモードは `@media (prefers-color-scheme: dark)` により自動的に適用されます。

#### Tailwind CSS v4

Tailwind CSS v4 ではCSS ベースの設定を使用します：

```css
/* app.css */
@import '@o2project/design-system/tailwind.css';
```

HTML/JSXで使用：

```html
<div class="bg-primary-main text-neutral-background">Hello World</div>
```

#### Panda CSS

Panda CSSがインストールされていない場合は、まずインストールします：

```bash
npm install -D @pandacss/dev
```

`panda.config.ts` で設定をインポートします：

```typescript
import { defineConfig } from '@pandacss/dev';
import designSystemColors from '@o2project/design-system/panda.config';

export default defineConfig({
  presets: [designSystemColors],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: 'styled-system',
});
```

コンポーネントで使用：

```tsx
import { css } from '../styled-system/css';

const styles = css({
  color: 'primary.main',
  bg: 'neutral.background',
});
```

### 色の更新

1. このREADME.mdファイル内のOKLCH値を編集
2. `npm run build` を実行
3. すべての生成ファイル（`dist/main.css`、`dist/main.tailwind.css`、`dist/panda.config.ts`）とJSONファイルが自動的に更新されます

**注意**: 生成されたファイルには "DO NOT EDIT MANUALLY" と記載されています。常にこのREADME内のOKLCH値を編集してください。

## セマンティックトークン

セマンティックトークンは、デザイン上の役割に基づいた色の定義です。ライトモードとダークモードで自動的に切り替わります。

### Primary Colors

#### Primary.Main

落ち着きがある中にも明るいトーンの青色。メインカラーとして使用します。

| Theme | Value        |
| ----- | ------------ |
| Light | Blue.Blue700 |
| Dark  | Blue.Blue600 |

#### Primary.Accent

フレッシュで明るいトーンの緑色。アクセントカラーとして使用します。

| Theme | Value          |
| ----- | -------------- |
| Light | Green.Green200 |
| Dark  | Green.Green300 |

### Actions

#### Like（Actions.Like）

いいねボタンの塗りつぶしで使用します。

| Theme | Value      |
| ----- | ---------- |
| Light | Red.Red400 |
| Dark  | Red.Red400 |

### Neutral

- **Background**: 背景色
- **Text**: 本文テキスト
- **SubText**: 補助テキスト（キャプションなど）
- **Border**: ボーダー・区切り線
- **White**: 白色（固定値）
- **Black**: 黒色（固定値）

## 関連リンク

- [Charcoal 2.0: デザインシステムの基盤を再構築 - Speaker Deck](https://speakerdeck.com/godlingkogami/charcoal-2-dot-0-tesainsisutemunoji-pan-wozai-gou-zhu)：OKLCH色空間・APCAによるコントラスト比計算を採用した例
