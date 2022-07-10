/* レイアウト関連 */

type LayoutProps = {
    children: React.ReactElement;
}

/* ページ関連 */

type IndexPageProps = {
    progressions: Progression[];
}

/* その他コンポーネント関連 */

type TileProps = {
    chord: string;
    bg: Color;
}