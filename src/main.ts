import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('Missing #app root')

const assets = {
  repair: new URL('../outputs/exploration-demo-v1/scene-01-repair-stall-exploration.png', import.meta.url).href,
  shop: new URL('../outputs/exploration-demo-v1/scene-02-old-shop-front-exploration.png', import.meta.url).href,
  interior: new URL('../outputs/demo-scenes/scene-04-jiaozi-shop-interior.png', import.meta.url).href,
  alley: new URL('../outputs/demo-scenes/scene-02-short-alley.png', import.meta.url).href,
  paperStore: new URL('../outputs/exploration-demo-v1/scene-03-back-room-exploration.png', import.meta.url).href,
  paperWorkshop: new URL('../outputs/demo-scenes/scene-05-riverside-paper-workshop.png', import.meta.url).href,
  redemptionHall: new URL('../outputs/demo-scenes/scene-06-jiaozi-redemption-hall.png', import.meta.url).href,
  shenZhao: new URL('../outputs/characters-v2/shen-zhao-cutout.png', import.meta.url).href,
  aTang: new URL('../outputs/characters-v2/a-tang-cutout.png', import.meta.url).href,
  grayVisitor: new URL('../outputs/characters-v2/gray-visitor-cutout.png', import.meta.url).href,
  voucher: new URL('../outputs/items-v2/merchant-voucher.png', import.meta.url).href,
  voucherRevealed: new URL('../outputs/items-v2/merchant-voucher-revealed.png', import.meta.url).href,
  toolCase: new URL('../outputs/items-v2/carving-tool-case.png', import.meta.url).href,
  seal: new URL('../outputs/items-v2/worn-square-seal.png', import.meta.url).href,
  topHud: new URL('../outputs/ui-concepts/top-left-hud-clean-act1.png', import.meta.url).href,
  topHudShop: new URL('../outputs/ui-concepts/top-left-hud-clean-act1.png', import.meta.url).href,
  topHudInterior: new URL('../outputs/ui-concepts/top-left-hud-clean-act1.png', import.meta.url).href,
  topHudResolved: new URL('../outputs/ui-concepts/top-left-hud-clean-act1.png', import.meta.url).href,
  topHudAlley: new URL('../outputs/ui-concepts/top-left-hud-clean-act2.png', import.meta.url).href,
  interactionFrame: new URL('../outputs/ui-concepts/simple-v1/interaction-prompt-blank.png', import.meta.url).href,
  investigationFrame: new URL('../outputs/ui-concepts/simple-v1/investigation-panel-blank.png', import.meta.url).href,
  dialogueFrame: new URL('../outputs/ui-concepts/simple-v1/dialogue-panel-v2.png', import.meta.url).href,
  journalFrame: new URL('../outputs/ui-concepts/simple-v1/journal-panel-blank.png', import.meta.url).href,
  sceneTransitionFrame: new URL('../outputs/ui-concepts/simple-v1/scene-transition-button.png', import.meta.url).href,
  entryScreen: new URL('../outputs/ui-concepts/simple-v1/entry-screen.png', import.meta.url).href,
  shenSpriteFront: new URL('../outputs/exploration-demo-v1/sprites/shen-zhao-front.png', import.meta.url).href,
  shenSpriteBack: new URL('../outputs/exploration-demo-v1/sprites/shen-zhao-back.png', import.meta.url).href,
  shenSpriteLeft: new URL('../outputs/exploration-demo-v1/sprites/shen-zhao-left.png', import.meta.url).href,
  shenSpriteRight: new URL('../outputs/exploration-demo-v1/sprites/shen-zhao-right.png', import.meta.url).href,
  aTangNpc: new URL('../outputs/exploration-demo-v1/sprites/a-tang-npc.png', import.meta.url).href,
  grayVisitorNpc: new URL('../outputs/exploration-demo-v1/sprites/gray-visitor-npc.png', import.meta.url).href,
  tornLetter: new URL('../outputs/exploration-demo-v1/item-torn-letter.png', import.meta.url).href,
  tornLetterRevealed: new URL('../outputs/exploration-demo-v1/item-torn-letter-revealed.png', import.meta.url).href,
  oilLamp: new URL('../outputs/exploration-demo-v1/item-oil-lamp-lit.png', import.meta.url).href,
  newVoucher: new URL('../outputs/exploration-demo-v1/item-new-voucher.png', import.meta.url).href,
  rejectedPaperBundle: new URL('../outputs/items-v2/rejected-paper-bundle.png', import.meta.url).href,
  rejectedPaperBundleOpen: new URL('../outputs/items-v2/rejected-paper-bundle-open.png', import.meta.url).href,
  papermakingMould: new URL('../outputs/items-v2/papermaking-mould.png', import.meta.url).href,
  papermakingMouldRevealed: new URL('../outputs/items-v2/papermaking-mould-revealed.png', import.meta.url).href,
  redemptionTray: new URL('../outputs/items-v2/redemption-inspection-tray.png', import.meta.url).href,
  redemptionTrayRevealed: new URL('../outputs/items-v2/redemption-inspection-tray-revealed.png', import.meta.url).href,
  menuDialogue: new URL('../outputs/ui-concepts/menu-v1/menu-dialogue-replay-blank.png', import.meta.url).href,
  menuBackpack: new URL('../outputs/ui-concepts/menu-v1/menu-backpack-clues-blank.png', import.meta.url).href,
  menuClose: new URL('../outputs/ui-concepts/menu-v1/menu-close-button.png', import.meta.url).href,
  menuGuide: new URL('../outputs/ui-concepts/menu-v1/top-right-menu-guide.png', import.meta.url).href,
}

const icons = {
  sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="speaker" d="M4 10v4h4l5 4V6L8 10H4Z"/><path class="wave" d="M16 9c1.4 1.7 1.4 4.3 0 6M18.7 6.5c3 3 3 8 0 11"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M5 12h14M5 17h14"/></svg>',
  journal: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1Z"/><path d="M8 4v16M11 8h5M11 12h5"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"/></svg>',
  eye: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12s3.3-5 9-5 9 5 9 5-3.3 5-9 5-9-5-9-5Z"/><circle cx="12" cy="12" r="2.4"/></svg>',
  light: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M8.5 14.5A6 6 0 1 1 16 14c-.8.7-1.2 1.5-1.3 2.5h-5.4c-.1-.8-.3-1.4-.8-2Z"/></svg>',
}

app.innerHTML = `
  <section class="entry-screen" id="entryScreen" aria-label="交子行记游戏入场画面">
    <div class="entry-stage">
      <img class="entry-image" src="${assets.entryScreen}" alt="沈照在北宋益州的修书摊中面对一张破损纸券，门外站着一名身份不明的灰衣人">
      <span class="entry-lamp" aria-hidden="true"></span>
      <button class="entry-start" id="entryStart" type="button" aria-label="开始探案"><span class="sr-only">开始探案</span></button>
    </div>
  </section>
  <main class="game-shell" data-scene="repair" data-mode="exploration-preview" aria-label="《交子行记》修书摊跑图测试">
    <div class="scene-image" style="background-image: url('${assets.repair}')"></div>
    <div class="scene-tint"></div>
    <div class="paper-grain"></div>

    <section class="exploration-stage" id="explorationStage" aria-label="修书摊探索区域">
      <img class="exploration-avatar" id="explorationAvatar" src="${assets.shenSpriteFront}" alt="沈照" draggable="false">
      <img class="exploration-npc a-tang-npc" id="aTangNpc" src="${assets.aTangNpc}" alt="阿棠正在等沈照过去说话" draggable="false">
      <img class="exploration-npc gray-visitor-npc" id="grayVisitorNpc" src="${assets.grayVisitorNpc}" alt="一名灰衣客站在旧交子铺前堂" draggable="false">
      <span class="repair-exit" id="repairExit" aria-label="通往西坊旧交子铺的出口"></span>
      <span class="exploration-item torn-letter-prop" id="tornLetterProp" aria-label="门槛旁的破损纸张">
        <img src="${assets.tornLetter}" alt="一张带有残损蜡封的旧纸">
      </span>
      <span class="exploration-item oil-lamp-prop" id="oilLampProp" aria-label="中央案桌上的油灯">
        <img src="${assets.oilLamp}" alt="一盏点亮的旧式油灯">
      </span>
      <span class="exploration-item voucher-prop" id="voucherProp" aria-label="柜台边并排放着的铺户旧券与新仿样">
        <img src="${assets.newVoucher}" alt="一张等待与铺户旧券比对的新仿样">
      </span>
      <span class="exploration-item alley-paper-prop" id="alleyPaperProp" aria-label="后巷墙边翘起的一张新纸片">
        <img src="${assets.tornLetter}" alt="一张夹着新鲜木屑的纸片">
      </span>
      <span class="exploration-item paper-bundle-prop" id="paperBundleProp" aria-label="纸栈分纸案上的退纸样束">
        <img src="${assets.rejectedPaperBundle}" alt="一束以麻绳扎起、边缘可见植物纤维的退纸样张">
      </span>
      <span class="exploration-item paper-mould-prop" id="paperMouldProp" aria-label="旧抄纸作坊工作台上的抄纸帘框">
        <img src="${assets.papermakingMould}" alt="承着一层湿纸浆的竹制抄纸帘框">
      </span>
      <span class="exploration-item redemption-tray-prop" id="redemptionTrayProp" aria-label="交子务外廊验券案上的湿纸验券盘">
        <img src="${assets.redemptionTray}" alt="放着湿试纸、发券簿、印匣和封存铁钱的验券盘">
      </span>
      <span class="move-target" id="moveTarget" hidden aria-hidden="true"></span>
      <span class="sr-only" id="movementStatus" aria-live="polite">沈照站在修书摊内。</span>
    </section>

    <button class="scene-prop tool-case-prop" id="toolCaseProp" type="button" aria-label="检查桌面上的旧工具匣">
      <img src="${assets.toolCase}" alt="一只打开的旧木刻版工具匣">
      <span>检查工具匣</span>
    </button>

    <header class="topbar">
      <div class="chapter-mark" id="chapterMark" aria-label="交子行记·断线，第一幕：纸缝来信">
        <img id="topHudImage" src="${assets.topHud}" alt="">
      </div>
      <nav class="system-actions" aria-label="系统操作">
        <button class="icon-button" id="soundButton" type="button" aria-label="关闭声音" aria-pressed="true">${icons.sound}</button>
        <div class="menu-entry">
          <img class="menu-guide-ui" src="${assets.menuGuide}" alt="菜单：查看对话与线索">
          <button class="icon-button" id="menuButton" type="button" aria-label="打开菜单，查看对话与线索">${icons.menu}</button>
        </div>
      </nav>
    </header>

    <section class="objective-card sr-only" aria-live="polite">
      <strong id="objectiveText">调查阿棠带来的破损纸张</strong>
    </section>

    <div class="scene-caption" aria-label="北宋天圣年间，益州成都">
      <span id="sceneIndex">壹</span>
      <div><strong id="sceneName">修书摊</strong><small id="sceneTime">北宋天圣年间 · 益州成都</small></div>
    </div>

    <button class="journal-button" id="journalButton" type="button" aria-label="打开线索簿">
      ${icons.journal}<span>线索簿</span><b id="clueCount">0 / 4</b>
    </button>

    <div class="movement-hint" id="movementHint">
      <span><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></span><span>或点击地面移动</span>
    </div>

    <button class="interaction-prompt" id="interactionPrompt" type="button" aria-hidden="true" style="background-image: url('${assets.interactionFrame}')">
      <span class="prompt-key">E</span>
      <span class="prompt-copy"><small id="promptKind">交谈</small><strong id="promptText">和阿棠说话</strong></span>
      <span class="prompt-arrow">›</span>
    </button>

    <section class="investigation-overlay" id="investigation" aria-hidden="true" aria-label="纸张调查界面">
      <div class="investigation-header">
        <div><span>物证调查</span><strong id="investigationTitle">门槛旁的封纸</strong></div>
        <button class="icon-button light" id="closeInvestigation" type="button" aria-label="关闭调查界面">${icons.close}</button>
      </div>
      <div class="inspection-stage">
        <div class="lamp-glow"></div>
        <button class="evidence-object" id="evidenceObject" type="button" aria-label="拖动、缩放并检查带蜡封的双层残纸">
          <img id="evidenceImage" src="${assets.tornLetter}" alt="带残损蜡封的双层旧纸">
          <span class="object-hotspot" aria-hidden="true"></span>
        </button>
        <p class="drag-tip">拖动纸张观察 · 滚轮缩放</p>
      </div>
      <aside class="inspection-panel" style="background-image: url('${assets.investigationFrame}')">
        <span class="panel-index">证物 01</span>
        <h2 id="evidenceHeading">纸边的卷向不对</h2>
        <p id="evidenceDescription">蜡封没有拆动，纸边却像从屋内向外翻卷。先借侧光看看纸层是否被重新贴过。</p>
        <div class="clue-result" id="clueResult"><span></span><div><small>尚未确认</small><strong>用侧光检查纸层</strong></div></div>
        <div class="inspection-actions">
          <button class="paper-action secondary" id="flipEvidence" type="button" aria-pressed="false" disabled>${icons.eye}<span>翻到背面</span></button>
          <button class="paper-action primary" id="revealClue" type="button">${icons.light}<span>用侧光照纸</span></button>
        </div>
        <button class="continue-button" id="inspectionContinue" type="button" disabled>记录线索并继续</button>
      </aside>
    </section>

    <section class="dialogue-layer" id="dialogueLayer" aria-hidden="true" aria-label="剧情对话">
      <img class="speaker-portrait" id="speakerPortrait" src="${assets.aTang}" alt="阿棠的立绘">
      <button class="dialogue-continue" id="dialogueContinue" type="button" style="background-image: url('${assets.sceneTransitionFrame}')" hidden>继续</button>
      <div class="dialogue-box" style="background-image: url('${assets.dialogueFrame}')">
        <div class="speaker-name" id="speakerName">阿棠</div>
        <p id="dialogueText">你认得这道刻痕？</p>
        <div class="dialogue-choices" id="dialogueChoices">
          <button type="button" data-choice="deflect"><span>壹</span>“认得刻坏的地方。”</button>
          <button type="button" data-choice="admit"><span>贰</span>“这道断线，是我刻出来的。”</button>
        </div>
        <button class="dialogue-next" id="dialogueNext" type="button" hidden>点击继续</button>
      </div>
    </section>

    <section class="item-overlay" id="itemInspection" aria-hidden="true" aria-label="旧工具匣调查界面">
      <button class="icon-button light item-close" id="closeItemInspection" type="button" aria-label="关闭工具匣调查界面">${icons.close}</button>
      <div class="item-stage">
        <img class="tool-case-image" src="${assets.toolCase}" alt="打开的旧木刻版工具匣">
        <button class="seal-object" id="sealObject" type="button" aria-label="检查工具匣里的铺户私记方印">
          <img src="${assets.seal}" alt="一枚边角有新切口的铺户私记方印">
          <span>检查铺户私记</span>
        </button>
      </div>
      <aside class="item-copy" style="background-image: url('${assets.investigationFrame}')">
        <span class="panel-index">证物 02</span>
        <h2 id="itemTitle">沈照遗失的工具匣</h2>
        <p id="itemDescription">刻刀的位置没有变，盒盖里却多了一枚铺户旧私记。右侧缺角像是刚被人削出来的。</p>
        <div class="item-finding" id="itemFinding"><small>待确认</small><strong>盒中的铺户旧私记</strong></div>
        <div class="item-actions">
          <button class="item-panel-action secondary" id="reviewToolCase" type="button">查看盒盖</button>
          <button class="item-panel-action primary" id="inspectSeal" type="button">检查铺户私记</button>
        </div>
        <button class="continue-button" id="recordToolCase" type="button" disabled>记录线索并收起</button>
      </aside>
    </section>

    <section class="voucher-overlay" id="voucherComparison" aria-hidden="true" aria-label="铺户旧券与新仿样比对界面">
      <button class="icon-button light voucher-close" id="closeVoucherComparison" type="button" aria-label="关闭券样比对界面">${icons.close}</button>
      <div class="voucher-stage">
        <button class="voucher-sample old-voucher-sample" id="oldVoucherSample" type="button" aria-label="检查铺户旧券样">
          <img src="${assets.voucher}" alt="边缘磨损、墨色自然晕开的铺户旧券样">
          <span>铺户旧券</span>
        </button>
        <button class="voucher-sample new-voucher-sample" id="newVoucherSample" type="button" aria-label="检查新仿券样">
          <img src="${assets.newVoucher}" alt="墨色较新、带有相似断线的新仿券样">
          <span>新仿券样</span>
        </button>
      </div>
      <aside class="voucher-copy" style="background-image: url('${assets.investigationFrame}')">
        <span class="panel-index">证物 02</span>
        <h2 id="voucherHeading">旧铺券与新仿样哪里不同？</h2>
        <p id="voucherDescription">灰衣客把两张纸并排留在柜台边。先分别查看墨色、断线和回刀痕，再决定它们是否出自同一块版。</p>
        <div class="voucher-finding" id="voucherFinding"><small>比对进度</small><strong>分别检查旧铺券与新仿样</strong></div>
        <div class="voucher-actions">
          <button class="voucher-panel-action secondary" id="reviewOldVoucher" type="button">查看旧铺券</button>
          <button class="voucher-panel-action primary" id="reviewNewVoucher" type="button">查看新仿样</button>
        </div>
        <button class="continue-button" id="recordVoucherComparison" type="button" disabled>记录比对结果</button>
      </aside>
    </section>

    <aside class="journal-drawer" id="journalDrawer" aria-hidden="true" aria-label="线索簿" style="background-image: url('${assets.journalFrame}')">
      <header>
        <div><span>沈照的随身账</span><h2>线索簿</h2></div>
        <button class="icon-button light" id="closeJournal" type="button" aria-label="关闭线索簿">${icons.close}</button>
      </header>
      <div class="journal-progress"><span id="journalProgress"></span></div>
      <ol class="clue-list">
        <li id="firstClue"><i>01</i><div><strong>夹层里的地址</strong><p>尚未发现</p></div></li>
        <li id="secondClue"><i>02</i><div><strong>旧铺券与新仿样</strong><p>尚未发现</p></div></li>
        <li id="thirdClue"><i>03</i><div><strong>旧工具匣</strong><p>尚未发现</p></div></li>
        <li id="fourthClue"><i>04</i><div><strong>最后一处疑点</strong><p>尚未发现</p></div></li>
      </ol>
      <blockquote>“纸会留下手经过的痕迹，人也是。”</blockquote>
      <footer><kbd>J</kbd><span>打开或收起线索簿</span></footer>
    </aside>

    <section class="pause-layer" id="pauseLayer" aria-hidden="true" aria-label="随身簿菜单">
      <div class="game-menu-stage" id="gameMenuStage" data-menu-view="dialogue">
        <img class="game-menu-art" id="gameMenuArt" src="${assets.menuDialogue}" alt="沈照的随身簿">
        <img class="menu-close-art" src="${assets.menuClose}" alt="">

        <section class="menu-replay-panel" id="menuReplayPanel" aria-label="对话回放">
          <ol class="menu-replay-list" id="menuReplayList"></ol>
          <span class="menu-replay-page" id="menuReplayPage">01 / 01</span>
          <button class="menu-page-hit menu-page-prev" id="menuReplayPrev" type="button" aria-label="上一页对话"></button>
          <button class="menu-page-hit menu-page-next" id="menuReplayNext" type="button" aria-label="下一页对话"></button>
        </section>

        <section class="menu-clue-panel" id="menuCluePanel" aria-label="背包线索" hidden>
          <div class="menu-clue-grid" id="menuClueGrid"></div>
          <article class="menu-clue-detail" id="menuClueDetail">
            <img id="menuClueImage" src="${assets.tornLetterRevealed}" alt="">
            <h3 id="menuClueTitle">尚未发现线索</h3>
            <p id="menuClueDescription">继续在场景中调查，找到的物品会收进这里。</p>
            <small id="menuClueStatus">线索 00 / 06</small>
          </article>
        </section>

        <button class="menu-hotspot menu-hit-notebook" type="button" data-menu-view="dialogue" aria-label="打开随身簿"></button>
        <button class="menu-hotspot menu-hit-dialogue" type="button" data-menu-view="dialogue" aria-label="查看对话回放"></button>
        <button class="menu-hotspot menu-hit-backpack" type="button" data-menu-view="inventory" aria-label="查看背包线索"></button>
        <button class="menu-hotspot menu-hit-settings" id="menuSettings" type="button" aria-label="设置，后续开放"></button>
        <button class="menu-hotspot menu-hit-return" id="resumeButton" type="button" aria-label="返回游戏"></button>
        <button class="menu-hotspot menu-hit-close" id="menuClose" type="button" aria-label="关闭随身簿"></button>
        <span class="sr-only" id="menuStatus" aria-live="polite"></span>
      </div>
    </section>

    <div class="screen-vignette"></div>
  </main>
`

function requireElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector)
  if (!element) throw new Error(`Missing element: ${selector}`)
  return element
}

const shell = requireElement<HTMLElement>('.game-shell')
const entryScreen = requireElement<HTMLElement>('#entryScreen')
const entryStart = requireElement<HTMLButtonElement>('#entryStart')
const sceneImage = requireElement<HTMLDivElement>('.scene-image')
const topHudImage = requireElement<HTMLImageElement>('#topHudImage')
const chapterMark = requireElement<HTMLElement>('#chapterMark')
const interactionPrompt = requireElement<HTMLButtonElement>('#interactionPrompt')
const promptText = requireElement<HTMLElement>('#promptText')
const promptKind = requireElement<HTMLElement>('#promptKind')
const objectiveText = requireElement<HTMLElement>('#objectiveText')
const sceneName = requireElement<HTMLElement>('#sceneName')
const sceneIndex = requireElement<HTMLElement>('#sceneIndex')
const sceneTime = requireElement<HTMLElement>('#sceneTime')
const movementHint = requireElement<HTMLElement>('#movementHint')
const explorationStage = requireElement<HTMLElement>('#explorationStage')
const explorationAvatar = requireElement<HTMLImageElement>('#explorationAvatar')
const aTangNpc = requireElement<HTMLImageElement>('#aTangNpc')
const grayVisitorNpc = requireElement<HTMLImageElement>('#grayVisitorNpc')
const repairExit = requireElement<HTMLElement>('#repairExit')
const tornLetterProp = requireElement<HTMLElement>('#tornLetterProp')
const oilLampProp = requireElement<HTMLElement>('#oilLampProp')
const voucherProp = requireElement<HTMLElement>('#voucherProp')
const alleyPaperProp = requireElement<HTMLElement>('#alleyPaperProp')
const paperBundleProp = requireElement<HTMLElement>('#paperBundleProp')
const paperMouldProp = requireElement<HTMLElement>('#paperMouldProp')
const redemptionTrayProp = requireElement<HTMLElement>('#redemptionTrayProp')
const moveTarget = requireElement<HTMLElement>('#moveTarget')
const movementStatus = requireElement<HTMLElement>('#movementStatus')
const investigation = requireElement<HTMLElement>('#investigation')
const investigationTitle = requireElement<HTMLElement>('#investigationTitle')
const evidenceObject = requireElement<HTMLButtonElement>('#evidenceObject')
const evidenceImage = requireElement<HTMLImageElement>('#evidenceImage')
const evidenceHeading = requireElement<HTMLElement>('#evidenceHeading')
const evidenceDescription = requireElement<HTMLElement>('#evidenceDescription')
const flipEvidence = requireElement<HTMLButtonElement>('#flipEvidence')
const clueResult = requireElement<HTMLElement>('#clueResult')
const revealClue = requireElement<HTMLButtonElement>('#revealClue')
const inspectionContinue = requireElement<HTMLButtonElement>('#inspectionContinue')
const dialogueLayer = requireElement<HTMLElement>('#dialogueLayer')
const speakerPortrait = requireElement<HTMLImageElement>('#speakerPortrait')
const speakerName = requireElement<HTMLElement>('#speakerName')
const dialogueText = requireElement<HTMLElement>('#dialogueText')
const dialogueChoices = requireElement<HTMLElement>('#dialogueChoices')
const dialogueContinue = requireElement<HTMLButtonElement>('#dialogueContinue')
const dialogueNext = requireElement<HTMLButtonElement>('#dialogueNext')
const itemInspection = requireElement<HTMLElement>('#itemInspection')
const toolCaseProp = requireElement<HTMLButtonElement>('#toolCaseProp')
const sealObject = requireElement<HTMLButtonElement>('#sealObject')
const reviewToolCase = requireElement<HTMLButtonElement>('#reviewToolCase')
const inspectSeal = requireElement<HTMLButtonElement>('#inspectSeal')
const itemDescription = requireElement<HTMLElement>('#itemDescription')
const itemFinding = requireElement<HTMLElement>('#itemFinding')
const recordToolCase = requireElement<HTMLButtonElement>('#recordToolCase')
const voucherComparison = requireElement<HTMLElement>('#voucherComparison')
const oldVoucherSample = requireElement<HTMLButtonElement>('#oldVoucherSample')
const newVoucherSample = requireElement<HTMLButtonElement>('#newVoucherSample')
const reviewOldVoucher = requireElement<HTMLButtonElement>('#reviewOldVoucher')
const reviewNewVoucher = requireElement<HTMLButtonElement>('#reviewNewVoucher')
const voucherHeading = requireElement<HTMLElement>('#voucherHeading')
const voucherDescription = requireElement<HTMLElement>('#voucherDescription')
const voucherFinding = requireElement<HTMLElement>('#voucherFinding')
const recordVoucherComparison = requireElement<HTMLButtonElement>('#recordVoucherComparison')
const journalDrawer = requireElement<HTMLElement>('#journalDrawer')
const pauseLayer = requireElement<HTMLElement>('#pauseLayer')
const gameMenuStage = requireElement<HTMLElement>('#gameMenuStage')
const gameMenuArt = requireElement<HTMLImageElement>('#gameMenuArt')
const menuReplayPanel = requireElement<HTMLElement>('#menuReplayPanel')
const menuReplayList = requireElement<HTMLOListElement>('#menuReplayList')
const menuReplayPage = requireElement<HTMLElement>('#menuReplayPage')
const menuReplayPrev = requireElement<HTMLButtonElement>('#menuReplayPrev')
const menuReplayNext = requireElement<HTMLButtonElement>('#menuReplayNext')
const menuCluePanel = requireElement<HTMLElement>('#menuCluePanel')
const menuClueGrid = requireElement<HTMLElement>('#menuClueGrid')
const menuClueImage = requireElement<HTMLImageElement>('#menuClueImage')
const menuClueTitle = requireElement<HTMLElement>('#menuClueTitle')
const menuClueDescription = requireElement<HTMLElement>('#menuClueDescription')
const menuClueStatus = requireElement<HTMLElement>('#menuClueStatus')
const menuStatus = requireElement<HTMLElement>('#menuStatus')
const clueCount = requireElement<HTMLElement>('#clueCount')
const journalProgress = requireElement<HTMLElement>('#journalProgress')
const firstClue = requireElement<HTMLElement>('#firstClue')
const secondClue = requireElement<HTMLElement>('#secondClue')
const thirdClue = requireElement<HTMLElement>('#thirdClue')
const fourthClue = requireElement<HTMLElement>('#fourthClue')
const soundButton = requireElement<HTMLButtonElement>('#soundButton')

type SceneKey = 'repair' | 'shop' | 'interior' | 'alley' | 'paperstore' | 'workshop' | 'redemption'
let currentScene: SceneKey = 'repair'
let dialogueContext: 'atang' | 'visitor' = 'atang'
let toolCaseFound = false
let toolCaseReviewed = false
let sealInspected = false
let demoConclusionComplete = false
let alleyClueFound = false
let paperBundleUntied = false
let paperBundleInspected = false
let paperMouldLifted = false
let paperMouldInspected = false
let redemptionTrayChecked = false
let redemptionTrayInspected = false
let atangConversationComplete = false
let paperCollected = false
let sideLightRevealed = false
let evidenceFlipped = false
let lampPuzzleComplete = false
let grayVisitorConversationComplete = false
let grayVisitorBranch: 'ledger' | 'address' | null = null
let oldVoucherViewed = false
let newVoucherViewed = false
let voucherComparisonComplete = false
let voucherConclusionComplete = false
let inspectionContext: 'sealed-paper' | 'paper-bundle' | 'paper-mould' | 'redemption-tray' = 'sealed-paper'

type DialogueLine = {
  speaker: '阿棠' | '沈照' | '灰衣客'
  portrait: string
  portraitAlt: string
  text: string
}

const atangIntroLines: DialogueLine[] = [
  {
    speaker: '阿棠',
    portrait: assets.aTang,
    portraitAlt: '阿棠略显着急地捧着一张旧纸',
    text: '你可算回来了。哎，先别看我，我刚替隔壁茶商搬完两筐铁钱，回来就见这东西夹在门缝里，纸角还黏着一点红蜡。我原先当是谁家不要的旧收存单，捡起来才觉得不对，这才没敢再碰。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照正在思考阿棠的话',
    text: '嗯……你捡起来的时候，蜡封是朝上还是朝下？你先想清楚再说。若是从门外塞进来，纸边多半往屋里卷；若是从里面掉出去，沾灰的位置就该反过来。现在还不能断定是谁放的，不过原处总会留点痕迹。',
  },
  {
    speaker: '阿棠',
    portrait: assets.aTang,
    portraitAlt: '阿棠努力回想捡到旧纸时的情形',
    text: '朝下……应该是朝下。等等，我也不敢说死，我那会儿正忙着搬纸架，只瞧见红蜡露了一小块。反正我没拆，也没往你桌上放——你那一桌子旧版，我碰坏一块都赔不起。纸还在门槛右边，你自己看吧。',
  },
]

const paperPickupLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照俯身检查门槛旁的残纸',
    text: '先别急着拆。嗯……蜡封确实没动过，可纸边是从里面往外卷的，和阿棠记得的方向对不上。也不一定是她看错了，纸受潮后也会变形。先拿到灯下照一照，若夹层里有补纸，侧光一过就藏不住。',
  },
]

const lampDiscoveryLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照看清残纸夹层背面的压痕',
    text: '看见了。外面这层纸只是封套，里面还贴着一层旧纸，边缘的版纹也不是同一次印上去的。翻到背面以后，压痕里能辨出“西坊”和“旧交子铺”几个字。嗯……送纸的人不是随手找了张废纸，他是故意把地址藏在夹层里。',
  },
  {
    speaker: '阿棠',
    portrait: assets.aTang,
    portraitAlt: '阿棠听见旧交子铺的地址后收起玩笑',
    text: '西坊那间旧铺？那地方关了有些日子，门脸还在，里头早没人做买卖了。怪不得他不肯把地址写在外面。行，我不拦你，不过你先答应我一声：到地方先看门窗，别一见纸版就往里钻。你这个毛病，我可见过不止一次。',
  },
]

const grayVisitorIntroLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照站在旧交子铺前堂观察灰衣客和地面痕迹',
    text: '门上的铜环没积灰，地上的脚印却只从后门绕到屏风，没有往柜台那边去。你不像来偷旧纸的。嗯……可你把那册东西抱得太紧了，封边还特意朝里，倒像是怕我先看见。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客谨慎地打量沈照',
    text: '你先别急着替我定身份。我等的是能从夹层里看出地址的人，不是瞧见“旧交子铺”几个字就一路闯进来的人。那张纸若是硬拆，里面的压痕早没了；你既然还能找到这里，至少手不算急。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照注意到灰衣客手指和残册上的新纸粉',
    text: '你知道纸里有夹层，说明你放过那张纸，或者见过另一张一样的。至于你手里的册子……纸口落着灰白的新粉，不是一路抱来沾的，是刚从这屋哪一格旧柜里抽出来的。好，那就省得继续绕了。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客略微松开抱住残册的手',
    text: '行。你可以先问我手里的残册，也可以把夹层里的地址说全。你挑一个，我答一个；另一个答案，得看你能不能从这间铺里自己找出来。',
  },
]

const grayVisitorLedgerLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照先检查灰衣客手中残册的封边',
    text: '那就先说残册吧。你抱着它的时候封面朝里，右手指甲下还有纸粉，方才一定翻过没有装订的散页。若只是一本寻常旧簿，你没必要一直拿手挡着封边。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客承认自己在旧铺里发现了残册',
    text: '嗯，眼睛还在。这不是账簿，是这间铺还做交子铺户时留下的收存单残册。早年客人把沉重的铁钱交进来，铺户开券作凭；后来益州交子务接过发行，这种铺户私券便不能再当官交子用了。残册只剩前三页，后面被人整整齐齐地裁走。我进来时，它就在屏风后的工具匣旁边。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照准备检查屏风后的工具匣',
    text: '这就够了。有人先取走了后页，却故意留下前三页。若是慌着翻找，不会裁得这么齐。嗯……先别开侧门，柜台边那张铺户旧券和一张新仿样摆得太整齐了，像是专门留给后来的人比对。我先看纸和墨，再决定里间值不值得进。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客示意沈照前往屏风后的侧门',
    text: '去看吧。一张是旧铺户留下的券样，一张是我今早拿到的新仿样。先说清楚，它们都不是交子务发出的官交子，别见了纸券就混作一回事。你再看看断线旁边的墨怎么散，刻刀回转的地方有没有多出一道细痕。两张若真出自同一块版，纸可以不同，刀路不该自己变。',
  },
]

const grayVisitorAddressLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照直接向灰衣客说出夹层地址',
    text: '夹层里写的是“西坊·旧交子铺”。字不是墨写的，是另一张纸压出来的痕。你能在这里等我，当然知道这个地址；可你若真是送纸的人，就没必要再问我看见了什么。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客拿出带有乙柜压痕的纸角',
    text: '我不是送纸的人。准确地说，我拿到的是另一半——一张从铺户旧收存单上裁下来的纸角，背面也有同样的压痕，只比你的多出“乙柜”两个字。我来找乙柜，柜里却只剩一个旧工具匣，残册后半截也已经没了。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照推断两张线索被故意拆开',
    text: '所以那张纸把我引到旧铺，你的纸角把你引到乙柜。两边线索故意拆开，是想让我们在这里互相确认，也可能只是想让我们先互相怀疑。嗯……无论是哪一种，布置这件事的人都已经进过里间。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客示意屏风后的侧门已经打开',
    text: '这回说对了一半。屏风后的侧门确实虚掩着，不过你先别急着进去。柜台边还有一张铺户旧券和一张新仿样，断线的位置几乎一样，墨色却对不上。你先把它们看明白；若连版是不是同一块都说不清，进了里间也只会被别人留下的东西牵着走。',
  },
]

const voucherConclusionLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照拿着铺户旧券与新仿样向灰衣客说明比对结果',
    text: '嗯……旧券和新样上的断线几乎重在一起，可旧券断口旁的墨已经渗进纸纤维，新样却干净得过头，而且断口后面多了一道很轻的回刀痕。换句话说，它们看着像同一块旧版印的，其实有人照着铺户旧券重新补刻了一版。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客听完比对结果后继续试探沈照',
    text: '你再想想。若只是仿一张铺户旧券，照着字样刻出来也就够了，何必连一处不碍认读的断线都原样留下？送来新样的人要找的不是拿它去兑铁钱的客商，他要找的是认得那道断线、还会继续追刀路的人。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照决定进入旧铺里间检查工具匣',
    text: '也不一定就是找我，不过他至少知道我会先看墨色，再看版纹。行，外面的纸已经把话说到这里了，剩下那一半多半在里间。若工具匣里真有这间铺户用过的私记，新仿样上的缺角就不是随手碰坏的。',
  },
]

const interiorArrivalLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照站在里间门边观察桌上的工具匣',
    text: '先别进来。工具匣原来收在乙柜，现在却被端端正正摆在桌上，盒盖还特意朝着门。嗯……这不像翻找以后随手丢下的，倒像有人怕我进门看不见，专门替我把它摆到了明处。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照准备检查桌上的旧工具匣',
    text: '刀具先不要动。盒盖内侧那圈擦痕比木头新，右边还压着一枚不属于我的铺户旧私记。先从它为什么会出现在桌上看起，再检查印面的缺口，免得一上手就把别人留下的位置碰乱了。',
  },
]

const toolCaseConclusionLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照将铺户私记方印放回工具匣原处',
    text: '嗯……这枚铺户私记右边的缺角不是磕坏的，切口太直，也太新，是有人刚沿着边线削下去的。新仿样上的半枚印痕正好缺在同一处。可盒底那块长方形的墨尘又断得太干净了，这里原先还压着一块版，今天才被人拿走。留下私记，取走木版——他怕我认不出这间旧铺，又不肯让我立刻看见版上的内容。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客站在里间门口听沈照说明工具匣的异常',
    text: '你先别替那道缺口编一条“旧规矩”。切口这么新，它只是今天这桩事留下的记号。况且这枚东西原本只是旧铺户的私记，能指向哪家铺、谁经过手，却不能拿来冒充益州交子务发行的官交子。有人把真旧物盖在新仿样上，最多证明他进过这间铺，证明不了那张纸就是官交子。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照重新比对券样断线、铺户私记缺口和工具匣空槽',
    text: '我明白。断线是照着铺户旧券补刻的，私记却是真的旧物；两样东西被故意拼在一起，是想让看得懂的人继续追那块被取走的版。也不对……准确地说，对方先用封纸把我引来，又把版拿走，说明他要我分清“旧铺户留下什么”和“交子务如今管什么”，再去找现在拿着木版的人。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客看向工具匣中留下的空槽',
    text: '那我们总算看见同一个问题了。旧铺户印券，会在同色纸上留下屋木人物的印文，再押字、题暗号，用朱墨相错作私记。匣子里少的木版未必能印出一张完整纸券，也许只刻着其中一段图纹。眼下谁拿走了它，我还不能回答。你先把空槽尺寸记下来；下回再见到相同刀路，至少不会又把它当成纸上的旧伤。',
  },
]

const alleyArrivalLines: DialogueLine[] = [
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客停在旧交子铺后巷入口回看地面',
    text: '我方才从这道后门进来时，巷子里还没有人。现在门槛外多了两道拖痕，走到墙边就断了。你先别顺着脚印追，石板上来往的人多，那种痕迹最容易认错；倒是墙上那张翘起来的新纸，早上还没有。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照观察后巷墙边新翘起的纸片',
    text: '嗯，我也看见了。墙上那些十二月市的旧告示都被雨打得发灰，那一角却还是白的，下面还黏着一点细木屑。若只是风吹来的纸，不会正好卡在这个高度。先过去看看纸背，别踩墙根那圈灰；拿版的人也许在这里重新裹过东西。',
  },
]

const alleyPaperLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照从墙边取下夹着木屑的新纸片',
    text: '先看这一面。纸背压着两道平行的硬边，中间还蹭了一层很薄的蓝黑墨粉；木屑是新落的，捻开还有潮气。嗯……它包过的东西又平又硬，宽度和工具匣里的空槽差不多。不是随手拿来擦墨的废纸，是从一件木器上扯下来的包纸。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客低头查看纸边留下的折痕',
    text: '也可能只是包过一块修门用的木板。后巷堆着旧料，谁搬走一块都说得通。你若只凭尺寸和木屑就认定是那块版，未免太快了。纸上这点墨，也可能是从墙上的旧告示蹭来的。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照将纸片转到侧光下辨认折线与墨痕',
    text: '所以还得看折线。纸边先沿硬物四角压折，又从窄边往回卷了一次；普通门板没有必要这样包。再看外面这几个没被墨遮住的字——“益州交子务”“见钱”。这原来是一张讲持券兑取现钱的旧告示，内侧的墨粉才是被包木版蹭上的。现在还不能说木版刻了什么，但拿版的人确实在这里换过包纸。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客看向后巷北面的转角',
    text: '难怪他偏挑这张来包。旧铺户的私券靠铺户信用，客人把铁钱存进去，拿券再来取；官交子交由益州交子务发行，也得有本钱供人兑取。有人把旧铺木版包进一张兑付告示里，是怕我们只顾追“假券”，没看见他真正问的是：一张纸凭什么叫人肯拿铁钱来换。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照收起带有交子务字样的包版纸并看向北巷',
    text: '嗯，这才像一句完整的话。木版讲的是旧铺户留下的信用，告示讲的是交子务接手后的兑付；它们被人故意包在一起。墙根的木屑往北越来越少，北巷又是纸栈聚货的地方。先去查谁近来收过这种楮纸，再问有没有人带着一块旧版来配纸——比满街追一双脚印稳妥。',
  },
]

const paperStoreArrivalLines: DialogueLine[] = [
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客站在北巷纸栈门边观察室内纸架',
    text: '门没锁，伙计也不在。你先别往“做贼心虚”上猜，纸栈午后常把门留给送货脚夫，里头少一刀纸，掌柜自己未必立刻数得出来。可中央那张分纸案刚擦过，案角却留着一截湿麻绳，这就有些刻意了。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照从纸栈地面灰痕判断有人刚动过中央分纸案',
    text: '嗯……屋里没有翻找的脚印，纸架上的灰也连着，说明来人知道东西放在哪儿。他没碰整刀好纸，只把案上一束退纸挪到正中，绳结朝门，和旧铺里那只工具匣一个摆法。看来他还是怕我们看不见。先去看纸，别先拆绳；纸边、墨蹭和绳结都得留在原位。',
  },
]

const paperStoreConclusionLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照把解开的退纸样张依次摊在纸栈分纸案上',
    text: '三张纸看着差不多，手感却不是一回事。上面两张纤维粗，边缘是整刀纸裁剩的毛口；最下面这张更薄，朱墨只蹭在一侧，像拿来试过套印位置。可它没有完整印文，也没有交子务的凭记，只是纸栈里被挑出来的退纸。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客提醒沈照区分市面纸张和官府造纸管理',
    text: '这就对了。交子务另置抄纸院，为的是从造纸这一步就防伪；市面上随手买来的楮纸，就算印得再像，也不能因此变成官交子。有人拿旧铺木版来纸栈试纸，却只带走试过的一张，反把退料留给我们看——他要我们追的是纸从哪里来，不只是版去了哪里。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照比对退纸样束的麻绳与后巷包版纸上的纤维',
    text: '还有这根绳。绳股里卡着和后巷一样的蓝黑墨粉，结扣内侧却沾了湿纸浆，不是纸栈地上的灰。拿版的人先在这里挑纸、试墨，再把剩纸重新扎好；他离开前去过有水槽和纸浆的地方。北巷往河边只有旧抄纸作坊那条路，下一步不用再猜了。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客看着退纸样张重新审视失踪木版的用途',
    text: '先记住一件事：我们找到的是试印痕迹，不是一张“失窃的官交子”。旧铺木版、普通楮纸、交子务告示，被人一路故意摆在一起，像在逼我们回答同一道题——铺户的信用、官府的发行和一张纸本身，到底哪一样能让人肯把铁钱交出去。',
  },
]

const workshopArrivalLines: DialogueLine[] = [
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客停在河边旧抄纸作坊入口观察仍在流动的水槽',
    text: '水槽还在走，可这间作坊早就不接活了。你先别看见抄纸帘、晾纸架，就把它当成交子务的抄纸院；这里从前只是河边的一间民用纸坊，和官署不是一回事。奇怪的是左边纸槽都落了灰，右边工作台却有一道新水印，像有人刚把湿帘框从水里提起来。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照比较地面积水和工作台上湿帘框留下的痕迹',
    text: '嗯……进门的湿脚印只有一趟，出去时反倒干了，说明人没有在这里久留。中央排水沟刚冲过，别的旧纸浆都贴在石缝里，只有工作台那只帘框还亮着水。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照确认湿纸帘框被人故意留在显眼位置',
    text: '帘框又被摆在一眼能看见的位置，和工具匣、退纸束一个路数。行，先看帘框，别去碰左边那口旧槽；那里的陈浆已经干透了，能留下新东西的只有右边工作台。',
  },
]

const workshopConclusionLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照轻轻揭起抄纸帘框上的湿纸角',
    text: '湿纸只有薄薄一层，纤维还没伏平，右上角却先沾了蓝黑墨。若是帘框本身没洗净，墨该顺着竹丝散开，不会只聚在这一小片。嗯……纸角下面还压着一片新梨木屑，颜色比帘框浅，边上带着一道很细的刻槽。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客俯身辨认湿纸下的梨木削片',
    text: '一片木屑还不够。纸坊里有木架、有纸槌，哪样都能掉木屑；墨也可能是试纸时蹭上的。你若要说失踪的旧版来过这里，就得说明它为什么是梨木，刻槽又为什么和我们看过的券样有关。别到了最后一步，反而只凭“看着像”三个字。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照将梨木削片的刻槽与旧铺券边饰刀路比对',
    text: '我认的不是木色，是收刀。旧铺券屋木边饰那道弧线，末端会往回挑半刀；新仿样多出来的细痕，也是从这里来的。这片削屑上的槽只剩半边，回挑却还在。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照认出梨木削片上属于自己的旧日修版手法',
    text: '更麻烦的是，这种省半刀的修法，是我三年前补旧版时留下的习惯。拿版的人不是只见过图样——他见过我修过的版，还知道我会认出自己的刀路。嗯，这些东西一路摆得这么准，恐怕从最开始就不是留给随便哪个修版匠看的。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客把旧作坊线索与交子务抄纸院的史实分开说明',
    text: '那就说清楚：这间废作坊和木屑都是本案线索，不能拿来当成真正的交子务遗址。史实里交子务另置抄纸院，是把纸张从源头纳入管理，免得市面纸料随意仿造；眼前这张湿纸仍是民间纸坊做出的普通纸，再像也不是官交子。有人把你的刀路压在纸下，是专门留话给你。',
  },
  {
    speaker: '阿棠',
    portrait: assets.aTang,
    portraitAlt: '阿棠追到河边作坊并带来纸栈外的目击消息',
    text: '你们俩果然还在盯木屑。哎，先听我说完再问。我从纸栈一路追过来，门口卖姜茶的婆婆记得，午前有个人用两块竹板夹着一张湿纸，怕风吹折，往交子务兑付处那边走了。脸没看清，衣裳也寻常，只记得他走路时左手一直按着竹板——那张被带走的试纸，八成还没干。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照收起梨木削片并决定追查被带走的唯一湿纸',
    text: '好，这就接上了。纸栈留下三张退料，作坊只抄一张湿纸，真正带走的也只有那一张。对方不是在这里批量印假交子，他是在把“铺户旧版、普通纸料、官署兑付”一段一段摆给我们看。先去兑付处，但别急着找纸上的字；我要先知道，他为什么非得让那张纸带着我的刀路进去。',
  },
]

const redemptionArrivalLines: DialogueLine[] = [
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客停在交子务外廊入口，示意沈照先看验券案',
    text: '先慢一点。这里是交子务受理纳钱、验券的外廊，真正的官印和案簿不会随便摆给人看。掌案吏收衙前只准我看这只退验盘，说午前确实有人送来一张湿纸，可柜上没有兑钱，连那串铁钱的封绳都没解。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照隔着柜台观察验券盘、发券簿与封存铁钱',
    text: '嗯……湿纸压在发券簿边，印匣却还是合着的。若柜上真把它当作官交子验过，至少该翻到相应的发券记录，也要核印；现在簿页、封绳都没动，倒像送纸的人根本没打算拿走铁钱，只想留下一个会被退回的东西。',
  },
  {
    speaker: '阿棠',
    portrait: assets.aTang,
    portraitAlt: '阿棠看着柜台上的湿纸和未解开的铁钱绳',
    text: '那他折腾这一路图什么呀？纸栈挑纸、旧作坊抄纸，最后送到这里，柜上连一文钱都没给。哎，先别又说“等看了才知道”，我也看得出来那张纸底下压着簿子。你们把它对一对，我去看那块递纸用的竹签。',
  },
]

const redemptionConclusionLines: DialogueLine[] = [
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照把湿试纸移开并逐项核对发券簿、官印与铁钱封绳',
    text: '对不上。簿里没有这张纸对应的发券条目，纸背也没有交子务铜印留下的印迹，旁边那串铁钱仍按原样扎着。嗯……所以柜上只是收下它、记作退验，没有把它当官交子，更没有兑出钱。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客指向湿纸上残缺的屋木图纹追问沈照',
    text: '可它偏偏印了屋木图纹，又带着旧铺木版的刀路。一个不懂的人拿来，也许真会把它当成交子。你怎么敢说送纸的人不是来试着蒙过柜上，而是故意让它被退？',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照解释纸面图纹与官府兑付制度之间的区别',
    text: '因为他把最容易看的图纹做出来，却把真正能过验的东西全空着。官交子不是纸上画得像就算数；发券有数，验券有簿，交子务用铜印和官府信用担保，初期还留铁钱作兑付的本。少了这些，这张湿纸只是印过图的普通楮纸。',
  },
  {
    speaker: '阿棠',
    portrait: assets.aTang,
    portraitAlt: '阿棠终于理解湿试纸为什么没有兑出铁钱',
    text: '哦……也就是说，人肯把一大堆沉铁钱换成轻纸，信的不是这张纸自己值钱，是拿着它回来时，柜上认账、簿里有根、后面还有钱可兑。难怪这张纸看着最像的一处，反倒是最没用的一处。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照翻过递纸竹签，发现登记名目与熟悉的回刀记号',
    text: '等等，竹签背面还有一笔。掌案吏把送验人的自报名记在这里——他报的是“沈照，修版人”。旁边这道钩不是字，是刻刀收手时顺带划出的记号；我修完版会拿废木试刃，才会留下这种先直后回的半钩。',
  },
  {
    speaker: '灰衣客',
    portrait: assets.grayVisitor,
    portraitAlt: '灰衣客意识到整条线索是专门为沈照布置的',
    text: '这就不再是有人知道你的名字那么简单了。他看过你怎么修版，也知道柜上会留下退验物，更算准我们沿着纸、浆和刀路追到这里。嗯……从门缝里那张封纸开始，他不是在试交子务，他是在一处一处验你。',
  },
  {
    speaker: '沈照',
    portrait: assets.shenZhao,
    portraitAlt: '沈照收起写着自己名目的递纸竹签，回想三年前见过这套刀路的人',
    text: '三年前那块旧版送来时，真正看完我每一刀的人只有两个。我算一个，另一个负责把旧版送回铺里。先把这支竹签收好吧——他既然肯借我的名字进交子务，就不会只留这一张退纸。下一次，他大概会让我亲口说出另一个人的名字。',
  },
]

