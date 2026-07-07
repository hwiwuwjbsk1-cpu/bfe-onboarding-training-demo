import { ArrowLeft, BookOpen, CheckCircle, Coins, Gamepad2, Map, SkipForward, Star, Trophy, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

type GameId = 'rhythm' | 'minefield' | 'puzzle' | 'memory' | 'reaction' | 'tap' | 'color' | 'quiz' | 'catch' | 'dodge';

type GameMeta = {
    id: GameId;
    name: string;
    desc: string;
    icon: string;
    color: string;
    image?: string;
    lessonTitle: string;
};

type Result = {
    gameId: GameId;
    title: string;
    score: number;
    message: string;
    coinsEarned: number;
    starsEarned: number;
    skipped?: boolean;
};

type LessonContent = {
    eyebrow: string;
    title: string;
    summary: string;
    image: string;
    points: string[];
    note: string;
};

type MineCell = {
    label: string;
    danger: boolean;
    explain: string;
};

type RhythmToken = {
    text: string;
    lane: number;
    good: boolean;
};

type RhythmFeedback = 'ready' | 'hit' | 'miss';

type Stats = {
    coins: number;
    played: number;
    highScore: number;
    totalScore: number;
    stars: number;
};

type GameProgressStatus = 'completed' | 'skipped';
type GameProgress = Partial<Record<GameId, GameProgressStatus>>;
type AppStage = 'intro' | 'training' | 'games' | 'map';

const games: GameMeta[] = [
    { id: 'rhythm', name: '节奏大师', desc: '看准轨道节拍，点中亮起音符', icon: '♪', color: '#22d3ee', image: './assets/game/rhythm-stage.png', lessonTitle: '公司简介' },
    { id: 'minefield', name: '排雷探图', desc: '翻开星星格，避开隐藏炸弹', icon: '⚑', color: '#3b82f6', image: './assets/game/minefield-board.png', lessonTitle: '十二条令' },
    { id: 'puzzle', name: '数字华容道', desc: '滑动方块还原数字顺序', icon: '▦', color: '#f06595', image: './assets/game/minefield-board.png', lessonTitle: '迎新开场' },
    { id: 'memory', name: '记忆翻牌', desc: '翻开卡片找到相同图案', icon: '◆', color: '#667eea', image: './assets/game/xiaofu.png', lessonTitle: '主营业务' },
    { id: 'reaction', name: '反应速度', desc: '灯亮瞬间点击测试反应', icon: '⚡', color: '#f8bd20', lessonTitle: '全球仓储配送' },
    { id: 'tap', name: '疯狂点击', desc: '10 秒内尽可能多地点中目标', icon: '👆', color: '#ff6666', lessonTitle: '企业文化' },
    { id: 'color', name: '颜色辨别', desc: '找出与目标一致的颜色', icon: '🎨', color: '#a78bfa', lessonTitle: '跨境生态链' },
    { id: 'quiz', name: '快问快答', desc: '轻量脑筋急转弯小测验', icon: '?', color: '#32d779', lessonTitle: '薪酬与个税基础' },
    { id: 'catch', name: '接住金币', desc: '移动托盘接住掉落奖励', icon: '🪙', color: '#38bdf8', lessonTitle: '国内仓职责' },
    { id: 'dodge', name: '躲避障碍', desc: '左右移动，躲开红色障碍', icon: '💨', color: '#fb923c', lessonTitle: '仓库业务线' }
];

const STORAGE_KEY = 'web-mini-games-stats-v1';
const PROGRESS_KEY = 'web-mini-games-progress-v1';
const MAP_UNLOCK_KEY = 'web-mini-games-map-unlocked-v1';
const defaultStats: Stats = { coins: 0, played: 0, highScore: 0, totalScore: 0, stars: 0 };
const MINI_LAYER_COMPLETE = 'bfe-mini-games-complete';
const MINI_LAYER_CANCEL = 'bfe-mini-games-cancel';

const lessonMap: Record<GameId, LessonContent> = {
    rhythm: {
        eyebrow: 'CHAPTER 01',
        title: '公司简介',
        summary: '贝法易集团 BFE 取自 Better、Faster、Easier。公司创立于 2005 年，长期深耕跨境出口行业，围绕物流管理与 SaaS 技术，为中国企业出海提供更好、更快、更便捷的跨境服务。',
        image: './assets/lessons/company-profile.png',
        points: [
            'BFE 的含义是 Better、Faster、Easier。',
            '集团创立于 2005 年，深耕跨境出口行业超过 19 年。',
            '出口易是集团旗下跨境物流品牌，帮助更多中国企业走向世界舞台。'
        ],
        note: '来源：出口易业务介绍-新员工入职培训-刘海敏.pptx｜企业概况'
    },
    minefield: {
        eyebrow: 'CHAPTER 02',
        title: '十二条令',
        summary: '十二条令是新人进入职场后最先要建立的工作习惯。它把“靠谱”拆成可执行的小动作：确认指令、及时报告、事事备忘、会议记录、日清消息、三条总结和一页报告。',
        image: './assets/lessons/dna-twelve-rules.png',
        points: [
            '接到任务先复述目标、标准、截止时间和交付物。',
            '遇到卡点及时报告，带着方案沟通，不让事情静默停住。',
            '重要信息要留下记录，用备忘、会议纪要和一页报告减少误差。'
        ],
        note: '来源：十二条令＆职场沟通-260113.pptx｜十二条令'
    },
    puzzle: {
        eyebrow: 'CHAPTER 03',
        title: '迎新怎么开始',
        summary: '迎新培训先帮助新同学认识课程安排、认识伙伴、完成破冰和小组展示。先进入同一节奏，再去理解业务、流程和协作规则。',
        image: './assets/lessons/welcome-opening.png',
        points: [
            '课程介绍让新人知道培训节奏、任务和成果要求。',
            '破冰游戏、寻人游戏和分组展示让大家快速熟悉。',
            '选班长、定班规和团队协作从入职第一天开始。'
        ],
        note: '来源：迎新培训开场2026.1.pptx｜迎新培训开场'
    },
    memory: {
        eyebrow: 'CHAPTER 04',
        title: '主营业务',
        summary: '出口易围绕跨境物流，为跨境电商卖家提供一站式物流解决方案。业务从全球仓储派送、国际专线到国际头程，覆盖不同平台、不同货型和不同履约场景。',
        image: './assets/lessons/business-scope.png',
        points: [
            '全球仓储派送服务精品型、现货型、多平台卖家。',
            '国际专线聚焦电商包裹，适配不同产品、平台和时效要求。',
            '国际头程承接海运、空运、FBA、海外仓等目的仓运输需求。'
        ],
        note: '来源：出口易业务介绍-新员工入职培训-刘海敏.pptx｜主营业务'
    },
    reaction: {
        eyebrow: 'CHAPTER 05',
        title: '全球仓储配送',
        summary: '全球仓储配送是出口易的重要能力之一。资料中提到，出口易拥有全球仓储中心、仓库面积、自营仓经验和派送渠道等基础能力，用数字化能力支持中国品牌出海。',
        image: './assets/lessons/global-warehouse.png',
        points: [
            '35 个全球仓储中心，约 30 万平方米仓库面积。',
            '20 年自营仓经验，85+ 优质派送渠道。',
            '服务覆盖国内集货、头程运输、仓储管理、一件代发、中转退货等环节。'
        ],
        note: '来源：出口易业务介绍-新员工入职培训-刘海敏.pptx｜全球仓储配送'
    },
    tap: {
        eyebrow: 'CHAPTER 06',
        title: '企业文化',
        summary: '企业文化是大家做判断时共同使用的底层标准。新人先理解使命、愿景和价值观，后面的沟通、协作和服务动作才会更一致。',
        image: './assets/lessons/culture-2026.png',
        points: [
            '使命：做值得信赖的跨境物流伙伴，追求全体员工物质与精神幸福。',
            '愿景：提供专业可靠的跨境物流服务，成为标杆企业。',
            '价值观：诚信正直、尊重感恩、勇于担当；专注坚韧、创新进取、协作共赢。'
        ],
        note: '来源：2026迎新-肖友泉.pptx｜企业文化'
    },
    color: {
        eyebrow: 'CHAPTER 07',
        title: '跨境生态链',
        summary: '跨境电商不是单一环节，而是一条由平台、独立站、营销、支付、软件、物流和卖家服务共同组成的生态链。出口易在其中承担跨境物流与仓配服务角色。',
        image: './assets/lessons/ecosystem.png',
        points: [
            '平台侧包括 Amazon、eBay、TEMU、TikTok、速卖通、沃尔玛等。',
            '独立站与营销侧包括 Shopify、Google、TikTok、YouTube、社群和网红带货。',
            '物流侧包括平台物流、第三方物流、海外仓、头程和尾程服务。'
        ],
        note: '来源：出口易业务介绍-新员工入职培训-刘海敏.pptx｜跨境生态链'
    },
    quiz: {
        eyebrow: 'CHAPTER 08',
        title: '薪酬与个税基础',
        summary: '薪资、五险一金和个税是新人常见问题。资料里重点解释了计薪天数、工资总额、应发工资、五险一金基数和个税专项附加扣除等概念。',
        image: './assets/lessons/payroll-keypoints.png',
        points: [
            '计薪天数按约 21.75 天理解，避免不同月份天数造成日工资口径不同。',
            '应发工资是税前工资，个税可在个人所得税 APP 查看。',
            '五险一金和个税专项附加扣除会影响最终到手金额。'
        ],
        note: '来源：Winnie培训PPT.pptx｜工资条、五险一金、个税'
    },
    catch: {
        eyebrow: 'CHAPTER 09',
        title: '国内仓做什么',
        summary: '国内仓承担直发包裹、海空运头程、拣配代发等操作。新人先看懂仓库功能，后续理解业务链路会更轻松。',
        image: './assets/lessons/domestic-warehouse.png',
        points: [
            '直发包裹：揽收、核重测量、分拣、集包、发运。',
            '头程货物：揽收、测量重量方数、清点数量、装柜发运。',
            '拣配业务：为客户贴标、打包、发货，完成一件代发。'
        ],
        note: '来源：仓储运营国内仓职责及操作流程介绍20250918.pptx｜关于国内仓'
    },
    dodge: {
        eyebrow: 'CHAPTER 10',
        title: '仓库业务线结构',
        summary: '国内仓内部有直发组、头程组、拣配组等业务线。不同小组负责不同操作节点，但最终都服务于货物准确、高效、安全地流转。',
        image: './assets/lessons/warehouse-lines.png',
        points: [
            '直发组处理直邮包裹，重点是收货、核重、分拣和集包。',
            '头程组处理重量方数、SKU 数量、分装和尺寸重量测量。',
            '拣配组相当于海外仓前置在国内，负责拣货、打包、贴标和发货。'
        ],
        note: '来源：仓储运营国内仓职责及操作流程介绍20250918.pptx｜仓库业务线结构'
    }
};

const mineCells: MineCell[] = [
    { label: '星星格', danger: false, explain: '安全！找到一枚星星。' },
    { label: '金币格', danger: false, explain: '安全！金币奖励到账。' },
    { label: '宝箱格', danger: false, explain: '安全！宝箱里有额外分数。' },
    { label: '护盾格', danger: false, explain: '安全！获得一次护盾。' },
    { label: '能量格', danger: false, explain: '安全！能量条上升。' },
    { label: '炸弹', danger: true, explain: '踩雷！下一格要更谨慎。' },
    { label: '陷阱', danger: true, explain: '陷阱触发，扣一点分。' },
    { label: '迷雾', danger: true, explain: '迷雾格会干扰判断。' },
    { label: '传送门', danger: false, explain: '安全！传送门帮你推进一步。' },
    { label: '闪电', danger: false, explain: '安全！反应很快。' },
    { label: '黑洞', danger: true, explain: '危险！黑洞会吞掉奖励。' },
    { label: '彩蛋', danger: false, explain: '安全！发现隐藏彩蛋。' }
];

const rhythmTokens: RhythmToken[] = [
    { text: '音符', lane: 0, good: true },
    { text: '星星', lane: 1, good: true },
    { text: '炸弹', lane: 2, good: false },
    { text: '金币', lane: 3, good: true },
    { text: '迷雾', lane: 0, good: false },
    { text: '宝箱', lane: 2, good: true },
    { text: '黑洞', lane: 1, good: false },
    { text: '连击', lane: 3, good: true },
    { text: '护盾', lane: 2, good: true },
    { text: '陷阱', lane: 0, good: false },
    { text: '彩蛋', lane: 1, good: true },
    { text: '闪电', lane: 3, good: true }
];

const rhythmLaneLabels = ['1 键', '2 键', '3 键', '4 键'];

function isGameId(value: string | null): value is GameId {
    return games.some((game) => game.id === value);
}

const quiz = [
    { q: '哪一个图形有 3 条边？', a: ['圆形', '三角形', '正方形'], right: 1 },
    { q: '红色和蓝色混合更接近哪种颜色？', a: ['紫色', '绿色', '黄色'], right: 0 },
    { q: '下面哪个数字最大？', a: ['18', '81', '28'], right: 1 },
    { q: '钟表上的一小时有多少分钟？', a: ['30', '60', '90'], right: 1 },
    { q: '哪个物品最适合用来照明？', a: ['钥匙', '台灯', '杯子'], right: 1 }
];

function loadStats(): Stats {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultStats;
        const stats = { ...defaultStats, ...JSON.parse(raw) };
        const isUntouchedLegacySeed =
            stats.coins === 60 &&
            stats.played === 0 &&
            stats.highScore === 0 &&
            stats.totalScore === 0 &&
            stats.stars === 0;
        return isUntouchedLegacySeed ? defaultStats : stats;
    } catch {
        return defaultStats;
    }
}

