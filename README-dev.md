# Prolog Syntax Highlighter (SWI)

## インストール

### 開発環境での使用

1. リポジトリをクローン:
```bash
git clone <repository-url>
cd prolog-vsix
```

2. 依存関係をインストール:
```bash
npm install
```

3. ビルド:
```bash
npm run build
# または
make build
```

4. VS Codeで拡張機能をテスト:
   - F5キーを押して拡張機能開発ホストを起動

## ビルド

```bash
# TypeScriptコンパイル
npm run compile

# または Makefileを使用
make build
```

## 設定

### `prolog.associatePl`
- **型**: `boolean`
- **デフォルト**: `true`
- **説明**: `.pl` ファイルを自動的にPrologとして関連付けるかどうか

## 技術スタック

- **言語**: TypeScript
- **ターゲット**: VS Code API 1.92.0+
- **シンタックス定義**: TextMate Grammar (JSON)

## プロジェクト構造

```
prolog-vsix/
├── extension.ts                    # 拡張機能のメインコード
├── package.json                    # 拡張機能のメタデータと設定
├── language-configuration.json     # 言語固有の設定
├── syntaxes/
│   └── prolog.tmLanguage.json     # Prologのシンタックス定義
├── tsconfig.json                   # TypeScript設定
├── Makefile                        # ビルドスクリプト
└── out/                            # コンパイル済みJavaScript出力
```

## 貢献

Issue報告やPull Requestを歓迎します。

