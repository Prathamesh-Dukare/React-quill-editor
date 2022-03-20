// let htmlElem =  document.getElementById("editor")
// let show =  document.getElementById("show")
// console.log(htmlElem.innerHTML);

// htmlElem.addEventListener("keyup",()=>{
//     console.log(htmlElem.innerHTML);
// })
// show.addEventListener("click",()=>{
    
// })

import EditorJS from '@editorjs/editorjs';


const editor = new EditorJS('editorjs');














// var editor = new EditorJS({
//     holderId: "editorjs",
//     tools: {
//       /**
//        * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
//        */
//       header: {
//         class: Header,
//         inlineToolbar: ["link"],
//         config: {
//           placeholder: "Header"
//         },
//         shortcut: "CMD+SHIFT+H"
//       },
  
//       image: {
//         class: SimpleImage,
//         inlineToolbar: ["link"]
//       },
  
//       list: {
//         class: List,
//         inlineToolbar: true,
//         shortcut: "CMD+SHIFT+L"
//       },
  
//       linkTool: LinkTool,
  
//       embed: Embed
//     },
//     data: {
//       blocks: [
//         {
//           type: "header",
//           data: {
//             text: "Header 1",
//             level: 1
//           }
//         },
//         {
//           type: "header",
//           data: {
//             text: "Header 2",
//             level: 2
//           }
//         },
//         {
//           type: "paragraph",
//           data: {
//             text:
//               "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
//           }
//         },
  
//         {
//           type: "list",
//           data: {
//             items: [
//               "It is a block-style editor",
//               "It returns clean data output in JSON",
//               "Designed to be extendable and pluggable with a simple API"
//             ],
//             style: "unordered"
//           }
//         },
  
//         {
//           type: "image",
//           data: {
//             url:
//               "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",
//             caption: "Caption for the image",
//             stretched: false,
//             withBorder: true,
//             withBackground: false
//           }
//         },
//         {
//           type: "paragraph",
//           data: {
//             text:
//               "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
//           }
//         }
//       ]
//     }
//   });
  