let activeDialogueLines: DialogueLine[] = []
let activeDialogueIndex = 0
let activeDialogueFinalLabel = '结束交谈'
let activeDialogueComplete: (() => void) | null = null

type MenuView = 'dialogue' | 'inventory'
type DialogueHistoryEntry = Pick<DialogueLine, 'speaker' | 'text'>
type MenuClue = {
  id: string
  title: string
  image: string
  imageAlt: string
  unlocked: () => boolean
  description: () => string
  status: () => string
}

const dialogueHistory: DialogueHistoryEntry[] = []
let replayPageIndex = 0
let selectedMenuClue = 'sealed-paper'

const menuClues: MenuClue[] = [
  {
    id: 'sealed-paper',
    title: '门槛边的封纸',
    image: assets.tornLetterRevealed,
    imageAlt: '带残蜡和夹层的旧纸',
    unlocked: () => paperCollected,
    description: () => sideLightRevealed
      ? '外层封纸下另贴着一层铺户旧纸。侧光照出接缝，背面压痕指向西坊旧交子铺。展厅对应：裂纸为币·制楮为券。'
      : '蜡封没有拆动，纸边却从屋内向外翻卷。纸层里似乎还藏着东西。',
    status: () => sideLightRevealed ? '夹层压痕已经显现' : '等待移到灯下检查',
  },
  {
    id: 'lamp-mark',
    title: '灯下显出的压痕',
    image: assets.oilLamp,
    imageAlt: '照出纸张压痕的旧油灯',
    unlocked: () => sideLightRevealed,
    description: () => evidenceFlipped
      ? '借油灯侧光能辨出“西坊”与“旧交子铺”。展厅中的“铜钱兑飞钱”说明纸质汇兑凭证的前史；飞钱与四川交子不能混称。'
      : '侧光照出了两次不同的版纹和夹层边缘。把纸翻到背面，或许还能看清更多字。',
    status: () => evidenceFlipped ? '地址已确认' : '发现夹层与旧版纹',
  },
  {
    id: 'cabinet-corner',
    title: '灰衣客的旁证',
    image: assets.tornLetter,
    imageAlt: '灰衣客带来的纸角与残册线索',
    unlocked: () => grayVisitorConversationComplete,
    description: () => grayVisitorBranch === 'address'
      ? '灰衣客拿到的另一半线索多出“乙柜”二字。铺户旧纸是剧情物证；史实中，交子先由民间铺户收钱开券，后来转由益州交子务发行。'
      : '收存单残册只剩前三页。铺户旧纸是剧情物证；史实中，交子先由民间铺户收钱开券，后来转由益州交子务发行。',
    status: () => grayVisitorBranch === 'address' ? '写着“乙柜”的另一半纸角' : '被裁走后页的收存单残册',
  },
  {
    id: 'worn-seal',
    title: '被削去一角的铺户私记',
    image: assets.seal,
    imageAlt: '边角有新切口的铺户私记方印',
    unlocked: () => toolCaseFound,
    description: () => '削角是本案虚构痕迹，不是历史上的作废规矩。史实中的铺户会用押字、隐密题号和朱墨相错作私记。',
    status: () => '剧情物证 · 新切口已经确认',
  },
  {
    id: 'ticket-comparison',
    title: '旧铺券与新仿样的断线',
    image: assets.voucherRevealed,
    imageAlt: '并排比对后显出相同断线和不同回刀痕的铺户旧券与新仿样',
    unlocked: () => voucherComparisonComplete,
    description: () => '同处断线是本案虚构机关。两张均为铺户券样，不是官交子；新样有人照着旧券另刻，故意保留了旧伤。',
    status: () => '剧情物证 · 两张券样并非同版',
  },
  {
    id: 'tool-case',
    get title() { return redemptionTrayInspected ? '交子务外廊的退验盘' : paperMouldInspected ? '旧作坊的湿纸帘框' : paperBundleInspected ? '北巷纸栈的退纸样束' : '位置被动过的工具匣' },
    get image() { return redemptionTrayInspected ? assets.redemptionTrayRevealed : paperMouldInspected ? assets.papermakingMouldRevealed : paperBundleInspected ? assets.rejectedPaperBundleOpen : assets.toolCase },
    get imageAlt() { return redemptionTrayInspected ? '湿纸被移开后露出空白发券栏、未用铜印和封存铁钱的退验盘' : paperMouldInspected ? '湿纸角下露出带墨梨木削片的抄纸帘框' : paperBundleInspected ? '解开麻绳后摊开的三层退纸样束' : '打开的旧木刻版工具匣' },
    unlocked: () => redemptionTrayInspected || paperMouldInspected || paperBundleInspected || currentScene === 'interior' || toolCaseFound,
    description: () => redemptionTrayInspected
      ? '剧情复原的验券盘：湿试纸没有对应发券记录与交子务铜印，封存铁钱也未动，说明它未被当作官交子兑付。竹签却冒用了沈照的名字。史实对应：官交子由交子务发行管理，并以本钱和官方信用支撑。'
      : paperMouldInspected
      ? '湿纸角下压着带蓝黑墨的梨木削片，残槽与旧铺券屋木边饰的回刀相合。旧作坊是剧情地点；史实对应的是交子务通过抄纸院管控纸张。'
      : paperBundleInspected
      ? '退纸上的朱墨只用于试套位置，并非官交子。史实中，益州交子务另置抄纸院，从造纸环节防范伪造。'
      : toolCaseFound
        ? alleyClueFound
          ? '失踪木版被包在一张残留“益州交子务”“见钱”字样的旧兑付告示里。展厅对应：交行天下·发行管理。'
          : '刻刀仍按原位排列，盒盖内侧却有新擦痕，还多出一枚铺户旧私记。缺角是本案虚构痕迹。'
        : '工具匣被留在屏风后的里间。有人动过盒盖，却把刻刀重新摆回了原位。',
    status: () => redemptionTrayInspected
      ? '剧情物证 · 有人冒用沈照之名送验湿纸'
      : paperMouldInspected
      ? '剧情物证 · 失踪木版曾在这里修整'
      : paperBundleInspected
      ? '史实对应 · 抄纸院与纸张管控'
      : alleyClueFound
        ? '兑付告示把私券与官交子连在一起'
        : toolCaseFound ? '异物已经确认' : '等待进一步检查',
  },
]

function recordDialogueEntry(speaker: DialogueLine['speaker'], text: string) {
  const last = dialogueHistory.at(-1)
  if (last?.speaker === speaker && last.text === text) return
  dialogueHistory.push({ speaker, text })
  if (dialogueHistory.length > 80) dialogueHistory.shift()
}

function renderDialogueReplay() {
  const pageSize = 4
  const pageCount = Math.max(1, Math.ceil(dialogueHistory.length / pageSize))
  replayPageIndex = Math.max(0, Math.min(replayPageIndex, pageCount - 1))
  const pageEntries = dialogueHistory.slice(replayPageIndex * pageSize, replayPageIndex * pageSize + pageSize)
  menuReplayList.innerHTML = ''

  if (pageEntries.length === 0) {
    const empty = document.createElement('li')
    empty.className = 'is-empty'
    empty.innerHTML = '<strong class="menu-replay-speaker">记录</strong><p>这里还没有可以回放的对话。先回到场景中和阿棠说说话吧。</p>'
    menuReplayList.append(empty)
  } else {
    pageEntries.forEach((entry) => {
      const item = document.createElement('li')
      item.dataset.speaker = entry.speaker
      const speaker = document.createElement('strong')
      speaker.className = 'menu-replay-speaker'
      speaker.textContent = entry.speaker
      const text = document.createElement('p')
      text.textContent = entry.text
      item.append(speaker, text)
      menuReplayList.append(item)
    })
  }

  menuReplayPage.textContent = `${String(replayPageIndex + 1).padStart(2, '0')} / ${String(pageCount).padStart(2, '0')}`
  menuReplayPrev.disabled = replayPageIndex === 0
  menuReplayNext.disabled = replayPageIndex >= pageCount - 1
}

function renderClueMenu() {
  const unlockedClues = menuClues.filter((clue) => clue.unlocked())
  if (!menuClues.find((clue) => clue.id === selectedMenuClue)?.unlocked()) {
    selectedMenuClue = unlockedClues[0]?.id ?? ''
  }

  menuClueGrid.innerHTML = ''
  menuClues.forEach((clue, index) => {
    const unlocked = clue.unlocked()
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'menu-clue-item'
    button.dataset.clueId = clue.id
    button.classList.toggle('is-locked', !unlocked)
    button.classList.toggle('is-selected', unlocked && clue.id === selectedMenuClue)
    button.setAttribute('aria-label', unlocked ? `查看线索：${clue.title}` : `未发现的线索 ${index + 1}`)
    button.innerHTML = unlocked
      ? `<img src="${clue.image}" alt=""><span>${clue.title}</span>`
      : '<span class="menu-clue-locked">尚未发现</span>'
    menuClueGrid.append(button)
  })

  const selected = menuClues.find((clue) => clue.id === selectedMenuClue && clue.unlocked())
  menuClueImage.hidden = !selected
  if (selected) {
    menuClueImage.src = selected.image
    menuClueImage.alt = selected.imageAlt
    menuClueTitle.textContent = selected.title
    menuClueDescription.textContent = selected.description()
    menuClueStatus.textContent = `线索 ${String(unlockedClues.length).padStart(2, '0')} / ${String(menuClues.length).padStart(2, '0')} · ${selected.status()}`
  } else {
    menuClueImage.alt = ''
    menuClueTitle.textContent = '尚未发现线索'
    menuClueDescription.textContent = '继续在场景中调查，找到的物品会收进这里。'
    menuClueStatus.textContent = `线索 00 / ${String(menuClues.length).padStart(2, '0')}`
  }
}

function switchGameMenu(view: MenuView) {
  gameMenuStage.dataset.menuView = view
  gameMenuArt.src = view === 'dialogue' ? assets.menuDialogue : assets.menuBackpack
  menuReplayPanel.hidden = view !== 'dialogue'
  menuCluePanel.hidden = view !== 'inventory'
  if (view === 'dialogue') renderDialogueReplay()
  else renderClueMenu()
}

function openGameMenu(view: MenuView = 'dialogue') {
  if (view === 'dialogue') {
    replayPageIndex = Math.max(0, Math.ceil(dialogueHistory.length / 4) - 1)
  }
  switchGameMenu(view)
  setOverlay(pauseLayer, true)
  window.setTimeout(() => requireElement<HTMLButtonElement>('#menuClose').focus(), 180)
}

function renderDialogueLine() {
  const line = activeDialogueLines[activeDialogueIndex]
  if (!line) return
  speakerName.textContent = line.speaker
  speakerPortrait.src = line.portrait
  speakerPortrait.alt = line.portraitAlt
  dialogueText.textContent = line.text
  dialogueText.classList.toggle('is-long', line.text.length > 76)
  dialogueText.scrollTop = 0
  dialogueNext.textContent = activeDialogueIndex === activeDialogueLines.length - 1 ? activeDialogueFinalLabel : '点击继续'
  recordDialogueEntry(line.speaker, line.text)
}

function showDialogueSequence(lines: DialogueLine[], finalLabel: string, onComplete: () => void) {
  activeDialogueLines = lines
  activeDialogueIndex = 0
  activeDialogueFinalLabel = finalLabel
  activeDialogueComplete = onComplete
  dialogueChoices.innerHTML = ''
  dialogueContinue.hidden = true
  delete dialogueContinue.dataset.next
  dialogueNext.hidden = false
  dialogueLayer.classList.add('is-sequence')
  dialogueLayer.classList.remove('is-resolved')
  dialogueLayer.classList.remove('is-exit')
  dialogueLayer.classList.remove('is-visitor-choice')
  dialogueLayer.classList.remove('is-demo-complete')
  renderDialogueLine()
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueNext.focus(), 260)
}

function advanceDialogueSequence() {
  if (activeDialogueIndex < activeDialogueLines.length - 1) {
    activeDialogueIndex += 1
    renderDialogueLine()
    return
  }
  const onComplete = activeDialogueComplete
  activeDialogueComplete = null
  dialogueNext.hidden = true
  dialogueLayer.classList.remove('is-sequence')
  setOverlay(dialogueLayer, false)
  onComplete?.()
}

function finishAtangIntroduction() {
  atangConversationComplete = true
  tornLetterProp.classList.add('is-unlocked')
  objectiveText.textContent = '查看门槛右侧的破损纸张'
  movementStatus.textContent = '阿棠指向门槛右侧，一张带残蜡的旧纸现在可以检查。'
}

function showAtangIntroduction() {
  if (atangConversationComplete) {
    showDialogueSequence([{
      speaker: '阿棠',
      portrait: assets.aTang,
      portraitAlt: '阿棠提醒沈照查看门槛边的旧纸',
      text: '你怎么又回来了？纸还在门槛右边呢，我真没再碰。你先看那个，等看出点什么再问我，不然我现在翻来覆去也只能说一句：天亮时它就在那里。',
    }], '去看残纸', () => {})
    return
  }
  showDialogueSequence(atangIntroLines, '去看残纸', finishAtangIntroduction)
}

function showPaperPickup() {
  showDialogueSequence(paperPickupLines, '收好纸张', () => {
    paperCollected = true
    tornLetterProp.classList.add('is-collected')
    oilLampProp.classList.add('is-unlocked')
    objectiveText.textContent = '把破损纸张移到油灯下检查'
    movementStatus.textContent = '沈照收起了破损纸张，下一步需要借油灯的侧光检查纸层。'
  })
}

function finishLampPuzzle() {
  lampPuzzleComplete = true
  oilLampProp.classList.add('is-resolved')
  repairExit.classList.add('is-unlocked')
  objectiveText.textContent = '地址已确认：前往西坊旧交子铺'
  movementStatus.textContent = '夹层背面的压痕指向西坊旧交子铺，右上方的出门通道已经标出。'
}

function showRepairExitDialogue() {
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueChoices.innerHTML = ''
  dialogueNext.hidden = true
  dialogueLayer.classList.remove('is-sequence', 'is-resolved')
  dialogueLayer.classList.add('is-exit')
  speakerName.textContent = '沈照'
  speakerPortrait.src = assets.shenZhao
  speakerPortrait.alt = '沈照准备动身去西坊旧交子铺'
  dialogueText.textContent = '地址既然藏在夹层里，送纸的人就是要我亲自去看。嗯……先去西坊旧铺，到了以后先看门窗和地上的灰，别急着碰里面的纸版。阿棠，你把铺门闩好，我看完就回来。'
  recordDialogueEntry('沈照', dialogueText.textContent)
  dialogueContinue.textContent = '前往旧交子铺'
  dialogueContinue.dataset.next = 'shop'
  dialogueContinue.hidden = false
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueContinue.focus(), 260)
}

function showGrayVisitorChoice() {
  dialogueContext = 'visitor'
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueNext.hidden = true
  dialogueContinue.hidden = true
  delete dialogueContinue.dataset.next
  dialogueLayer.classList.remove('is-sequence', 'is-resolved', 'is-exit', 'is-demo-complete')
  dialogueLayer.classList.add('is-visitor-choice')
  speakerName.textContent = '灰衣客'
  speakerPortrait.src = assets.grayVisitor
  speakerPortrait.alt = '灰衣客等沈照选择调查方式'
  dialogueText.textContent = '我已经把能让你选的都摆在明面上了。你是先查我手里的东西，还是先拿你知道的来换？'
  recordDialogueEntry('灰衣客', dialogueText.textContent)
  dialogueChoices.innerHTML = '<button type="button" data-choice="ledger"><span>壹</span>先查他手里的残册</button><button type="button" data-choice="address"><span>贰</span>直接说出夹层地址</button>'
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueChoices.querySelector<HTMLButtonElement>('button')?.focus(), 220)
}

function finishGrayVisitorConversation() {
  grayVisitorConversationComplete = true
  voucherProp.classList.add('is-unlocked')
  objectiveText.textContent = '检查柜台边的铺户旧券与新仿样'
  movementStatus.textContent = '灰衣客把铺户旧券与新仿样留在柜台边，先比对墨色、断线和回刀痕。'
}

function resolveGrayVisitorChoice(choice: string) {
  dialogueLayer.classList.remove('is-visitor-choice')
  if (choice === 'address') {
    grayVisitorBranch = 'address'
    showDialogueSequence(grayVisitorAddressLines, '记下他的话', finishGrayVisitorConversation)
    return
  }
  grayVisitorBranch = 'ledger'
  showDialogueSequence(grayVisitorLedgerLines, '记下他的话', finishGrayVisitorConversation)
}