function loadProgress(): GameProgress {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw) as GameProgress;
        return Object.fromEntries(
            Object.entries(parsed).filter(([id, status]) => isGameId(id) && (status === 'completed' || status === 'skipped'))
        ) as GameProgress;
    } catch {
        return {};
    }
}

function calculateReward(score: number) {
    const normalized = Math.max(0, score);
    const starsEarned = normalized >= 90 ? 3 : normalized >= 55 ? 2 : 1;
    const coinsEarned = 10 + starsEarned * 5 + Math.floor(normalized / 20);
    return { starsEarned, coinsEarned };
}

export default function App() {
    const miniLayer = useMemo(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('embed') === '1' || window.location.pathname.toLowerCase().endsWith('/mini-games.html');
    }, []);
    const [stats, setStats] = useState<Stats>(() => loadStats());
    const [progress, setProgress] = useState<GameProgress>(() => loadProgress());
    const [stage, setStage] = useState<AppStage>(() => {
        if (miniLayer) return 'games';
        const params = new URLSearchParams(window.location.search);
        const stageParam = params.get('stage');
        if (stageParam === 'training' || stageParam === 'games' || stageParam === 'map') return stageParam;
        return 'intro';
    });
    const [mapUnlocked, setMapUnlocked] = useState(() => localStorage.getItem(MAP_UNLOCK_KEY) === '1');
    const [nextStagePrompt, setNextStagePrompt] = useState(false);
    const [nextStagePromptDismissed, setNextStagePromptDismissed] = useState(false);
    const settlementLockedRef = useRef(false);
    const [sessionKey, setSessionKey] = useState(0);
    const [active, setActive] = useState<GameId | null>(() => {
        const params = new URLSearchParams(window.location.search);
        const game = params.get('game');
        return params.get('stage') === 'games' && isGameId(game) ? game : null;
    });
    const [result, setResult] = useState<Result | null>(null);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    }, [stats]);

    useEffect(() => {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }, [progress]);

    const allGamesResolved = useMemo(() => games.every((game) => progress[game.id]), [progress]);

    useEffect(() => {
        if (allGamesResolved && stage === 'games' && !active && !result && !nextStagePromptDismissed && (miniLayer || !mapUnlocked)) {
            setNextStagePrompt(true);
        }
    }, [active, allGamesResolved, mapUnlocked, miniLayer, nextStagePromptDismissed, result, stage]);

    const markGameProgress = useCallback((id: GameId, status: GameProgressStatus) => {
        setProgress((current) => {
            if (current[id] === 'completed') return current;
            return { ...current, [id]: status };
        });
    }, []);

    const openTraining = useCallback(() => {
        settlementLockedRef.current = true;
        setResult(null);
        setActive(null);
        setNextStagePrompt(false);
        setStage('training');
        window.history.replaceState(null, '', '?stage=training');
    }, []);

    const openGameLobby = useCallback(() => {
        settlementLockedRef.current = true;
        setResult(null);
        setActive(null);
        setNextStagePrompt(false);
        setStage('games');
        window.history.replaceState(null, '', '?stage=games');
    }, []);

    const startGame = useCallback((id: GameId) => {
        settlementLockedRef.current = false;
        setSessionKey((current) => current + 1);
        setStage('games');
        setNextStagePrompt(false);
        setResult(null);
        setActive(id);
        window.history.replaceState(null, '', `?stage=games&game=${id}`);
    }, []);

    const backToLobby = useCallback(() => {
        settlementLockedRef.current = true;
        setResult(null);
        setActive(null);
        setStage('games');
        window.history.replaceState(null, '', '?stage=games');
    }, []);

    const openOnboardingMap = useCallback(() => {
        settlementLockedRef.current = true;
        setMapUnlocked(true);
        setNextStagePrompt(false);
        setNextStagePromptDismissed(false);
        setResult(null);
        setActive(null);
        setStage('map');
        localStorage.setItem(MAP_UNLOCK_KEY, '1');
        window.history.replaceState(null, '', '?stage=map');
    }, []);

    const postMiniLayerMessage = useCallback((type: string) => {
        const targetOrigin = window.location.origin === 'null' ? '*' : window.location.origin;
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type }, targetOrigin);
            return;
        }
        window.location.href = './';
    }, []);

    const completeMiniLayer = useCallback(() => {
        settlementLockedRef.current = true;
        setNextStagePrompt(false);
        setResult(null);
        setActive(null);
        postMiniLayerMessage(MINI_LAYER_COMPLETE);
    }, [postMiniLayerMessage]);

    const closeMiniLayer = useCallback(() => {
        settlementLockedRef.current = true;
        setNextStagePrompt(false);
        setResult(null);
        setActive(null);
        postMiniLayerMessage(MINI_LAYER_CANCEL);
    }, [postMiniLayerMessage]);

    const finish = useCallback((title: string, score: number, message: string) => {
        if (!active || settlementLockedRef.current) return;
        settlementLockedRef.current = true;
        markGameProgress(active, 'completed');
        const reward = calculateReward(score);
        setStats((current) => ({
            coins: current.coins + reward.coinsEarned,
            played: current.played + 1,
            highScore: Math.max(current.highScore, score),
            totalScore: current.totalScore + Math.max(0, score),
            stars: current.stars + reward.starsEarned
        }));
        setResult({ gameId: active, title, score, message, ...reward });
    }, [active, markGameProgress]);

    const currentGame = games.find((game) => game.id === active);

    const skipCurrentGame = useCallback(() => {
        if (!active || !currentGame || settlementLockedRef.current) return;
        settlementLockedRef.current = true;
        setActive(null);
        window.history.replaceState(null, '', '?stage=games');
        setResult({
            gameId: active,
            title: currentGame.name,
            score: 0,
            message: '已跳过小游戏，仅查看资料卡。',
            coinsEarned: 0,
            starsEarned: 0,
            skipped: true
        });
        markGameProgress(active, 'skipped');
    }, [active, currentGame, markGameProgress]);

    return (
        <main className={miniLayer ? 'web-game-app is-embedded' : 'web-game-app'}>
            <section className="web-shell">
                {stage === 'intro' && (
                    <BookIntro onOpen={openTraining} />
                )}

                {stage === 'training' && (
                    <TrainingReader onStartGames={openGameLobby} />
                )}

                {stage === 'games' && !active && (
                    <HomeScreen
                        stats={stats}
                        progress={progress}
                        mapUnlocked={miniLayer ? allGamesResolved : mapUnlocked || allGamesResolved}
                        miniLayer={miniLayer}
                        onOpenMap={miniLayer ? completeMiniLayer : openOnboardingMap}
                        onBackTraining={miniLayer ? closeMiniLayer : openTraining}
                        onStart={startGame}
                    />
                )}

                {stage === 'map' && (
                    <OnboardingMap onBack={backToLobby} />
                )}

                {stage === 'games' && active && currentGame && (
                    <section className="game-view" key={`${active}-${sessionKey}`}>
                        <header className="game-view-header">
                            <div className="game-view-actions">
                                <button className="game-back-button" onClick={backToLobby} type="button"><ArrowLeft size={20} /> 返回大厅</button>
                                <button className="game-skip-button" onClick={skipCurrentGame} type="button"><SkipForward size={18} /> 跳过</button>
                            </div>
                            <div>
                                <span>{currentGame.icon} {currentGame.desc}</span>
                                <h1>{currentGame.name}</h1>
                            </div>
                        </header>
                        {active === 'tap' && <TapGame onFinish={finish} />}
                        {active === 'minefield' && <MinefieldGame onFinish={finish} />}
                        {active === 'rhythm' && <RhythmGame onFinish={finish} />}
                        {active === 'memory' && <MemoryGame onFinish={finish} />}
                        {active === 'quiz' && <QuizGame onFinish={finish} />}
                        {active === 'puzzle' && <PuzzleGame onFinish={finish} />}
                        {active === 'color' && <ColorGame onFinish={finish} />}
                        {active === 'reaction' && <ReactionGame onFinish={finish} />}
                        {active === 'catch' && <CatchGame onFinish={finish} />}
                        {active === 'dodge' && <DodgeGame onFinish={finish} />}
                    </section>
                )}

                {result && (
                    <ResultModal
                        result={result}
                        coins={stats.coins}
                        game={games.find((game) => game.id === result.gameId) ?? games[0]}
                        content={lessonMap[result.gameId]}
                        finalActionLabel={miniLayer ? '确认，进入下一阶段' : '确认，进入入职地图'}
                        onReplay={() => startGame(result.gameId)}
                        onNext={() => {
                            const idx = games.findIndex((game) => game.id === result.gameId);
                            const next = games[idx + 1];
                            if (next) {
                                startGame(next.id);
                            } else {
                                if (miniLayer) {
                                    completeMiniLayer();
                                } else {
                                    openOnboardingMap();
                                }
                            }
                        }}
                        onBack={backToLobby}
                    />
                )}

                {nextStagePrompt && (
                    <NextStagePrompt
                        miniLayer={miniLayer}
                        onStart={miniLayer ? completeMiniLayer : openOnboardingMap}
                        onLater={() => {
                            setNextStagePrompt(false);
                            setNextStagePromptDismissed(true);
                        }}
                    />
                )}
            </section>
        </main>
    );
}

