"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5236:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"client",title:"oai.client"},l=void 0,i={unversionedId:"reference/oai/client",id:"reference/oai/client",isDocsHomePage:!1,title:"oai.client",description:"OpenAIWrapper Objects",source:"@site/docs/reference/oai/client.md",sourceDirName:"reference/oai",slug:"/reference/oai/client",permalink:"/autogen/docs/reference/oai/client",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/oai/client.md",tags:[],version:"current",frontMatter:{sidebar_label:"client",title:"oai.client"},sidebar:"referenceSideBar",previous:{title:"user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/user_proxy_agent"},next:{title:"completion",permalink:"/autogen/docs/reference/oai/completion"}},c=[{value:"OpenAIWrapper Objects",id:"openaiwrapper-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"create",id:"create",children:[],level:4},{value:"extract_text_or_function_call",id:"extract_text_or_function_call",children:[],level:4}],level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"openaiwrapper-objects"},"OpenAIWrapper Objects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"class OpenAIWrapper()\n")),(0,a.kt)("p",null,"A wrapper class for openai client."),(0,a.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(*, config_list: List[Dict] = None, **base_config)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_list")," - a list of config dicts to override the base_config.\nThey can contain additional kwargs as allowed in the ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/oai/client#create"},"create")," method. E.g.,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'config_list=[\n    {\n        "model": "gpt-4",\n        "api_key": os.environ.get("AZURE_OPENAI_API_KEY"),\n        "api_type": "azure",\n        "base_url": os.environ.get("AZURE_OPENAI_API_BASE"),\n        "api_version": "2023-03-15-preview",\n    },\n    {\n        "model": "gpt-3.5-turbo",\n        "api_key": os.environ.get("OPENAI_API_KEY"),\n        "api_type": "open_ai",\n        "base_url": "https://api.openai.com/v1",\n    },\n    {\n        "model": "llama-7B",\n        "base_url": "http://127.0.0.1:8080",\n        "api_type": "open_ai",\n    }\n]\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"base_config")," - base config. It can contain both keyword arguments for openai client\nand additional kwargs.")),(0,a.kt)("h4",{id:"create"},"create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def create(**config)\n")),(0,a.kt)("p",null,"Make a completion for a given config using openai's clients.\nBesides the kwargs allowed in openai's client, we allow the following additional kwargs.\nThe config in each client will be overriden by the config."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"context (Dict | None): The context to instantiate the prompt or messages. Default to None.\nIt needs to contain keys that are used by the prompt template or the filter function.\nE.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'prompt="Complete the following sentence: {prefix}, context={"prefix": "Today I feel"}'),'.\nThe actual prompt will be:\n"Complete the following sentence: Today I feel".\nMore examples can be found at ',(0,a.kt)("a",{parentName:"li",href:"/docs/Use-Cases/enhanced_inference#templating"},"templating"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seed"),' (int | None) for the cache. Default to 41.\nAn integer seed is useful when implementing "controlled randomness" for the completion.\nNone for no caching.'),(0,a.kt)("li",{parentName:"ul"},"filter_func (Callable | None): A function that takes in the context and the response\nand returns a boolean to indicate whether the response is valid. E.g.,")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def yes_or_no_filter(context, response):\n    return context.get("yes_or_no_choice", False) is False or any(\n        text in ["Yes.", "No."] for text in client.extract_text_or_function_call(response)\n    )\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"allow_format_str_template (bool | None): Whether to allow format string template in the config. Default to false."),(0,a.kt)("li",{parentName:"ul"},'api_version (str | None): The api version. Default to None. E.g., "2023-08-01-preview".')),(0,a.kt)("h4",{id:"extract_text_or_function_call"},"extract","_","text","_","or","_","function","_","call"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef extract_text_or_function_call(\n        cls, response: ChatCompletion | Completion) -> List[str]\n")),(0,a.kt)("p",null,"Extract the text or function calls from a completion or chat response."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"response")," ",(0,a.kt)("em",{parentName:"li"},"ChatCompletion | Completion")," - The response from openai.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("p",null,"  A list of text or function calls in the responses."))}s.isMDXComponent=!0}}]);