function showGrayVisitorConversation() {
  if (grayVisitorConversationComplete) {
    if (voucherConclusionComplete) {
      showShopInteriorTransition()
      return
    }
    if (voucherComparisonComplete && !voucherConclusionComplete) {
      showDialogueSequence(voucherConclusionLines, '去看侧门', () => {
        voucherConclusionComplete = true
        showShopInteriorTransition()
      })
      return
    }
    const repeatText = voucherComparisonComplete
      ? '你已经看过两张券样了，就别只把结论放在心里。说说断线旁边那一道多出来的刀痕；你若能解释它，屏风后的侧门就由你自己推开。'
      : '我能告诉你的已经说了。柜台边一张铺户旧券、一张新仿样，断线几乎落在同一处。你先别急着猜是谁刻的，把纸、墨和回刀痕都看完，再回来告诉我它们是不是出自同一块版。'
    showDialogueSequence([{
      speaker: '灰衣客',
      portrait: assets.grayVisitor,
      portraitAlt: '灰衣客提醒沈照检查柜台边的铺户旧券与新仿样',
      text: repeatText,
    }], voucherComparisonComplete ? '说明比对结果' : '去看券样', () => {})
    return
  }
  showDialogueSequence(grayVisitorIntroLines, '选择问法', showGrayVisitorChoice)
}

function showShopInteriorTransition() {
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueChoices.innerHTML = ''
  dialogueNext.hidden = true
  dialogueLayer.classList.remove('is-sequence', 'is-resolved', 'is-visitor-choice')
  dialogueLayer.classList.add('is-exit')
  speakerName.textContent = '灰衣客'
  speakerPortrait.src = assets.grayVisitor
  speakerPortrait.alt = '灰衣客侧身让出通往里间的门'
  dialogueText.textContent = '侧门就在屏风后，我没有替你动里面的东西。你进去以后先看工具匣原来的摆放位置，再看匣子里多了什么。若那枚铺户私记真和新仿样上的缺角对得上，我们再谈是谁有本事把一条旧断线送到你面前。'
  recordDialogueEntry('灰衣客', dialogueText.textContent)
  dialogueContinue.textContent = '推开侧门，进入里间'
  dialogueContinue.dataset.next = 'interior'
  dialogueContinue.hidden = false
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueContinue.focus(), 220)
}

function showInteriorArrivalDialogue() {
  showDialogueSequence(interiorArrivalLines, '查看桌上的工具匣', () => {
    objectiveText.textContent = '检查桌面上的旧工具匣'
    movementStatus.textContent = '里间改为定点调查。点击桌面上的工具匣继续。'
    window.setTimeout(() => toolCaseProp.focus(), 180)
  })
}

function showVoucherComparison() {
  setOverlay(voucherComparison, true)
  window.setTimeout(() => (oldVoucherViewed ? newVoucherSample : oldVoucherSample).focus(), 240)
}

function reviewVoucher(kind: 'old' | 'new') {
  if (kind === 'old') {
    oldVoucherViewed = true
    oldVoucherSample.classList.add('is-viewed')
    reviewOldVoucher.classList.add('is-viewed')
    voucherHeading.textContent = '铺户旧券的墨已经吃进纸里'
    voucherDescription.textContent = '断线边缘有自然的墨晕，纸纤维也随年代磨损。刀口在断线处停住，没有重新补过的回锋。'
  } else {
    newVoucherViewed = true
    newVoucherSample.classList.add('is-viewed')
    reviewNewVoucher.classList.add('is-viewed')
    voucherHeading.textContent = '新仿样在断线后多了一道回刀痕'
    voucherDescription.textContent = '断线位置与旧券重合，墨色却浮在纸面。断口后还有一道极细的回刀痕，说明刻版人照着铺户旧券重新补过这里。'
  }

  if (oldVoucherViewed && newVoucherViewed) {
    voucherComparison.classList.add('is-ready')
    voucherHeading.textContent = '相同的断线，不同的刀路'
    voucherDescription.textContent = '两张券样并非来自同一块版。新仿样刻意保留了旧券的断线，又留下新的回刀痕；有人希望识得这处旧伤的人看见它。'
    voucherFinding.innerHTML = '<small>比对完成</small><strong>新仿样照着铺户旧券重新补刻</strong>'
    recordVoucherComparison.disabled = false
    return
  }

  voucherFinding.innerHTML = `<small>比对进度</small><strong>还需查看${oldVoucherViewed ? '新仿样' : '铺户旧券'}</strong>`
}

function setOverlay(element: HTMLElement, open: boolean) {
  element.setAttribute('aria-hidden', String(!open))
  const modalOpen = [investigation, dialogueLayer, itemInspection, voucherComparison, journalDrawer, pauseLayer]
    .some((modal) => modal.getAttribute('aria-hidden') === 'false')
  shell.classList.toggle('has-modal', modalOpen)
}

function showInvestigation() {
  inspectionContext = 'sealed-paper'
  investigationTitle.textContent = '门槛旁的封纸'
  flipEvidence.hidden = false
  setOverlay(investigation, true)
  movementHint.classList.add('is-hidden')
  window.setTimeout(() => revealClue.focus(), 350)
}

function refreshPaperBundleInspection() {
  evidenceImage.src = paperBundleUntied ? assets.rejectedPaperBundleOpen : assets.rejectedPaperBundle
  evidenceImage.alt = paperBundleUntied
    ? '麻绳已经松开，三张不同质地的退纸样张呈扇形展开'
    : '三张以麻绳扎起、边缘可见楮纸纤维的退纸样张'
  evidenceObject.classList.remove('is-flipped')
  evidenceObject.classList.toggle('is-revealed', paperBundleUntied)
  flipEvidence.hidden = true
  revealClue.disabled = paperBundleUntied
  revealClue.querySelector('span')!.textContent = paperBundleUntied ? '麻绳已经解开' : '解开麻绳'
  if (paperBundleUntied) {
    evidenceHeading.textContent = '三种纸，不是同一批退料'
    evidenceDescription.textContent = '最下层薄纸留着单侧朱墨试印，另外两张只是普通裁纸余料；麻绳内侧还黏着未干的纸浆。'
    clueResult.classList.add('is-found')
    clueResult.innerHTML = '<span></span><div><small>纸张线索</small><strong>退纸试印 · 绳内湿浆</strong></div>'
    inspectionContinue.disabled = false
    inspectionContinue.textContent = '记录纸样线索'
    return
  }
  evidenceHeading.textContent = '绳结朝门，纸边留着朱墨'
  evidenceDescription.textContent = '这束退纸被人特意移到分纸案正中。先保留摆放方向，再解开麻绳检查每层纸样。'
  clueResult.classList.remove('is-found')
  clueResult.innerHTML = '<span></span><div><small>尚未确认</small><strong>检查纸层与绳结</strong></div>'
  inspectionContinue.disabled = true
  inspectionContinue.textContent = '记录纸样线索'
}

function showPaperBundleInspection() {
  inspectionContext = 'paper-bundle'
  investigationTitle.textContent = '北巷纸栈的退纸样束'
  evidenceX = 0
  evidenceY = 0
  evidenceScale = .78
  updateEvidenceTransform()
  refreshPaperBundleInspection()
  setOverlay(investigation, true)
  movementHint.classList.add('is-hidden')
  window.setTimeout(() => (paperBundleUntied ? inspectionContinue : revealClue).focus(), 250)
}

function refreshLampClueState() {
  if (!sideLightRevealed) return
  evidenceImage.src = assets.tornLetterRevealed
  evidenceImage.alt = '油灯侧光下显出夹层、补纸接缝和旧版纹压痕的残纸'
  evidenceObject.classList.add('is-revealed')
  clueResult.classList.add('is-found')
  flipEvidence.disabled = false
  revealClue.disabled = true
  revealClue.querySelector('span')!.textContent = '夹层已经显现'
  if (evidenceFlipped) {
    evidenceHeading.textContent = '背面留下旧铺地址'
    evidenceDescription.textContent = '压痕中能辨出“西坊”与“旧交子铺”。外层封纸用来藏住里面的地址。'
    clueResult.innerHTML = '<span></span><div><small>地址线索</small><strong>西坊 · 旧交子铺</strong></div>'
    inspectionContinue.disabled = false
    inspectionContinue.textContent = '记录地址并继续'
    clueCount.textContent = '1 / 4'
    journalProgress.style.width = '25%'
    firstClue.classList.add('is-found')
    firstClue.querySelector('strong')!.textContent = '夹层里的地址'
    firstClue.querySelector('p')!.textContent = '西坊旧交子铺，被藏在双层封纸背面'
    return
  }
  evidenceHeading.textContent = '纸内另贴了一层旧纸'
  evidenceDescription.textContent = '侧光显出了夹层边缘和两次不同的版纹压痕。翻到背面，看看内层留下了什么。'
  clueResult.innerHTML = '<span></span><div><small>已发现异常</small><strong>夹层补纸与旧版纹</strong></div>'
  inspectionContinue.disabled = true
}

function updateClueState() {
  sideLightRevealed = true
  refreshLampClueState()
}

function revealPaperBundle() {
  paperBundleUntied = true
  refreshPaperBundleInspection()
}

function refreshPaperMouldInspection() {
  evidenceImage.src = paperMouldLifted ? assets.papermakingMouldRevealed : assets.papermakingMould
  evidenceImage.alt = paperMouldLifted
    ? '湿纸一角被揭起，竹帘上露出一片带墨刻槽的梨木削片'
    : '竹制抄纸帘框上承着一层带蓝黑墨点的湿纸浆'
  evidenceObject.classList.remove('is-flipped')
  evidenceObject.classList.toggle('is-revealed', paperMouldLifted)
  flipEvidence.hidden = true
  revealClue.disabled = paperMouldLifted
  revealClue.querySelector('span')!.textContent = paperMouldLifted ? '湿纸角已经揭起' : '揭起湿纸一角'
  if (paperMouldLifted) {
    evidenceHeading.textContent = '湿纸下压着一片新梨木屑'
    evidenceDescription.textContent = '木屑残槽带着蓝黑墨，弧线末端还有与旧铺券相同的半刀回挑；它不属于竹制帘框。'
    clueResult.classList.add('is-found')
    clueResult.innerHTML = '<span></span><div><small>刀路线索</small><strong>梨木削片 · 同路回刀</strong></div>'
    inspectionContinue.disabled = false
    inspectionContinue.textContent = '收起削片并继续'
    return
  }
  evidenceHeading.textContent = '墨只聚在湿纸的一角'
  evidenceDescription.textContent = '帘框刚从水槽里提起，纸浆仍湿；蓝黑墨没有顺竹丝散开，纸角下面可能还压着东西。'
  clueResult.classList.remove('is-found')
  clueResult.innerHTML = '<span></span><div><small>尚未确认</small><strong>检查湿纸与竹帘之间</strong></div>'
  inspectionContinue.disabled = true
  inspectionContinue.textContent = '记录帘框线索'
}

function showPaperMouldInspection() {
  inspectionContext = 'paper-mould'
  investigationTitle.textContent = '旧作坊里的湿纸帘框'
  evidenceX = 0
  evidenceY = 0
  evidenceScale = .76
  updateEvidenceTransform()
  refreshPaperMouldInspection()
  setOverlay(investigation, true)
  movementHint.classList.add('is-hidden')
  window.setTimeout(() => (paperMouldLifted ? inspectionContinue : revealClue).focus(), 250)
}

function revealPaperMould() {
  paperMouldLifted = true
  refreshPaperMouldInspection()
}

function refreshRedemptionTrayInspection() {
  evidenceImage.src = redemptionTrayChecked ? assets.redemptionTrayRevealed : assets.redemptionTray
  evidenceImage.alt = redemptionTrayChecked
    ? '湿试纸被移开，露出没有对应条目的发券簿、未使用的铜印和仍封存的铁钱'
    : '验券盘上放着湿试纸、发券簿、合起的铜印匣、竹签和封存铁钱'
  evidenceObject.classList.remove('is-flipped')
  evidenceObject.classList.toggle('is-revealed', redemptionTrayChecked)
  flipEvidence.hidden = true
  revealClue.disabled = redemptionTrayChecked
  revealClue.querySelector('span')!.textContent = redemptionTrayChecked ? '三处凭据已经核清' : '对照簿、印与铁钱'
  if (redemptionTrayChecked) {
    evidenceHeading.textContent = '没有发券记录，也没有兑出铁钱'
    evidenceDescription.textContent = '湿纸背面无交子务铜印，簿中没有对应条目，铁钱封绳仍完整；竹签却把送验人记作“沈照”。'
    clueResult.classList.add('is-found')
    clueResult.innerHTML = '<span></span><div><small>退验结果</small><strong>无记录 · 无官印 · 冒用沈照名目</strong></div>'
    inspectionContinue.disabled = false
    inspectionContinue.textContent = '收起竹签并继续'
    return
  }
  evidenceHeading.textContent = '湿纸为什么没有换走铁钱？'
  evidenceDescription.textContent = '纸上虽有残缺屋木图纹，柜上的铜印匣和铁钱封绳却没有动。移开湿纸，对照发券簿再下结论。'
  clueResult.classList.remove('is-found')
  clueResult.innerHTML = '<span></span><div><small>尚未确认</small><strong>核对发券记录、官印与本钱</strong></div>'
  inspectionContinue.disabled = true
  inspectionContinue.textContent = '记录退验结果'
}

function showRedemptionTrayInspection() {
  inspectionContext = 'redemption-tray'
  investigationTitle.textContent = '交子务外廊的湿纸验券盘'
  evidenceX = 0
  evidenceY = 0
  evidenceScale = .72
  updateEvidenceTransform()
  refreshRedemptionTrayInspection()
  setOverlay(investigation, true)
  movementHint.classList.add('is-hidden')
  window.setTimeout(() => (redemptionTrayChecked ? inspectionContinue : revealClue).focus(), 250)
}

function revealRedemptionTray() {
  redemptionTrayChecked = true
  refreshRedemptionTrayInspection()
}

function showDialogue(context: 'atang' | 'visitor') {
  dialogueContext = context
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueNext.hidden = true
  dialogueLayer.classList.remove('is-sequence')
  dialogueLayer.classList.remove('is-resolved')
  dialogueLayer.classList.remove('is-exit')
  dialogueLayer.classList.remove('is-visitor-choice')
  dialogueContinue.hidden = true
  delete dialogueContinue.dataset.next
  dialogueChoices.innerHTML = context === 'atang'
    ? '<button type="button" data-choice="deflect"><span>壹</span>“认得刻坏的地方。”</button><button type="button" data-choice="admit"><span>贰</span>“这道断线，是我刻出来的。”</button>'
    : '<button type="button" data-choice="deflect"><span>壹</span>“先付定钱。”</button><button type="button" data-choice="admit"><span>贰</span>“断线本来就在版上。”</button>'
  speakerName.textContent = context === 'atang' ? '阿棠' : '灰衣客'
  dialogueText.textContent = context === 'atang' ? '你认得这道刻痕？' : '补得好吗？'
  recordDialogueEntry(context === 'atang' ? '阿棠' : '灰衣客', dialogueText.textContent)
  speakerPortrait.src = context === 'atang' ? assets.aTang : assets.grayVisitor
  speakerPortrait.alt = context === 'atang' ? '阿棠的立绘' : '灰衣客的立绘'
  setOverlay(dialogueLayer, true)
}

function resolveDialogue(choice: string) {
  dialogueChoices.innerHTML = ''
  dialogueLayer.classList.add('is-resolved')
  if (dialogueContext === 'atang') {
    speakerName.textContent = '沈照'
    speakerPortrait.src = assets.shenZhao
    speakerPortrait.alt = '沈照的立绘'
    dialogueText.textContent = choice === 'admit'
      ? '这道断线，是我当年留下的。那块版，本该已经烧了。'
      : '认得刻坏的地方。好手艺会骗人，坏手艺不会。'
    dialogueContinue.textContent = '前往交子铺'
    dialogueContinue.dataset.next = 'shop'
  } else {
    speakerName.textContent = '灰衣客'
    dialogueText.textContent = choice === 'admit'
      ? '果然找对人了。侧门没有锁，进去看看吧。'
      : '定钱在屋里。你若还记得门怎么开，就自己去取。'
    dialogueContinue.textContent = '推开侧门'
    dialogueContinue.dataset.next = 'interior'
  }
  recordDialogueEntry(speakerName.textContent as DialogueLine['speaker'], dialogueText.textContent)
  dialogueContinue.hidden = false
  dialogueContinue.focus()
}

