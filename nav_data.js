const navData = [
  {
    "group": "AI · 赋能",
    "categories": [
      {
        "name": "AI 绘画",
        "links": [
          {
            "name": "Midjourney",
            "url": "https://www.midjourney.com/home",
            "desc": "最火的AI图像生成工具",
            "local_icon_name": "midjourney"
          },
          {
            "name": "Niji・journey",
            "url": "https://nijijourney.com/home",
            "desc": "动漫风格AI绘画工具，将文字转为二次元图像",
            "local_icon_name": "nijijourney"
          },
          {
            "name": "悠船",
            "url": "https://desktop.youchuan.cn/",
            "desc": "Midjourney中国实验室，国内唯一正版授权运营",
            "local_icon_name": "youchuan"
          },
          {
            "name": "Stable Diffusion",
            "url": "https://stability.ai/",
            "desc": "StabilityAI推出的文本到图像生成AI",
            "local_icon_name": "stablediffusion"
          },
          {
            "name": "Civitai",
            "url": "https://civitai.com/",
            "desc": "免费的AI图像绘画作品和模型分享平台和社区",
            "local_icon_name": "civitai"
          },
          {
            "name": "LiblibAI 哩布哩布AI",
            "url": "https://www.liblib.art/",
            "desc": "国内领先的AI图像创作平台和模型分享社区",
            "local_icon_name": "liblib"
          },
          {
            "name": "Shakker",
            "url": "https://www.shakker.ai/",
            "desc": "LiblibAI 哩布哩布AI的海外版",
            "local_icon_name": "shakker"
          },
          {
            "name": "即梦",
            "url": "https://jimeng.jianying.com/ai-tool/home",
            "desc": "抖音旗下AI图片创作工具",
            "local_icon_name": "jimengai"
          },
          {
            "name": "可灵AI",
            "url": "https://app.klingai.com/cn/",
            "desc": "快手推出的AI图像和视频创作平台",
            "local_icon_name": "kelingai"
          },
          {
            "name": "无界AI",
            "url": "https://www.wujieai.com/",
            "desc": "国内优质AI绘画平台，支持多种艺术风格创作",
            "local_icon_name": "wujieai"
          },
          {
            "name": "D.DESIGN 堆友",
            "url": "https://d.design/",
            "desc": "阿里旗下堆友推出的AI绘画平台",
            "local_icon_name": "duiyou"
          },
          {
            "name": "ldeogram",
            "url": "https://ideogram.ai/",
            "desc": "智能图像生成平台，支持文字生成和图像编辑",
            "local_icon_name": "ideogram"
          },
          {
            "name": "Adobe Firefly",
            "url": "https://firefly.adobe.com/generate/image?locale=zh-Hans-CN",
            "desc": "Adobe推出的创意生成式AI模型集",
            "local_icon_name": "firefly"
          },
          {
            "name": "吐司AI",
            "url": "https://tusiart.com/",
            "desc": "上海必有回响智能科技推出的一个AI绘画模型分享社区和在线生图平台",
            "local_icon_name": "tusiai"
          },
          {
            "name": "绘蛙",
            "url": "https://www.ihuiwa.com/",
            "desc": "AI电商营销工具",
            "local_icon_name": "huiwa"
          },
          {
            "name": "稿定AI",
            "url": "https://www.gaoding.art/",
            "desc": "稿定设计旗下AI创作工具",
            "local_icon_name": "gaodingai"
          },
          {
            "name": "无限画",
            "url": "https://588ku.com/ai/wuxianhua/Home",
            "desc": "千库网推出的AI绘画工具",
            "local_icon_name": "qianku"
          },
          {
            "name": "炉米",
            "url": "https://artistrylab.net/",
            "desc": "字节跳动推出的AIGC图像创作平台",
            "local_icon_name": "lumi"
          },
          {
            "name": "通义万相",
            "url": "https://tongyi.aliyun.com/wanxiang/",
            "desc": "阿里推出的AI绘画创作模型",
            "local_icon_name": "tongyiwanxiang"
          },
          {
            "name": "商汤秒画",
            "url": "https://miaohua.sensetime.com/",
            "desc": "商汤科技推出的AI作画和图片生成平台",
            "local_icon_name": "shangtangmiaohua"
          },
          {
            "name": "WHEE",
            "url": "https://www.whee.com/",
            "desc": "美图推出的AI图片和绘画创作生成平台",
            "local_icon_name": "whee"
          },
          {
            "name": "奇域",
            "url": "https://www.qiyuai.net/",
            "desc": "中式审美国风AI绘画创作平台",
            "local_icon_name": "qiyu"
          },
          {
            "name": "SeaArt AI/海艺AI",
            "url": "https://www.seaart.ai/zhCN",
            "desc": "专业的AI绘画创作平台，支持多种风格",
            "local_icon_name": "seaart"
          },
          {
            "name": "Canva可画AI",
            "url": "https://www.canva.cn/image-generator/",
            "desc": "在线设计工具Canva推出的AI图像生成工具",
            "local_icon_name": "canva"
          },
          {
            "name": "万相营造",
            "url": "https://agi.taobao.com/",
            "desc": "阿里旗下推出的多模态AI创意生成平台",
            "local_icon_name": "wanxiangyingzao"
          },
          {
            "name": "360智图",
            "url": "https://pic.360.com/home",
            "desc": "360推出的AI作图平台",
            "local_icon_name": "360zhitu"
          },
          {
            "name": "豆绘AI",
            "url": "https://www.douhuiai.com/",
            "desc": "南京豆绘科技有限公司推出的AI绘图设计平台",
            "local_icon_name": "douhuiai"
          },
          {
            "name": "造梦日记",
            "url": "https://zmrj.art/",
            "desc": "由西湖大学深度学习实验室和西湖心辰团队联合出品",
            "local_icon_name": "zaomengriji"
          },
          {
            "name": "Krea",
            "url": "https://www.krea.ai/",
            "desc": "实时AI图像、视频生成和编辑平台",
            "local_icon_name": "krea"
          },
          {
            "name": "Microsoft Bing",
            "url": "https://www.bing.com/images/create",
            "desc": "微软推出的图像生成工具，基于DALL-E技术",
            "local_icon_name": "bing"
          },
          {
            "name": "简单AI",
            "url": "https://ai.sohu.com/pc/home",
            "desc": "搜狐推出的AI绘画和对话助手",
            "local_icon_name": "jiandanai"
          },
          {
            "name": "AI设计工坊",
            "url": "https://sd.study.163.com/artWorks/painting",
            "desc": "网易推出的AI设计创作平台",
            "local_icon_name": "wangyiai"
          },
          {
            "name": "FreePik AI",
            "url": "https://www.freepik.com/pikaso/ai-image-generator",
            "desc": "FreePik推出的AI图像生成器",
            "local_icon_name": "freepik"
          },
          {
            "name": "燕雀光年",
            "url": "https://www.yanqueai.com/",
            "desc": "AI LOGO设计工具",
            "local_icon_name": "yanqueguangnian"
          }
        ]
      },
      {
        "name": "AI 聊天",
        "links": [
          {
            "name": "豆包",
            "url": "https://www.doubao.com/chat/",
            "desc": "字节跳动推出的智能AI助手",
            "local_icon_name": "doubao"
          },
          {
            "name": "讯飞星火",
            "url": "https://xinghuo.xfyun.cn/",
            "desc": "科大讯飞推出的新一代认知智能大模型",
            "local_icon_name": "xunfeixinghuo"
          },
          {
            "name": "ChatGPT",
            "url": "https://chatgpt.com/",
            "desc": "OpenAl开发的语言模型，以强大的对话能力著称",
            "local_icon_name": "chatgpt"
          },
          {
            "name": "Kimi",
            "url": "https://www.kimi.com/",
            "desc": "月之暗面推出的AI智能助手",
            "local_icon_name": "kimi"
          },
          {
            "name": "DeepSeek",
            "url": "https://www.deepseek.com/",
            "desc": "幻方量化旗下的人工智能公司深度求索自主研发的开源大模型和AI智能助手",
            "local_icon_name": "deepseek"
          },
          {
            "name": "Qwen",
            "url": "https://chat.qwen.ai/",
            "desc": "阿里巴巴推出的开源大型语言模型系列",
            "local_icon_name": "qwen"
          },
          {
            "name": "MiniMax",
            "url": "https://chat.minimaxi.com/",
            "desc": "上海稀宇科技有限公司（MiniMax）推出的AI智能问答助手",
            "local_icon_name": "minimax"
          },
          {
            "name": "腾讯元宝",
            "url": "https://yuanbao.tencent.com/chat/naQivTmsDa",
            "desc": "腾讯公司最新推出的免费AI智能助手",
            "local_icon_name": "tencentyuanbao"
          },
          {
            "name": "Gemini",
            "url": "https://deepmind.google/models/gemini/",
            "desc": "谷歌推出的大型多模态AI模型",
            "local_icon_name": "gemini"
          },
          {
            "name": "Z.ai",
            "url": "https://chat.z.ai/",
            "desc": "智谱面向全球推出的最新模型体验平台",
            "local_icon_name": "zai"
          },
          {
            "name": "Grok",
            "url": "https://x.ai/grok",
            "desc": "由马斯克的xAI公司开发，可提供实时信息的大型语言模型",
            "local_icon_name": "grok"
          },
          {
            "name": "智谱清言",
            "url": "https://chatglm.cn/",
            "desc": "智谱推出的全能AI助手",
            "local_icon_name": "zhipuqingyan"
          },
          {
            "name": "通义",
            "url": "https://www.tongyi.com/qianwen/",
            "desc": "阿里推出的多模型AI助手，涵盖多种AI能力",
            "local_icon_name": "tongyi"
          },
          {
            "name": "小艺",
            "url": "https://xiaoyi.huawei.com/",
            "desc": "华为推出的人工智能助手",
            "local_icon_name": "xiaoyi"
          },
          {
            "name": "文心一言",
            "url": "https://yiyan.baidu.com/",
            "desc": "百度研发的知识增强大语言模型",
            "local_icon_name": "baiduwenxin"
          },
          {
            "name": "阶跃AI",
            "url": "https://yuewen.cn/chats/new",
            "desc": "北京阶跃星辰科技有限公司推出的AI智能助手",
            "local_icon_name": "stepchat"
          },
          {
            "name": "天工",
            "url": "https://www.tiangong.cn/",
            "desc": "昆仑万维推出的结合大模型的AI搜索引擎",
            "local_icon_name": "tiangong"
          },
          {
            "name": "Meta AI",
            "url": "https://www.meta.ai/",
            "desc": "Meta推出的AI助手，结合其各种产品提供智能服务",
            "local_icon_name": "metaai"
          },
          {
            "name": "通义星尘",
            "url": "https://tongyi.aliyun.com/xingchen/",
            "desc": "阿里推出的端侧AI模型，打造个性化角色",
            "local_icon_name": "tongyixingchen"
          },
          {
            "name": "CueMe",
            "url": "https://cueme.cn/",
            "desc": "夸克推出的AI智能对话助手和AI写作工具",
            "local_icon_name": "kuakeai"
          },
          {
            "name": "造梦次元",
            "url": "https://ciyuan.ideaflow.pro/?page=home",
            "desc": "在造梦次元与各种次元角色相遇并进行互动",
            "local_icon_name": "zaomengciyuan"
          },
          {
            "name": "商量",
            "url": "https://chat.sensetime.com/",
            "desc": "商汤科技推出的大型语言模型AI助手",
            "local_icon_name": "shangliang"
          },
          {
            "name": "小悟空",
            "url": "https://wukong.com/tool",
            "desc": "一款多功能AI智能助手",
            "local_icon_name": "xiaowukong"
          },
          {
            "name": "紫东太初",
            "url": "https://taichu-web.ia.ac.cn/#/",
            "desc": "中科院自动化所和武汉人工智能研究院联合推出的一个全模态大模型",
            "local_icon_name": "zidongtaichu"
          },
          {
            "name": "冒泡鸭 AI",
            "url": "https://maopaoya.com/",
            "desc": "阶跃星辰推出的AI聊天机器人和智能体平台",
            "local_icon_name": "maopaoya"
          },
          {
            "name": "Cici",
            "url": "https://www.cici.com/chat/",
            "desc": "字节跳动面向海外市场推出的多功能AI工具和免费AI对话助手",
            "local_icon_name": "cici"
          }
        ]
      },
      {
        "name": "AI 视频",
        "links": [
          {
            "name": "绘蛙",
            "url": "https://www.ihuiwa.com/workspace/ai-video/custom-action",
            "desc": "绘蛙推出的AI图生视频工具",
            "local_icon_name": "huihuaai"
          },
          {
            "name": "白日梦",
            "url": "https://aibrm.com/",
            "desc": "光魔科技推出的一款AI视频创作平台",
            "local_icon_name": "bairimeng"
          },
          {
            "name": "讯飞绘镜",
            "url": "https://typemovie.art/#/dashboard",
            "desc": "科大讯飞推出的AI短视频创作平台",
            "local_icon_name": "xunfeihuijing"
          },
          {
            "name": "Vidu",
            "url": "https://www.vidu.cn/",
            "desc": "生数科技推出的AI视频生成大模型",
            "local_icon_name": "vidu"
          },
          {
            "name": "可灵AI",
            "url": "https://app.klingai.com/cn/",
            "desc": "快手推出的AI图像和视频创作平台",
            "local_icon_name": "kelingai"
          },
          {
            "name": "即梦AI",
            "url": "https://jimeng.jianying.com/ai-tool/home",
            "desc": "字节跳动推出的一站式AI创作平台",
            "local_icon_name": "jimengai"
          },
          {
            "name": "智谱清影",
            "url": "https://chatglm.cn/main/alltoolsdetail?lang=zh",
            "desc": "智谱AI推出的免费AI视频生成工具",
            "local_icon_name": "zhipuqingying"
          },
          {
            "name": "Sora",
            "url": "https://openai.com/sora/",
            "desc": "OpenAl推出的AI视频生成模型",
            "local_icon_name": "sora"
          },
          {
            "name": "Runway",
            "url": "https://runwayml.com/",
            "desc": "AI视频生成工具",
            "local_icon_name": "runway"
          },
          {
            "name": "Hailuo Al",
            "url": "https://hailuoai.com/",
            "desc": "MiniMax公司推出的AI视频生成工具",
            "local_icon_name": "hialuoai"
          },
          {
            "name": "腾讯混元AI视频",
            "url": "https://video.hunyuan.tencent.com/login?redirect=/",
            "desc": "腾讯推出的AI视频生成工具",
            "local_icon_name": "tencenthunyuanai"
          },
          {
            "name": "通义万相",
            "url": "https://tongyi.aliyun.com/wanxiang/videoCreation",
            "desc": "阿里推出的免费AI视频生成工具",
            "local_icon_name": "tongyiwanxiang"
          },
          {
            "name": "Pika",
            "url": "https://pika.art/login",
            "desc": "PikaLabs推出的AI视频生成和编辑工具",
            "local_icon_name": "pika"
          },
          {
            "name": "MOKI",
            "url": "https://www.moki.cn/home",
            "desc": "美图推出的AI视频短片创作平台",
            "local_icon_name": "moki"
          },
          {
            "name": "腾讯智影",
            "url": "https://zenvideo.qq.com/",
            "desc": "腾讯推出的AI智能创作工具",
            "local_icon_name": "tencentzhiying"
          },
          {
            "name": "必剪 Studio",
            "url": "https://member.bilibili.com/york/bilibili-studio/unlogin",
            "desc": "B站推出的免费AI数字分身定制和视频创作工具",
            "local_icon_name": "bijian"
          },
          {
            "name": "秒创",
            "url": "https://aigc.yizhentv.com/",
            "desc": "一站式AI内容生成平台，涵盖文案、图片、视频等",
            "local_icon_name": "miaochuang"
          }
        ]
      },
      {
        "name": "AI 音频",
        "links": [
          {
            "name": "魔音工坊",
            "url": "https://www.moyin.com/?",
            "desc": "专业的AI配音和文字转语音工具",
            "local_icon_name": "moyingongfang"
          },
          {
            "name": "讯飞智作",
            "url": "https://peiyin.xunfei.cn/",
            "desc": "讯飞旗下的AI配音和创作平台",
            "local_icon_name": "xunfeizhizuo"
          },
          {
            "name": "SUNO",
            "url": "https://suno.com/home",
            "desc": "AI音乐生成平台",
            "local_icon_name": "suno"
          },
          {
            "name": "海绵音乐",
            "url": "https://www.haimian.com/",
            "desc": "字节跳动推出的免费AI音乐创作和发现平台",
            "local_icon_name": "haimianyinyue"
          },
          {
            "name": "Mureka",
            "url": "https://www.mureka.cn/",
            "desc": "昆仑万维推出的AI音乐创作平台",
            "local_icon_name": "mureka"
          },
          {
            "name": "天谱乐",
            "url": "https://www.tianpuyue.cn/",
            "desc": "趣丸科技唱鸭团队推出的多模态音乐生成大模型",
            "local_icon_name": "tianpuyue"
          },
          {
            "name": "音剪",
            "url": "https://audioeditor.ximalaya.com/",
            "desc": "喜马拉雅推出的一站式AI音频创作平台",
            "local_icon_name": "yinjian"
          },
          {
            "name": "简单听记",
            "url": "https://tingji.baidu.com/embed/listennote",
            "desc": "百度网盘推出的AI语音转文字工具",
            "local_icon_name": "jiandantingji"
          },
          {
            "name": "讯飞听见",
            "url": "https://www.iflyrec.com/zhuanwenzi.html",
            "desc": "科大讯飞推出的在线AI语音转文字工具",
            "local_icon_name": "xunfeitingjian"
          },
          {
            "name": "Udio",
            "url": "https://www.udio.com/",
            "desc": "前Google DeepMind研究人员创立的人工智能音乐生成器",
            "local_icon_name": "udio"
          },
          {
            "name": "网易天音",
            "url": "https://tianyin.music.163.com/#/",
            "desc": "网易推出的一站式AI音乐创作工具",
            "local_icon_name": "wangyitianyin"
          },
          {
            "name": "TME Studio",
            "url": "https://y.qq.com/tme_studio/index.html#/",
            "desc": "腾讯音乐推出的智能音乐创作助手",
            "local_icon_name": "tme"
          },
          {
            "name": "Lyrics Into Song AI",
            "url": "https://lyricsintosong.ai/zh",
            "desc": "在线AI音乐创作工具",
            "local_icon_name": "lyrics"
          },
          {
            "name": "刺鸟配音",
            "url": "https://www.icnpy.com/",
            "desc": "刺鸟科技推出的AI配音工具",
            "local_icon_name": "ciniao"
          },
          {
            "name": "通义听悟",
            "url": "https://tingwu.aliyun.com/home",
            "desc": "阿里巴巴推出的智能AI会议转录和总结工具",
            "local_icon_name": "tongyitingwu"
          }
        ]
      },
      {
        "name": "AI 搜索",
        "links": [
          {
            "name": "夸克AI",
            "url": "https://b.quark.cn/apps/qkhomepage_twofoufeb/routes/model?",
            "desc": "阿里推出的AI搜索应用，集成了AI搜索、网盘等功能",
            "local_icon_name": "kuakeai"
          },
          {
            "name": "秘塔AI搜索",
            "url": "https://metaso.cn/",
            "desc": "秘塔科技推出的智能AI搜索引擎",
            "local_icon_name": "mitaai"
          },
          {
            "name": "Perplexity",
            "url": "https://www.perplexity.ai/",
            "desc": "提供即时答案和引用的AI研究助手",
            "local_icon_name": "perplexity"
          },
          {
            "name": "AMiner 沉思",
            "url": "https://www.aminer.cn/",
            "desc": "智谱AI推出的大模型学术平台",
            "local_icon_name": "aminer"
          },
          {
            "name": "心流AI助手",
            "url": "https://iflow.cn/",
            "desc": "阿里巴巴推出的基于星辰大模型的AI搜索助手",
            "local_icon_name": "xinliu"
          },
          {
            "name": "知乎直答",
            "url": "https://zhida.zhihu.com/",
            "desc": "知乎推出的一款AI大模型搜索产品",
            "local_icon_name": "zhihuzhida"
          },
          {
            "name": "纳米AI搜索",
            "url": "https://www.n.cn/",
            "desc": "360集团推出的AI搜索应用",
            "local_icon_name": "namiai"
          },
          {
            "name": "百度AI搜索",
            "url": "https://chat.baidu.com/search",
            "desc": "百度推出的深度AI搜索引擎",
            "local_icon_name": "baidu"
          },
          {
            "name": "Felo",
            "url": "https://felo.ai/search",
            "desc": "一款智能AI搜索引擎",
            "local_icon_name": "felo"
          },
          {
            "name": "天工",
            "url": "https://www.tiangong.cn/",
            "desc": "昆仑万维推出的结合大模型的AI搜索引擎",
            "local_icon_name": "tiangong"
          },
          {
            "name": "博查AI搜索",
            "url": "https://bochaai.com/",
            "desc": "支持多模型的AI搜索引擎",
            "local_icon_name": "bochaai"
          },
          {
            "name": "链企AI",
            "url": "https://www.lianqiai.cn/",
            "desc": "链企智能推出的AI商业搜索工具",
            "local_icon_name": "lianqiai"
          },
          {
            "name": "百度AI搜索",
            "url": "https://chat.baidu.com/",
            "desc": "百度推出的深度AI搜索引擎",
            "local_icon_name": "baidu"
          }
        ]
      },
      {
        "name": "AI 写作",
        "links": [
          {
            "name": "讯飞绘文",
            "url": "https://turbodesk.xfyun.cn/home",
            "desc": "科大讯飞推出的免费一站式AIGC内容运营平台",
            "local_icon_name": "xunfeihuiwen"
          },
          {
            "name": "笔灵AI",
            "url": "https://ibiling.cn/template",
            "desc": "免费高效的AI内容创作平台",
            "local_icon_name": "bilingai"
          },
          {
            "name": "豆包",
            "url": "https://www.doubao.com/chat/",
            "desc": "字节推出的免费AI写作助手",
            "local_icon_name": "doubao"
          },
          {
            "name": "新华妙笔",
            "url": "https://miaobi.xinhuaskl.com/",
            "desc": "新华社推出的智能辅助写作平台",
            "local_icon_name": "xinhuamiaobi"
          },
          {
            "name": "笔灵AI小说",
            "url": "https://ibiling.cn/novel-workbench",
            "desc": "笔灵推出的AI小说生成和创作工具",
            "local_icon_name": "bilingaixiaoshuo"
          },
          {
            "name": "墨狐AI",
            "url": "https://inkfox-ai.com/#/home",
            "desc": "北京云泥科技推出的AI小说写作助手",
            "local_icon_name": "mohuai"
          },
          {
            "name": "稿定AI文案",
            "url": "https://www.gaoding.com/ai/writer",
            "desc": "稿定设计推出的智能文案生成工具",
            "local_icon_name": "gaodingai"
          },
          {
            "name": "光速写作",
            "url": "https://www.guangsuxie.com/static/college-write-web/index",
            "desc": "作业帮（好课帮）旗下的一款AI写作工具",
            "local_icon_name": "guangsuxiezuo"
          },
          {
            "name": "松果AI",
            "url": "https://songguoai.com/",
            "desc": "一款多功能智能AI工具平台",
            "local_icon_name": "songguoai"
          },
          {
            "name": "讯飞写作",
            "url": "https://huixie.iflyrec.com/",
            "desc": "科大讯飞推出的AI智能写作助手",
            "local_icon_name": "xunfeixiezuo"
          },
          {
            "name": "FlowUs AI",
            "url": "https://flowus.cn/product",
            "desc": "由国内的在线知识管理与文档协作平台FlowUs息流推出的AI创作助手",
            "local_icon_name": "flowusai"
          },
          {
            "name": "万能小in",
            "url": "https://xiaoin.com.cn/",
            "desc": "智能AI内容创作助手",
            "local_icon_name": "wannengxiaoin"
          },
          {
            "name": "库宝AI工作助手",
            "url": "https://588tool.com/",
            "desc": "千库网推出的多功能AI创作工具",
            "local_icon_name": "kubaoai"
          },
          {
            "name": "有道翻译·AI写作",
            "url": "https://fanyi.youdao.com/aiwrite",
            "desc": "网易有道推出的智能写作辅助工具，支持100多种语言",
            "local_icon_name": "youdaofanyi"
          },
          {
            "name": "百度作家平台",
            "url": "https://zuojia.baidu.com/loginv2?login=4",
            "desc": "百度推出的一站式AI辅助创作平台",
            "local_icon_name": "baidu"
          }
        ]
      },
      {
        "name": "AI 设计",
        "links": [
          {
            "name": "标小智",
            "url": "https://www.logosc.cn/",
            "desc": "AI驱动的智能Logo设计工具",
            "local_icon_name": "biaoxiaozhi"
          },
          {
            "name": "绘蛙",
            "url": "https://www.ihuiwa.com/index",
            "desc": "AI电商营销工具",
            "local_icon_name": "huiwa"
          },
          {
            "name": "稿定AI",
            "url": "https://www.gaoding.art/",
            "desc": "稿定设计旗下AI创作工具",
            "local_icon_name": "gaodingai"
          },
          {
            "name": "Pic Copilot",
            "url": "https://www.piccopilot.com/create",
            "desc": "阿里国际推出的AI电商营销工具",
            "local_icon_name": "piccopilot"
          },
          {
            "name": "创客贴AI",
            "url": "https://aiart.chuangkit.com/matrix",
            "desc": "创客贴推出的AI设计助手",
            "local_icon_name": "chuangketie"
          },
          {
            "name": "美图设计室",
            "url": "https://www.designkit.com/",
            "desc": "美图旗下AI设计平台",
            "local_icon_name": "meitushejishi"
          },
          {
            "name": "蚂上有创意",
            "url": "https://idesign.alipay.com/home",
            "desc": "支付宝推出的AI设计工具",
            "local_icon_name": "mashangyouchuangyi"
          },
          {
            "name": "爱设计",
            "url": "https://www.isheji.com/",
            "desc": "AiPPT母公司旗下的AI在线设计平台",
            "local_icon_name": "aisheji"
          },
          {
            "name": "智绘设计",
            "url": "https://zhihui.qq.com/platform/intro",
            "desc": "腾讯推出的多场景智能设计平台",
            "local_icon_name": "qqzhihui"
          },
          {
            "name": "MasterGo 莫高设计",
            "url": "https://mastergo.com/",
            "desc": "MasterGo推出的智能UI设计助手",
            "local_icon_name": "mastergoai"
          },
          {
            "name": "墨刀AI",
            "url": "https://modao.cc/brand",
            "desc": "墨刀推出的AI产品原型设计助手",
            "local_icon_name": "modaoai"
          },
          {
            "name": "居然设计家",
            "url": "https://www.shejijia.com/",
            "desc": "居然之家联合阿里推出的AI家装设计平台",
            "local_icon_name": "jvran"
          },
          {
            "name": "135AI排版",
            "url": "https://www.135editor.com/ai_editor/",
            "desc": "135编辑器旗下一款专为公众号设计的AI图文排版工具",
            "local_icon_name": "135ai"
          },
          {
            "name": "易可图",
            "url": "https://www.yiketu.com/",
            "desc": "极简易用的免费图片及海报在线设计平台",
            "local_icon_name": "yiketuai"
          },
          {
            "name": "Dzine",
            "url": "https://www.dzine.ai/",
            "desc": "一站式AI图像编辑和设计工具",
            "local_icon_name": "dzine"
          },
          {
            "name": "千图设计室 | AI海报",
            "url": "https://hihaibao.com/",
            "desc": "千图推出的AI海报宣传图生成工具",
            "local_icon_name": "qiantushejishi"
          },
          {
            "name": "lconifyAI",
            "url": "https://www.iconifyai.com/",
            "desc": "AI驱动的图标设计工具，快速生成个性化图标",
            "local_icon_name": "iconifyai"
          },
          {
            "name": "Spline",
            "url": "https://spline.design/",
            "desc": "在线3D设计工具，支持实时协作和导出Web格式",
            "local_icon_name": "spline"
          }
        ]
      },
      {
        "name": "AI 办公",
        "links": [
          {
            "name": "AiPPT",
            "url": "https://www.aippt.cn/",
            "desc": "AI驱动的智能PPT生成工具",
            "local_icon_name": "aippt"
          },
          {
            "name": "咔片PPT",
            "url": "https://www.cappt.cc/?",
            "desc": "AI驱动的智能化PPT制作工具",
            "local_icon_name": "cappt"
          },
          {
            "name": "讯飞智文",
            "url": "https://zhiwen.xfyun.cn/",
            "desc": "科大讯飞推出的基于星火大模型的AIPPT生成工具",
            "local_icon_name": "xunfeizhiwen"
          },
          {
            "name": "文多多 AiPPT",
            "url": "https://docmee.cn/zh",
            "desc": "智能高效的AI演示文稿制作工具",
            "local_icon_name": "docmee"
          },
          {
            "name": "笔格PPT",
            "url": "https://bigppt.cn/",
            "desc": "AI驱动的PPT制作平台",
            "local_icon_name": "bigppt"
          },
          {
            "name": "博思AIPPT",
            "url": "https://pptgo.cn/",
            "desc": "博思云创推出的在线AI生成PPT工具",
            "local_icon_name": "pptgo"
          },
          {
            "name": "笔灵AI",
            "url": "https://ibiling.cn/ppt",
            "desc": "笔灵推出的在线智能PPT生成工具",
            "local_icon_name": "bilingai"
          },
          {
            "name": "Gamma",
            "url": "https://gamma.app/zh-cn",
            "desc": "AI驱动的演示文稿和网页制作工具",
            "local_icon_name": "gamma"
          },
          {
            "name": "智谱清言",
            "url": "https://chatglm.cn/",
            "desc": "智谱推出的全能AI助手",
            "local_icon_name": "zhipuqingyan"
          },
          {
            "name": "百度文库",
            "url": "https://wenku.baidu.com/",
            "desc": "百度基于文心一言推出的一站式AI文档助手",
            "local_icon_name": "baidu"
          },
          {
            "name": "PicDoc",
            "url": "https://www.picdoc.cn/",
            "desc": "创客贴团队推出的AI文本转图表工具",
            "local_icon_name": "picdoc"
          },
          {
            "name": "VisDoc",
            "url": "https://www.visdoc.cn/",
            "desc": "AI文生图表工具",
            "local_icon_name": "visdoc"
          },
          {
            "name": "美图设计室 LivePPT",
            "url": "https://ppt.designkit.com/",
            "desc": "美图秀秀推出的在线AI生成PPT设计工具",
            "local_icon_name": "meitushejishi"
          },
          {
            "name": "ChatExcel",
            "url": "https://www.chatexcel.com/#/",
            "desc": "仅通过聊天AI即可处理Excel和数据分析",
            "local_icon_name": "chatexcel"
          },
          {
            "name": "维格云",
            "url": "https://vika.cn/",
            "desc": "面向API的易用低代码平台",
            "local_icon_name": "vika"
          },
          {
            "name": "TreeMind树图",
            "url": "https://shutu.cn/",
            "desc": "在线AI思维导图工具",
            "local_icon_name": "shutu"
          },
          {
            "name": "博思白板",
            "url": "https://boardmix.cn/ai-mind-map-maker/",
            "desc": "博思云创推出的AI多功能白板工具",
            "local_icon_name": "boardmix"
          },
          {
            "name": "妙办画板",
            "url": "https://imiaoban.com/",
            "desc": "在线实时协作的画图工具",
            "local_icon_name": "miaoban"
          },
          {
            "name": "小画桌",
            "url": "https://www.xiaohuazhuo.com/",
            "desc": "轻松创作思维导图、流程图和知识图谱的在线工具",
            "local_icon_name": "xiaohuazhuo"
          },
          {
            "name": "知犀 AI",
            "url": "https://www.swdt.com/",
            "desc": "知犀推出的AI思维导图生成工具",
            "local_icon_name": "zhixiai"
          },
          {
            "name": "GitMind·思乎",
            "url": "https://gitmind.cn/",
            "desc": "AI驱动的思维导图、流程图和笔记工具",
            "local_icon_name": "gitmind"
          },
          {
            "name": "包阅AI",
            "url": "https://baoyueai.com/",
            "desc": "高效的AI智能阅读助手",
            "local_icon_name": "baoyueai"
          },
          {
            "name": "Doc2X",
            "url": "https://noedgeai.com/",
            "desc": "AI文档识别、转换与翻译工具",
            "local_icon_name": "doc2x"
          },
          {
            "name": "WPS AI",
            "url": "https://ai.wps.cn/",
            "desc": "WPS推出的AI办公助手",
            "local_icon_name": "wpsai"
          },
          {
            "name": "有道速读",
            "url": "https://read.youdao.com/#/home",
            "desc": "网易有道推出的AI阅读理解和摘要工具",
            "local_icon_name": "youdaosudu"
          },
          {
            "name": "腾讯问卷",
            "url": "https://wj.qq.com/ai/generate.html",
            "desc": "腾讯问卷推出的AI辅助问卷设计工具",
            "local_icon_name": "tengxunwenjuan"
          },
          {
            "name": "匡优AI出题",
            "url": "https://ai.kyou.ltd/pc",
            "desc": "AI智能生成试题工具，适用于多种考试场景",
            "local_icon_name": "kuangyouai"
          },
          {
            "name": "通义",
            "url": "https://www.tongyi.com/qianwen/",
            "desc": "阿里推出的多模型AI助手，涵盖多种AI能力",
            "local_icon_name": "tongyi"
          },
          {
            "name": "星火知识库",
            "url": "https://chatdoc.xfyun.cn/",
            "desc": "讯飞推出的AI知识管理和问答工具",
            "local_icon_name": "xinghuozhishiku"
          },
          {
            "name": "职徒简历",
            "url": "https://www.52cv.com/",
            "desc": "AI智能简历制作和优化工具",
            "local_icon_name": "zhitujianli"
          },
          {
            "name": "职得简历",
            "url": "https://www.zdjianli.cn/",
            "desc": "AI驱动的简历制作平台",
            "local_icon_name": "zhidejianli"
          },
          {
            "name": "元典智库",
            "url": "https://www.chineselaw.com/tyjs/index",
            "desc": "法律领域AI知识库和智能问答平台",
            "local_icon_name": "yuandianzhiku"
          },
          {
            "name": "通义法睿",
            "url": "https://tongyi.aliyun.com/farui/home",
            "desc": "阿里推出的法律AI工具，提供法律咨询和文书生成",
            "local_icon_name": "tongyifarui"
          },
          {
            "name": "法行宝",
            "url": "https://ailegal.baidu.com/",
            "desc": "百度推出的免费AI法律助手",
            "local_icon_name": "faxingbao"
          },
          {
            "name": "合同嗖嗖",
            "url": "https://contract.yoo-ai.com/",
            "desc": "AI智能合同审查和管理工具",
            "local_icon_name": "hetongsousou"
          },
          {
            "name": "腾讯交互翻译",
            "url": "https://transmart.qq.com/zh-CN/index",
            "desc": "腾讯推出的多语言AI翻译工具",
            "local_icon_name": "tengxunjiaohufanyi"
          },
          {
            "name": "DeepL翻译",
            "url": "https://www.deepl.com/zh/translator",
            "desc": "自称最准确的人工智能翻译工具",
            "local_icon_name": "deepl"
          },
          {
            "name": "火山翻译",
            "url": "https://translate.volcengine.com/",
            "desc": "字节跳动旗下的多语种AI翻译服务",
            "local_icon_name": "huoshanfanyi"
          },
          {
            "name": "百度翻译",
            "url": "https://fanyi.baidu.com/mtpe-individual/multimodal#/",
            "desc": "百度旗下多模式AI翻译工具，支持多种语言互译",
            "local_icon_name": "baidu"
          },
          {
            "name": "阿里翻译",
            "url": "https://translate.alibaba.com/",
            "desc": "阿里巴巴提供的多语言AI翻译服务",
            "local_icon_name": "alifanyi"
          },
          {
            "name": "捜狗翻译",
            "url": "https://fanyi.sogou.com/text",
            "desc": "搜狗提供的多功能AI翻译工具",
            "local_icon_name": "sougoufanyi"
          },
          {
            "name": "腾讯翻译君",
            "url": "https://fanyi.qq.com/",
            "desc": "腾讯推出的智能翻译应用，支持多语言实时翻译",
            "local_icon_name": "tengxunfanyijun"
          },
          {
            "name": "网易见外",
            "url": "https://sight.youdao.com/",
            "desc": "网易推出的AI智能翻译平台",
            "local_icon_name": "wangyijianwai"
          },
          {
            "name": "讯飞智能翻译平台",
            "url": "https://fanyi.xfyun.cn/",
            "desc": "科大讯飞推出的AI翻译服务平台",
            "local_icon_name": "xunfeifanyi"
          },
          {
            "name": "TinyWow",
            "url": "https://tinywow.com/",
            "desc": "提供一站式免费AI工具和资源，涵盖图片、视频、PDF处理等",
            "local_icon_name": "tinywow"
          },
          {
            "name": "ima.copilot-腾讯智能工作台",
            "url": "https://ima.qq.com/",
            "desc": "腾讯推出的AI智能工作平台",
            "local_icon_name": "ima"
          },
          {
            "name": "WPS 灵犀",
            "url": "https://lingxi.wps.cn/",
            "desc": "WPS推出的AI办公助手，支持PPT生成、AI写作等功能",
            "local_icon_name": "wpslingxi"
          }
        ]
      },
      {
        "name": "AI 开发",
        "links": [
          {
            "name": "扣子",
            "url": "https://www.coze.cn/",
            "desc": "字节跳动推出的零代码AI应用开发平台",
            "local_icon_name": "coze"
          },
          {
            "name": "Zion",
            "url": "https://www.functorz.com/",
            "desc": "零代码AI应用开发平台",
            "local_icon_name": "zion"
          },
          {
            "name": "秒哒",
            "url": "https://cloud.baidu.com/product-s/miaoda_home",
            "desc": "百度推出的零代码AI开发平台",
            "local_icon_name": "miaoda"
          },
          {
            "name": "响指HaiSnap",
            "url": "https://www.haisnap.com/",
            "desc": "AI零代码应用开发平台",
            "local_icon_name": "xiangzhi"
          },
          {
            "name": "NoCode",
            "url": "https://nocode.cn/",
            "desc": "美团推出的零代码AI应用开发平台",
            "local_icon_name": "nocode"
          },
          {
            "name": "阿里云百炼",
            "url": "https://bailian.console.aliyun.com/?utm_source=ai-bot.cn&tab=home#/home",
            "desc": "阿里云推出的一站式大模型开发与应用构建平台",
            "local_icon_name": "aliyunbailian"
          },
          {
            "name": "百宝箱",
            "url": "https://www.tbox.cn/",
            "desc": "蚂蚁集团推出的一站式 AI 原生应用开发平台",
            "local_icon_name": "baibaoxiang"
          },
          {
            "name": "智谱AI开放平台-BigModel",
            "url": "https://bigmodel.cn/agent",
            "desc": "智谱推出的大模型开发平台",
            "local_icon_name": "bigmodel"
          },
          {
            "name": "文心智能体平台",
            "url": "https://agents.baidu.com/center",
            "desc": "百度推出的智能体构建和管理平台",
            "local_icon_name": "baiduwenxin"
          },
          {
            "name": "BetterYeah",
            "url": "https://www.betteryeah.com/",
            "desc": "企业级AI应用和助手开发构建平台",
            "local_icon_name": "betteryeah"
          }
        ]
      },
      {
        "name": "AI 编程",
        "links": [
          {
            "name": "Trae",
            "url": "https://www.trae.cn/",
            "desc": "字节跳动推出的免费AI编程工具",
            "local_icon_name": "trae"
          },
          {
            "name": "通义灵码",
            "url": "https://lingma.aliyun.com/lingma",
            "desc": "阿里推出的免费AI编程工具",
            "local_icon_name": "tongyilingma"
          },
          {
            "name": "文心快码",
            "url": "https://comate.baidu.com/zh",
            "desc": "百度推出的AI编程工具",
            "local_icon_name": "wenxinkuaima"
          },
          {
            "name": "豆包",
            "url": "https://www.doubao.com/chat/coding",
            "desc": "豆包推出的AI编程新功能",
            "local_icon_name": "doubao"
          },
          {
            "name": "GitHub Copilot",
            "url": "https://github.com/features/copilot",
            "desc": "GitHub与OpenAl合作开发的一款智能代码补全和生成工具",
            "local_icon_name": "github"
          },
          {
            "name": "小浣熊家族",
            "url": "https://www.xiaohuanxiong.com/",
            "desc": "商汤科技推出的智能AI编程助手和工具",
            "local_icon_name": "xiaohuanxiong"
          },
          {
            "name": "Firebase Studio",
            "url": "https://firebase.studio/",
            "desc": "谷歌推出的AI编程工具",
            "local_icon_name": "firebase"
          },
          {
            "name": "腾讯云代码助手",
            "url": "https://copilot.tencent.com/",
            "desc": "腾讯云推出的AI编程助手",
            "local_icon_name": "copilot"
          },
          {
            "name": "CodeGeeX",
            "url": "https://codegeex.cn/",
            "desc": "智谱AI推出的免费AI编程助手",
            "local_icon_name": "codegeex"
          },
          {
            "name": "星火飞码 iFlyCode",
            "url": "https://iflycode.xfyun.cn/index",
            "desc": "讯飞推出的智能编程助手",
            "local_icon_name": "iflycode"
          },
          {
            "name": "Twinny",
            "url": "https://twinny.dev/",
            "desc": "一个专为VS Code设计的AI代码补全插件",
            "local_icon_name": "twinny"
          },
          {
            "name": "图像大厨imgcook",
            "url": "https://www.imgcook.com/",
            "desc": "阿里推出的免费设计稿智能生成前端代码",
            "local_icon_name": "imgcook"
          }
        ]
      }
    ]
  },
  {
    "group": "设计 · 赋能",
    "categories": [
      {
        "name": "设计搭子",
        "links": [
          {
            "name": "Seamless Texture Checker",
            "url": "https://www.pycheung.com/checker/",
            "desc": "在线无缝纹理检测工具",
            "local_icon_name": "pycheung"
          },
          {
            "name": "魔顿网",
            "url": "http://www.modown.cn/archives/category/software",
            "desc": "专注效果图材质贴图下载的网站，同时提供学习版C4D和渲染器下载",
            "local_icon_name": "modun"
          },
          {
            "name": "奇迹秀工具箱",
            "url": "https://www.qijishow.com/down/index.html",
            "desc": "设计行业相关资源集合平台",
            "local_icon_name": "qijishow"
          },
          {
            "name": "iTab新标签页",
            "url": "https://itab.link/",
            "desc": "浏览器新标签页插件，提供多种实用功能和自定义选项",
            "local_icon_name": "itab"
          },
          {
            "name": "帮小忙",
            "url": "https://tool.browser.qq.com/",
            "desc": "腾讯旗下的实用工具集",
            "local_icon_name": "tool"
          },
          {
            "name": "Snipaste",
            "url": "https://www.snipaste.com/index.html",
            "desc": "非常好用的截图软件",
            "local_icon_name": "snipaste"
          },
          {
            "name": "oCam",
            "url": "https://ohsoft.net/eng/ocam/download.php?cate=1002",
            "desc": "一款功能强大的免费屏幕录像和截图工具",
            "local_icon_name": "ohsoft"
          },
          {
            "name": "Aifadian",
            "url": "https://afdian.com/",
            "desc": "国产创作内容付费平台，支持创作者通过粉丝经济获得收益",
            "local_icon_name": "aifadian"
          },
          {
            "name": "火绒安全软件",
            "url": "https://www.huorong.cn/",
            "desc": "国产杀毒软件和安全防护工具，以其轻巧不卡顿著称",
            "local_icon_name": "huorong"
          },
          {
            "name": "向日葵远程控制",
            "url": "https://sunlogin.oray.com/",
            "desc": "远程控制和协助软件，支持多平台设备互联",
            "local_icon_name": "xiangrikui"
          }
        ]
      },
      {
        "name": "摄影图库",
        "links": [
          {
            "name": "Unsplash",
            "url": "https://unsplash.com/",
            "desc": "提供高质量免费图库的平台",
            "local_icon_name": "unsplash"
          },
          {
            "name": "Pexels",
            "url": "https://www.pexels.com/zh-cn/",
            "desc": "提供免费高质量图片和视频的平台",
            "local_icon_name": "pexels"
          },
          {
            "name": "Wallhaven",
            "url": "https://wallhaven.cc/",
            "desc": "提供高质量桌面壁纸的平台",
            "local_icon_name": "wallhaven"
          },
          {
            "name": "VEER图库",
            "url": "https://www.veer.com/",
            "desc": "视觉内容交易平台，提供正版图片和视频素材",
            "local_icon_name": "veer"
          },
          {
            "name": "Pixabay",
            "url": "https://pixabay.com/",
            "desc": "提供免费高质量图片、视频和音乐素材的平台",
            "local_icon_name": "pixabay"
          },
          {
            "name": "WallpapersWide",
            "url": "https://wallpaperswide.com/",
            "desc": "提供高分辨率壁纸图片下载的网站",
            "local_icon_name": "wallpaperswide"
          },
          {
            "name": "500px",
            "url": "https://500px.com.cn/",
            "desc": "专业的摄影师社区和图片分享平台",
            "local_icon_name": "500px"
          },
          {
            "name": "图虫创意",
            "url": "https://stock.tuchong.com/",
            "desc": "视觉内容社区，提供正版图片、视频、设计素材",
            "local_icon_name": "tuchong"
          },
          {
            "name": "Stocksnap",
            "url": "https://stocksnap.io/",
            "desc": "提供免费高质量图片素材的平台",
            "local_icon_name": "stocksnap"
          },
          {
            "name": "天空之城",
            "url": "https://www.skypixel.com/",
            "desc": "大疆创新旗下的航拍和无人机摄影社区",
            "local_icon_name": "skypixel"
          },
          {
            "name": "DeviantArt",
            "url": "https://www.deviantart.com/",
            "desc": "全球最大的艺术和设计社区之一",
            "local_icon_name": "deviantart"
          },
          {
            "name": "Picjumbo",
            "url": "https://picjumbo.com/",
            "desc": "提供免费高质量图片的网站",
            "local_icon_name": "picjumbo"
          },
          {
            "name": "Foodiesfeed",
            "url": "https://www.foodiesfeed.com/",
            "desc": "免费下载高质量食物相关图片",
            "local_icon_name": "foodiesfeed"
          },
          {
            "name": "堆糖",
            "url": "https://www.duitang.com/",
            "desc": "兴趣图谱分享社区",
            "local_icon_name": "duitang"
          }
        ]
      },
      {
        "name": "版权图库",
        "links": [
          {
            "name": "卓特视觉",
            "url": "https://www.droitstock.com/",
            "desc": "正版摄影图片和素材库",
            "local_icon_name": "droitstock"
          },
          {
            "name": "摄图网",
            "url": "https://699pic.com/",
            "desc": "提供摄影图片、设计素材、视频素材等的正版视觉内容平台",
            "local_icon_name": "shetuwang"
          },
          {
            "name": "拍信创意",
            "url": "https://www.paixin.com/",
            "desc": "提供高质量正版图片、视频、音乐素材的平台",
            "local_icon_name": "paixin"
          },
          {
            "name": "包图网",
            "url": "https://ibaotu.com/",
            "desc": "提供摄影图片、设计素材、视频素材下载",
            "local_icon_name": "ibaotu"
          },
          {
            "name": "千库网",
            "url": "https://588ku.com/",
            "desc": "提供高质量PNG图片、背景、模板等设计素材",
            "local_icon_name": "qianku"
          },
          {
            "name": "千图网",
            "url": "https://www.58pic.com/",
            "desc": "提供平面设计、摄影图片、电商模板等素材",
            "local_icon_name": "qiantu"
          },
          {
            "name": "觅元素",
            "url": "https://www.51yuansu.com/",
            "desc": "提供设计元素、背景、模板等素材下载",
            "local_icon_name": "miyuansu"
          },
          {
            "name": "昵图网",
            "url": "https://www.nipic.com/",
            "desc": "提供摄影图片、设计素材、矢量图等下载",
            "local_icon_name": "nituwang"
          },
          {
            "name": "觅知网",
            "url": "https://www.51miz.com/",
            "desc": "素材资源和设计服务平台，涵盖图片、视频、模板等",
            "local_icon_name": "mizhiwang"
          },
          {
            "name": "设计小咖",
            "url": "https://www.iamxk.com/",
            "desc": "提供设计素材、模板和在线设计工具",
            "local_icon_name": "shejixiaoka"
          },
          {
            "name": "爱给网",
            "url": "https://www.aigei.com/",
            "desc": "创意素材分享平台，提供音效、配乐、视频等资源",
            "local_icon_name": "aigeiwang"
          },
          {
            "name": "90设计网",
            "url": "https://90sheji.com/",
            "desc": "创意设计素材和电商模板资源平台",
            "local_icon_name": "90sheji"
          },
          {
            "name": "潮国创意",
            "url": "https://chaopx.com/",
            "desc": "潮流设计素材和时尚主题模板平台",
            "local_icon_name": "chaoguochuangyi"
          },
          {
            "name": "享设计",
            "url": "https://www.design006.com/",
            "desc": "作品交易共享平台",
            "local_icon_name": "xiangsheji"
          },
          {
            "name": "Freepik",
            "url": "https://www.freepik.com/",
            "desc": "全球知名平面设计素材库，提供矢量图、PSD、图片等资源",
            "local_icon_name": "freepik"
          },
          {
            "name": "潮点视频",
            "url": "https://shipin520.com/",
            "desc": "提供视频素材和特效资源",
            "local_icon_name": "chaodianshipin"
          },
          {
            "name": "红动中国",
            "url": "https://www.redocn.com/",
            "desc": "传统文化和设计素材分享平台",
            "local_icon_name": "hongdong"
          },
          {
            "name": "稿定设计",
            "url": "https://www.gaoding.com/",
            "desc": "智能在线设计工具，提供海量模板和素材",
            "local_icon_name": "gaodingai"
          },
          {
            "name": "创客贴",
            "url": "https://www.chuangkit.com/",
            "desc": "简单易用的在线设计工具，助力快速创作海报、PPT等",
            "local_icon_name": "chuangketie"
          },
          {
            "name": "图怪兽",
            "url": "https://818ps.com/home",
            "desc": "在线设计工具，提供海报、新媒体配图等模板",
            "local_icon_name": "tuguaishou"
          },
          {
            "name": "熊猫办公",
            "url": "https://www.tukuppt.com/",
            "desc": "提供PPT模板、Word模板和Excel模板等办公素材",
            "local_icon_name": "xiongmaobangong"
          },
          {
            "name": "高图网",
            "url": "https://gaoimg.com/",
            "desc": "提供摄影图片、设计素材和字体下载服务",
            "local_icon_name": "gaotuwang"
          },
          {
            "name": "站酷海洛",
            "url": "https://www.hellorf.com/",
            "desc": "视觉内容交易平台，提供授权图片、视频、音乐等素材",
            "local_icon_name": "zhankuhailuo"
          }
        ]
      },
      {
        "name": "灵感创意",
        "links": [
          {
            "name": "花瓣网",
            "url": "https://huaban.com/",
            "desc": "设计师灵感收集和分享平台",
            "local_icon_name": "huaban"
          },
          {
            "name": "Pinterest",
            "url": "https://www.pinterest.com/",
            "desc": "全球图片社交和发现平台",
            "local_icon_name": "pinterest"
          },
          {
            "name": "Dribbble",
            "url": "https://dribbble.com/",
            "desc": "设计师作品展示和发现平台",
            "local_icon_name": "dribbble"
          },
          {
            "name": "Logopond",
            "url": "https://logopond.com/",
            "desc": "标志设计作品展示和灵感平台",
            "local_icon_name": "logopond"
          },
          {
            "name": "Worldvectorlogo",
            "url": "https://worldvectorlogo.com/",
            "desc": "提供品牌Logo矢量图的网站",
            "local_icon_name": "worldvectorlogo"
          },
          {
            "name": "LogoMoose",
            "url": "https://logomoose.com/",
            "desc": "精选Logo设计作品展示平台",
            "local_icon_name": "logomoose"
          },
          {
            "name": "ISUX",
            "url": "https://isux.tencent.com/",
            "desc": "腾讯用户体验设计部官网",
            "local_icon_name": "isux"
          },
          {
            "name": "Photographer Niklas Alm",
            "url": "https://www.niklasalm.se/",
            "desc": "摄影师Niklas Alm的个人作品集网站",
            "local_icon_name": "default-icon"
          },
          {
            "name": "UI Design Resources",
            "url": "https://ui8.net/",
            "desc": "优质UI/UX设计资源平台",
            "local_icon_name": "ui8"
          },
          {
            "name": "站酷ZCOOL",
            "url": "https://www.zcool.com.cn/",
            "desc": "中国设计师互动平台",
            "local_icon_name": "zhanku"
          },
          {
            "name": "Bēhance",
            "url": "https://www.behance.net/",
            "desc": "Adobe旗下的创意作品展示平台",
            "local_icon_name": "behance"
          },
          {
            "name": "古田路9号",
            "url": "https://www.gtn9.com/index.aspx",
            "desc": "品牌创意和设计作品分享平台",
            "local_icon_name": "gutianlu"
          },
          {
            "name": "致设计",
            "url": "https://www.zhisheji.com/",
            "desc": "专业的创意设计作品分享平台",
            "local_icon_name": "zhisheji"
          },
          {
            "name": "UICN用户体验设计平台",
            "url": "https://www.ui.cn/",
            "desc": "用户体验设计交流与分享平台",
            "local_icon_name": "uicn"
          },
          {
            "name": "美叶",
            "url": "https://www.meiye.art/",
            "desc": "高质量设计素材和艺术作品分享平台",
            "local_icon_name": "meiye"
          },
          {
            "name": "Refero",
            "url": "https://refero.design/",
            "desc": "国外知名产品海量网页截图",
            "local_icon_name": "refero"
          }
        ]
      },
      {
        "name": "图标下载",
        "links": [
          {
            "name": "iconfont",
            "url": "https://www.iconfont.cn/",
            "desc": "阿里图标库，提供海量矢量图标资源",
            "local_icon_name": "iconfont"
          },
          {
            "name": "IconPark",
            "url": "https://iconpark.oceanengine.com/home",
            "desc": "字节跳动开源的图标库，提供丰富的图标资源和定制功能",
            "local_icon_name": "iconpark"
          },
          {
            "name": "FLATICON",
            "url": "https://www.flaticon.com/",
            "desc": "最大的免费图标库之一，提供各种格式的图标",
            "local_icon_name": "flaticon"
          },
          {
            "name": "ICONFINDER",
            "url": "https://www.iconfinder.com/",
            "desc": "专业的图标搜索引擎和市场，提供大量免费和付费图标",
            "local_icon_name": "iconfinder"
          },
          {
            "name": "iconmonstr",
            "url": "https://iconmonstr.com/",
            "desc": "精心设计的免费矢量图标集合",
            "local_icon_name": "iconmonstr"
          },
          {
            "name": "Freelmages",
            "url": "https://www.freeimages.com/",
            "desc": "提供大量免费高质量图片素材",
            "local_icon_name": "freeimages"
          },
          {
            "name": "Streamline",
            "url": "https://www.streamlinehq.com/",
            "desc": "庞大的图标、插画和矢量图库",
            "local_icon_name": "streamline"
          },
          {
            "name": "Noun Project",
            "url": "https://thenounproject.com/",
            "desc": "收集和分享图标的平台，涵盖各种主题和风格",
            "local_icon_name": "thenounproject"
          },
          {
            "name": "Material Design lcons",
            "url": "https://materialui.co/icons",
            "desc": "谷歌Material Design风格的官方图标库",
            "local_icon_name": "materialui"
          },
          {
            "name": "HQ ICON",
            "url": "https://icon.yukonga.top/",
            "desc": "高质量图标库，提供各种风格和类型的图标",
            "local_icon_name": "yukonga"
          },
          {
            "name": "Worldvectorlogo",
            "url": "https://worldvectorlogo.com/",
            "desc": "提供大量知名品牌和公司矢量Logo",
            "local_icon_name": "worldvectorlogo"
          }
        ]
      },
      {
        "name": "色彩搭配",
        "links": [
          {
            "name": "Colorspace",
            "url": "https://mycolor.space/",
            "desc": "强大的色彩生成工具，帮助设计师快速创建配色方案",
            "local_icon_name": "mycolor"
          },
          {
            "name": "中国色",
            "url": "https://zhongguose.com/",
            "desc": "中国传统色彩在线工具",
            "local_icon_name": "zhongguose"
          },
          {
            "name": "Color Hunt",
            "url": "https://colorhunt.co/",
            "desc": "每日更新的精选配色方案分享平台",
            "local_icon_name": "colorhunt"
          },
          {
            "name": "搜图导航",
            "url": "https://www.91sotu.com/colors/plate",
            "desc": "精心整理的设计资源导航网站旗下的配色方案",
            "local_icon_name": "soutudaohang"
          },
          {
            "name": "Adobe Color",
            "url": "https://color.adobe.com/zh",
            "desc": "强大的在线配色工具，支持多种配色模式和导出",
            "local_icon_name": "adobecolor"
          },
          {
            "name": "Coolors",
            "url": "https://coolors.co/",
            "desc": "极速生成完美配色方案的工具",
            "local_icon_name": "coolors"
          },
          {
            "name": "WebGradients",
            "url": "https://webgradients.com/",
            "desc": "提供大量精美渐变色素材和CSS代码的网站",
            "local_icon_name": "webgradients"
          },
          {
            "name": "uiGradients",
            "url": "https://uigradients.com/",
            "desc": "提供精选的渐变色方案，适用于UI设计",
            "local_icon_name": "uigradients"
          },
          {
            "name": "COLORION",
            "url": "https://colorion.co/",
            "desc": "收集各种UI设计色彩灵感和配色方案",
            "local_icon_name": "colorion"
          },
          {
            "name": "IMAGECOLORPICKER",
            "url": "https://imagecolorpicker.com/zh",
            "desc": "图像取色工具，从图片中提取颜色代码",
            "local_icon_name": "imagecolorpicker"
          }
        ]
      },
      {
        "name": "样机模型",
        "links": [
          {
            "name": "MOCKUPS-DESIGN",
            "url": "https://mockups-design.com/",
            "desc": "提供大量免费PSD样机素材",
            "local_icon_name": "mockups"
          },
          {
            "name": "All Mockups",
            "url": "https://www.minimalmockups.com/mockups/",
            "desc": "提供高质量免费模拟样机素材库",
            "local_icon_name": "minimalmockups"
          },
          {
            "name": "Artboard",
            "url": "https://artboard.studio/mockup",
            "desc": "提供在线3D样机创建工具",
            "local_icon_name": "artboard"
          },
          {
            "name": "Mockups for Free",
            "url": "https://www.ls.graphics/free-mockups",
            "desc": "提供免费高质量的样机素材，适用于各种设计展示",
            "local_icon_name": "Isgraphics"
          },
          {
            "name": "Screely",
            "url": "https://screely.com/",
            "desc": "快速生成精美截图背景图的工具",
            "local_icon_name": "screely"
          },
          {
            "name": "MockUPhone",
            "url": "https://mockuphone.com/",
            "desc": "免费手机、电脑样机生成器，支持多种设备类型",
            "local_icon_name": "mockuphone"
          },
          {
            "name": "Graphicsfuel",
            "url": "https://www.graphicsfuel.com/category/mockup-templates/",
            "desc": "提供免费设计素材和教程，包括样机模板、字体等",
            "local_icon_name": "graphicsfuel"
          },
          {
            "name": "The Mockup",
            "url": "https://themockup.club/mockups/",
            "desc": "精选免费设计样机素材",
            "local_icon_name": "themockup"
          },
          {
            "name": "包小盒",
            "url": "https://www.baoxiaohe.com/",
            "desc": "免费在线的包装设计工具",
            "local_icon_name": "baoxiaohe"
          },
          {
            "name": "Pacdora",
            "url": "https://www.pacdora.cn/",
            "desc": "包小盒的海外版，智能在线3D包装设计和渲染平台",
            "local_icon_name": "pacdora"
          },
          {
            "name": "TFMSTYLE",
            "url": "https://tfmstyle.com/",
            "desc": "提供高质量的免费电影c4d模型贴图文件",
            "local_icon_name": "tfmstyle"
          },
          {
            "name": "3D溜溜网",
            "url": "https://www.3d66.com/",
            "desc": "国内知名3D模型、CAD模型下载平台",
            "local_icon_name": "3d66"
          },
          {
            "name": "Blender3D模型库",
            "url": "https://www.blender-3d.cn/",
            "desc": "提供Blender格式的免费3D模型下载",
            "local_icon_name": "blender-3d"
          },
          {
            "name": "TURBOSQUID",
            "url": "https://www.turbosquid.com/",
            "desc": "全球最大的3D模型库之一，提供海量高质量模型",
            "local_icon_name": "turbosquid"
          },
          {
            "name": "Quixel Megascans",
            "url": "https://quixel.com/megascans/home/",
            "desc": "高质量真实感3D素材库，适用于游戏和影视渲染",
            "local_icon_name": "quixel"
          },
          {
            "name": "Poly Haven",
            "url": "https://polyhaven.com/hdris",
            "desc": "提供免费高质量HDR、纹理和3D模型等资源",
            "local_icon_name": "polyhaven"
          },
          {
            "name": "CG模型网",
            "url": "https://www.cgmodel.com/",
            "desc": "国内知名的CG模型分享和下载平台",
            "local_icon_name": "cgmodel"
          },
          {
            "name": "知末网",
            "url": "https://www.znzmo.com/",
            "desc": "家装设计素材下载网站",
            "local_icon_name": "zhimo"
          },
          {
            "name": "欧模网",
            "url": "https://www.om.cn/",
            "desc": "室内设计模型下载平台",
            "local_icon_name": "om"
          },
          {
            "name": "魔顿网",
            "url": "http://www.modown.cn/",
            "desc": "专注效果图材质贴图下载的网站",
            "local_icon_name": "modun"
          }
        ]
      }
    ]
  },
  {
    "group": "其它 · 常用",
    "categories": [
      {
        "name": "邮箱",
        "links": [
          {
            "name": "QQ邮箱",
            "url": "https://wx.mail.qq.com/",
            "desc": "腾讯提供的免费电子邮箱服务",
            "local_icon_name": "qq-mail"
          },
          {
            "name": "163邮箱",
            "url": "https://mail.163.com/",
            "desc": "网易提供的免费电子邮箱服务",
            "local_icon_name": "163"
          },
          {
            "name": "126邮箱",
            "url": "https://mail.126.com/",
            "desc": "网易旗下的免费电子邮箱服务",
            "local_icon_name": "126"
          },
          {
            "name": "腾讯企业邮箱",
            "url": "https://work.weixin.qq.com/mail/",
            "desc": "腾讯企业微信集成的企业邮箱服务",
            "local_icon_name": "work.weixin.qq.com_mail_"
          },
          {
            "name": "新浪邮箱",
            "url": "https://mail.sina.com.cn/",
            "desc": "新浪提供的免费电子邮箱服务",
            "local_icon_name": "xinlang"
          },
          {
            "name": "139邮箱",
            "url": "https://mail.10086.cn/default.html",
            "desc": "中国移动提供的免费电子邮箱服务",
            "local_icon_name": "139"
          },
          {
            "name": "阿里邮箱",
            "url": "https://mail.aliyun.com/",
            "desc": "阿里巴巴提供的邮箱服务",
            "local_icon_name": "aliemail"
          },
          {
            "name": "Gmail",
            "url": "https://mail.google.com/",
            "desc": "谷歌提供的免费邮箱服务，功能强大且稳定",
            "local_icon_name": "gmail"
          },
          {
            "name": "Outlook",
            "url": "https://outlook.live.com/",
            "desc": "微软提供的免费邮箱服务，与Office应用深度整合",
            "local_icon_name": "outlook"
          },
          {
            "name": "Yahoo Mail",
            "url": "https://mail.yahoo.com/",
            "desc": "雅虎提供的免费邮箱服务，界面简洁易用",
            "local_icon_name": "yahoo"
          }
        ]
      },
      {
        "name": "影音",
        "links": [
          {
            "name": "抖音",
            "url": "https://www.douyin.com/",
            "desc": "字节跳动旗下的短视频社交平台",
            "local_icon_name": "douyin"
          },
          {
            "name": "Bilibili",
            "url": "https://www.bilibili.com/",
            "desc": "哔哩哔哩，国内领先的年轻人文化社区和视频平台",
            "local_icon_name": "bilibili"
          },
          {
            "name": "腾讯视频",
            "url": "https://v.qq.com/",
            "desc": "腾讯旗下的在线视频平台，提供电影、电视剧、综艺等内容",
            "local_icon_name": "qqvideo"
          },
          {
            "name": "YouTube",
            "url": "https://www.youtube.com/",
            "desc": "全球最大的视频分享平台",
            "local_icon_name": "youtube"
          },
          {
            "name": "优酷",
            "url": "https://www.youku.com/ku/webhome",
            "desc": "阿里巴巴旗下的综合性视频平台",
            "local_icon_name": "youku"
          },
          {
            "name": "芒果TV",
            "url": "https://www.mgtv.com/",
            "desc": "湖南广播电视台旗下的互联网视频平台",
            "local_icon_name": "mgtv"
          },
          {
            "name": "爱奇艺",
            "url": "https://www.iqiyi.com/",
            "desc": "百度旗下的视频平台，提供海量正版高清影视内容",
            "local_icon_name": "iqiyi"
          },
          {
            "name": "抖音精选电脑版（原西瓜视频）",
            "url": "https://www.douyin.com/jingxuan",
            "desc": "字节跳动旗下的中长视频内容平台",
            "local_icon_name": "douyin"
          },
          {
            "name": "豆瓣电影",
            "url": "https://movie.douban.com/",
            "desc": "豆瓣网旗下的电影评分和评论平台",
            "local_icon_name": "douban"
          },
          {
            "name": "快手",
            "url": "https://www.kuaishou.com/",
            "desc": "记录和分享生活的短视频平台",
            "local_icon_name": "kuaishou"
          },
          {
            "name": "搜狐视频",
            "url": "https://tv.sohu.com/",
            "desc": "搜狐旗下的在线视频平台，提供影视剧、综艺等内容",
            "local_icon_name": "sohushipin"
          },
          {
            "name": "乐视视频",
            "url": "https://www.le.com/",
            "desc": "致力于提供正版高清影视节目的综合性视频平台",
            "local_icon_name": "leshipin"
          }
        ]
      },
      {
        "name": "音乐",
        "links": [
          {
            "name": "网易云音乐",
            "url": "https://music.163.com/",
            "desc": "网易旗下的音乐平台，以歌单、乐评和社区互动为特色",
            "local_icon_name": "music163"
          },
          {
            "name": "QQ音乐",
            "url": "https://y.qq.com/",
            "desc": "腾讯旗下的音乐服务平台，拥有海量正版音乐资源",
            "local_icon_name": "qqmusic"
          },
          {
            "name": "酷狗音乐",
            "url": "http://www.kugou.com/",
            "desc": "专业的数字音乐播放和社交服务平台",
            "local_icon_name": "kugoumusic"
          },
          {
            "name": "喜马拉雅",
            "url": "https://www.ximalaya.com/",
            "desc": "中国领先的音频分享平台，涵盖有声书、播客、广播剧等内容",
            "local_icon_name": "ximalaya"
          },
          {
            "name": "咪咕音乐",
            "url": "https://music.migu.cn/v5/#/musicLibrary",
            "desc": "中国移动旗下的正版数字音乐平台",
            "local_icon_name": "migu"
          },
          {
            "name": "酷我音乐",
            "url": "http://www.kuwo.cn/",
            "desc": "腾讯旗下的音乐平台，提供海量音乐内容和丰富的音质选择",
            "local_icon_name": "kuwomusic"
          },
          {
            "name": "千千音乐",
            "url": "https://music.taihe.com/",
            "desc": "太合音乐集团旗下的数字音乐平台，前身为百度音乐",
            "local_icon_name": "qqyinyue"
          },
          {
            "name": "蜻蜓FM",
            "url": "https://www.qtfm.cn/#/home",
            "desc": "音频内容聚合平台，提供有声书、电台、播客等",
            "local_icon_name": "qingting"
          },
          {
            "name": "YouTube Music",
            "url": "https://music.youtube.com/",
            "desc": "YouTube音乐流媒体服务，拥有丰富的音乐视频资源",
            "local_icon_name": "youtubemusic"
          },
          {
            "name": "Apple Music",
            "url": "https://music.apple.com/cn/new",
            "desc": "苹果公司推出的流媒体音乐服务，与苹果生态系统深度整合",
            "local_icon_name": "applemusic"
          }
        ]
      },
      {
        "name": "网盘",
        "links": [
          {
            "name": "百度网盘",
            "url": "https://pan.baidu.com/",
            "desc": "中国国内最大的云存储服务，提供大容量存储和文件分享功能",
            "local_icon_name": "pan-baidu"
          },
          {
            "name": "阿里云盘",
            "url": "https://www.alipan.com/",
            "desc": "阿里巴巴旗下的云存储服务，以高速传输和无广告著称",
            "local_icon_name": "aliyundrive"
          },
          {
            "name": "夸克网盘",
            "url": "https://pan.quark.cn/",
            "desc": "夸克浏览器推出的云存储服务，主打简洁高效和下载不限速",
            "local_icon_name": "quark"
          },
          {
            "name": "迅雷云盘",
            "url": "https://pan.xunlei.com/",
            "desc": "迅雷推出的云存储服务，与迅雷下载功能相结合",
            "local_icon_name": "xunlei"
          },
          {
            "name": "Google Drive",
            "url": "https://drive.google.com/",
            "desc": "谷歌提供的云存储服务，可与Google Workspace无缝协作",
            "local_icon_name": "drive-google"
          },
          {
            "name": "Dropbox",
            "url": "https://www.dropbox.com/",
            "desc": "国际知名的云存储服务，以其简单的操作和跨平台同步功能受到欢迎",
            "local_icon_name": "dropbox"
          },
          {
            "name": "UC云盘",
            "url": "https://drive.uc.cn/",
            "desc": "UC浏览器推出的云存储服务，方便用户存储和管理文件",
            "local_icon_name": "uc"
          },
          {
            "name": "123云盘",
            "url": "https://www.123pan.com/",
            "desc": "主打高速上传下载、无广告干扰的个人云存储服务",
            "local_icon_name": "123yunpan"
          },
          {
            "name": "腾讯微云",
            "url": "https://www.weiyun.com/",
            "desc": "腾讯推出的云存储服务，与QQ、微信等腾讯系产品深度整合",
            "local_icon_name": "weiyun"
          },
          {
            "name": "MEGA",
            "url": "https://mega.io/zh-hans/",
            "desc": "安全加密的云存储服务，提供大容量免费空间和文件安全共享",
            "local_icon_name": "mega"
          }
        ]
      },
      {
        "name": "文档",
        "links": [
          {
            "name": "腾讯文档",
            "url": "https://docs.qq.com/",
            "desc": "腾讯旗下的在线文档协作工具，支持多人实时编辑",
            "local_icon_name": "tencentdocs"
          },
          {
            "name": "飞书文档",
            "url": "https://www.feishu.cn/product/docs/",
            "desc": "字节跳动旗下的协同办公套件中的文档工具，集成度高",
            "local_icon_name": "feishu"
          },
          {
            "name": "语雀",
            "url": "https://www.yuque.com/",
            "desc": "蚂蚁集团推出的专业云知识库，支持文档、表格、思维导图等创作",
            "local_icon_name": "yuque"
          },
          {
            "name": "金山文档",
            "url": "https://docs.wps.cn/",
            "desc": "WPS Office旗下的在线协作文档工具，功能全面",
            "local_icon_name": "kingsoftdocs"
          },
          {
            "name": "石墨文档",
            "url": "https://shimo.im/",
            "desc": "国内领先的在线协作文档工具，界面简洁美观",
            "local_icon_name": "shimotext"
          },
          {
            "name": "Notion",
            "url": "https://www.notion.so/",
            "desc": "集笔记、知识库、任务管理于一体的多功能工作空间",
            "local_icon_name": "notion"
          },
          {
            "name": "Google Docs",
            "url": "https://docs.google.com/",
            "desc": "谷歌提供的在线文字处理工具，支持实时协作和版本控制",
            "local_icon_name": "googledocs"
          },
          {
            "name": "Dropbox",
            "url": "https://www.dropbox.com/",
            "desc": "国际知名的云存储服务，以其简单的操作和跨平台同步功能受到欢迎",
            "local_icon_name": "dropbox"
          },
          {
            "name": "印象笔记",
            "url": "https://www.yinxiang.com/",
            "desc": "个人知识管理和笔记工具，支持多端同步和剪藏功能",
            "local_icon_name": "yinxiangbiji"
          },
          {
            "name": "有道云笔记",
            "url": "https://note.youdao.com/",
            "desc": "网易旗下的个人云笔记，支持多格式内容存储和分享",
            "local_icon_name": "youdaoyunbiji"
          }
        ]
      },
      {
        "name": "导航",
        "links": [
          {
            "name": "搜图导航",
            "url": "https://www.91sotu.com/",
            "desc": "精心整理的设计资源导航网站",
            "local_icon_name": "soutudaohang"
          },
          {
            "name": "千图导航",
            "url": "https://hao.58pic.com/",
            "desc": "千图网推出的设计资源导航，汇集设计素材和工具",
            "local_icon_name": "qiantu"
          },
          {
            "name": "AI导航",
            "url": "https://www.ai-dh.com/",
            "desc": "聚合各类AI工具和资源的导航网站",
            "local_icon_name": "aidaohang"
          },
          {
            "name": "AI工具集",
            "url": "https://ai-bot.cn/",
            "desc": "汇集AI工具和应用的服务平台",
            "local_icon_name": "aigongjvji"
          },
          {
            "name": "优设导航",
            "url": "https://hao.uisdc.com/",
            "desc": "优设计网站旗下的设计资源导航站，涵盖设计工具、素材等",
            "local_icon_name": "youshedaohang"
          }
        ]
      }
    ]
  }
];