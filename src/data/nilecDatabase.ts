// 配置先: src/data/nilecDatabase.ts
// NILEC内部「検体・事案記録データベース」

export interface NilecRecord {
  id: string;
  title: string;
  category: string;
  status: string;
  date: string;
  body: string;
  keywords: string[];
  url?: string;
  asDocument?: boolean;
}

export const nilecRecords: NilecRecord[] = [

  // =========================================================
  // 通常表示される記録
  // =========================================================

  {
    id: 'I-CASE-013-21',
    title: '[21]CASE-013における経過報告',
    category: '情報管理部',
    status: '閲覧可能',
    date: '2011/10/03',
    body: `
      <p>
        晝麻県雌自馬市鴨橋地区にある沼地：CASE-013について、
        周辺区域への立ち入り禁止措置を拡大する。
      </p>

      <p>
        現地住民への説明については、
        従来の「植生保護」を目的とした立入制限として統一すること。
        個別の問い合わせに対して、CASE-013に関する
        内部記録の存在を示唆してはならない。
      </p>

      <p>
        現時点で一般市民への追加的な情報公開は不要と判断。
        周辺地域における監視体制については継続する。
      </p>

      <p>
        報告者：物部
      </p>
    `,
    keywords:[],
  },
  {
    id: 'D-A-2012-074',
    title: '刈芭県新型病原体の対策開発部への引き継ぎ資料',
    category: '対策開発部 第一課 / 検体解析部 第三課',
    status: '閲覧可能',
    date: '2012/12/23',
    body: `
      <p>
        刈芭県全域において、
        インフルエンザに酷似した新型ウイルスの罹患者が
        局所的に発生していることを確認。
      </p>

      <p>
        初期検体の解析結果から、
        既知の季節性インフルエンザとは異なる特徴が確認された。
        発生地域および時期に偏りが見られるため、
        通常の感染症事案として処理せず、
        検体解析部第三課-第二班への情報共有を行う。
      </p>

      <p>
        今後の対応については、
        第一課による一般的な感染症対策と並行して、
        第三課による追加解析を実施する。
      </p>

      <p>
        報告者：物部
      </p>
    `,
    keywords: [],
  },
  {
    id: 'A-2013-081',
    title: '真蔓市山間部における異常事案',
    category: '検体解析部 第三課',
    status: '閲覧可能',
    date: '2013/07/23',
    body: `
      <p>
        2013年7月23日、
        張岡県真蔓市山間部にて男性の遺体が発見された。
      </p>

      <p>
        発見者は現場付近で作業を行っていた一般林業従事者。
        現場確認時、対象には通常の遭難事案では確認されない
        身体的異常が認められたため、
        検体解析部第三課-第六班へ引き継ぐ。
      </p>

      <p>
        対象地域および発見経緯から、
        一般的な遭難事故として処理することは困難と判断。
        関係者への聞き取りについては担当管理役員の指示に従う。
      </p>

      <p>
        発見者にはレベルCクラスの記憶処置を施す。
      </p>

      <p>
        外部報道においては、
        「単独下山による遭難死」をカバーストーリーとして適用した。
      </p>

      <p>
        外部情報統率担当：物部
      </p>
    `,
    keywords:[],
  },

  {
    id: 'I-2013-094',
    title: '情報管理措置に関する報告',
    category: '情報管理部',
    status: '閲覧可能',
    date: '2013/08/22',
    body: `
      <p>
        真蔓市山間部における事案に関連し、
        関係者への情報管理措置を実施。
      </p>

      <p>
        対象者：物部庄太
      </p>

      <p>
        対象者については、当該事案への関与状況および
        情報管理上の必要性を考慮し、
        機構との雇用関係を終了する。
      </p>

      <p>
        今後、対象者が過去の機構業務および
        関連事案について言及した場合は、
        情報管理部にて対応すること。
      </p>

      <p>
        なお、本件に伴う関係資料については、
        所定の保管規程に従い処理する。
      </p>
    `,
    keywords:['物部庄太']
  },

  {
    id: 'I-2013-102',
    title: '張岡大学共同調査事業終了に伴う公開情報の更新',
    category: '情報管理部',
    status: '閲覧可能',
    date: '2013/09/03',
    body: `
      <p>
        張岡大学理学部との共同調査事業について、
        公開情報の更新を実施する。
      </p>

      <p>
        対象となる大学側Webサイトについては、
        現在公開されている研究者情報および研究実績を確認し、
        機構との共同調査に関する過去の記載を
        現行ページへ移行しないものとする。
      </p>

      <p>
        特に2013年度以前の共同調査事業については、
        現行の研究活動との関連性が確認できない形で整理すること。
      </p>

      <p>
        大学側担当者への連絡については、
        情報管理部担当者が直接行う。
      </p>

      <p>
        対象研究者：物部庄太
      </p>
    `,
    keywords:['物部庄太']
  },
    {
    id: 'A-Li-03-06',
    title: '検体解析部第三課第六班名簿',
    category: '検体解析部 第三課',
    status: '閲覧可能',
    date: '2009/01/27',
    body: ``,
    keywords:['検体解析部第三課-第六班'],
    url: '/contents/nilec/roster'
  },
  {
    id: 'A-03-06-O1',
    title: '音声記録:01',
    category: '検体解析部 第三課',
    status: '閲覧可能',
    date: '2013/07/23',
    body: `
    <div class="nilec-transcript">

      <div class="transcript-header">
        <p>【音声記録】</p>
        <p>記録日時：2013年7月23日</p>
        <p>記録場所：会議室</p>
      </div>
      
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        ごめんなさいね、宿舎に戻るとこ呼び止めちゃって。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        全然大丈夫だよ。それで、僕は何をしたら？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        えっと、薬務班の方に常備してる薬を追加で出してもらいたくて。ほら、コール以外の連絡はクラスB以上じゃないとできないじゃない？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        いつもは主任に連絡してもらってるんだけど、今日は出張でいないみたいから。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        分かった、明日連絡しておくね。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        それと、その、早乙女くんと美代ちゃんには薬のこと、伝えないでほしくて。……あまり、心配かけたくないから。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        ん、了解。二人には秘密にしとく。僕あまり薬のことは詳しくないんだけど、柳江さんのことを伝えればいいのかな？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        うん、それで大丈夫。引き止めちゃってごめんね。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        いいや気にしないで！おやすみなさい、良い夢を！
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        おやすみなさい。
      </p>

    </div>`,
    keywords:['会議室'],
  },
  {
  id: 'A-CASE-034-A',
  title: '解剖・検査報告書:CASE-034',
  category: '検体解析部 第三課',
  status: '閲覧可能',
  date: '2013/07/24',
  body: `
  <div class="autopsy-report">

    <div class="report-title">
      <h2>解剖・検査報告書</h2>
      <p>CASE-034</p>
    </div>

    <table class="report-table">
      <tr><th>記録番号</th><td>CASE-034</td></tr>
      <tr><th>対象者</th><td>深見天次郎（58）</td></tr>
      <tr><th>発見日</th><td>2013年7月23日</td></tr>
      <tr><th>検査日</th><td>2013年7月24日</td></tr>
      <tr><th>解析区分</th><td>死亡個体・全身</td></tr>
      <tr><th>担当</th><td>検体解析部 第三課 第六班</td></tr>
    </table>

    <h3>1. 遺体発見時所見</h3>

    <p>
      山中斜面にて発見された遺体について、外表および骨格の異常所見を確認した。
    </p>

    <p>
      通常の頭部とは別に、後頸部から上背部にかけて第二の頸部様構造が形成されており、
      その上端には頭蓋骨に類似した骨性構造を認めた。
    </p>

    <img
      src="/images/case034_pre-autopsy_01.jpg"
      class="np-doc-photo"
    />

    <p class="report-caption">
      写真1　遺体発見時外表所見
    </p>


    <h3>2. 外表・骨格所見</h3>

    <p>
      通常の頭部および頸部に加え、後頸部より新たに頸部様組織が形成されている。
      新生部は既存の頸部から連続しており、明確な境界は認められない。
    </p>

    <p>
      新生部には頸椎、気管、血管および皮膚に相当する組織が形成されており、
      複数の器官系が既存組織と同様の構造を示している。
    </p>

    <p>
      新生部の内部には、通常の頸椎と類似した配列を示す骨性構造が認められ、
      その上方には頭蓋骨に類似する構造が形成されている。
    </p>

    <p>
      新生した頭蓋様構造は、既存の頭部とは独立した形態を示す一方、
      その支持構造は既存の頸椎および上部脊柱との連続性を有している。
    </p>

    <p>
      新生部の形成に伴い、既存の頸椎および肩部周辺の骨格には配列の変化が認められる。
      ただし、明確な外傷性変化を示す所見は確認されなかった。
    </p>

    <p>
      対象の眼球周辺組織についても軽微な圧迫所見が認められ、死亡前の視野に何らかの欠損があった可能性が示唆される。
    </p>


    <h3>3. X線検査所見</h3>

    <p>
      頭部から胸部上方にかけてX線撮影を実施した。
      側面像および正面像のいずれにおいても、通常の頭蓋骨・頸椎とは別に、
      後方に形成された頭蓋様構造およびそれに連続する脊柱様構造を確認した。
    </p>

    <img
      src="/images/born.jpg"
      alt="CASE-034 頭部・頸部X線画像"
      class="np-doc-photo"
    />

    <p class="report-caption">
      写真2　頭部・頸部X線画像
    </p>

    <p>
      新生部の骨性構造は既存の骨格と類似した濃度および形態を示しており、
      単純な骨増殖または局所的な骨形成異常のみでは説明が困難である。
    </p>


    <h3>4. 総合所見</h3>

    <p>
      本個体には、既存の頭頸部構造とは別に、頸部様構造および頭蓋様構造が形成されている。
    </p>

    <p>
      本個体に認められた組織形成は、
      通常の外傷、腫瘍性病変、先天性異常のいずれとも
      一致しない特徴を有する。
    </p>

    <p>
      特に、頭蓋・脊柱に類似した複数の構造が一定の連続性を保った状態で形成されている点について、
      現時点で既知の医学的機序による説明は困難である。
    </p>

    <p>
      詳細な血液・組織学的検査については、別資料
      「血液・組織検査報告書」を参照。
    </p>

    <div class="report-sign">
      <p>検体解析部 第三課</p>
      <p>第六班</p>
      <p>記録日：2013年7月24日</p>
    </div>

  </div>
`,
  keywords: ['検体解析部第三課-第六班'],
  asDocument: true,
},
  {
    id: 'A-CASE-034-B',
    title: '血液・組織検査報告書:CASE-034',
    category: '検体解析部 第三課',
    status: '閲覧可能',
    date: '2013/07/25',
    body: `
      <div class="autopsy-report">

        <div class="report-title">
          <h2>血液・組織検査報告書</h2>
          <p>CASE-034-B</p>
        </div>

        <table class="report-table">
          <tr><th>記録番号</th><td>CASE-034-B</td></tr>
          <tr><th>対象者</th><td>深見天次郎（58）</td></tr>
          <tr><th>検体採取日</th><td>2013年7月24日</td></tr>
          <tr><th>検査日</th><td>2013年7月25日</td></tr>
          <tr><th>解析区分</th><td>血液・組織学的検査</td></tr>
          <tr><th>担当</th><td>検体解析部 第三課 第六班</td></tr>
        </table>

        <h3>1. 組織学的所見</h3>

        <p>
          新生部（頸部様構造・頭蓋様構造）および既存の皮膚・筋組織から採取した組織切片を観察した。
        </p>

        <p>
          新生部を構成する細胞には、既知の動物細胞と比較して顕著な形態的差異が認められた。
        </p>

        <p>
          各細胞の外周には薄い被膜状構造が形成されており、走査電子顕微鏡による観察では、
          植物細胞の細胞壁に類似した層状構造を示した。
        </p>

        <p>
          しかし、セルロースに対する呈色反応は陰性であり、既知の細胞壁構成物質とも一致しなかった。
          以下、当該細胞を「異常細胞」とする。
        </p>

        <p>
          異常細胞は新生部にのみ存在するものではなく、既存の皮膚、筋組織および血管壁の一部にも確認された。
        </p>

        <p>
          また、異常細胞同士の間には多数の微小な連絡構造が形成されている。
          これらは植物細胞における原形質連絡に類似した形態を示す一方、
          動物細胞における細胞間結合とも異なる特徴を有していた。
        </p>

        <p>
          異常細胞は単独で存在するのではなく、隣接する細胞と連続的な物質・情報伝達系を形成しているものと考えられる。
        </p>


        <h3>2. 血液検査所見</h3>

        <p>
          対象の血液を観察した結果、通常の血球とは異なる形態を示す細胞を多数確認した。
        </p>

        <p>
          当該細胞について詳細な観察を行ったところ、組織検査で確認された異常細胞と共通する
          被膜構造および細胞間連絡構造を有していることが判明した。
        </p>

        <p>
          当初、これらを血液中に存在する「未知構造体」として扱っていたが、
          追加検査の結果、既存の血球に未知構造体が付着しているのではなく、
          血球そのものが異常細胞へ置換されている可能性が高いと判断した。
        </p>

        <p>
          対象由来の白血球による貪食反応および抗体反応は確認されなかった。
        </p>

        <p>
          これは、異常細胞が対象の免疫系にとって「異物」として認識されていないことを示唆する。
        </p>

        <p class="report-note">
          ※本項の血液学的所見は、事案001発生後の安全措置に基づき、通常の検査工程を一部省略した簡易検査によるものである。
          血液・細胞学的検査を専門とする職員による再検査および確認は実施されていないため、
          一部所見については暫定的な判断として扱うこと。
        </p>


        <h3>3. 組織置換に関する所見</h3>

        <p>
          各検体を比較した結果、異常細胞は新生部を構成する特殊な細胞ではなく、
          対象の身体を構成する既存細胞の一部が変化したものである可能性が示された。
        </p>

        <p>
          皮膚、筋組織、血管および血液の各検体において、程度の差はあるものの
          同一の異常性を有する細胞が確認されている。
        </p>

        <p>
          すなわち、本個体における異常は「異常な組織が人体内部に形成された」のではなく、
          <strong>人体を構成する細胞そのものが、異常性を有する細胞へ置換されている</strong>
          と考えるべきである。
        </p>

        <p>
          新生部についても同様であり、既存の人体組織とは別の器官が形成されたのではなく、
          異常細胞によって構成された細胞群が、既存の人体と同様の形態を形成している可能性がある。
        </p>

        <p>
          この状態では、対象個体を単一の生命体として扱うこと自体が適切でない可能性がある。
        </p>


        <h3>4. 総合所見</h3>

        <p>
          本個体を構成する細胞の一部に、既知の動物細胞とは異なる性質を有する細胞を確認した。
        </p>

        <p>
          さらに、その細胞は新生部に限定されず、血液および既存組織へ広範囲に分布している。
        </p>

        <p>
          異常細胞は互いに連続した伝達・輸送系を形成しており、
          個々の細胞が独立して機能するのではなく、集合体として一つの機能単位を形成している可能性がある。
        </p>

        <p>
          このことから、対象に認められた身体構造の変化は、
          単一の組織または器官の異常増殖ではなく、
          <strong>多数の異常細胞による既存組織の置換および再構成</strong>
          として解釈する必要がある。
        </p>

        <p>
          なお、当該細胞の起源、発生機序および対象への移行経路については現時点で不明。
          類似事例との比較検討を要する。
        </p>

        <div class="report-sign">
          <p>検体解析部 第三課</p>
          <p>第六班</p>
          <p>記録日：2013年7月25日</p>
        </div>

      </div>
    `,
    keywords:['血液・組織検査報告書'],
    asDocument:true,
  },

  {
  id: 'D-2013-046',
  title: '検体解析部第三課第六班における事案001の対応：通話記録',
  category: '対策開発部 第三課 / 検体解析部 第三課',
  status: '閲覧可能',
  date: '2013/07/24',
  body: `
    <div class="nilec-transcript">

      <div class="transcript-header">
        <p>【通話記録】</p>
        <p>記録日時：2013年7月24日</p>
      </div>

      <p>［対策開発部第三課との通信開始］</p>

      <p>
        <span class="speaker">特殊処理班-B-001：</span>
        ……こちら特殊処理班-B。検体解析部第三課第六班検査室での処理を完了しました。
      </p>

      <p>
        <span class="speaker">特殊処理班-B-001：</span>
        認知異常性の可能性があるとの連絡を受けていたためアンプル-256を携行し、
        少人数による交代制で処置を行いましたが、異常性は確認されませんでした。
      </p>

      <p>
        <span class="speaker">特殊処理班-B-001：</span>
        おそらく、今回の異常性は目視によって認識されるものではなく、
        精密機器を用いた検査によって初めて確認できるものと思われます。
      </p>

      <p>
        <span class="speaker">対策開発部職員023：</span>
        了解した。この件については、こちらから菊名主任に報告しておく。
        処置報告の提出後、念のためE級程度の記憶処理を受けてくれ。
      </p>

      <p>
        <span class="speaker">特殊処理班-B-001：</span>
        了解。
      </p>

    </div>
  `,
  keywords: ['事案001'],
  },
  {
    id: 'A-03-06-O2',
    title: '音声記録:02',
    category: '検体解析部 第三課',
    status: '閲覧可能',
    date: '2013/07/24',
    body: `
    <div class="nilec-transcript">

      <div class="transcript-header">
        <p>【音声記録】</p>
        <p>記録日時：2013年7月24日</p>
        <p>記録場所：検査室</p>

      </div>
      <p>［ガラス製品が割れる音］</p>
      
      <p>
        <span class="nilec-speaker" data-staff="004">
        職員004：
        </span>
        あちゃー、早乙女さん大丈夫すか？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        …………っ
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        第二頸部の検体ならまだ予備があるから安心して──早乙女くん？
      </p>
      <p>
      <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        ……あ、………
      </p>
      <p>
      <span class="nilec-speaker" data-staff="004">
        職員004：
        </span>
        ……早乙女さん？
      </p>
      <p>［扉が開く音］</p>
      <p>
      <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        柳江さん、会議室の件なんだけど──
      </p>
      <p>
      <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        すみません少し一人にさせてください。
      </p>
      <p>
      <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        うわっ！……っと
      </p>
      <p>［扉が勢いよく閉まる音］</p>
      <p>
      <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        びっくりしたあ……早乙女くんどうしちゃったの？
      </p>
      <p>
      <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        それが、作業を行っていたらいきなり……
      </p>
      <p>［数秒間の沈黙］</p>
      <p>
      <span class="nilec-speaker" data-staff="004">
        職員004：
        </span>
        もしかして、検体に認知に干渉する異常性があったりするんじゃないすか……？
      </p>
      <p>
      <span class="nilec-speaker" data-staff="001">
        職員001：
        </span>
        ……分かった。利用不可になった検体の処理は慎重にしよう。僕は主任を呼んでくる。美代さんは特殊処理班に連絡、柳江さんは早乙女くんの様子を見てきて。
      </p>
    </div> `,
    keywords: ['特殊処理班','検査室'],
  },
  {
    id: 'A-03-06-O3',
    title: '音声記録:03',
    category: '検体解析部 第三課',
    status: '閲覧可能',
    date: '2013/07/24',
    body: `
    <div class="nilec-transcript">

      <div class="transcript-header">
        <p>【音声記録】</p>
        <p>記録日時：2013年7月24日</p>
        <p>記録場所：宿舎廊下：103号室前</p>
      </div>
      <p>［扉をノックする音］</p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        早乙女くん……大丈夫？
      </p>
      <p>［数十秒間の沈黙］</p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        ……早乙女くん。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        …………
      </p>
      <p>［ドアノブが動く音］</p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        ……！ごめん早乙女くん、入るよ！
      </p>
      </div> `,
      keywords:['宿舎']
  },
  {
    id: 'A-03-06-O4',
    title: '音声記録:04',
    category: '検体解析部 第三課',
    status: '閲覧可能',
    date: '2013/07/24',
    body: `
    <div class="nilec-transcript">

      <div class="transcript-header">
        <p>【音声記録】</p>
        <p>記録日時：2013年7月24日</p>
        <p>記録場所：103号室</p>
      </div>
      <p>［駆け込む足音］</p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        早乙女くんっ！大丈夫！？しっかりして！
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        …………っあ……
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        ！よかった……体は動かせる？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        ゆ…………、さ…… おれ、…………ひ……りに
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        ちょっと失礼……発熱……？今医療班呼んでくるか─
      </p>
      <p>［衣服が擦れる音。何かが床に倒れる音］</p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        俺を、一人にさせてくださいよ！！
      </p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        ……っえ…………
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        いやだ！！死にたくないっ！！……俺はっ……
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        ……あ、ぁ……もう…………俺……最悪…………
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        ゆか……ぇ、……ごめんなさ、……ごめんな、……い……ご……なさい、
      </p>
      <p>［鼻を啜る音］</p>
      <p>
        <span class="nilec-speaker" data-staff="002">
        職員002：
        </span>
        ……ごめんね、千晃くん。
      </p>
      </div> `,
      keywords:['103号室']
  },
  {
    id: 'A-03-06-K-003-1',
    title: '職員003:医療経過記録001',
    category: '対策開発部 第三課',
    status: '閲覧可能',
    date: '2013/07/24',
    body: `
      <div class="medical-record">
        <div class="report-title">
          <h2>職員003：医療経過記録001</h2>
          <p>A-03-06-K-003-1</p>
        </div>

      <table class="medical-info-table">
        <tr>
          <th>記録日時</th>
          <td>2013年7月24日</td>
          <th>記録場所</th>
          <td>103号室</td>
        </tr>
        <tr>
          <th>体温</th>
          <td>37.9℃</td>
          <th>身長</th>
          <td>173.6cm</td>
        </tr>
        <tr>
          <th>体重</th>
          <td>63.7kg</td>
          <th>担当</th>
          <td>菊名</td>
        </tr>
      </table>

      <h3>検身記録</h3>

      <div class="nilec-transcript">
      <p>［音声記録を開始］</p>

      <p>
        <span class="nilec-speaker" data-staff="005">
        職員005：
        </span>
        入るぞ、早乙女。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        …………主任。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="005">
        職員005：
        </span>
        どうだ、落ち着いたか？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        ……すみませんでした、主任。俺、柳江さんに…………
      </p>
      <p>
        <span class="nilec-speaker" data-staff="005">
        職員005：
        </span>
        柳江は大丈夫だ。気にするな。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        でも、俺………………
      </p>
      <p>
        <span class="nilec-speaker" data-staff="005">
        職員005：
        </span>
        今はお互い時間を空けるべきだ。お前の体調が戻ったら謝るなりなんなりすればいい……調子はどうだ？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        ……調子……倦怠感と発熱……ぐらいですかね……風邪引いたときみたいな……あ、あと……身体が痒いんです。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="005">
        職員005：
        </span>
        どこが痒む？
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        うーん……左半身？……ですかね、…………ちょっと、範囲が広くて、……よく、わからない…………
      </p>
      <p>［体を強く掻く音］</p>
      <p>
        <span class="nilec-speaker" data-staff="005">
        職員005：
        </span>
        あまり強く掻くな、血が滲んでるぞ。解熱剤と鎮痒剤貰ってきてやる。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="003">
        職員003：
        </span>
        ……すみません。
      </p>

      <p>［音声記録終了］</p>
      </div>

      <div class="record-symptom">
        <p class="record-symptom-title">症状</p>
        <p>発熱、倦怠感、<del>精神錯乱</del>、左半身の痒み</p>
      </div>

      <div class="record-order">
        <p>&gt; 対策開発部第三課薬務班に解熱剤、鎮痒剤、予備の鎮静剤を要求する。</p>
        <p class="record-order-strike">&gt; 対策開発部第三課医療班に診断を要求。念の為宿舎103号室周辺を立ち入り禁止区域として設定。</p>
        <p class="record-order-add">追記：医療班による診断によりウィルス性ではないとのこと。一般立ち入り禁止区域は解除。</p>
      </div>

    </div>`,
    keywords: ['医療班'],
  },


  {
  id: 'A-CASE-034-XX',
  title: 'CASE-034:音声記録XX',
  category: '検体解析部 第三課',
  status: '閲覧可能',
  date: '2013/0/',
  body: `
    <div class="nilec-transcript">

      <div class="transcript-header">
        <p>【音声記録】</p>
        <p>記録日時：2013年月日</p>
        <p>記録場所：検査室</p>
      </div>
      <p>
        <span class="nilec-speaker" data-staff="005">
          職員005：
        </span>
        これで、全て終わりなのだろうな。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="005">
          職員005：
        </span>
        「僕たちなら出来る」だったか。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="005">
          職員005：
        </span>
        俺には、出来なかったみたいだ。
      </p>
      <p>
        <span class="nilec-speaker" data-staff="005">
          職員005：
        </span>
        ［28秒間の呻き声］
      </p>
      <p>
        ［咳き込む音。以降、音声記録に著しい乱れ］
      </p>
      <p>
      ［これ以降の音声は精神汚染防止のため削除されました]
      </p>
    </div>
  `,
  keywords: ['検査室'],
},

];