function changeScene(next: SceneKey) {
  const config = {
    repair: { image: assets.repair, hud: assets.topHud, chapter: '交子行记·断线，第一幕：纸缝来信', index: '壹', name: '修书摊', time: '北宋天圣年间 · 益州成都', objective: '调查阿棠带来的破损纸张', prompt: '查看破损纸张' },
    shop: { image: assets.shop, hud: assets.topHudShop, chapter: '交子行记·断线，第一幕：纸缝来信', index: '壹', name: '旧交子铺前堂', time: '北宋天圣年间 · 益州成都', objective: '先查看旧铺前堂，留意右侧的灰衣客', prompt: '查看旧铺前堂' },
    interior: { image: assets.interior, hud: assets.topHudInterior, chapter: '交子行记·断线，第一幕：纸缝来信', index: '壹', name: '交子铺空室', time: '北宋天圣年间 · 益州成都', objective: '检查桌面上的旧工具匣', prompt: '查看桌上的工具匣' },
    alley: { image: assets.alley, hud: assets.topHudAlley, chapter: '交子行记·断线，第二幕：失踪木版', index: '贰', name: '旧铺后巷', time: '北宋天圣年间 · 益州成都', objective: '追出后巷，寻找搬运木版留下的痕迹', prompt: '查看墙边纸片' },
    paperstore: { image: assets.paperStore, hud: assets.topHudAlley, chapter: '交子行记·断线，第二幕：失踪木版', index: '贰', name: '北巷纸栈', time: '北宋天圣年间 · 益州成都', objective: '查看分纸案，寻找失踪木版的配纸痕迹', prompt: '查看退纸样束' },
    workshop: { image: assets.paperWorkshop, hud: assets.topHudAlley, chapter: '交子行记·断线，第二幕：失踪木版', index: '贰', name: '河边旧抄纸作坊', time: '北宋天圣年间 · 益州成都', objective: '查看仍然湿润的抄纸帘框', prompt: '检查湿纸帘框' },
    redemption: { image: assets.redemptionHall, hud: assets.topHudAlley, chapter: '交子行记·断线，第二幕：失踪木版', index: '贰', name: '交子务外廊', time: '北宋天圣年间 · 益州成都 · 剧情复原', objective: '查看柜上退验盘，确认湿纸为何不能兑付', prompt: '检查湿纸验券盘' },
  }[next]
  currentScene = next
  setNearbyInteraction(null)
  shell.dataset.scene = next
  shell.classList.add('is-changing')
  window.setTimeout(() => {
    sceneImage.style.backgroundImage = `url('${config.image}')`
    topHudImage.src = config.hud
    chapterMark.setAttribute('aria-label', config.chapter)
    sceneName.textContent = config.name
    sceneIndex.textContent = config.index
    sceneTime.textContent = config.time
    objectiveText.textContent = config.objective
    promptText.textContent = config.prompt
    applySceneNavigation(next)
    resetExplorationPosition()
    movementStatus.textContent = next === 'shop'
      ? '沈照进入旧交子铺前堂。灰衣客站在右侧，没有主动开口。'
      : next === 'alley'
        ? '沈照从里间后门追入短巷，墙边有一张颜色较新的纸片。'
        : next === 'paperstore'
          ? '沈照与灰衣客进入北巷纸栈，中央分纸案上留着一束刚被挪动的退纸。'
          : next === 'workshop'
            ? '沈照与灰衣客来到河边旧抄纸作坊。水槽仍在流动，右侧工作台上的帘框还是湿的。'
          : next === 'redemption'
            ? '沈照一行来到剧情复原的交子务外廊。柜上留下湿纸验券盘，封存铁钱的绳结仍然完整。'
          : `${config.name}已载入。`
    shell.classList.remove('is-changing')
    if (next === 'interior') window.setTimeout(showInteriorArrivalDialogue, 180)
    if (next === 'alley') window.setTimeout(showAlleyArrivalDialogue, 180)
    if (next === 'paperstore') window.setTimeout(showPaperStoreArrivalDialogue, 180)
    if (next === 'workshop') window.setTimeout(showWorkshopArrivalDialogue, 180)
    if (next === 'redemption') window.setTimeout(showRedemptionArrivalDialogue, 180)
  }, 240)
}

function handleInteraction() {
  if (shell.dataset.mode === 'exploration-preview') {
    if (nearbyInteraction === 'atang') showAtangIntroduction()
    if (nearbyInteraction === 'paper') showPaperPickup()
    if (nearbyInteraction === 'lamp') showInvestigation()
    if (nearbyInteraction === 'exit') showRepairExitDialogue()
    if (nearbyInteraction === 'visitor') showGrayVisitorConversation()
    if (nearbyInteraction === 'vouchers') showVoucherComparison()
    if (nearbyInteraction === 'alley-paper') showAlleyPaperClue()
    if (nearbyInteraction === 'paper-bundle') showPaperBundleInspection()
    if (nearbyInteraction === 'paper-mould') showPaperMouldInspection()
    if (nearbyInteraction === 'redemption-tray') showRedemptionTrayInspection()
    return
  }
  if (currentScene === 'repair') showInvestigation()
  if (currentScene === 'shop') showDialogue('visitor')
  if (currentScene === 'interior') showItemInspection()
}

function showItemInspection() {
  setOverlay(itemInspection, true)
  window.setTimeout(() => {
    if (!sealInspected) sealObject.focus()
    else if (!toolCaseReviewed) reviewToolCase.focus()
    else if (!demoConclusionComplete) recordToolCase.focus()
    else reviewToolCase.focus()
  }, 250)
}

function refreshToolCaseInspection() {
  toolCaseFound = sealInspected && toolCaseReviewed
  itemInspection.classList.toggle('is-found', sealInspected)
  if (sealInspected && toolCaseReviewed) {
    itemDescription.textContent = '铺户私记右侧的新切口与新仿样印痕吻合；盒底墨尘中还留着一块长方形空槽，说明有人刚取走过一块木版。'
    itemFinding.innerHTML = '<small>两处异常已确认</small><strong>留下铺户私记 · 取走一块木版</strong>'
    recordToolCase.disabled = false
    return
  }
  if (sealInspected) {
    itemDescription.textContent = '铺户私记右侧被人新削去一角，切口与新仿样上的半枚印痕吻合。盒盖和盒底还没有检查。'
    itemFinding.innerHTML = '<small>已确认一处异常</small><strong>被新削一角的铺户私记</strong>'
    return
  }
  itemDescription.textContent = '盒盖内侧有一圈新擦痕，盒底墨尘中还空出一块规整的长方形。这里原先压着一块刚被人取走的木版。'
  itemFinding.innerHTML = '<small>已确认一处异常</small><strong>工具匣中少了一块木版</strong>'
}

function revealToolCaseClue() {
  sealInspected = true
  sealObject.disabled = true
  inspectSeal.disabled = true
  sealObject.querySelector('span')!.textContent = '印面缺口已经确认'
  clueCount.textContent = '3 / 4'
  journalProgress.style.width = '75%'
  thirdClue.classList.add('is-found')
  thirdClue.querySelector('p')!.textContent = '铺户私记的新切口与仿样印痕吻合'
  refreshToolCaseInspection()
}

function finishDemoConclusion() {
  demoConclusionComplete = true
  recordToolCase.disabled = true
  recordToolCase.textContent = '本节点调查已完成'
  clueCount.textContent = '4 / 4'
  journalProgress.style.width = '100%'
  fourthClue.classList.add('is-found')
  fourthClue.querySelector('strong')!.textContent = '工具匣里的空槽'
  fourthClue.querySelector('p')!.textContent = '铺户私记被留下，一块旧木版刚被人取走'
  objectiveText.textContent = '试玩调查完成：追查被取走的旧木版'
  topHudImage.src = assets.topHudResolved
  promptKind.textContent = '回看'
  promptText.textContent = '再次查看旧工具匣'
  movementStatus.textContent = '四条线索已经记录。铺户私记只是引路物，真正被取走的是工具匣中的旧木版。'
  window.setTimeout(showDemoCompletionChoice, 180)
}

function showDemoCompletionChoice() {
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueNext.hidden = true
  dialogueContinue.hidden = true
  delete dialogueContinue.dataset.next
  dialogueLayer.classList.remove('is-sequence', 'is-resolved', 'is-exit', 'is-visitor-choice')
  dialogueLayer.classList.add('is-demo-complete')
  speakerName.textContent = '沈照'
  speakerPortrait.src = assets.shenZhao
  speakerPortrait.alt = '沈照收好本次调查所得的四条线索'
  dialogueText.textContent = '先把线索记到这里。铺户私记、新仿样的断线和匣中空槽已经能互相对上。更要紧的是，这些都属于旧铺户留下的东西，不能和交子务发行的官交子混作一谈。嗯……后门外就是短巷，拿版的人若走得急，总会在墙角、门槛或包纸上留下东西；也可以从修书摊重查一遍。'
  dialogueText.classList.toggle('is-long', dialogueText.textContent.length > 76)
  recordDialogueEntry('沈照', dialogueText.textContent)
  dialogueChoices.innerHTML = '<button type="button" data-choice="continue-alley"><span>壹</span>追出后巷继续调查</button><button type="button" data-choice="restart-demo"><span>贰</span>从修书摊重新调查</button>'
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueChoices.querySelector<HTMLButtonElement>('button')?.focus(), 220)
}

function resolveDemoCompletionChoice(choice: string) {
  dialogueLayer.classList.remove('is-demo-complete')
  dialogueChoices.innerHTML = ''
  setOverlay(dialogueLayer, false)
  if (choice === 'restart-demo') {
    resetDemo()
    showMovementHintTemporarily()
    return
  }
  changeScene('alley')
}

function showAlleyArrivalDialogue() {
  showDialogueSequence(alleyArrivalLines, '查看墙边纸片', () => {
    objectiveText.textContent = '调查墙边压着木屑的新纸片'
    promptKind.textContent = '调查'
    promptText.textContent = '查看墙边的新纸片'
    movementStatus.textContent = '后巷恢复跑图。靠近左侧墙边翘起的新纸片继续调查。'
    showMovementHintTemporarily()
  })
}

function showAlleyPaperClue() {
  if (alleyClueFound) {
    showDialogueSequence([{
      speaker: '沈照',
      portrait: assets.shenZhao,
      portraitAlt: '沈照再次确认从后巷收起的包版纸',
      text: '纸背的平行压痕、内侧墨粉和折宽都已经记下了。外面残留的“益州交子务”“见钱”字样也不是票面，而是旧兑付告示。它包过的东西与工具匣空槽尺寸相近，带走木版的人从北巷离开。眼下再看这面墙也不会多出别的线索，先把纸收好。',
    }], '收好纸片', () => {})
    return
  }
  showDialogueSequence(alleyPaperLines, '收好包版纸', () => {
    alleyClueFound = true
    alleyPaperProp.classList.add('is-collected')
    objectiveText.textContent = '后巷线索已确认：循兑付告示前往北巷纸栈'
    promptKind.textContent = '已记录'
    promptText.textContent = '兑付告示指向北巷'
    movementStatus.textContent = '包版纸上的交子务兑付文字已经确认。拿版的人重新包好木版后，从北巷纸栈方向离开。'
    window.setTimeout(showPaperStoreTransition, 180)
  })
}

function showPaperStoreTransition() {
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueChoices.innerHTML = ''
  dialogueNext.hidden = true
  dialogueLayer.classList.remove('is-sequence', 'is-resolved', 'is-visitor-choice', 'is-demo-complete')
  dialogueLayer.classList.add('is-exit')
  speakerName.textContent = '灰衣客'
  speakerPortrait.src = assets.grayVisitor
  speakerPortrait.alt = '灰衣客示意沈照沿北巷前往纸栈'
  dialogueText.textContent = '纸栈就在北巷尽头，离这里不过一盏茶的脚程。眼下追人未必追得上，追纸倒还来得及：同一槽浆、同一刀裁下来的纸，毛边不会凭空变样。你若真想知道那块旧版被拿去做什么，就去看谁在纸栈里替它挑过纸。'
  dialogueText.classList.toggle('is-long', dialogueText.textContent.length > 76)
  recordDialogueEntry('灰衣客', dialogueText.textContent)
  dialogueContinue.textContent = '前往北巷纸栈'
  dialogueContinue.dataset.next = 'paperstore'
  dialogueContinue.hidden = false
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueContinue.focus(), 220)
}

function showPaperStoreArrivalDialogue() {
  showDialogueSequence(paperStoreArrivalLines, '检查分纸案上的纸束', () => {
    paperBundleProp.classList.add('is-unlocked')
    objectiveText.textContent = '检查分纸案上的退纸样束'
    promptKind.textContent = '调查'
    promptText.textContent = '查看退纸样束'
    movementStatus.textContent = '纸栈恢复跑图。靠近中央分纸案右侧的退纸样束继续调查。'
    showMovementHintTemporarily()
  })
}

function finishPaperStoreNode() {
  paperBundleInspected = true
  paperBundleProp.classList.add('is-collected')
  selectedMenuClue = 'tool-case'
  objectiveText.textContent = '纸栈线索已确认：追查河边旧抄纸作坊'
  promptKind.textContent = '已记录'
  promptText.textContent = '退纸样束已收入线索簿'
  movementStatus.textContent = '退纸试印与绳内湿浆已经确认。失踪木版曾在纸栈配纸，来人随后去了河边旧抄纸作坊方向。'
  window.setTimeout(showWorkshopTransition, 180)
}

function showWorkshopTransition() {
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueChoices.innerHTML = ''
  dialogueNext.hidden = true
  dialogueLayer.classList.remove('is-sequence', 'is-resolved', 'is-visitor-choice', 'is-demo-complete')
  dialogueLayer.classList.add('is-exit')
  speakerName.textContent = '沈照'
  speakerPortrait.src = assets.shenZhao
  speakerPortrait.alt = '沈照收好退纸样束并准备前往河边旧抄纸作坊'
  dialogueText.textContent = '湿纸浆不会跟着麻绳自己跑到纸栈。北巷往河边只有那间停工的旧作坊还留着水槽，路又不远。嗯……对方若还是故意等我们，帘框和水面大概也已经替他把下一句话摆好了。先去看看，别让太阳把湿痕晒干。'
  dialogueText.classList.toggle('is-long', dialogueText.textContent.length > 76)
  recordDialogueEntry('沈照', dialogueText.textContent)
  dialogueContinue.textContent = '前往河边旧抄纸作坊'
  dialogueContinue.dataset.next = 'workshop'
  dialogueContinue.hidden = false
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueContinue.focus(), 220)
}

function showWorkshopArrivalDialogue() {
  showDialogueSequence(workshopArrivalLines, '检查工作台上的帘框', () => {
    paperMouldProp.classList.add('is-unlocked')
    objectiveText.textContent = '检查工作台上仍然湿润的抄纸帘框'
    promptKind.textContent = '调查'
    promptText.textContent = '查看湿纸帘框'
    movementStatus.textContent = '旧作坊恢复跑图。绕过中央水槽，靠近右侧工作台下方检查抄纸帘框。'
    showMovementHintTemporarily()
  })
}

function finishWorkshopNode() {
  paperMouldInspected = true
  paperMouldProp.classList.add('is-resolved')
  const paperMouldImage = paperMouldProp.querySelector<HTMLImageElement>('img')
  if (paperMouldImage) {
    paperMouldImage.src = assets.papermakingMouldRevealed
    paperMouldImage.alt = '湿纸角被揭起并露出梨木削片的抄纸帘框'
  }
  selectedMenuClue = 'tool-case'
  objectiveText.textContent = '旧作坊线索已确认：追查被带往交子务兑付处的湿纸'
  promptKind.textContent = '已记录'
  promptText.textContent = '梨木削片已收入线索簿'
  movementStatus.textContent = '湿纸下的梨木削片与沈照旧日修版刀路相合。唯一被带走的湿纸正被送往交子务兑付处。'
  window.setTimeout(showRedemptionTransition, 180)
}

function showRedemptionTransition() {
  activeDialogueLines = []
  activeDialogueComplete = null
  dialogueChoices.innerHTML = ''
  dialogueNext.hidden = true
  dialogueLayer.classList.remove('is-sequence', 'is-resolved', 'is-visitor-choice', 'is-demo-complete')
  dialogueLayer.classList.add('is-exit')
  speakerName.textContent = '灰衣客'
  speakerPortrait.src = assets.grayVisitor
  speakerPortrait.alt = '灰衣客收好梨木削片并准备前往交子务外廊'
  dialogueText.textContent = '兑付处午后已经停收，再拖下去，退验盘就会连同当日杂件一起封存。你放心，我们看的只是柜上退回的那张湿纸，不碰官署内案。到了先看铁钱封绳有没有解，再看印匣和簿页；若三样都没动，那个人送纸进去，图的就不是兑钱。'
  dialogueText.classList.toggle('is-long', dialogueText.textContent.length > 76)
  recordDialogueEntry('灰衣客', dialogueText.textContent)
  dialogueContinue.textContent = '前往交子务外廊'
  dialogueContinue.dataset.next = 'redemption'
  dialogueContinue.hidden = false
  setOverlay(dialogueLayer, true)
  window.setTimeout(() => dialogueContinue.focus(), 220)
}

function showRedemptionArrivalDialogue() {
  showDialogueSequence(redemptionArrivalLines, '检查柜上的湿纸验券盘', () => {
    redemptionTrayProp.classList.add('is-unlocked')
    objectiveText.textContent = '检查验券盘，对照发券簿、铜印与封存铁钱'
    promptKind.textContent = '调查'
    promptText.textContent = '查看湿纸验券盘'
    movementStatus.textContent = '交子务外廊恢复跑图。靠近右上方柜台上的验券盘继续调查。'
    showMovementHintTemporarily()
  })
}

