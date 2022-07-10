/* レイアウト関連 */

type LayoutProps = {
    children: React.ReactElement;
}

/* ページ関連 */

type IndexPageProps = {
    progressions: Progression[];
}

/* 共通コンポーネント関連 */

type InputProps = {
    /* プレイスホルダは文字列のみ */
    placeholder: string;
    type?: "text" | "number";
    register: import("react-hook-form").UseFormRegisterReturn;
}

type SubmitButtonProps = {
    label: string;
    disabled: boolean;
}