function BookIntro({ onOpen }: { onOpen: () => void }) {
    return (
        <section className="training-intro">
            <div className="training-intro-copy">
                <span className="training-kicker">BFE ONBOARDING · TRAINING PROJECT</span>
                <h1>出口易新人通关手册</h1>
                <p>这是新人培训项目的入口。先翻开手册阅读培训资料，再从资料页进入互动环节，按顺序完成入职学习。</p>
                <div className="training-flow">
                    <span>01 翻开手册</span>
                    <span>02 阅读资料</span>
                    <span>03 趣味闯关</span>
                    <span>04 入职地图</span>
                </div>
                <button className="training-primary-button" onClick={onOpen} type="button">
                    <BookOpen size={20} />
                    打开新人手册
                </button>
            </div>
            <div className="passport-stage" aria-label="新人手册翻开动画">
                <div className="passport-shadow" aria-hidden="true" />
                <div className="passport-book">
                    <img className="passport-open" src="./onboarding/passport-open.png" alt="" aria-hidden="true" />
                    <img className="passport-cover" src="./onboarding/passport-cover.png" alt="出口易新人通关手册封面" />
                    <img className="passport-stamp" src="./onboarding/passport-stamp.png" alt="" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

function TrainingReader({ onStartGames }: { onStartGames: () => void }) {
    return (
        <section className="training-reader">
            <header className="training-reader-header">
                <div>
                    <span className="training-kicker">TRAINING MATERIAL</span>
                    <h1>新人培训资料</h1>
                </div>
                <div className="training-reader-actions">
                    <span>阅读资料后进入第一层小游戏</span>
                    <button className="training-game-button" onClick={onStartGames} type="button">
                        <Gamepad2 size={18} />
                        进入趣味闯关
                    </button>
                </div>
            </header>
            <div className="training-frame-shell">
                <iframe src="./training/newcomer-training.html" title="出口易新人培训资料" />
            </div>
        </section>
    );
}

function HomeScreen({
    stats,
    progress,
    mapUnlocked,
    miniLayer,
    onOpenMap,
    onBackTraining,
    onStart
}: {
    stats: Stats;
    progress: GameProgress;
    mapUnlocked: boolean;
    miniLayer: boolean;
    onOpenMap: () => void;
    onBackTraining: () => void;
    onStart: (id: GameId) => void;
}) {
    const resolvedCount = games.filter((game) => progress[game.id]).length;

    return (
        <section className="home-web">
            <div className="game-layer-bar">
                <button onClick={onBackTraining} type="button">
                    <ArrowLeft size={17} />
                    {miniLayer ? '返回培训页' : '返回培训资料'}
                </button>
                <span>培训项目 / 第一层小游戏</span>
            </div>
            <div className="home-hero">
                <div className="hero-text">
                    <span className="hero-kicker">STAGE 01 · MINI GAMES</span>
                    <h1>企业文化大冒险</h1>
                    <div className="hero-stats">
                        <div className="hero-stat-card">
                            <Coins size={18} />
                            <strong>{stats.coins}</strong>
                            <small>金币</small>
                        </div>
                        <div className="hero-stat-card">
                            <Trophy size={18} />
                            <strong>{stats.totalScore}</strong>
                            <small>总积分</small>
                        </div>
                        <div className="hero-stat-card">
                            <Star size={18} />
                            <strong>{stats.stars}</strong>
                            <small>累计星级</small>
                        </div>
                    </div>
                    <div className="stage-progress-strip">
                        <span>第一层小游戏</span>
                        <strong>{resolvedCount}/{games.length}</strong>
                        <small>{miniLayer ? '全部完成或跳过后进入下一阶段' : '全部完成或跳过后开启入职地图'}</small>
                    </div>
                </div>
                <div className="hero-cover">
                    <img src="./assets/game/cover.png" alt="小游戏合集封面" />
                </div>
            </div>

            <div className="score-rule" aria-label="积分规则">
                <strong>积分机制</strong>
                <span>90+ 分 = 3 星</span>
                <span>55-89 分 = 2 星</span>
                <span>通关保底 1 星</span>
                <span>金币 = 10 + 星级×5 + 分数奖励</span>
            </div>

            {mapUnlocked && (
                <button className="map-entry-button" onClick={onOpenMap} type="button">
                    <Map size={18} />
                    {miniLayer ? '继续下一阶段' : '进入第二层：入职地图'}
                </button>
            )}

            <div className="game-grid-web">
                {games.map((game) => {
                    const status = progress[game.id];
                    return (
                        <button
                            key={game.id}
                            className={['game-card-web', game.image ? 'with-art' : '', status ? `is-${status}` : ''].filter(Boolean).join(' ')}
                            style={{ '--accent': game.color } as CSSProperties}
                            onClick={() => onStart(game.id)}
                            type="button"
                        >
                            {game.image && <img src={game.image} alt="" aria-hidden="true" />}
                            <span className="game-icon-web">{game.icon}</span>
                            <span className="game-status-web">{status === 'completed' ? '已通关' : status === 'skipped' ? '已跳过' : '待挑战'}</span>
                            <strong>{game.name}</strong>
                            <small>{game.desc}</small>
                            <span className="game-unlock">通关解锁：{game.lessonTitle}</span>
                            <em>{status ? '重新挑战' : '开始游戏'}</em>
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

function NextStagePrompt({ miniLayer, onStart, onLater }: { miniLayer: boolean; onStart: () => void; onLater: () => void }) {
    return (
        <div className="result-backdrop">
            <div className="next-stage-modal">
                <button className="stage-close-button" onClick={onLater} type="button" aria-label="稍后开启">
                    <X size={18} />
                </button>
                <span>{miniLayer ? 'NEXT STAGE READY' : 'STAGE 02 READY'}</span>
                <h2>{miniLayer ? '是否进入下一阶段？' : '是否开启下一阶段：入职地图？'}</h2>
                <p>{miniLayer ? '小游戏已完成或跳过，接下来会继续培训项目的下一段互动任务。' : '第一层小游戏已完成或跳过，可以进入任务地图继续新人入职流程。'}</p>
                <div className="next-stage-actions">
                    <button onClick={onStart} type="button"><Map size={18} /> {miniLayer ? '进入下一阶段' : '开启入职地图'}</button>
                    <button className="result-secondary" onClick={onLater} type="button">稍后</button>
                </div>
            </div>
        </div>
    );
}

function OnboardingMap({ onBack }: { onBack: () => void }) {
    const mapItems = [
        { step: '01', title: '公司介绍', state: '进行中' },
        { step: '02', title: '企业文化', state: '待解锁' },
        { step: '03', title: '十二条令', state: '待解锁' },
        { step: '04', title: '财务与仓储', state: '待解锁' },
        { step: '05', title: '系统入口', state: '待解锁' }
    ];

    return (
        <section className="onboarding-map">
            <button className="map-back-button" onClick={onBack} type="button"><ArrowLeft size={18} /> 返回小游戏</button>
            <div className="book-map-bg">
                <img src="./assets/chukouyi-logo.png" alt="出口易" />
                <strong>任务地图</strong>
            </div>
            <aside className="map-rail" aria-label="章节进度">
                <span className="is-active">第一章</span>
                <span>第二章</span>
                <span>第三章</span>
            </aside>
            <div className="map-path">
                {mapItems.map((item, index) => (
                    <div className={index === 0 ? 'map-node is-current' : 'map-node'} key={item.step}>
                        <em>{item.step}</em>
                        <strong>{item.title}</strong>
                        <small>{item.state}</small>
                    </div>
                ))}
            </div>
            <div className="map-choice-panel">
                <span>第一章 · 通用入职</span>
                <h2>请选择下一步</h2>
                <p>第一层小游戏已完成，接下来进入入职地图，按章节查看新人需要掌握的资料。</p>
                <div className="map-choice-grid">
                    <button type="button">
                        <CheckCircle size={30} />
                        <strong>学习知识库</strong>
                        <small>从公司介绍开始，依次了解文化、规则和业务基础。</small>
                    </button>
                    <button type="button">
                        <Trophy size={30} />
                        <strong>趣味闯关</strong>
                        <small>小游戏阶段已接入，后续可从地图回到挑战。</small>
                    </button>
                </div>
            </div>
            <img className="map-helper" src="./assets/game/xiaofu.png" alt="" aria-hidden="true" />
        </section>
    );
}

function TapGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const finishedRef = useRef(false);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(10);
    const [pos, setPos] = useState({ x: 44, y: 42 });

    useEffect(() => {
        const timer = window.setInterval(() => setTime((current) => Math.max(0, current - 1)), 1000);
        return () => window.clearInterval(timer);
    }, []);

    useEffect(() => {
        if (time === 0 && !finishedRef.current) {
            finishedRef.current = true;
            onFinish('疯狂点击', score, `点击次数：${score}`);
        }
    }, [onFinish, score, time]);

    const tap = () => {
        if (time === 0) return;
        setScore(score + 1);
        setPos({ x: 10 + Math.random() * 76, y: 12 + Math.random() * 68 });
    };

    return (
        <div className="tap-stage game-stage office-stage">
            <div className="game-counter">⏱ {time}s · {score} 分</div>
            <button className="tap-target" style={{ left: `${pos.x}%`, top: `${pos.y}%` }} onClick={tap} type="button">👆</button>
        </div>
    );
}

function MemoryGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const cards = useMemo(() => ['🚀', '📦', '🪙', '⭐', '🧭', '🏆'].flatMap((item) => [item, item]).sort(() => Math.random() - 0.5), []);
    const [open, setOpen] = useState<number[]>([]);
    const [done, setDone] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);

    const flip = (idx: number) => {
        if (open.includes(idx) || done.includes(idx) || open.length === 2) return;
        const next = [...open, idx];
        setOpen(next);
        if (next.length === 2) {
            setMoves(moves + 1);
            if (cards[next[0]] === cards[next[1]]) {
                setDone([...done, ...next]);
                setOpen([]);
                if (done.length + 2 === cards.length) {
                    window.setTimeout(() => onFinish('记忆翻牌', Math.max(30, 120 - moves * 5), `步数：${moves + 1}`), 500);
                }
            } else {
                window.setTimeout(() => setOpen([]), 650);
            }
        }
    };

    return (
        <div className="game-stage memory-stage">
            <div className="game-counter">步数 {moves} · 配对 {done.length / 2}/6</div>
            <div className="memory-grid-web">
                {cards.map((card, idx) => (
                    <button key={`${card}-${idx}`} className={open.includes(idx) || done.includes(idx) ? 'flipped' : ''} onClick={() => flip(idx)} type="button">
                        {open.includes(idx) || done.includes(idx) ? card : '?'}
                    </button>
                ))}
            </div>
        </div>
    );
}

function QuizGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const [idx, setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const item = quiz[idx];

    const choose = (answer: number) => {
        const nextScore = score + (answer === item.right ? 20 : 0);
        setScore(nextScore);
        if (idx === quiz.length - 1) {
            onFinish('快问快答', nextScore, `答对 ${nextScore / 20} / ${quiz.length} 题`);
        } else {
            setIdx(idx + 1);
        }
    };

    return (
        <div className="game-stage quiz-stage office-stage">
            <div className="quiz-card-web">
                <span>第 {idx + 1}/{quiz.length} 题</span>
                <h2>{item.q}</h2>
                {item.a.map((option, optionIdx) => (
                    <button key={option} onClick={() => choose(optionIdx)} type="button">{option}</button>
                ))}
            </div>
        </div>
    );
}

function MinefieldGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const board = useMemo(() => [...mineCells].sort(() => Math.random() - 0.5).slice(0, 12), []);
    const safeTotal = board.filter((cell) => !cell.danger).length;
    const finishedRef = useRef(false);
    const [revealed, setRevealed] = useState<number[]>([]);
    const [score, setScore] = useState(0);
    const [strikes, setStrikes] = useState(0);
    const [tip, setTip] = useState('翻开安全格，避开隐藏危险。');

    const reveal = (idx: number) => {
        if (finishedRef.current || revealed.includes(idx)) return;

        const cell = board[idx];
        const nextRevealed = [...revealed, idx];
        const nextScore = score + (cell.danger ? -8 : 14);
        const nextStrikes = strikes + (cell.danger ? 1 : 0);
        const nextSafe = nextRevealed.filter((itemIdx) => !board[itemIdx].danger).length;

        setRevealed(nextRevealed);
        setScore(nextScore);
        setStrikes(nextStrikes);
        setTip(cell.explain);

        if (nextSafe === safeTotal || nextStrikes >= 3) {
            finishedRef.current = true;
            window.setTimeout(() => {
                onFinish(
                    '排雷探图',
                    Math.max(20, nextScore + nextSafe * 6 - nextStrikes * 10),
                    nextStrikes >= 3 ? '踩到 3 个危险格，再来一局。' : `安全格 ${nextSafe}/${safeTotal}`
                );
            }, 420);
        }
    };

    return (
        <div className="game-stage minefield-stage">
            <div className="game-counter">安全 {revealed.filter((idx) => !board[idx].danger).length}/{safeTotal} · 危险 {strikes}/3 · {score} 分</div>
            <div className="minefield-panel">
                <div className="minefield-board">
                    {board.map((cell, idx) => {
                        const isOpen = revealed.includes(idx);
                        return (
                            <button
                                key={`${cell.label}-${idx}`}
                                className={isOpen ? cell.danger ? 'danger open' : 'safe open' : ''}
                                onClick={() => reveal(idx)}
                                type="button"
                            >
                                <span>{isOpen ? cell.danger ? '!' : '✓' : '?'}</span>
                                <strong>{isOpen ? cell.label : '待翻开'}</strong>
                            </button>
                        );
                    })}
                </div>
                <aside className="minefield-tip">
                    <span>FIELD NOTE</span>
                    <p>{tip}</p>
                </aside>
            </div>
        </div>
    );
}

function RhythmGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const tokens = useMemo(() => [...rhythmTokens].sort(() => Math.random() - 0.5), []);
    const finishedRef = useRef(false);
    const feedbackTimer = useRef<number | null>(null);
    const [idx, setIdx] = useState(0);
    const [score, setScore] = useState(0);
    const [combo, setCombo] = useState(0);
    const [bestCombo, setBestCombo] = useState(0);
    const [feedback, setFeedback] = useState<RhythmFeedback>('ready');
    const [message, setMessage] = useState('按 1/2/3/4 命中轨道，Space 避开危险物。');
    const token = tokens[idx];

    useEffect(() => () => {
        if (feedbackTimer.current) {
            window.clearTimeout(feedbackTimer.current);
        }
    }, []);

    const advance = useCallback((correct: boolean) => {
        if (finishedRef.current || !token) return;
        const nextCombo = correct ? combo + 1 : 0;
        const nextBest = Math.max(bestCombo, nextCombo);
        const nextScore = Math.max(0, score + (correct ? 12 + Math.min(combo, 5) * 2 : -8));
        const isLast = idx >= tokens.length - 1;

        if (feedbackTimer.current) {
            window.clearTimeout(feedbackTimer.current);
        }

        setScore(nextScore);
        setCombo(nextCombo);
        setBestCombo(nextBest);
        setFeedback(correct ? 'hit' : 'miss');
        setMessage(correct ? 'Nice! 节奏抓得很准。' : token.good ? '漏掉了奖励物。' : '碰到危险物了。');

        if (isLast) {
            finishedRef.current = true;
            window.setTimeout(() => {
                onFinish('节奏大师', nextScore, `最高连击：${nextBest}`);
            }, 460);
        } else {
            feedbackTimer.current = window.setTimeout(() => setFeedback('ready'), 260);
            setIdx(idx + 1);
        }
    }, [bestCombo, combo, idx, onFinish, score, token, tokens.length]);

    const hitLane = useCallback((lane: number) => {
        advance(Boolean(token?.good && token.lane === lane));
    }, [advance, token]);

    const skip = useCallback(() => {
        advance(Boolean(token && !token.good));
    }, [advance, token]);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.repeat) return;
            if (['INPUT', 'TEXTAREA', 'SELECT'].includes((event.target as HTMLElement | null)?.tagName ?? '')) return;

            if (['1', '2', '3', '4'].includes(event.key)) {
                event.preventDefault();
                hitLane(Number(event.key) - 1);
            }

            if (event.key === ' ' || event.key === '0') {
                event.preventDefault();
                skip();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [hitLane, skip]);

    return (
        <div className="game-stage rhythm-stage">
            <div className="game-counter">Track {idx + 1}/{tokens.length} · {score} 分 · Combo {combo}</div>
            {token && (
                <div className={`rhythm-runway is-${feedback}`}>
                    <div className="rhythm-feedback">{feedback === 'hit' ? 'GREAT' : feedback === 'miss' ? 'MISS' : 'READY'}</div>
                    <div className="rhythm-token" key={`${token.text}-${idx}`} style={{ '--lane': token.lane } as CSSProperties}>
                        {token.text}
                    </div>
                    <div className="rhythm-lanes" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="rhythm-hitline"><span>PERFECT LINE</span></div>
                    <div className="rhythm-buttons">
                        {[0, 1, 2, 3].map((lane) => (
                            <button
                                key={lane}
                                className={token.good && token.lane === lane ? 'is-target' : ''}
                                onClick={() => hitLane(lane)}
                                type="button"
                            >
                                <span>{lane + 1}</span>
                                <small>{rhythmLaneLabels[lane]}</small>
                            </button>
                        ))}
                    </div>
                    <button className={token.good ? 'rhythm-skip' : 'rhythm-skip is-target'} onClick={skip} type="button">
                        避开
                        <small>Space</small>
                    </button>
                    <p className="rhythm-message">{message}</p>
                </div>
            )}
        </div>
    );
}

function PuzzleGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const solved = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    const [tiles, setTiles] = useState([1, 2, 3, 4, 5, 6, 0, 7, 8]);
    const [moves, setMoves] = useState(0);

    const move = (idx: number) => {
        const blank = tiles.indexOf(0);
        const valid = (Math.abs(blank - idx) === 3) || (Math.abs(blank - idx) === 1 && Math.floor(blank / 3) === Math.floor(idx / 3));
        if (!valid) return;
        const next = [...tiles];
        next[blank] = next[idx];
        next[idx] = 0;
        setTiles(next);
        setMoves(moves + 1);
        if (next.every((value, i) => value === solved[i])) {
            window.setTimeout(() => onFinish('数字华容道', Math.max(40, 120 - moves * 4), `移动步数：${moves + 1}`), 350);
        }
    };

    return (
        <div className="game-stage puzzle-stage">
            <div className="game-counter">步数 {moves}</div>
            <div className="puzzle-grid-web">
                {tiles.map((tile, idx) => (
                    <button key={`${tile}-${idx}`} className={tile === 0 ? 'blank' : ''} onClick={() => move(idx)} type="button">
                        {tile || ''}
                    </button>
                ))}
            </div>
        </div>
    );
}

function ColorGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const palette = ['#ff6666', '#38d979', '#4e8cff', '#ffd43b', '#b197fc', '#ff8cc6'];
    const [round, setRound] = useState(1);
    const [score, setScore] = useState(0);
    const target = palette[round % palette.length];
    const options = useMemo(() => [...palette].sort(() => Math.random() - 0.5), [round]);

    const pick = (color: string) => {
        const next = score + (color === target ? 10 : 0);
        setScore(next);
        if (round >= 10) {
            onFinish('颜色辨别', next, `正确率：${next}%`);
        } else {
            setRound(round + 1);
        }
    };

    return (
        <div className="game-stage color-stage">
            <div className="game-counter">第 {round}/10 轮 · {score} 分</div>
            <div className="color-target-web" style={{ background: target }} />
            <div className="color-options-web">
                {options.map((color) => (
                    <button key={color} style={{ background: color }} onClick={() => pick(color)} type="button" />
                ))}
            </div>
        </div>
    );
}

function ReactionGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const [state, setState] = useState<'idle' | 'wait' | 'ready'>('idle');
    const [start, setStart] = useState(0);
    const [results, setResults] = useState<number[]>([]);

    const begin = () => {
        setState('wait');
        window.setTimeout(() => {
            setStart(performance.now());
            setState('ready');
        }, 900 + Math.random() * 1800);
    };

    const click = () => {
        if (state === 'idle') return begin();
        if (state === 'wait') return setState('idle');
        const ms = Math.round(performance.now() - start);
        const next = [...results, ms];
        setResults(next);
        setState('idle');
        if (next.length >= 3) {
            const avg = Math.round(next.reduce((a, b) => a + b, 0) / next.length);
            onFinish('反应速度', Math.max(20, 160 - Math.round(avg / 3)), `平均反应：${avg}ms`);
        }
    };

    return (
        <div className="game-stage reaction-stage">
            <button className={`reaction-pad ${state}`} onClick={click} type="button">
                {state === 'idle' ? '点击开始' : state === 'wait' ? '等灯变绿' : '现在点击！'}
            </button>
            <div className="game-counter">已完成 {results.length}/3 · {results.join(' / ')}</div>
        </div>
    );
}

function CatchGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const finishedRef = useRef(false);
    const [basket, setBasket] = useState(45);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(20);
    const drops = useMemo(() => Array.from({ length: 18 }, (_, i) => ({ left: 8 + (i * 17) % 82, delay: i * 420 })), []);

    useEffect(() => {
        const timer = window.setInterval(() => setTime((current) => Math.max(0, current - 1)), 1000);
        return () => window.clearInterval(timer);
    }, []);

    useEffect(() => {
        if (time === 0 && !finishedRef.current) {
            finishedRef.current = true;
            onFinish('接住金币', score, `最终得分：${score}`);
        }
    }, [onFinish, score, time]);

    return (
        <div className="game-stage catch-stage" onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setBasket(Math.max(8, Math.min(86, ((event.clientX - rect.left) / rect.width) * 100)));
        }}>
            <div className="game-counter">⏱ {time}s · {score} 分</div>
            {drops.map((drop, idx) => (
                <button key={idx} className="coin-drop" style={{ left: `${drop.left}%`, animationDelay: `${drop.delay}ms` }} onClick={() => setScore(score + 5)} type="button">🪙</button>
            ))}
            <div className="basket-web" style={{ left: `${basket}%` }}>🧺</div>
        </div>
    );
}