function finishRedemptionNode() {
  redemptionTrayInspected = true
  redemptionTrayProp.classList.add('is-resolved')
  const redemptionTrayImage = redemptionTrayProp.querySelector<HTMLImageElement>('img')
  if (redemptionTrayImage) {
    redemptionTrayImage.src = assets.redemptionTrayRevealed
    redemptionTrayImage.alt = '湿试纸移开后露出空白发券栏、未使用铜印与封存铁钱的验券盘'
  }
  selectedMenuClue = 'tool-case'
  objectiveText.textContent = '退验结果已确认：追查冒用沈照姓名的送纸人'
  promptKind.textContent = '已记录'
  promptText.textContent = '退验竹签已收入线索簿'
  movementStatus.textContent = '湿纸没有发券记录、交子务铜印和兑付结果，却以沈照名义送验。有人正沿着沈照三年前的修版经历布置线索。'
}

function resetDemo() {
  changeScene('repair')
  dialogueHistory.length = 0
  replayPageIndex = 0
  selectedMenuClue = 'sealed-paper'
  atangConversationComplete = false
  paperCollected = false
  sideLightRevealed = false
  evidenceFlipped = false
  lampPuzzleComplete = false
  grayVisitorConversationComplete = false
  grayVisitorBranch = null
  oldVoucherViewed = false
  newVoucherViewed = false
  voucherComparisonComplete = false
  voucherConclusionComplete = false
  toolCaseReviewed = false
  sealInspected = false
  demoConclusionComplete = false
  alleyClueFound = false
  paperBundleUntied = false
  paperBundleInspected = false
  paperMouldLifted = false
  paperMouldInspected = false
  redemptionTrayChecked = false
  redemptionTrayInspected = false
  inspectionContext = 'sealed-paper'
  activeDialogueLines = []
  activeDialogueIndex = 0
  activeDialogueComplete = null
  nearbyInteraction = null
  aTangNpc.classList.remove('is-near')
  grayVisitorNpc.classList.remove('is-near')
  voucherProp.classList.remove('is-unlocked', 'is-near', 'is-collected')
  alleyPaperProp.classList.remove('is-near', 'is-collected')
  paperBundleProp.classList.remove('is-unlocked', 'is-near', 'is-collected')
  paperMouldProp.classList.remove('is-unlocked', 'is-near', 'is-resolved')
  const paperMouldImage = paperMouldProp.querySelector<HTMLImageElement>('img')
  if (paperMouldImage) {
    paperMouldImage.src = assets.papermakingMould
    paperMouldImage.alt = '承着一层湿纸浆的竹制抄纸帘框'
  }
  redemptionTrayProp.classList.remove('is-unlocked', 'is-near', 'is-resolved')
  const redemptionTrayImage = redemptionTrayProp.querySelector<HTMLImageElement>('img')
  if (redemptionTrayImage) {
    redemptionTrayImage.src = assets.redemptionTray
    redemptionTrayImage.alt = '放着湿试纸、发券簿、印匣和封存铁钱的验券盘'
  }
  tornLetterProp.classList.remove('is-unlocked', 'is-near', 'is-collected')
  oilLampProp.classList.remove('is-unlocked', 'is-near', 'is-resolved')
  repairExit.classList.remove('is-unlocked', 'is-near')
  interactionPrompt.setAttribute('aria-hidden', 'true')
  promptKind.textContent = '交谈'
  promptText.textContent = '和阿棠说话'
  evidenceX = 0
  evidenceY = 0
  evidenceScale = 1
  evidenceObject.classList.remove('is-revealed', 'is-flipped')
  evidenceImage.src = assets.tornLetter
  evidenceImage.alt = '带残损蜡封的双层旧纸'
  investigationTitle.textContent = '门槛旁的封纸'
  flipEvidence.hidden = false
  evidenceHeading.textContent = '纸边的卷向不对'
  evidenceDescription.textContent = '蜡封没有拆动，纸边却像从屋内向外翻卷。先借侧光看看纸层是否被重新贴过。'
  evidenceObject.style.setProperty('--evidence-x', '0px')
  evidenceObject.style.setProperty('--evidence-y', '0px')
  evidenceObject.style.setProperty('--evidence-scale', '1')
  flipEvidence.setAttribute('aria-pressed', 'false')
  flipEvidence.querySelector('span')!.textContent = '翻到背面'
  flipEvidence.disabled = true
  clueResult.classList.remove('is-found')
  clueResult.innerHTML = '<span></span><div><small>尚未确认</small><strong>用侧光检查纸层</strong></div>'
  revealClue.disabled = false
  revealClue.querySelector('span')!.textContent = '用侧光照纸'
  inspectionContinue.disabled = true
  inspectionContinue.textContent = '记录线索并继续'
  clueCount.textContent = '0 / 4'
  journalProgress.style.width = '0%'
  firstClue.classList.remove('is-found')
  firstClue.querySelector('strong')!.textContent = '夹层里的地址'
  firstClue.querySelector('p')!.textContent = '尚未发现'
  secondClue.classList.remove('is-found')
  secondClue.querySelector('p')!.textContent = '尚未发现'
  oldVoucherSample.classList.remove('is-viewed')
  newVoucherSample.classList.remove('is-viewed')
  reviewOldVoucher.classList.remove('is-viewed')
  reviewNewVoucher.classList.remove('is-viewed')
  voucherComparison.classList.remove('is-ready')
  voucherHeading.textContent = '旧铺券与新仿样哪里不同？'
  voucherDescription.textContent = '灰衣客把铺户旧券与新仿样并排留在柜台边。先分别查看墨色、断线和回刀痕，再决定它们是否出自同一块版。'
  voucherFinding.innerHTML = '<small>比对进度</small><strong>分别检查旧铺券与新仿样</strong>'
  recordVoucherComparison.disabled = true
  toolCaseFound = false
  itemInspection.classList.remove('is-found')
  itemDescription.textContent = '刻刀的位置没有变，盒盖里却多了一枚铺户旧私记。右侧缺角像是刚被人削出来的。'
  itemFinding.innerHTML = '<small>待确认</small><strong>盒中的铺户旧私记</strong>'
  sealObject.disabled = false
  inspectSeal.disabled = false
  reviewToolCase.classList.remove('is-viewed')
  sealObject.querySelector('span')!.textContent = '检查铺户私记'
  recordToolCase.disabled = true
  recordToolCase.textContent = '记录线索并收起'
  thirdClue.classList.remove('is-found')
  thirdClue.querySelector('p')!.textContent = '尚未发现'
  fourthClue.classList.remove('is-found')
  fourthClue.querySelector('strong')!.textContent = '最后一处疑点'
  fourthClue.querySelector('p')!.textContent = '尚未发现'
  dialogueChoices.innerHTML = ''
  dialogueNext.hidden = true
  dialogueContinue.hidden = true
  delete dialogueContinue.dataset.next
  dialogueLayer.classList.remove('is-sequence', 'is-resolved', 'is-exit', 'is-visitor-choice', 'is-demo-complete')
  ;[investigation, dialogueLayer, itemInspection, voucherComparison, journalDrawer, pauseLayer].forEach((element) => setOverlay(element, false))
  movementHint.classList.remove('is-hidden')
}

interactionPrompt.addEventListener('click', handleInteraction)
requireElement('#closeInvestigation').addEventListener('click', () => setOverlay(investigation, false))
revealClue.addEventListener('click', () => {
  if (inspectionContext === 'paper-bundle') revealPaperBundle()
  else if (inspectionContext === 'paper-mould') revealPaperMould()
  else if (inspectionContext === 'redemption-tray') revealRedemptionTray()
  else updateClueState()
})
flipEvidence.addEventListener('click', () => {
  const flipped = evidenceObject.classList.toggle('is-flipped')
  evidenceFlipped = flipped
  flipEvidence.setAttribute('aria-pressed', String(flipped))
  flipEvidence.querySelector('span')!.textContent = flipped ? '回到正面' : '翻到背面'
  refreshLampClueState()
})
inspectionContinue.addEventListener('click', () => {
  setOverlay(investigation, false)
  if (inspectionContext === 'paper-bundle') {
    showDialogueSequence(paperStoreConclusionLines, '完成纸栈调查', finishPaperStoreNode)
    return
  }
  if (inspectionContext === 'paper-mould') {
    showDialogueSequence(workshopConclusionLines, '完成旧作坊调查', finishWorkshopNode)
    return
  }
  if (inspectionContext === 'redemption-tray') {
    showDialogueSequence(redemptionConclusionLines, '完成外廊调查', finishRedemptionNode)
    return
  }
  if (shell.dataset.mode === 'exploration-preview') {
    showDialogueSequence(lampDiscoveryLines, '记下地址', finishLampPuzzle)
    return
  }
  showDialogue('atang')
})
dialogueChoices.addEventListener('click', (event) => {
  const choice = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-choice]')
  if (!choice) return
  if (dialogueLayer.classList.contains('is-demo-complete')) {
    resolveDemoCompletionChoice(choice.dataset.choice ?? 'continue-alley')
    return
  }
  if (dialogueLayer.classList.contains('is-visitor-choice')) {
    resolveGrayVisitorChoice(choice.dataset.choice ?? 'ledger')
    return
  }
  resolveDialogue(choice.dataset.choice ?? 'deflect')
})
dialogueNext.addEventListener('click', advanceDialogueSequence)
dialogueContinue.addEventListener('click', () => {
  const next = dialogueContinue.dataset.next as SceneKey | undefined
  dialogueLayer.classList.remove('is-exit')
  setOverlay(dialogueLayer, false)
  if (next) changeScene(next)
})
toolCaseProp.addEventListener('click', showItemInspection)
sealObject.addEventListener('click', revealToolCaseClue)
inspectSeal.addEventListener('click', revealToolCaseClue)
reviewToolCase.addEventListener('click', () => {
  toolCaseReviewed = true
  reviewToolCase.classList.add('is-viewed')
  refreshToolCaseInspection()
})
requireElement('#closeItemInspection').addEventListener('click', () => setOverlay(itemInspection, false))
requireElement('#closeVoucherComparison').addEventListener('click', () => setOverlay(voucherComparison, false))
oldVoucherSample.addEventListener('click', () => reviewVoucher('old'))
newVoucherSample.addEventListener('click', () => reviewVoucher('new'))
reviewOldVoucher.addEventListener('click', () => reviewVoucher('old'))
reviewNewVoucher.addEventListener('click', () => reviewVoucher('new'))
recordVoucherComparison.addEventListener('click', () => {
  voucherComparisonComplete = true
  voucherProp.classList.add('is-collected')
  secondClue.classList.add('is-found')
  secondClue.querySelector('p')!.textContent = '新仿样照着铺户旧券的断线重新补刻'
  clueCount.textContent = '2 / 4'
  journalProgress.style.width = '50%'
  objectiveText.textContent = '把券样比对结果告诉灰衣客'
  movementStatus.textContent = '铺户旧券与新仿样并非同版。回去告诉灰衣客：新仿样刻意保留了旧断线。'
  setOverlay(voucherComparison, false)
})
recordToolCase.addEventListener('click', () => {
  if (!sealInspected || !toolCaseReviewed || demoConclusionComplete) return
  setOverlay(itemInspection, false)
  showDialogueSequence(toolCaseConclusionLines, '完成试玩调查', finishDemoConclusion)
})
requireElement('#journalButton').addEventListener('click', () => openGameMenu('inventory'))
requireElement('#closeJournal').addEventListener('click', () => setOverlay(journalDrawer, false))
requireElement('#menuButton').addEventListener('click', () => openGameMenu('dialogue'))
requireElement('#resumeButton').addEventListener('click', () => setOverlay(pauseLayer, false))
requireElement('#menuClose').addEventListener('click', () => setOverlay(pauseLayer, false))
document.querySelectorAll<HTMLButtonElement>('[data-menu-view]').forEach((button) => {
  button.addEventListener('click', () => switchGameMenu(button.dataset.menuView as MenuView))
})
requireElement('#menuSettings').addEventListener('click', () => {
  menuStatus.textContent = '设置功能将在后续版本开放。'
})
menuReplayPrev.addEventListener('click', () => {
  replayPageIndex -= 1
  renderDialogueReplay()
})
menuReplayNext.addEventListener('click', () => {
  replayPageIndex += 1
  renderDialogueReplay()
})
menuClueGrid.addEventListener('click', (event) => {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-clue-id]')
  if (!button) return
  const clue = menuClues.find((entry) => entry.id === button.dataset.clueId)
  if (!clue?.unlocked()) {
    menuStatus.textContent = '这件线索还没有找到。'
    return
  }
  selectedMenuClue = clue.id
  renderClueMenu()
})

soundButton.addEventListener('click', () => {
  const enabled = soundButton.getAttribute('aria-pressed') === 'true'
  soundButton.setAttribute('aria-pressed', String(!enabled))
  soundButton.setAttribute('aria-label', enabled ? '开启声音' : '关闭声音')
  soundButton.classList.toggle('is-muted', enabled)
})

let evidencePointer: number | null = null
let evidenceX = 0
let evidenceY = 0
let evidenceScale = 1
let dragOriginX = 0
let dragOriginY = 0

function updateEvidenceTransform() {
  evidenceObject.style.setProperty('--evidence-x', `${evidenceX}px`)
  evidenceObject.style.setProperty('--evidence-y', `${evidenceY}px`)
  evidenceObject.style.setProperty('--evidence-scale', String(evidenceScale))
}

evidenceObject.addEventListener('pointerdown', (event) => {
  evidencePointer = event.pointerId
  dragOriginX = event.clientX - evidenceX
  dragOriginY = event.clientY - evidenceY
  evidenceObject.setPointerCapture(event.pointerId)
  evidenceObject.classList.add('is-dragging')
})

evidenceObject.addEventListener('pointermove', (event) => {
  if (evidencePointer !== event.pointerId) return
  evidenceX = Math.max(-180, Math.min(180, event.clientX - dragOriginX))
  evidenceY = Math.max(-120, Math.min(120, event.clientY - dragOriginY))
  updateEvidenceTransform()
})

function finishEvidenceDrag(event: PointerEvent) {
  if (evidencePointer !== event.pointerId) return
  evidencePointer = null
  evidenceObject.classList.remove('is-dragging')
}

evidenceObject.addEventListener('pointerup', finishEvidenceDrag)
evidenceObject.addEventListener('pointercancel', finishEvidenceDrag)
evidenceObject.addEventListener('wheel', (event) => {
  event.preventDefault()
  evidenceScale = Math.max(.72, Math.min(1.55, evidenceScale - event.deltaY * .0012))
  updateEvidenceTransform()
}, { passive: false })

type MapPoint = { x: number; y: number }

type NavigationArea = {
  start: MapPoint
  bounds: { minX: number; maxX: number; minY: number; maxY: number }
  obstacles: Array<{ minX: number; maxX: number; minY: number; maxY: number }>
}

const sceneNavigation: Record<SceneKey, NavigationArea> = {
  repair: {
    start: { x: .5, y: .84 },
    bounds: { minX: .075, maxX: .925, minY: .29, maxY: .905 },
    obstacles: [
      { minX: .065, maxX: .295, minY: .43, maxY: .835 },
      { minX: .375, maxX: .655, minY: .365, maxY: .67 },
      { minX: .71, maxX: .93, minY: .65, maxY: .895 },
      { minX: .72, maxX: .86, minY: .34, maxY: .61 },
    ],
  },
  shop: {
    start: { x: .5, y: .885 },
    bounds: { minX: .065, maxX: .94, minY: .285, maxY: .91 },
    obstacles: [
      { minX: .05, maxX: .29, minY: .34, maxY: .68 },
      { minX: .365, maxX: .655, minY: .34, maxY: .675 },
      { minX: .42, maxX: .585, minY: .62, maxY: .73 },
      { minX: .70, maxX: .95, minY: .61, maxY: .84 },
      { minX: .80, maxX: .96, minY: .34, maxY: .60 },
      { minX: .67, maxX: .73, minY: .46, maxY: .585 },
    ],
  },
  interior: {
    start: { x: .5, y: .84 },
    bounds: { minX: .075, maxX: .925, minY: .33, maxY: .905 },
    obstacles: [],
  },
  alley: {
    start: { x: .70, y: .86 },
    bounds: { minX: .20, maxX: .92, minY: .54, maxY: .91 },
    obstacles: [
      { minX: .20, maxX: .29, minY: .54, maxY: .80 },
      { minX: .86, maxX: .94, minY: .54, maxY: .77 },
    ],
  },
  paperstore: {
    start: { x: .50, y: .88 },
    bounds: { minX: .13, maxX: .88, minY: .29, maxY: .90 },
    obstacles: [
      { minX: .37, maxX: .64, minY: .38, maxY: .64 },
      { minX: .06, maxX: .20, minY: .28, maxY: .76 },
      { minX: .81, maxX: .95, minY: .27, maxY: .78 },
      { minX: .07, maxX: .39, minY: .72, maxY: .94 },
      { minX: .65, maxX: .95, minY: .72, maxY: .94 },
    ],
  },
  workshop: {
    start: { x: .51, y: .88 },
    bounds: { minX: .22, maxX: .88, minY: .27, maxY: .90 },
    obstacles: [
      { minX: .02, maxX: .31, minY: .18, maxY: .64 },
      { minX: .44, maxX: .56, minY: .38, maxY: .73 },
      { minX: .67, maxX: .94, minY: .38, maxY: .60 },
      { minX: .78, maxX: .98, minY: .59, maxY: .80 },
      { minX: .03, maxX: .29, minY: .72, maxY: .94 },
      { minX: .61, maxX: .75, minY: .79, maxY: .95 },
    ],
  },
  redemption: {
    start: { x: .50, y: .88 },
    bounds: { minX: .14, maxX: .88, minY: .30, maxY: .90 },
    obstacles: [
      { minX: .11, maxX: .91, minY: .12, maxY: .37 },
      { minX: .03, maxX: .19, minY: .34, maxY: .66 },
      { minX: .84, maxX: .98, minY: .42, maxY: .76 },
      { minX: .02, maxX: .31, minY: .67, maxY: .96 },
      { minX: .63, maxX: .98, minY: .68, maxY: .96 },
    ],
  },
}

