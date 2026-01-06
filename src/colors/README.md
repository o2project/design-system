# Color Tokens

このディレクトリは[Design Tokens Color Module 2025.10](https://www.designtokens.org/tr/2025.10/color/)の形式に沿った色情報を定義しています。

[Variables Import](https://www.figma.com/community/plugin/1253424530216967528/variables-import)プラグインを使用して、Figmaに取り込めます。

## 手順

1. FigmaにVariables Importプラグインをインストール
2. Figma上でVariables Importプラグイン
3. `colors.json` と `manifest.json` ファイルを選択してインポート
4. 自動的にColor Variablesとして登録されます

## Variables定義

それぞれの色は[OKLCH Color Picker & Converter](https://oklch.com/)で明るさ・彩度・色合いを調整しながら使う色を決めています。

コントラスト比は[APCA Contrast Calculator](https://apcacontrast.com/)で確認しています。

### Red

| Name | OKLCH | Hex |
| ---- | ----- | --- |
| Red50 | oklch(0.95 0.020 25) | #fceae8 |
| Red100 | oklch(0.90 0.040 25) | #f8d4d1 |
| Red200 | oklch(0.85 0.080 25) | #febab4 |
| Red300 | oklch(0.75 0.140 25) | #fa8880 |
| Red400 | oklch(0.70 0.190 25) | #ff645f |
| Red500 | oklch(0.65 0.224 25) | #fa3d42 |
| Red600 | oklch(0.55 0.210 25) | #d01c29 |
| Red700 | oklch(0.45 0.180 25) | #a20519 |
| Red800 | oklch(0.35 0.140 25) | #72020e |
| Red900 | oklch(0.28 0.100 25) | #4f0a0d |
| Red950 | oklch(0.22 0.070 25) | #340909 |

### Green

| Name | OKLCH | Hex |
| ---- | ----- | --- |
| Green50 | oklch(0.95 0.010 144) | #ebf0ea |
| Green100 | oklch(0.90 0.020 144) | #d6e2d6 |
| Green200 | oklch(0.80 0.035 144) | #b1c4b0 |
| Green300 | oklch(0.70 0.050 144) | #8ca78b |
| Green400 | oklch(0.60 0.065 144) | #698b68 |
| Green500 | oklch(0.45 0.078 144) | #396039 |
| Green600 | oklch(0.40 0.075 144) | #2d522d |
| Green700 | oklch(0.35 0.068 144) | #234423 |
| Green800 | oklch(0.28 0.055 144) | #163017 |
| Green900 | oklch(0.22 0.042 144) | #0d200d |
| Green950 | oklch(0.15 0.030 144) | #040e04 |

### Blue

| Name | OKLCH | Hex |
| ---- | ----- | --- |
| Blue50 | oklch(0.95 0.015 248.3) | #e7f0f8 |
| Blue100 | oklch(0.90 0.025 248.3) | #d2e0ee |
| Blue200 | oklch(0.80 0.045 248.3) | #a8c1da |
| Blue300 | oklch(0.70 0.065 248.3) | #7fa2c6 |
| Blue400 | oklch(0.60 0.090 248.3) | #5385b4 |
| Blue500 | oklch(0.45 0.122 248.3) | #005895 |
| Blue600 | oklch(0.40 0.115 248.3) | #004a82 |
| Blue700 | oklch(0.35 0.100 248.3) | #003c6b |
| Blue800 | oklch(0.28 0.080 248.3) | #002a4e |
| Blue900 | oklch(0.22 0.060 248.3) | #001c35 |
| Blue950 | oklch(0.15 0.040 248.3) | #000c1b |

### Yellow

| Name | OKLCH | Hex |
| ---- | ----- | --- |
| Yellow50 | oklch(0.97 0.040 95) | #fdf6d8 |
| Yellow100 | oklch(0.95 0.079 95) | #ffefb2 |
| Yellow200 | oklch(0.93 0.156 95) | #ffe671 |
| Yellow300 | oklch(0.85 0.150 95) | #edcc48 |
| Yellow400 | oklch(0.75 0.140 95) | #caac2f |
| Yellow500 | oklch(0.65 0.125 95) | #a78d1e |
| Yellow600 | oklch(0.55 0.110 95) | #86700a |
| Yellow700 | oklch(0.45 0.095 95) | #665400 |
| Yellow800 | oklch(0.35 0.075 95) | #473900 |
| Yellow900 | oklch(0.28 0.055 95) | #312802 |
| Yellow950 | oklch(0.22 0.040 95) | #201a03 |

### Monotone

| Name | OKLCH | Hex |
| ---- | ----- | --- |
| MonotoneBrightest | oklch(0.99 0 0) | #fcfcfc |
| Monotone100 | oklch(0.88 0 0) | #d7d7d7 |
| Monotone200 | oklch(0.77 0 0) | #b4b4b4 |
| Monotone300 | oklch(0.66 0 0) | #929292 |
| Monotone400 | oklch(0.55 0 0) | #717171 |
| Monotone500 | oklch(0.44 0 0) | #525252 |
| Monotone600 | oklch(0.33 0 0) | #353535 |
| MonotoneDarkest | oklch(0.22 0 0) | #1b1b1b |

### Primary colors

#### TKS Blue

落ち着きがある中にも明るいトーンの青色。メインカラーで使います。

- HEX: `#005895`
- OKLCH: `oklch(0.45 0.122 248.3)`

#### TKS Green

落ち着いたトーンの緑色。サブカラーで使います。

- HEX: `#396039`
- OKLCH: `oklch(0.45 0.078 144)`

#### TKS Yellow

フレッシュな明るい黄色。アクセントカラーで使います。

- HEX: `#ffe65e`
- OKLCH: `oklch(0.93 0.156 95)`

### Action colors

#### Like

いいねボタンの塗りつぶしで使います。

- HEX: `#fa3d42`
- OKLCH: `oklch(0.65 0.224 25)`

## 関連リンク

- [Charcoal 2.0: デザインシステムの基盤を再構築 - Speaker Deck](https://speakerdeck.com/godlingkogami/charcoal-2-dot-0-tesainsisutemunoji-pan-wozai-gou-zhu)：OKLCH色空間・APCAによるコントラスト比計算を採用した例
