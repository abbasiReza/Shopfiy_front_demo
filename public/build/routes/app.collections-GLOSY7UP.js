import {
  Badge,
  Card,
  InlineGrid,
  Layout,
  Page,
  ProgressBar,
  init_esm as init_esm2
} from "/build/_shared/chunk-OUZDRSGY.js";
import {
  init_esm2 as init_esm,
  useLoaderData
} from "/build/_shared/chunk-W3AFTBJI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-ENXZ3XX7.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/shopify.server
var require_shopify = __commonJS({
  "empty-module:~/shopify.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/app.collections.tsx
init_remix_hmr();
init_esm();
init_esm2();
var import_shopify = __toESM(require_shopify());

// public/step1.webp
var step1_default = "/build/_assets/step1-6RQ6T7MT.webp";

// public/step2.webp
var step2_default = "/build/_assets/step2-6LIRSGPX.webp";

// public/step3.webp
var step3_default = "/build/_assets/step3-YKWAMPO4.webp";

// app/routes/app.collections.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.collections.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.collections.tsx"
  );
  import.meta.hot.lastModified = "1709026958401.6426";
}
var Collections = () => {
  _s();
  const status = useLoaderData();
  const numericStatus = Number(status);
  let statusText;
  switch (numericStatus) {
    case 1:
      statusText = "Downloading";
      break;
    case 2:
      statusText = "Indexing";
      break;
    case 3:
      statusText = "Published";
      break;
    default:
      statusText = "Unknown";
  }
  const determineStatus = (index) => {
    return index < numericStatus ? 1 : 0;
  };
  const progressVal = (status2) => {
    return status2 * 33;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { fullWidth: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, { tone: "success", progress: "complete", toneAndProgressLabelOverride: "Status: Published. Your online store is visible.", children: statusText }, void 0, false, {
      fileName: "app/routes/app.collections.tsx",
      lineNumber: 147,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/app.collections.tsx",
      lineNumber: 146,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpacingBackground, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InlineGrid, { gap: "400", columns: 3, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Placeholder, { height: "320px", imageUrl: step1_default, status: determineStatus(0) }, void 0, false, {
        fileName: "app/routes/app.collections.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Placeholder, { height: "320px", imageUrl: step2_default, status: determineStatus(1) }, void 0, false, {
        fileName: "app/routes/app.collections.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Placeholder, { height: "320px", imageUrl: step3_default, status: determineStatus(2) }, void 0, false, {
        fileName: "app/routes/app.collections.tsx",
        lineNumber: 159,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/app.collections.tsx",
      lineNumber: 155,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.collections.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
      width: "100%"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProgressBar, { progress: progressVal(status) }, void 0, false, {
      fileName: "app/routes/app.collections.tsx",
      lineNumber: 167,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/app.collections.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/app.collections.tsx",
    lineNumber: 145,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/app.collections.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/routes/app.collections.tsx",
    lineNumber: 143,
    columnNumber: 10
  }, this);
};
_s(Collections, "03pWJ/GUDaecbFH41mmPAw8ZTkM=", false, function() {
  return [useLoaderData];
});
_c = Collections;
var SpacingBackground = ({
  children,
  width = "100%"
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    backgroundColor: "white",
    width,
    height: "auto"
  }, children }, void 0, false, {
    fileName: "app/routes/app.collections.tsx",
    lineNumber: 182,
    columnNumber: 10
  }, this);
};
_c2 = SpacingBackground;
var Placeholder = ({
  height = "auto",
  width = "auto",
  imageUrl = "",
  status = 0
}) => {
  const opacity = status === 0 ? 0.5 : 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "inherit",
    backgroundImage: `url(${imageUrl})`,
    // Set the image as background
    backgroundSize: "cover",
    // Cover the entire div with the image; adjust as needed
    backgroundPosition: "center",
    // Center the background image
    height: height != null ? height : void 0,
    width: width != null ? width : void 0,
    opacity
  } }, void 0, false, {
    fileName: "app/routes/app.collections.tsx",
    lineNumber: 198,
    columnNumber: 10
  }, this);
};
_c3 = Placeholder;
var app_collections_default = Collections;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "Collections");
$RefreshReg$(_c2, "SpacingBackground");
$RefreshReg$(_c3, "Placeholder");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_collections_default as default
};
//# sourceMappingURL=/build/routes/app.collections-GLOSY7UP.js.map
