import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function () {
            'use strict';
        
            var ErrorType;
            (function (ErrorType) {
                ErrorType["log"] = "log";
                ErrorType["event"] = "event";
            })(ErrorType || (ErrorType = {}));
        
            var USER_CACHE_KEY = 'stey_ai_pre_user';
            var PRE_LEVELS = ['error', 'log', 'warn', 'info'];
        
            function sdkInit(SdkUrl, apiKey) {
                window.__UV__INVOKE = [];
                window.__UV__LOGS = [];
                window.__UV__ORIGIN_LOGS = [];
                window.addEventListener('error', function (e) {
                    pushError(e, ErrorType.event, 'error');
                });
                var _loop_1 = function (i) {
                    var level = PRE_LEVELS[i];
                    var originalFn = console[level];
                    window.__UV__ORIGIN_LOGS.push(originalFn);
                    console[level] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        originalFn.apply(this, args);
                        pushError(new Error(), ErrorType.log, level, args);
                    };
                };
                for (var i = 0; i < PRE_LEVELS.length; i++) {
                    _loop_1(i);
                }
                function pushError(err, type, level, args) {
                    var _a;
                    if (((_a = window.__UV__LOGS) === null || _a === void 0 ? void 0 : _a.length) > 100)
                        return;
                    window.__UV__LOGS.push({
                        error: err,
                        level: level,
                        args: args,
                        type: type,
                    });
                }
                function pushPreMethod(addItem) {
                    var hasMethod = false;
                    window.__UV__INVOKE.some(function (item, index) {
                        if (item.method === addItem.method) {
                            window.__UV__INVOKE[index] = addItem;
                            hasMethod = true;
                            return true;
                        }
                    });
                    if (!hasMethod) {
                        window.__UV__INVOKE.push(addItem);
                    }
                }
                function initMethods() {
                    window.steyAIRecord = window.userview = {
                        initialize: function (projectKey, options) {
                            var _a;
                            if (options && ((_a = options.userInfo) === null || _a === void 0 ? void 0 : _a.uid)) {
                                setUser(options.userInfo);
                            }
                            pushPreMethod({
                                method: 'initialize',
                                args: [projectKey, options],
                            });
                        },
                        identify: function (userInfo) {
                            if (userInfo && userInfo.uid) {
                                setUser(userInfo);
                                pushPreMethod({
                                    method: 'identify',
                                    args: [userInfo],
                                });
                            }
                            else {
                                console.warn('identify need a uid', userInfo);
                            }
                        },
                    };
                }
                function setUser(userInfo) {
                    try {
                        window.localStorage.setItem(USER_CACHE_KEY + apiKey, JSON.stringify(userInfo));
                    }
                    catch (error) {
                        console.warn('userInfo set failed', error);
                    }
                }
                function createLoadSdk(url, apiKey) {
                    var scriptDom = document.createElement('script');
                    scriptDom.type = 'text/javascript';
                    scriptDom.src = url;
                    document.head.appendChild(scriptDom);
                }
                initMethods();
                return function start(isDefaultInit, options) {
                    createLoadSdk(SdkUrl);
                    if (isDefaultInit) {
                        window.steyAIRecord.initialize(apiKey, options);
                    }
                };
            }
            var addSdk = sdkInit('https://static.stey.ai/sdk/web/1.4.0/index.js', '${process.env.NEXT_STEY_SDK_KEY}');
            addSdk(true);
        
        })();
        ;(function () {
          const s =
            window.sessionStorage &&
            window.sessionStorage.getItem("__UV__SELECT_MODE__");
          if (/__UV__SELECT_MODE__=1/.test(location.href) || s) {
            var a = document.createElement("script");
            a.src =
              "https://static.stey.ai/libs/1.0.0/DomSelector.umd.min.js?" + Date.now();
            document.head.appendChild(a);
          }
        })()`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:300,400,500,700,800&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
