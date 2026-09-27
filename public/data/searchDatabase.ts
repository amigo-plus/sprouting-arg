export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  sitelinks?: { title: string; url: string; snippet: string }[];
}

export interface MemoItem {
  id: string;
  title: string;
  url: string;
  queryNote?: string;
}

export const searchDatabase: Record<string, SearchResult[]> = {
  "真蔓": [
    {
      title: "真蔓市 - Wakipedia",
      url: "/wiki/matsuru-city",
      snippet: "真蔓市（まつるし）は、張岡県西部に位置する市。1990年代後半の土砂災害以降、計画的な市町村合併と移転が行われ……"
    },
    {
      title: "【郷土史】真蔓地区における民間伝承と祭祀",
      url: "#",
      snippet: "真蔓地方に伝わる特殊な風習と「言葉」に関する記録。古くから外部との交流を拒んできた背景について……"
    }
  ],
  "イルマ": [
    {
      title: "イルマのオカルトブログ",
      url: "/contents/y-chat",
      snippet: "オカルト好きなイルマによるメッセージログ。"
    }
  ]
};

// 2. 発見ページメモ用リストデータ
export const memoList: MemoItem[] = [
  { id: "01", title: "Search", url: "/index" },
  { id: "02", title: "Y.com - チャット", url: "/contents/y-chat" },
  { id: "03", title: "真蔓市 - Wakipedia", url: "/wiki/ayashiro", queryNote: "keyword:「真蔓」" },
  
];