function DodgeGame({ onFinish }: { onFinish: (title: string, score: number, message: string) => void }) {
    const [player, setPlayer] = useState(45);
    const [time, setTime] = useState(0);
    const obstacles = useMemo(() => Array.from({ length: 18 }, (_, i) => ({ left: 8 + (i * 23) % 82, delay: i * 500 })), []);

    useEffect(() => {
        const timer = window.setInterval(() => setTime((current) => current + 1), 1000);
        const finish = window.setTimeout(() => onFinish('躲避障碍', 90, '存活时间：18s'), 18000);
        return () => {
            window.clearInterval(timer);
            window.clearTimeout(finish);
        };
    }, [onFinish]);

    return (
        <div className="game-stage dodge-stage" onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setPlayer(Math.max(8, Math.min(88, ((event.clientX - rect.left) / rect.width) * 100)));
        }}>
            <div className="game-counter">存活 {time}s</div>
            {obstacles.map((item, idx) => (
                <div key={idx} className="obstacle-web" style={{ left: `${item.left}%`, animationDelay: `${item.delay}ms` }}>🔥</div>
            ))}
            <div className="player-web" style={{ left: `${player}%` }}>🛡️</div>
        </div>
    );
}

function useTypewriterPieces(pieces: string[], resetKey: string, speed = 16) {
    const [visibleCount, setVisibleCount] = useState(0);
    const totalLength = useMemo(() => pieces.reduce((sum, piece) => sum + piece.length, 0), [pieces]);
    const offsets = useMemo(() => {
        let cursor = 0;
        return pieces.map((piece) => {
            const start = cursor;
            cursor += piece.length;
            return start;
        });
    }, [pieces]);

    useEffect(() => {
        setVisibleCount(0);
        if (!totalLength) return undefined;

        const timer = window.setInterval(() => {
            setVisibleCount((current) => {
                if (current >= totalLength) {
                    window.clearInterval(timer);
                    return current;
                }
                return current + 1;
            });
        }, speed);

        return () => window.clearInterval(timer);
    }, [resetKey, speed, totalLength]);

    return {
        typedPieces: pieces.map((piece, index) => {
            const localCount = Math.max(0, Math.min(piece.length, visibleCount - offsets[index]));
            return piece.slice(0, localCount);
        }),
        activeIndex: pieces.findIndex((piece, index) => visibleCount < offsets[index] + piece.length)
    };
}