let playerStart: MapPoint = { ...sceneNavigation.repair.start }
const playerPosition: MapPoint = { ...playerStart }
let walkBounds = { ...sceneNavigation.repair.bounds }
let obstacles = sceneNavigation.repair.obstacles.map((obstacle) => ({ ...obstacle }))
const pressedMovementKeys = new Set<string>()
const spriteByDirection = {
  front: assets.shenSpriteFront,
  back: assets.shenSpriteBack,
  left: assets.shenSpriteLeft,
  right: assets.shenSpriteRight,
}
let playerDirection: keyof typeof spriteByDirection = 'front'
let movementPath: MapPoint[] = []
let lastMovementFrame = performance.now()

type NearbyInteraction = 'atang' | 'paper' | 'lamp' | 'exit' | 'visitor' | 'vouchers' | 'alley-paper' | 'paper-bundle' | 'paper-mould' | 'redemption-tray'

const interactionLocations: Record<NearbyInteraction, MapPoint> = {
  atang: { x: .325, y: .775 },
  paper: { x: .61, y: .89 },
  lamp: { x: .59, y: .62 },
  exit: { x: .80, y: .305 },
  visitor: { x: .70, y: .57 },
  vouchers: { x: .60, y: .76 },
  'alley-paper': { x: .34, y: .70 },
  'paper-bundle': { x: .62, y: .68 },
  'paper-mould': { x: .72, y: .64 },
  'redemption-tray': { x: .77, y: .43 },
}

function applySceneNavigation(scene: SceneKey) {
  const navigation = sceneNavigation[scene]
  playerStart = { ...navigation.start }
  walkBounds = { ...navigation.bounds }
  obstacles = navigation.obstacles.map((obstacle) => ({ ...obstacle }))
}

let nearbyInteraction: NearbyInteraction | null = null

function setNearbyInteraction(next: NearbyInteraction | null) {
  if (nearbyInteraction === next) return
  nearbyInteraction = next
  const hasTarget = next !== null
  interactionPrompt.setAttribute('aria-hidden', String(!hasTarget))
  aTangNpc.classList.toggle('is-near', next === 'atang')
  tornLetterProp.classList.toggle('is-near', next === 'paper')
  oilLampProp.classList.toggle('is-near', next === 'lamp')
  repairExit.classList.toggle('is-near', next === 'exit')
  grayVisitorNpc.classList.toggle('is-near', next === 'visitor')
  voucherProp.classList.toggle('is-near', next === 'vouchers')
  alleyPaperProp.classList.toggle('is-near', next === 'alley-paper')
  paperBundleProp.classList.toggle('is-near', next === 'paper-bundle')
  paperMouldProp.classList.toggle('is-near', next === 'paper-mould')
  redemptionTrayProp.classList.toggle('is-near', next === 'redemption-tray')
  if (next === 'atang') {
    promptKind.textContent = '交谈'
    promptText.textContent = atangConversationComplete ? '再问问阿棠' : '和阿棠说话'
  }
  if (next === 'paper') {
    promptKind.textContent = '拾取'
    promptText.textContent = '查看门槛旁的残纸'
  }
  if (next === 'lamp') {
    promptKind.textContent = '调查'
    promptText.textContent = '借油灯检查残纸'
  }
  if (next === 'exit') {
    promptKind.textContent = '前往'
    promptText.textContent = '前往西坊旧交子铺'
  }
  if (next === 'visitor') {
    promptKind.textContent = voucherConclusionComplete ? '前往' : (voucherComparisonComplete ? '说明' : (grayVisitorConversationComplete ? '追问' : '试探'))
    promptText.textContent = voucherConclusionComplete ? '进入屏风后的里间' : (voucherComparisonComplete ? '告诉灰衣客比对结果' : (grayVisitorConversationComplete ? '再问灰衣客' : '和灰衣客交谈'))
  }
  if (next === 'vouchers') {
    promptKind.textContent = '比对'
    promptText.textContent = '检查柜台边的旧铺券与新仿样'
  }
  if (next === 'alley-paper') {
    promptKind.textContent = alleyClueFound ? '回看' : '调查'
    promptText.textContent = alleyClueFound ? '再看包版纸留下的位置' : '查看墙边的新纸片'
  }
  if (next === 'paper-bundle') {
    promptKind.textContent = paperBundleInspected ? '回看' : '调查'
    promptText.textContent = paperBundleInspected ? '再看退纸样束' : '检查分纸案上的退纸样束'
  }
  if (next === 'paper-mould') {
    promptKind.textContent = paperMouldInspected ? '回看' : '调查'
    promptText.textContent = paperMouldInspected ? '再看湿纸帘框' : '检查工作台上的湿纸帘框'
  }
  if (next === 'redemption-tray') {
    promptKind.textContent = redemptionTrayInspected ? '回看' : '核验'
    promptText.textContent = redemptionTrayInspected ? '再看湿纸验券盘' : '对照簿、印与封存铁钱'
  }
}

function updateNearbyInteraction() {
  if (!entryScreen.hidden || shell.classList.contains('has-modal')) {
    setNearbyInteraction(null)
    return
  }
  const stageBounds = explorationStage.getBoundingClientRect()
  if (!stageBounds.width || !stageBounds.height) return
  const available: NearbyInteraction[] = []
  if (currentScene === 'repair') {
    available.push('atang')
    if (atangConversationComplete && !paperCollected) available.push('paper')
    if (paperCollected && !lampPuzzleComplete) available.push('lamp')
    if (lampPuzzleComplete) available.push('exit')
  }
  if (currentScene === 'shop') {
    if (!grayVisitorConversationComplete || voucherComparisonComplete) available.push('visitor')
    if (grayVisitorConversationComplete && !voucherComparisonComplete) available.push('vouchers')
  }
  if (currentScene === 'alley' && !alleyClueFound) available.push('alley-paper')
  if (currentScene === 'paperstore' && !paperBundleInspected) available.push('paper-bundle')
  if (currentScene === 'workshop' && !paperMouldInspected) available.push('paper-mould')
  if (currentScene === 'redemption' && !redemptionTrayInspected) available.push('redemption-tray')
  let closest: NearbyInteraction | null = null
  let closestDistance = 118
  for (const target of available) {
    const location = interactionLocations[target]
    const distance = Math.hypot(
      (playerPosition.x - location.x) * stageBounds.width,
      (playerPosition.y - location.y) * stageBounds.height,
    )
    if (distance < closestDistance) {
      closest = target
      closestDistance = distance
    }
  }
  setNearbyInteraction(closest)
}

function isWalkable(point: MapPoint) {
  if (point.x < walkBounds.minX || point.x > walkBounds.maxX || point.y < walkBounds.minY || point.y > walkBounds.maxY) return false
  return !obstacles.some((obstacle) => point.x > obstacle.minX && point.x < obstacle.maxX && point.y > obstacle.minY && point.y < obstacle.maxY)
}

function renderPlayer() {
  explorationAvatar.style.left = `${playerPosition.x * 100}%`
  explorationAvatar.style.top = `${playerPosition.y * 100}%`
}

function setPlayerDirection(dx: number, dy: number) {
  const direction: keyof typeof spriteByDirection = Math.abs(dx) > Math.abs(dy)
    ? (dx < 0 ? 'left' : 'right')
    : (dy < 0 ? 'back' : 'front')
  if (direction === playerDirection) return
  playerDirection = direction
  explorationAvatar.src = spriteByDirection[direction]
}

function resetExplorationPosition() {
  playerPosition.x = playerStart.x
  playerPosition.y = playerStart.y
  movementPath = []
  moveTarget.hidden = true
  playerDirection = 'front'
  explorationAvatar.src = spriteByDirection.front
  explorationStage.classList.remove('is-walking')
  renderPlayer()
}

function nearestWalkableCell(point: MapPoint, columns: number, rows: number) {
  let best = { column: 0, row: 0, distance: Number.POSITIVE_INFINITY }
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const center = { x: (column + .5) / columns, y: (row + .5) / rows }
      if (!isWalkable(center)) continue
      const distance = (center.x - point.x) ** 2 + (center.y - point.y) ** 2
      if (distance < best.distance) best = { column, row, distance }
    }
  }
  return best
}

function findMovementPath(destination: MapPoint) {
  const columns = 44
  const rows = 25
  const start = nearestWalkableCell(playerPosition, columns, rows)
  const goal = nearestWalkableCell(destination, columns, rows)
  const cellKey = (column: number, row: number) => `${column},${row}`
  const queue = [{ column: start.column, row: start.row }]
  const visited = new Set([cellKey(start.column, start.row)])
  const previous = new Map<string, { column: number; row: number }>()
  const neighbors = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]

  while (queue.length) {
    const current = queue.shift()!
    if (current.column === goal.column && current.row === goal.row) break
    for (const [deltaColumn, deltaRow] of neighbors) {
      const column = current.column + deltaColumn
      const row = current.row + deltaRow
      if (column < 0 || column >= columns || row < 0 || row >= rows) continue
      const center = { x: (column + .5) / columns, y: (row + .5) / rows }
      if (!isWalkable(center)) continue
      if (deltaColumn !== 0 && deltaRow !== 0) {
        const horizontal = { x: (current.column + deltaColumn + .5) / columns, y: (current.row + .5) / rows }
        const vertical = { x: (current.column + .5) / columns, y: (current.row + deltaRow + .5) / rows }
        if (!isWalkable(horizontal) || !isWalkable(vertical)) continue
      }
      const key = cellKey(column, row)
      if (visited.has(key)) continue
      visited.add(key)
      previous.set(key, current)
      queue.push({ column, row })
    }
  }

  const goalKey = cellKey(goal.column, goal.row)
  if (!visited.has(goalKey)) return []
  const path = [{ column: goal.column, row: goal.row }]
  while (path[0].column !== start.column || path[0].row !== start.row) {
    const parent = previous.get(cellKey(path[0].column, path[0].row))
    if (!parent) break
    path.unshift(parent)
  }
  return path.slice(1).map((cell) => ({ x: (cell.column + .5) / columns, y: (cell.row + .5) / rows }))
}

function movePlayerByPixels(dx: number, dy: number, distance: number) {
  const stageBounds = explorationStage.getBoundingClientRect()
  const length = Math.hypot(dx, dy)
  if (!length || !stageBounds.width || !stageBounds.height) return false
  const stepX = dx / length * distance / stageBounds.width
  const stepY = dy / length * distance / stageBounds.height
  let moved = false
  const nextX = { x: playerPosition.x + stepX, y: playerPosition.y }
  if (isWalkable(nextX)) {
    playerPosition.x = nextX.x
    moved = true
  }
  const nextY = { x: playerPosition.x, y: playerPosition.y + stepY }
  if (isWalkable(nextY)) {
    playerPosition.y = nextY.y
    moved = true
  }
  return moved
}

function movementFrame(now: number) {
  const elapsed = Math.min(40, now - lastMovementFrame)
  lastMovementFrame = now
  const canMove = entryScreen.hidden && currentScene !== 'interior' && !shell.classList.contains('has-modal')
  let horizontal = 0
  let vertical = 0

  if (canMove) {
    if (pressedMovementKeys.has('a') || pressedMovementKeys.has('arrowleft')) horizontal -= 1
    if (pressedMovementKeys.has('d') || pressedMovementKeys.has('arrowright')) horizontal += 1
    if (pressedMovementKeys.has('w') || pressedMovementKeys.has('arrowup')) vertical -= 1
    if (pressedMovementKeys.has('s') || pressedMovementKeys.has('arrowdown')) vertical += 1
  }

  let walking = false
  if (horizontal || vertical) {
    movementPath = []
    moveTarget.hidden = true
    setPlayerDirection(horizontal, vertical)
    walking = movePlayerByPixels(horizontal, vertical, 185 * elapsed / 1000)
  } else if (canMove && movementPath.length) {
    const stageBounds = explorationStage.getBoundingClientRect()
    const target = movementPath[0]
    const dx = (target.x - playerPosition.x) * stageBounds.width
    const dy = (target.y - playerPosition.y) * stageBounds.height
    const distance = Math.hypot(dx, dy)
    if (distance < 7) {
      playerPosition.x = target.x
      playerPosition.y = target.y
      movementPath.shift()
      if (!movementPath.length) moveTarget.hidden = true
    } else {
      setPlayerDirection(dx, dy)
      walking = movePlayerByPixels(dx, dy, Math.min(distance, 185 * elapsed / 1000))
    }
  }

  explorationStage.classList.toggle('is-walking', walking)
  if (walking) renderPlayer()
  updateNearbyInteraction()
  requestAnimationFrame(movementFrame)
}

explorationStage.addEventListener('pointerdown', (event) => {
  if (!entryScreen.hidden || currentScene === 'interior' || shell.classList.contains('has-modal')) return
  const bounds = explorationStage.getBoundingClientRect()
  const destination = {
    x: Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)),
    y: Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)),
  }
  movementPath = findMovementPath(destination)
  const resolvedTarget = movementPath.at(-1)
  if (!resolvedTarget) return
  moveTarget.style.left = `${resolvedTarget.x * 100}%`
  moveTarget.style.top = `${resolvedTarget.y * 100}%`
  moveTarget.hidden = false
})

window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase()
  if (['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(key)) {
    pressedMovementKeys.add(key)
    if (entryScreen.hidden) event.preventDefault()
  }
})

window.addEventListener('keyup', (event) => pressedMovementKeys.delete(event.key.toLowerCase()))
window.addEventListener('blur', () => pressedMovementKeys.clear())
resetExplorationPosition()
requestAnimationFrame(movementFrame)

window.addEventListener('keydown', (event) => {
  if (!entryScreen.hidden) return
  if (event.key.toLowerCase() === 'e' && !shell.classList.contains('has-modal')) handleInteraction()
  if (event.key.toLowerCase() === 'j') {
    if (pauseLayer.getAttribute('aria-hidden') === 'true') openGameMenu('inventory')
    else setOverlay(pauseLayer, false)
  }
  if (event.key === 'Escape') {
    if (dialogueLayer.classList.contains('is-demo-complete')) return
    ;[investigation, dialogueLayer, itemInspection, voucherComparison, journalDrawer, pauseLayer].forEach((element) => setOverlay(element, false))
  }
})

let movementHintTimer = 0

function showMovementHintTemporarily() {
  movementHint.classList.remove('is-hidden')
  window.clearTimeout(movementHintTimer)
  movementHintTimer = window.setTimeout(() => movementHint.classList.add('is-hidden'), 5200)
}

function beginDemo() {
  if (entryScreen.classList.contains('is-leaving')) return
  entryScreen.classList.add('is-leaving')
  window.setTimeout(() => {
    entryScreen.hidden = true
    showMovementHintTemporarily()
    entryStart.blur()
  }, 900)
}

entryStart.addEventListener('click', beginDemo)
window.setTimeout(() => entryStart.focus(), 1300)

// Development-only scene entry for visual QA. Vite removes this branch from production builds.
if (import.meta.env.DEV) {
  const previewParams = new URLSearchParams(window.location.search)
  const previewScene = previewParams.get('previewScene')
  if (previewScene && previewScene in sceneNavigation) {
    entryScreen.hidden = true
    changeScene(previewScene as SceneKey)
    if (previewParams.has('previewNear')) {
      window.setTimeout(() => {
        const previewTarget = previewScene === 'paperstore'
          ? interactionLocations['paper-bundle']
          : previewScene === 'workshop'
            ? interactionLocations['paper-mould']
            : previewScene === 'redemption'
              ? interactionLocations['redemption-tray']
              : previewScene === 'shop'
                ? interactionLocations.visitor
                : previewScene === 'repair'
                  ? interactionLocations.atang
                  : sceneNavigation[previewScene as SceneKey].start
        playerPosition.x = previewTarget.x
        playerPosition.y = previewTarget.y
        renderPlayer()
        updateNearbyInteraction()
      }, 320)
    }
  }
}