function ResultModal({
    result,
    coins,
    game,
    content,
    finalActionLabel,
    onReplay,
    onNext,
    onBack
}: {
    result: Result;
    coins: number;
    game: GameMeta;
    content: LessonContent;
    finalActionLabel: string;
    onReplay: () => void;
    onNext: () => void;
    onBack: () => void;
}) {
    const textPieces = useMemo(() => [content.title, content.summary, ...content.points], [content]);
    const { typedPieces, activeIndex } = useTypewriterPieces(textPieces, `${result.gameId}-${content.title}`);
    const typedTitle = typedPieces[0];
    const typedSummary = typedPieces[1];
    const typedPoints = typedPieces.slice(2);
    const gameIndex = games.findIndex((item) => item.id === result.gameId);
    const hasNextGame = gameIndex >= 0 && gameIndex < games.length - 1;
    const primaryLabel = hasNextGame ? '确认，进入下一关' : finalActionLabel;

    return (
        <div className="result-backdrop">
            <div className="result-web lesson-popover">
                <figure className="result-lesson-visual">
                    <img className="result-lesson-ghost" src={content.image} alt="" aria-hidden="true" />
                    <img className="result-lesson-slide" src={content.image} alt={content.title} />
                    <figcaption>{result.skipped ? `${game.name}跳过后查看` : `${game.name}通关后解锁`}</figcaption>
                </figure>

                <article className="result-lesson-body">
                    <div className="result-scoreline">
                        <Trophy size={32} />
                        <div>
                            <span>{result.skipped ? `${result.title} · 已跳过游戏` : `${result.title} · ${result.score} 分`}</span>
                            <strong>
                                {result.skipped
                                    ? '不计分、不加金币、不加星。'
                                    : `${result.message} · +${result.coinsEarned} 金币 · +${result.starsEarned} 星`}
                            </strong>
                        </div>
                    </div>
                    <div className="result-reward-rule">
                        {result.skipped ? (
                            <>
                                <span>跳过不结算积分</span>
                                <span>完成小游戏后才获得金币、星级和总积分。</span>
                            </>
                        ) : (
                            <>
                                <span>当前金币 {coins}</span>
                                <span>90+ 分 3 星，55-89 分 2 星，通关保底 1 星。</span>
                                <span>金币 = 10 + 星级×5 + 分数每满 20 分 +1。</span>
                            </>
                        )}
                    </div>

                    <span className="result-lesson-kicker">{content.eyebrow}</span>
                    <h2>{typedTitle}{activeIndex === 0 && <span className="typing-caret" aria-hidden="true" />}</h2>
                    <p>{typedSummary}{activeIndex === 1 && <span className="typing-caret" aria-hidden="true" />}</p>

                    <div className="result-lesson-points">
                        {content.points.map((point, index) => (
                            <div className={typedPoints[index] ? 'is-visible' : 'is-waiting'} key={point}>
                                <strong>{String(index + 1).padStart(2, '0')}</strong>
                                <span>{typedPoints[index]}{activeIndex === index + 2 && <span className="typing-caret" aria-hidden="true" />}</span>
                            </div>
                        ))}
                    </div>

                    <small>{content.note}</small>

                    <div className="result-actions">
                        <button className="result-primary" onClick={onNext} type="button">{primaryLabel}</button>
                        <button className="result-secondary" onClick={onReplay} type="button">再玩一次</button>
                        <button className="result-secondary" onClick={onBack} type="button">返回大厅</button>
                    </div>
                </article>
            </div>
        </div>
    );
}
